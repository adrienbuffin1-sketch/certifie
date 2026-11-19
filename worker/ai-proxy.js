// Cloudflare Worker: forwards Certifié marking requests to the Claude API.
// The Anthropic API key lives only here (as a secret), never in the app.
// Secrets/vars: ANTHROPIC_API_KEY (secret), APP_TOKEN (secret, must match AI_TOKEN in www/ai.js).
// Deploy: wrangler deploy  ·  wrangler secret put ANTHROPIC_API_KEY  ·  wrangler secret put APP_TOKEN
export default {
  async fetch(req, env) {
    if (req.method === "OPTIONS") return new Response(null, { headers: cors() });
    if (req.method !== "POST") return json({ error: "POST only" }, 405);
    if (req.headers.get("x-app-token") !== env.APP_TOKEN) return json({ error: "forbidden" }, 403);
    let body; try { body = await req.json(); } catch { return json({ error: "bad json" }, 400); }
    const system = String(body.system || "").slice(0, 20000), user = String(body.user || "").slice(0, 40000);
    if (!user) return json({ error: "empty" }, 400);
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": env.ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({ model: env.MODEL || "claude-sonnet-5-5", max_tokens: Math.min(+body.max_tokens || 4000, 6000), system, messages: [{ role: "user", content: user }] })
    });
    if (!r.ok) return json({ error: "upstream " + r.status }, 502);
    const j = await r.json();
    const text = (j.content || []).filter(c => c.type === "text").map(c => c.text).join("");
    return json({ text });
  }
};
const cors = () => ({ "access-control-allow-origin": "*", "access-control-allow-headers": "content-type,x-app-token", "access-control-allow-methods": "POST,OPTIONS" });
const json = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { "content-type": "application/json", ...cors() } });
