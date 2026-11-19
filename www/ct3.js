/* Certified Translator track: revision tasks (Task B). Original texts written for Certifié.
   bad = English translation containing seeded errors (NAATI uses 14 to 18 per task).
   errs: b = exact text of the error in `bad`, corr = a correct version, fix = regex of acceptable corrections,
   cat = acceptable NAATI categories, sev = minor|major, note = explanation. */
window.CT_REV=[
{id:"r01",genre:"Health brochure",domain:"Health",diff:1,
 brief:{domain:"Health",topic:"Staying safe in a heatwave",type:"Brochure from a regional health agency",purpose:"Informative and persuasive",audience:"Educated non-expert reader"},
 fr:`Canicule : les bons réflexes pour se protéger

Lors d'une vague de chaleur, le corps doit fournir des efforts importants pour maintenir sa température autour de 37 °C. Les personnes âgées, les jeunes enfants et les personnes souffrant de maladies cardiaques sont particulièrement exposés.

Buvez régulièrement de l'eau, sans attendre d'avoir soif, et évitez l'alcool. Mangez en quantité suffisante, de préférence des fruits et des légumes riches en eau. Pendant les heures les plus chaudes, entre 11 h et 16 h, restez à l'intérieur et fermez les volets. Si votre logement est trop chaud, passez au moins deux ou trois heures par jour dans un lieu frais, comme une bibliothèque ou un centre commercial climatisé.

Rafraîchissez-vous en prenant des douches fréquentes ou en mouillant votre peau. Évitez les efforts physiques et portez des vêtements légers et amples.

Prenez des nouvelles de vos proches et de vos voisins isolés au moins une fois par jour. Les mairies tiennent un registre des personnes vulnérables : n'hésitez pas à vous y inscrire ou à y signaler un proche.

Certains signes doivent alerter : maux de tête, nausées, crampes, propos incohérents ou fièvre élevée. Dans ce cas, appelez immédiatement le 15. En attendant les secours, placez la personne à l'ombre, aspergez-la d'eau et ne lui donnez pas de médicaments contre la fièvre, qui sont inefficaces en cas de coup de chaleur.`,
 bad:`Heatwave: good reflexes to protect yourself

During a heatwave, the body has to work hard to keep its temperature around 37°C. Elderly people, young children and people with lung disease are particularly at risk.

Drink water regularly, without waiting to be thirsty, and avoid alcohol. Eat enough, preferably fruit and vegetables that are rich in water. During the hottest hours, between 11 am and 6 pm, stay inside and close the curtains. If your home is too hot, spend at least two hours a day in a cool place, such as a library or an air-conditioned shopping centre.

Cool down by having frequent baths or wetting your skin. Avoid physical effort and wear light, loose clothing.

Check on your family and isolated neighbours at least once a week. Town halls keeps a register of vulnerable people: do not hesitate to register or to report a relative.

Some signs should alert you: headaches, nausea, cramps, incoherent speach or a high temperature. In this case call 15 when you can. While waiting for help, put the person in the sun, sprinkle them with water and give them fever medication, which are ineffective in case of heatstroke.`,
 good:`Heatwave: simple steps to protect yourself

During a heatwave, the body has to work hard to keep its temperature at around 37°C. Older people, young children and people with heart disease are particularly at risk.

Drink water regularly, without waiting until you are thirsty, and avoid alcohol. Eat enough, preferably fruit and vegetables that are rich in water. During the hottest part of the day, between 11 am and 4 pm, stay inside and close the shutters. If your home is too hot, spend at least two or three hours a day in a cool place, such as a library or an air-conditioned shopping centre.

Cool down by having frequent showers or wetting your skin. Avoid physical exertion and wear light, loose clothing.

Check on your family and isolated neighbours at least once a day. Local councils keep a register of vulnerable people: you can sign up or register a relative.

Some signs are a warning: headaches, nausea, cramps, incoherent speech or a high temperature. If this happens, call 15 immediately. While waiting for help, move the person into the shade, sprinkle them with water and do not give them fever medication, which does not work for heatstroke.`,
 errs:[
  {b:"good reflexes",corr:"simple steps",fix:"steps|tips|habits|measures|things to do|what to do|precautions",cat:["unid"],sev:"minor",note:"«Les bons réflexes» is a French set phrase; «good reflexes» is unidiomatic in English."},
  {b:"around 37°C",corr:"at around 37°C",fix:"at (around|about) 37",cat:["gram","unid"],sev:"minor",note:"English needs «at around»: keep its temperature at around 37°C."},
  {b:"Elderly people",corr:"Older people",fix:"older people|people aged|seniors|older adults|the elderly",cat:["reg"],sev:"minor",note:"Public health material in Australia prefers «older people»; acceptable categories: register."},
  {b:"lung disease",corr:"heart disease",fix:"heart (disease|conditions?|problems)|cardiac",cat:["dist"],sev:"major",note:"«Maladies cardiaques» = heart disease. Changes a key piece of health advice."},
  {b:"without waiting to be thirsty",corr:"without waiting until you are thirsty",fix:"until you (are|feel|get) thirsty|before you (are|feel|get) thirsty|feel thirsty",cat:["unid"],sev:"minor",note:"Unnatural phrasing."},
  {b:"between 11 am and 6 pm",corr:"between 11 am and 4 pm",fix:"11 ?am and 4 ?pm|11 ?am (to|and|–|-) ?4 ?pm",cat:["dist"],sev:"major",note:"16 h = 4 pm. Wrong time changes the advice."},
  {b:"close the curtains",corr:"close the shutters",fix:"shutters|blinds",cat:["dist"],sev:"minor",note:"Volets = shutters."},
  {b:"at least two hours",corr:"at least two or three hours",fix:"two or three hours|2 or 3 hours|2–3 hours|2-3 hours|two to three hours",cat:["omit"],sev:"minor",note:"«Deux ou trois heures»: «or three» was left out."},
  {b:"frequent baths",corr:"frequent showers",fix:"showers",cat:["dist"],sev:"minor",note:"Douches = showers."},
  {b:"physical effort",corr:"physical exertion",fix:"physical (exertion|activity|exercise)|strenuous|exercise",cat:["unid"],sev:"minor",note:"«Physical exertion/activity» is the natural English collocation."},
  {b:"at least once a week",corr:"at least once a day",fix:"once a day|daily|every day",cat:["dist"],sev:"major",note:"«Une fois par jour» = once a day."},
  {b:"Town halls keeps",corr:"Local councils keep",fix:"(councils|town halls|municipalities|local governments) keep\\b",cat:["gram"],sev:"minor",note:"Subject–verb agreement: plural subject takes «keep»."},
  {b:"incoherent speach",corr:"incoherent speech",fix:"incoherent speech|confused speech|slurred speech|not making sense",cat:["spell"],sev:"minor",note:"Spelling: speech."},
  {b:"call 15 when you can",corr:"call 15 immediately",fix:"immediately|straight away|right away|at once|now",cat:["dist"],sev:"major",note:"«Immédiatement» was turned into «when you can»: misleads in an emergency."},
  {b:"in the sun",corr:"into the shade",fix:"shade|cool place|out of the sun",cat:["dist"],sev:"major",note:"«À l'ombre» = in the shade. Dangerous reversal."},
  {b:"and give them fever medication",corr:"and do not give them fever medication",fix:"(do not|don't|never) give",cat:["dist","omit"],sev:"major",note:"The negation was lost: the original says NOT to give fever medication."},
  {b:"which are ineffective",corr:"which does not work",fix:"which (is|does not|doesn't|is not|isn't)|as it (is|does)|because it",cat:["gram"],sev:"minor",note:"Agreement: «medication» is singular."}
 ]},
{id:"r02",genre:"Community notice",domain:"Government",diff:2,
 brief:{domain:"Government",topic:"Opening of a new public library",type:"Notice on a council website",purpose:"Informative",audience:"Educated non-expert reader"},
 fr:`Ouverture de la médiathèque Simone-Veil

Après deux ans de travaux, la médiathèque Simone-Veil ouvrira ses portes au public le samedi 14 septembre. Installée dans l'ancienne caserne des pompiers, entièrement rénovée, elle s'étend sur 2 500 mètres carrés répartis sur trois niveaux.

Outre ses 60 000 livres, revues et bandes dessinées, la médiathèque propose un espace numérique avec une trentaine d'ordinateurs en libre accès, un studio d'enregistrement et une salle de jeux vidéo. Un « coin des familles », au rez-de-chaussée, accueillera les tout-petits et leurs parents.

L'inscription est gratuite pour tous les habitants de la commune, sur présentation d'un justificatif de domicile. Elle permet d'emprunter jusqu'à dix documents pendant quatre semaines. Les personnes qui ne résident pas dans la commune peuvent s'inscrire moyennant une cotisation annuelle de 15 euros.

La médiathèque sera ouverte du mardi au samedi, de 10 h à 19 h, ainsi que le dimanche matin. Elle sera en revanche fermée le lundi. Des horaires élargis sont prévus pendant les périodes d'examens.

Pour fêter l'ouverture, un programme d'animations gratuites est proposé tout au long du week-end : lectures de contes, ateliers d'écriture et concert en plein air. Le bâtiment est entièrement accessible aux personnes à mobilité réduite. Le parking étant limité, nous vous invitons à privilégier les transports en commun.`,
 bad:`Opening of the Simone Veil media library

After two years of works, the Simone Veil library will open its doors to the public on Saturday 14 September. Located in the former fire station, which has been partly renovated, it covers 2,500 square metres spread over two levels.

Besides its 60,000 books, magazines and comics, the library offers a digital area with thirty computers in free access, a recording studio and a video game room. A "family corner", on the ground floor, will welcome toddlers and their parents.

Membership is free for all town residents, on presentation of proof of identity. Members can borrow up to ten items for four weeks. People who does not live in the town can join for an annual fee of 15 euros.

The library will be open from Tuesday to Saturday, from 10 am to 7 pm, and on Sunday mornings. On the other hand, it will be closed on Mondays. Opening hours will be reduced during exam periods.

To celebrate the opening, a program of free activities is offered all through the weekend: story readings, writing workshops and an indoor concert. The building is fully accessible to people with reduced mobility. As parking is limited, we invite you to privilege public transport.`,
 good:`Opening of the Simone Veil Library

After two years of building work, the Simone Veil Library will open to the public on Saturday 14 September. Located in the former fire station, which has been fully renovated, it covers 2,500 square metres over three levels.

As well as 60,000 books, magazines and comics, the library has a digital area with around 30 public computers, a recording studio and a video games room. A "family corner" on the ground floor will welcome toddlers and their parents.

Membership is free for all local residents with proof of address. Members can borrow up to 10 items for four weeks. People who do not live in the local area can join for an annual fee of 15 euros.

The library will be open Tuesday to Saturday from 10 am to 7 pm, and on Sunday mornings. It will be closed on Mondays. Extended opening hours are planned during exam periods.

To celebrate the opening, a program of free activities is on offer all weekend: storytelling, writing workshops and an open-air concert. The building is fully accessible for people with limited mobility. As parking is limited, we encourage you to use public transport.`,
 errs:[
  {b:"two years of works",corr:"two years of building work",fix:"(building|construction|renovation) work|of work\\b|construction",cat:["unid","gram"],sev:"minor",note:"«Works» is unidiomatic here; «building work» or «construction»."},
  {b:"partly renovated",corr:"fully renovated",fix:"fully|completely|entirely|totally",cat:["dist"],sev:"major",note:"«Entièrement» = fully, not partly."},
  {b:"over two levels",corr:"over three levels",fix:"three levels|3 levels|three floors|3 floors",cat:["dist"],sev:"major",note:"Trois niveaux = three levels."},
  {b:"thirty computers",corr:"around 30 computers",fix:"(around|about|some|roughly|approximately) (30|thirty)",cat:["dist","omit"],sev:"minor",note:"«Une trentaine» = around 30; the approximation was lost."},
  {b:"in free access",corr:"public computers / free to use",fix:"free to use|public|for public use|available to everyone|freely available|open access|for anyone to use",cat:["unid"],sev:"minor",note:"«En libre accès» is calqued; English says public computers / free to use."},
  {b:"proof of identity",corr:"proof of address",fix:"proof of (address|residence)",cat:["dist"],sev:"major",note:"Justificatif de domicile = proof of address. Identity is a different document."},
  {b:"People who does not live",corr:"People who do not live",fix:"people who (do not|don't) live",cat:["gram"],sev:"minor",note:"Agreement: people … do not."},
  {b:"On the other hand, it",corr:"It",fix:"^(?!.*on the other hand)",cat:["unid","add"],sev:"minor",note:"«En revanche» here just marks the exception; «on the other hand» adds a contrast that does not fit."},
  {b:"Opening hours will be reduced",corr:"Extended opening hours are planned",fix:"extended|longer|later|additional hours|more hours",cat:["dist"],sev:"major",note:"«Horaires élargis» = extended hours, not reduced."},
  {b:"story readings",corr:"storytelling",fix:"storytelling|story ?time|story sessions|readings of (tales|stories)|fairy tales?",cat:["unid"],sev:"minor",note:"«Lectures de contes» = storytelling / story time."},
  {b:"an indoor concert",corr:"an open-air concert",fix:"open[- ]air|outdoor|outside",cat:["dist"],sev:"major",note:"«En plein air» = open-air."},
  {b:"we invite you to privilege public transport",corr:"we encourage you to use public transport",fix:"(encourage|ask|recommend|urge|advise)[^.]{0,20}(use|take|catch)|please (use|take|catch)|use public transport",cat:["unid","dist"],sev:"minor",note:"«Privilégier» ≠ privilege; = choose/use in preference."},
  {b:"all through the weekend",corr:"all weekend",fix:"all weekend|throughout the weekend|over the weekend|across the weekend|all weekend long",cat:["unid"],sev:"minor",note:"Natural English: all weekend / throughout the weekend."},
  {b:"Besides its 60,000",corr:"As well as 60,000",fix:"as well as|in addition to|along with|apart from|alongside",cat:["unid","reg"],sev:"minor",note:"«Besides» is too informal for this notice; «as well as» / «in addition to»."},
  {b:"a video game room",corr:"a video games room",fix:"video games? (room|area|lounge|zone)|gaming (room|area)",cat:["spell","unid"],sev:"minor",note:"Optional: «video games room» is the more usual form, but «video game room» is acceptable.",optional:true}
 ]},
{id:"r03",genre:"News article",domain:"Business",diff:2,
 brief:{domain:"Business",topic:"Independent bookshops and online competition",type:"Article in a regional newspaper",purpose:"Informative",audience:"Educated non-expert reader"},
 fr:`Les librairies indépendantes résistent malgré la concurrence en ligne

Contre toute attente, les librairies indépendantes se portent plutôt bien. L'an dernier, leur chiffre d'affaires a progressé de 3 %, alors que les ventes de livres dans les grandes surfaces ont reculé. Depuis 2015, une centaine de nouvelles librairies ont ouvert dans des villes moyennes, souvent à l'initiative d'anciens cadres en reconversion.

Plusieurs facteurs expliquent cette résistance. Le prix unique du livre, instauré en 1981, interdit les remises supérieures à 5 % et empêche les géants du commerce en ligne de casser les prix. Depuis 2023, ces derniers doivent en outre facturer un minimum de trois euros pour la livraison des commandes inférieures à 35 euros.

Mais les libraires insistent surtout sur le conseil. « Un algorithme vous propose ce que vous avez déjà aimé. Nous, nous vous faisons découvrir ce que vous ne seriez jamais allé chercher », explique la gérante d'une librairie de Rennes. Rencontres avec des auteurs, clubs de lecture, ateliers pour enfants : la librairie est devenue un lieu de vie.

La situation reste néanmoins fragile. La rentabilité du secteur est l'une des plus faibles du commerce de détail : une fois payés les loyers, les salaires et les fournisseurs, il reste en moyenne moins d'un euro de bénéfice pour cent euros de ventes. La hausse des loyers en centre-ville et celle du prix du papier menacent les établissements les plus petits.

Pour y faire face, certains se regroupent afin de mutualiser leurs achats ou leur site internet. D'autres diversifient leur activité en ouvrant un café ou en vendant de la papeterie.`,
 bad:`Independent bookshops resist despite online competition

Against all odds, independent bookshops are doing rather well. Last year, their figure of business grew by 3%, while book sales in supermarkets went up. Since 2015, a hundred new bookshops opened in medium-sized towns, often on the initiative of former executives changing career.

Several factors explain this resilience. The fixed book price, introduced in 1991, prohibits discounts of more than 5% and prevents online giants from slashing prices. Since 2023, the latter must also charge a minimum of three euros for delivery of orders above 35 euros.

But booksellers mostly insist on advice. "An algorithm offers you what you have already liked. Us, we make you discover what you would never have gone looking for," explains the manager of a bookshop in Rennes. Meetings with authors, reading clubs, workshops for children: the bookshop has become a place of life.

However the situation remains fragile. The sector's profitability is one of the highest in retail: once rents, salaries and suppliers are paid, there is on average less than one euro of profit for every hundred euros of sales. Rising rents in town centres and the rising price of paper threaten the bigger shops.

To cope, some are grouping together to share purchasing or their website. Others are diversifying by opening a café or selling stationary.`,
 good:`Independent bookshops hold their own despite online competition

Against all expectations, independent bookshops are doing rather well. Last year, their turnover grew by 3%, while book sales in supermarkets fell. Since 2015, around 100 new bookshops have opened in medium-sized towns, often set up by former managers changing careers.

Several factors explain this resilience. The fixed book price law, introduced in 1981, prohibits discounts of more than 5% and stops online giants from slashing prices. Since 2023, they have also had to charge at least three euros for delivering orders under 35 euros.

But booksellers mainly stress the importance of advice. "An algorithm suggests what you already liked. We help you discover books you would never have gone looking for," explains the manager of a bookshop in Rennes. Author talks, book clubs and children's workshops: the bookshop has become a community hub.

However, the situation remains fragile. Profitability in the sector is among the lowest in retail: once rent, wages and suppliers have been paid, there is on average less than one euro of profit for every 100 euros of sales. Rising city-centre rents and the rising price of paper are threatening the smallest shops.

To cope, some are joining forces to share purchasing or a website. Others are diversifying by opening a café or selling stationery.`,
 errs:[
  {b:"figure of business",corr:"turnover",fix:"turnover|revenue|sales",cat:["unid","dist"],sev:"minor",note:"«Chiffre d'affaires» = turnover/revenue; literal calque."},
  {b:"went up",corr:"fell",fix:"fell|declined|dropped|went down|decreased",cat:["dist"],sev:"major",note:"«Ont reculé» = fell. Reverses the contrast at the heart of the article."},
  {b:"a hundred new bookshops opened",corr:"around 100 new bookshops have opened",fix:"(around|about|some|roughly|nearly) (a hundred|100)[^.]*have opened",cat:["gram","omit"],sev:"minor",note:"«Une centaine» = around 100, and «since 2015» needs the present perfect: have opened."},
  {b:"introduced in 1991",corr:"introduced in 1981",fix:"1981",cat:["dist"],sev:"major",note:"Date error: 1981."},
  {b:"orders above 35 euros",corr:"orders under 35 euros",fix:"(under|below|less than|of less than) (35|€35)",cat:["dist"],sev:"major",note:"«Inférieures à 35 euros» = under 35 euros."},
  {b:"mostly insist on advice",corr:"mainly stress the importance of advice",fix:"(stress|emphasi[sz]e|highlight|point to|focus on)",cat:["unid"],sev:"minor",note:"«Insister sur» = stress/emphasise; «insist on advice» is unidiomatic and slightly distorts."},
  {b:"An algorithm offers you",corr:"An algorithm suggests",fix:"suggests|recommends|shows you|serves up",cat:["unid"],sev:"minor",note:"«Proposer» (algorithm) = suggest/recommend."},
  {b:"Us, we make you discover",corr:"We help you discover",fix:"we (help you|introduce you|let you|show you)|we('ll| will)? help",cat:["gram","unid"],sev:"minor",note:"French emphatic «Nous, nous» calqued; ungrammatical in English."},
  {b:"Meetings with authors",corr:"Author talks",fix:"author (talks|events|visits|signings)|talks with authors|events with authors",cat:["unid"],sev:"minor",note:"«Rencontres avec des auteurs» = author talks/events."},
  {b:"a place of life",corr:"a community hub",fix:"community (hub|space|centre|center)|meeting place|social hub|lively (place|space)|gathering place|hub",cat:["unid"],sev:"minor",note:"«Lieu de vie» calqued; «community hub»."},
  {b:"However the situation",corr:"However, the situation",fix:"however, the situation",cat:["punct"],sev:"minor",note:"Comma after sentence-initial «However»."},
  {b:"one of the highest",corr:"among the lowest",fix:"lowest|weakest|poorest",cat:["dist"],sev:"major",note:"«L'une des plus faibles» = among the lowest. Reversal."},
  {b:"the bigger shops",corr:"the smallest shops",fix:"small(est|er)? (shops|bookshops|businesses|stores|outlets)",cat:["dist"],sev:"major",note:"«Les plus petits» = the smallest."},
  {b:"selling stationary",corr:"selling stationery",fix:"stationery",cat:["spell"],sev:"minor",note:"Stationery (paper goods) vs stationary (not moving)."},
  {b:"resist despite",corr:"hold their own despite",fix:"hold (their own|up|out|firm)|stand firm|survive|are thriving|weather|withstand|fight back",cat:["unid"],sev:"minor",note:"«Résister» here = hold their own; «resist» needs an object in English."},
  {b:"former executives",corr:"former managers",fix:"former (managers|executives|professionals|corporate)",cat:["dist"],sev:"minor",note:"Note: «cadres» = managers/professionals; «executives» is acceptable, this one is borderline. If you left it, no penalty in this app.",optional:true}
 ]},
{id:"r04",genre:"School newsletter",domain:"Education",diff:3,
 brief:{domain:"Education",topic:"A school reading program and its results",type:"Article in a school district newsletter",purpose:"Informative and persuasive",audience:"Educated non-expert reader"},
 fr:`« Quinze minutes de lecture » : un rituel qui porte ses fruits

Depuis trois ans, les élèves des quatorze écoles élémentaires de la circonscription consacrent chaque jour un quart d'heure à la lecture silencieuse, juste après la pause méridienne. Enseignants, agents et même le personnel de cantine posent leur travail et lisent en même temps qu'eux.

Le dispositif, inspiré d'une expérience menée au Québec, repose sur un principe simple : chacun choisit librement son livre, qu'il s'agisse d'un roman, d'une bande dessinée ou d'un documentaire. Aucune fiche de lecture n'est demandée ; l'objectif est de faire de la lecture un plaisir et non une contrainte.

Les résultats dépassent les attentes. Aux évaluations nationales de CE2, la proportion d'élèves en difficulté en lecture est passée de 24 % à 17 %, alors qu'elle est restée stable dans les écoles voisines. Les enseignants observent également un climat de classe plus apaisé l'après-midi.

L'effet est particulièrement net chez les élèves issus de familles où l'on lit peu. Pour eux, ce moment constitue parfois le seul contact quotidien avec un livre. Les bibliothèques de classe ont donc été enrichies grâce à un financement de la municipalité, et un système de prêt permet désormais d'emporter les ouvrages à la maison.

Tout n'est pas parfait pour autant. Certains enseignants regrettent de devoir amputer des heures d'enseignement déjà serrées, et quelques élèves peinent à rester concentrés. Mais, de l'avis général, le jeu en vaut la chandelle. Le conseil d'école envisage d'étendre l'expérience aux deux collèges du secteur à la rentrée prochaine.`,
 bad:`"Fifteen minutes of reading": a ritual that is bearing fruits

For three years, the pupils of the fourteen primary schools in the district have spent a quarter of an hour a day on silent reading, just before the midday break. Teachers, staff and even the canteen personal put down their work and read at the same time.

The scheme, inspired by an experience carried out in Quebec, is based on a simple principle: everyone choose their own book freely, whether it is a novel, a comic or a documentary. No book report is required; the objective is to make reading a pleasure and not a constraint.

The results exceed expectations. In the national Year 3 assessments, the proportion of students struggling with reading has gone from 24% to 17%, while it remained stable in the neighbouring schools. Teachers also observe a calmer class climate in the morning.

The effect is particularly clear among students from families who read a lot. For them, this moment is sometimes their only daily contact with a book. Class libraries have therefore been enriched, and a lending system now allows to take the books home.

Not everything is perfect however. Some teachers regret having to cut into teaching hours that are already tight, and a few students find it hard to stay focused. But, in the general opinion, the game is worth the candle. The school council is considering extending the experience to the two secondary schools of the sector next year.`,
 good:`"Fifteen minutes of reading": a daily routine that is paying off

For the past three years, students at the 14 primary schools in the district have spent 15 minutes a day reading silently, straight after the lunch break. Teachers, support staff and even canteen staff put down their work and read alongside them.

The program, inspired by a project in Quebec, is based on a simple principle: everyone chooses their own book, whether it is a novel, a comic or a non-fiction book. No book report is required; the aim is to make reading a pleasure rather than a chore.

The results have exceeded expectations. In the national Year 3 assessments, the proportion of students who struggle with reading has fallen from 24% to 17%, while it has stayed the same in nearby schools. Teachers also report a calmer atmosphere in class in the afternoon.

The effect is particularly clear among students from families who rarely read. For them, this is sometimes their only daily contact with a book. Class libraries have therefore been expanded with funding from the local council, and a lending system now allows students to take books home.

Not everything is perfect, however. Some teachers regret having to cut into teaching time that is already tight, and a few students find it hard to stay focused. But the general view is that it is well worth it. The school council is considering extending the program to the area's two lower secondary schools at the start of the next school year.`,
 errs:[
  {b:"bearing fruits",corr:"paying off / bearing fruit",fix:"bearing fruit\\b|paying off|getting results|working",cat:["unid","gram"],sev:"minor",note:"The idiom is «bearing fruit» (uncountable)."},
  {b:"just before the midday break",corr:"straight after the lunch break",fix:"(just|straight|right|immediately) after",cat:["dist"],sev:"major",note:"«Juste après» = just after."},
  {b:"canteen personal",corr:"canteen staff",fix:"canteen (staff|personnel|workers)",cat:["spell"],sev:"minor",note:"Personnel (staff) vs personal."},
  {b:"read at the same time.",corr:"read alongside them.",fix:"(alongside|with) (them|the (students|pupils|children))|at the same time as (them|the (students|pupils|children))",cat:["omit"],sev:"minor",note:"«En même temps qu'eux» – «as them/with the students» was dropped."},
  {b:"an experience carried out",corr:"a project / an experiment carried out",fix:"(experiment|project|initiative|program|programme|scheme|trial|pilot)",cat:["dist","unid"],sev:"minor",note:"Expérience (here) = experiment/project, not experience."},
  {b:"everyone choose",corr:"everyone chooses",fix:"everyone chooses|each (student|pupil|person) chooses|everyone picks|everyone can choose|everyone gets to choose|everyone is free to choose",cat:["gram"],sev:"minor",note:"Agreement: everyone chooses."},
  {b:"or a documentary",corr:"or a non-fiction book",fix:"non-?fiction|information (book|text)|factual book|reference book",cat:["dist"],sev:"major",note:"«Un documentaire» (book) = a non-fiction book, not a film."},
  {b:"not a constraint",corr:"rather than a chore",fix:"(not|rather than|instead of) (a|an) (chore|obligation|duty|task|burden)",cat:["unid"],sev:"minor",note:"«Contrainte» in this context = chore/obligation."},
  {b:"in the morning",corr:"in the afternoon",fix:"afternoon",cat:["dist"],sev:"major",note:"«L'après-midi» = in the afternoon."},
  {b:"who read a lot",corr:"who rarely read",fix:"(rarely|seldom|hardly ever|don't|do not|little|not much)",cat:["dist"],sev:"major",note:"«Où l'on lit peu» = who rarely read. Reverses the key finding."},
  {b:"have therefore been enriched,",corr:"have therefore been expanded with funding from the local council,",fix:"(council|municipality|city|town|local government)",cat:["omit"],sev:"major",note:"«Grâce à un financement de la municipalité» was left out."},
  {b:"allows to take",corr:"allows students to take",fix:"allows (students|pupils|children|them|everyone) to|means (students|pupils|children) can|lets (students|pupils|children|them)",cat:["gram"],sev:"minor",note:"«Allow» needs an object: allows students to take."},
  {b:"perfect however.",corr:"perfect, however.",fix:"perfect, however",cat:["punct"],sev:"minor",note:"Comma before sentence-final «however»."},
  {b:"the game is worth the candle",corr:"it is well worth it",fix:"(well )?worth (it|the effort|doing)|pays off|it's worth it",cat:["unid","reg"],sev:"minor",note:"Calque of «le jeu en vaut la chandelle»; dated in English."},
  {b:"the two secondary schools of the sector",corr:"the area's two lower secondary schools",fix:"(lower secondary|junior (high|secondary)|middle schools?|secondary schools? in the (area|district))",cat:["unid","dist"],sev:"minor",note:"«Du secteur» = in the area; collèges = lower secondary schools."},
  {b:"next year.",corr:"at the start of the next school year.",fix:"(start|beginning) of (the )?next (school|academic) year|next school year",cat:["dist"],sev:"minor",note:"«À la rentrée prochaine» = at the start of the next school year."},
  {b:"has gone from 24% to 17%",corr:"has fallen from 24% to 17%",fix:"(fallen|dropped|decreased|gone down|declined) from 24",cat:["unid"],sev:"minor",note:"Optional: «fallen from» is clearer. Not penalised if left.",optional:true}
 ]}
];
