/* Certified Translator track, texts 7–12. Original texts written for Certifié. Format: see ct1.js */
window.CT_TEXTS=(window.CT_TEXTS||[]).concat([
{id:"t07",genre:"Government information",domain:"Legal",diff:2,
 brief:{domain:"Legal",topic:"Resolving a dispute with a landlord",type:"Information page on a government website",purpose:"Informative",audience:"Educated non-expert reader"},
 fr:`Litige avec son propriétaire : quels recours avant d'aller au tribunal ?

Dépôt de garantie non restitué, travaux jamais réalisés, augmentation de loyer contestée : les conflits entre locataires et bailleurs sont fréquents. Avant d'engager une procédure judiciaire, souvent longue et coûteuse, il existe plusieurs solutions amiables.

La première étape consiste à adresser au propriétaire une lettre recommandée avec accusé de réception, exposant clairement le problème et la demande. Ce courrier constitue une preuve utile si le désaccord persiste. Il est conseillé d'y joindre des copies des pièces justificatives : bail, état des lieux, photos ou factures.

Si cette démarche reste sans réponse dans un délai d'un mois, le locataire peut saisir gratuitement la commission départementale de conciliation. Composée à parts égales de représentants des locataires et des propriétaires, elle entend les deux parties et tente de les aider à trouver un accord. Son avis n'est pas contraignant, mais il pèse souvent dans la balance si l'affaire est ensuite portée devant le juge.

Il est également possible de recourir à un conciliateur de justice, bénévole nommé par la cour d'appel, qui intervient sans frais. Pour les litiges dont le montant ne dépasse pas 5 000 euros, une tentative de règlement amiable est d'ailleurs obligatoire avant toute saisine du tribunal, sauf exceptions.

Attention aux délais : le locataire dispose de trois ans pour réclamer des sommes indûment versées, et le dépôt de garantie doit être restitué dans un délai d'un mois après la remise des clés lorsque l'état des lieux de sortie est conforme à celui d'entrée.`,
 model:`Dispute with your landlord: what can you do before going to court?

Bonds not returned, repairs never carried out, rent increases being challenged: disputes between tenants and landlords are common. Before starting legal proceedings, which are often lengthy and expensive, there are several ways to settle the matter out of court.

The first step is to send the landlord a letter by registered post with proof of delivery, clearly setting out the problem and what you are asking for. This letter is useful evidence if the disagreement continues. It is a good idea to attach copies of supporting documents: the lease, the condition report, photos or invoices.

If you receive no reply within one month, the tenant can refer the matter, free of charge, to the departmental conciliation committee. Made up of equal numbers of tenant and landlord representatives, the committee hears both parties and tries to help them reach an agreement. Its opinion is not binding, but it often carries weight if the case is later taken to court.

You can also use a court-appointed conciliator, a volunteer appointed by the court of appeal, who provides the service free of charge. For disputes involving no more than €5,000, an attempt to resolve the matter amicably is in fact compulsory before going to court, with some exceptions.

Watch the time limits: tenants have three years to claim back amounts they should not have paid, and the bond must be returned within one month of handing back the keys if the condition report at the end of the tenancy matches the one made at the start.`,
 cp:[
  ["Litige avec son propriétaire","dispute|disagreement|conflict","omit","minor","Translate the title."],
  ["Dépôt de garantie","bond|(security )?deposit","dist","major","Dépôt de garantie = bond (AU) / security deposit."],
  ["travaux jamais réalisés","repairs|work|works","dist","minor","Travaux = repairs/work.",[["never realised|never realized","dist","falsefriend","major","Réaliser des travaux = carry out work."]]],
  ["bailleurs","landlords|lessors","dist","minor","Bailleur = landlord."],
  ["solutions amiables","(amicabl|out of court|out-of-court|informal|without going to court|mediat|negotiat)","dist","minor","Solutions amiables = out-of-court settlement."],
  ["lettre recommandée avec accusé de réception","registered (post|mail|letter)","dist","major","Recommandée avec AR = registered post with proof of delivery."],
  ["accusé de réception","(proof|confirmation|acknowledg(e)?ment) of (delivery|receipt)|return receipt|signature on delivery","omit","minor","Accusé de réception = proof of delivery."],
  ["pièces justificatives","supporting documents|evidence|documentation","dist","minor","Pièces justificatives = supporting documents."],
  ["état des lieux","condition report|inventory|inspection report","dist","major","État des lieux = condition report (AU)."],
  ["dans un délai d'un mois","(within|after) (one|a|1) month","dist","major","Time limit must be exact."],
  ["saisir gratuitement","free of charge|for free|at no cost|without charge|free","omit","major","Gratuitement = free of charge."],
  ["commission départementale de conciliation","conciliation (committee|commission|board)","dist","minor","Keep the body's function: conciliation committee."],
  ["à parts égales","equal (numbers|parts|proportions)|equally","dist","minor","À parts égales = equal numbers."],
  ["n'est pas contraignant","(not|non-) ?binding","dist","major","Contraignant = binding.",[["not constraining|not restrictive","dist","calque","major","Legal term: binding."]]],
  ["pèse souvent dans la balance","carries weight|influential|counts|weighs|taken into account","dist","minor","Peser dans la balance = carry weight."],
  ["conciliateur de justice","conciliator|mediator","dist","minor","Conciliateur de justice = (court-appointed) conciliator."],
  ["cour d'appel","court of appeal|appeals? court|appellate court","dist","minor","Cour d'appel = court of appeal."],
  ["ne dépasse pas 5 000 euros","(5,000|5 000|five thousand)","dist","major","Amount must be exact.",[["5\\.000","punct","numbers","minor","Use €5,000 or 5,000 euros."]]],
  ["d'ailleurs","in fact|indeed|moreover|actually|also|furthermore","omit","minor","«D'ailleurs» = in fact / moreover."],
  ["sauf exceptions","exceptions|except|unless|in most cases|some cases","omit","minor","Keep «with some exceptions»."],
  ["trois ans","(three|3) years","dist","major","Time limit must be exact."],
  ["indûment versées","(over|wrongly|unduly|incorrectly|improperly)[ -]?(paid|charged)|should not have (paid|been paid)|not owed","dist","major","Indûment = wrongly/unduly."],
  ["la remise des clés","(handing|hand|return|returning) (back |over )?(of )?(the )?keys","dist","minor","Remise des clés = handing back the keys."]
 ]},
{id:"t08",genre:"News article",domain:"Business",diff:2,
 brief:{domain:"Business",topic:"The four-day working week in small businesses",type:"Article in a business magazine",purpose:"Informative",audience:"Educated non-expert reader"},
 fr:`La semaine de quatre jours séduit les petites entreprises

Longtemps réservée à quelques start-up audacieuses, la semaine de quatre jours gagne du terrain dans les PME françaises. Selon une enquête menée cet automne auprès de 1 200 dirigeants, 14 % d'entre eux l'ont déjà adoptée et un quart envisagent de le faire d'ici deux ans.

Le principe varie selon les entreprises. Certaines conservent 35 heures hebdomadaires réparties sur quatre jours, ce qui allonge les journées de travail. D'autres réduisent réellement le temps de travail, à 32 heures par exemple, sans baisse de salaire. Dans ce second cas, l'objectif est de compenser la réduction d'horaires par des gains de productivité : moins de réunions, des processus simplifiés, des tâches mieux réparties.

Pour les dirigeants interrogés, l'argument principal n'est pas le bien-être, mais le recrutement. Dans des secteurs où la main-d'œuvre se fait rare, comme le bâtiment, l'hôtellerie ou l'industrie, proposer un jour de repos supplémentaire permet de se démarquer des concurrents et de fidéliser les salariés. Plusieurs entreprises affirment avoir vu chuter leur taux d'absentéisme dès la première année.

Le dispositif a toutefois ses limites. Dans les commerces ouverts six jours sur sept, il impose une organisation complexe des plannings, et certains clients acceptent mal de ne pas pouvoir joindre leur interlocuteur habituel le vendredi. Des salariés témoignent aussi d'une intensification du travail, avec des journées plus denses et moins de pauses.

Pour les économistes, il est encore trop tôt pour mesurer l'effet global sur la productivité. Une chose semble acquise : là où elle a été mise en place, la semaine de quatre jours est rarement remise en cause.`,
 model:`The four-day week wins over small businesses

Once limited to a few daring start-ups, the four-day week is gaining ground among small and medium-sized businesses in France. According to a survey of 1,200 business owners and managers carried out this autumn, 14% have already adopted it and a quarter are considering doing so within the next two years.

How it works varies from business to business. Some keep a 35-hour week spread over four days, which makes the working days longer. Others genuinely cut working hours, to 32 hours for example, with no reduction in pay. In the second case, the aim is to make up for the shorter hours through productivity gains: fewer meetings, simpler processes and better allocation of tasks.

For the business leaders surveyed, the main argument is not wellbeing but recruitment. In industries facing labour shortages, such as construction, hospitality and manufacturing, offering an extra day off helps them stand out from competitors and retain staff. Several businesses say their absenteeism rate fell in the very first year.

The arrangement does have its limits, however. In shops open six days a week, it requires complex rostering, and some customers are unhappy about not being able to reach their usual contact person on Fridays. Some employees also describe a heavier workload, with more intense days and fewer breaks.

According to economists, it is still too early to measure the overall effect on productivity. One thing seems clear: where the four-day week has been introduced, it is rarely called into question.`,
 cp:[
  ["La semaine de quatre jours","(four|4)-day (working )?week","omit","minor","Translate the title."],
  ["Longtemps réservée","(long|once|previously|used to be|until recently)","dist","minor","Longtemps réservée = long limited to."],
  ["gagne du terrain","gaining ground|catching on|spreading|growing|on the rise|taking hold","dist","minor","Gagner du terrain = gain ground."],
  ["PME","small (and|to) medium|smes?|small businesses|small firms","dist","minor","PME = small and medium-sized businesses."],
  ["1 200 dirigeants","1,200|1 200|twelve hundred","dist","major","Number must be exact.",[["1\\.200","punct","numbers","minor","Use 1,200."]]],
  ["dirigeants","(business )?(leaders|owners|managers|bosses|executives|heads|ceos|directors)","dist","minor","Dirigeants = business owners/managers."],
  ["14 %","14 ?(%|per ?cent)|fourteen per ?cent","dist","major","Figure must be exact."],
  ["un quart","(a|one) quarter|25 ?(%|per ?cent)","dist","major","Proportion must be exact."],
  ["d'ici deux ans","(within|in) (the next )?(two|2) years|by \\d{4}","dist","major","D'ici deux ans = within two years."],
  ["35 heures hebdomadaires","35[- ]hours?|thirty-five hours","dist","major","Figure must be exact."],
  ["32 heures","32[- ]hours?|thirty-two hours","dist","major","Figure must be exact."],
  ["sans baisse de salaire","(no|without (a|any)?) ?(cut|reduction|drop|loss|decrease) in (pay|salary|wages)|same pay|full pay","dist","major","Keep: no pay cut."],
  ["le bien-être","well-?being|welfare","dist","minor","Bien-être = wellbeing."],
  ["la main-d'œuvre se fait rare","(labour|labor|worker|staff|skills) shortages?|short of (workers|staff|labour)|scarce|hard to find","dist","major","Main-d'œuvre rare = labour shortages."],
  ["le bâtiment","construction|building (industry|trade|sector)","dist","minor","Le bâtiment = construction.",[["\\bthe building\\b","dist","falsefriend","major","Le bâtiment (sector) = construction industry."]]],
  ["l'hôtellerie","hospitality|hotel","dist","minor","L'hôtellerie = hospitality."],
  ["l'industrie","manufacturing|industry","dist","minor","L'industrie = manufacturing/industry."],
  ["fidéliser les salariés","retain|keep (staff|employees|workers)|hold on to|loyal","dist","minor","Fidéliser = retain."],
  ["taux d'absentéisme","absenteeism|absence rates?|sick leave","dist","minor","Taux d'absentéisme = absenteeism rate."],
  ["dès la première année","(in|within) the (very )?first year|from the first year|after (just )?one year","dist","minor","Dès = as early as / in the very first year."],
  ["six jours sur sept","six days (a|per|out of seven)|6 days","dist","major","Six days a week."],
  ["plannings","rost(er|ering)|schedul(e|ing)|timetabl","dist","minor","Plannings = rosters."],
  ["leur interlocuteur habituel","usual (contact|person|representative|account manager)","dist","minor","Interlocuteur habituel = usual contact."],
  ["remise en cause","(called|brought) into question|questioned|reversed|abandoned|scrapped|challenged|dropped","dist","minor","Remettre en cause = call into question."]
 ]},
{id:"t09",genre:"Community notice",domain:"Government",diff:1,
 brief:{domain:"Government",topic:"Changes to household waste collection",type:"Letter to residents from a local council",purpose:"Informative",audience:"Educated non-expert reader"},
 fr:`Collecte des déchets : ce qui change au 1er avril

Madame, Monsieur,

À compter du 1er avril, l'organisation de la collecte des déchets ménagers évolue dans notre commune. Ces changements visent à réduire le volume d'ordures envoyées à l'incinération, qui a augmenté de 12 % en cinq ans, et à maîtriser le coût du service.

Les ordures ménagères seront désormais ramassées une fois par semaine, le mardi, et non plus deux fois. Les emballages recyclables (bouteilles et flacons en plastique, briques alimentaires, boîtes de conserve, papiers et cartons) seront collectés tous les quinze jours, le jeudi des semaines impaires. Le verre reste à déposer dans les conteneurs prévus à cet effet.

Nouveauté importante : chaque foyer recevra gratuitement, courant mars, un bac destiné aux déchets alimentaires (épluchures, restes de repas, marc de café). Ce bac sera vidé chaque semaine, le vendredi. Les déchets ainsi collectés seront transformés en compost et en biogaz.

Nous vous rappelons que les bacs doivent être sortis la veille au soir du jour de collecte et rentrés au plus tard le lendemain. Les sacs déposés à même le trottoir ne seront pas ramassés. Les encombrants (meubles, électroménager) font l'objet d'un enlèvement sur rendez-vous, gratuit dans la limite de deux passages par an.

Un calendrier détaillé est joint à ce courrier. Pour toute question, le service Propreté est joignable du lundi au vendredi au 03 88 60 90 90.

Nous vous remercions de votre collaboration.

Le Maire`,
 model:`Waste collection: changes from 1 April

Dear Resident,

From 1 April, household waste collection in our town is changing. These changes are designed to reduce the amount of rubbish sent for incineration, which has risen by 12% in five years, and to keep the cost of the service under control.

General household rubbish will now be collected once a week, on Tuesdays, instead of twice. Recyclable packaging (plastic bottles and containers, food and drink cartons, tins and cans, paper and cardboard) will be collected every two weeks, on Thursdays in odd-numbered weeks. Glass must still be taken to the special glass recycling containers.

An important new service: during March, every household will receive a free food waste bin (for peelings, leftovers and coffee grounds). This bin will be emptied every week, on Fridays. The waste collected will be turned into compost and biogas.

Please remember that bins must be put out on the evening before collection day and brought back in by the following day at the latest. Bags left directly on the footpath will not be collected. Bulky items (furniture and household appliances) are collected by appointment, free of charge for up to two collections a year.

A detailed calendar is enclosed with this letter. If you have any questions, please call the Waste and Street Cleaning Service on 03 88 60 90 90, Monday to Friday.

Thank you for your cooperation.

The Mayor`,
 cp:[
  ["Collecte des déchets","(waste|rubbish|garbage) collection","omit","minor","Translate the title."],
  ["au 1er avril","1 april|april 1","dist","major","Date must be exact."],
  ["Madame, Monsieur,","dear (resident|householder|sir or madam|sir/madam)","reg","minor","Letter convention: Dear Resident / Dear Sir or Madam.",[["madam, sir|madam, mister|mrs, mr","reg","register","minor","Use an English salutation: Dear Resident."]]],
  ["notre commune","(town|council area|municipality|local area|community|suburb|shire|city)","dist","minor","Commune = town/council area.",[["\\bcommune\\b","dist","falsefriend","minor","Commune = town/municipality."]]],
  ["incinération","incinerat","dist","minor","Incineration."],
  ["12 %","12 ?(%|per ?cent)|twelve per ?cent","dist","major","Figure must be exact."],
  ["en cinq ans","(in|over) (the (past|last) )?(five|5) years","dist","major","Period must be exact."],
  ["maîtriser le coût","(control|contain|keep .{0,15}down|limit|manage|curb)","dist","minor","Maîtriser le coût = keep costs under control.",[["master the cost","dist","calque","major","Maîtriser le coût = control the cost."]]],
  ["une fois par semaine, le mardi","once a week|weekly|every week","dist","major","Frequency must be exact."],
  ["et non plus deux fois","(instead of|rather than|not) twice|no longer twice","omit","major","Keep the change: instead of twice."],
  ["briques alimentaires","cartons|tetra ?paks?|food (and|&) drink cartons","dist","minor","Briques alimentaires = food and drink cartons."],
  ["boîtes de conserve","tins|cans","dist","minor","Boîtes de conserve = tins/cans."],
  ["tous les quinze jours","(every|once every) (two|2) weeks|fortnightly|every (other|second) week|every fortnight","dist","major","Tous les quinze jours = fortnightly.",[["every (fifteen|15) days","unid","calque","minor","«Tous les quinze jours» = fortnightly/every two weeks."]]],
  ["semaines impaires","odd(-numbered)? weeks","dist","major","Semaines impaires = odd-numbered weeks."],
  ["courant mars","(during|in|over the course of) march|in the course of march","dist","major","Courant mars = during March."],
  ["épluchures","peel(ing)?s|scraps","dist","minor","Épluchures = peelings."],
  ["marc de café","coffee grounds","dist","minor","Marc de café = coffee grounds."],
  ["la veille au soir","(the )?(evening|night) before","dist","major","La veille au soir = the evening before."],
  ["au plus tard le lendemain","(by|before) (the )?(following|next) day|the day after","dist","major","By the following day at the latest."],
  ["à même le trottoir","(directly|straight) on (the )?(footpath|pavement|sidewalk|kerb|ground)|on the (footpath|pavement|kerb)","dist","minor","À même = directly on."],
  ["Les encombrants","bulky (items|waste|rubbish|goods)|hard rubbish|large items","dist","minor","Encombrants = bulky items / hard rubbish (AU)."],
  ["électroménager","appliances|whitegoods|white goods","dist","minor","Électroménager = household appliances."],
  ["deux passages par an","(two|2) (collections|pick-?ups|visits|times)","dist","major","Limit must be exact."],
  ["est joint à ce courrier","enclosed|attached|included","dist","minor","Joint = enclosed."],
  ["Nous vous remercions de votre collaboration","thank you for your (cooperation|co-operation|help|assistance|understanding)","reg","minor","Standard close: Thank you for your cooperation.",[["thank you for your collaboration","unid","falsefriend","minor","Collaboration (letter) = cooperation."]]]
 ]},
{id:"t10",genre:"Popular science article",domain:"Science",diff:3,
 brief:{domain:"Science",topic:"Teenagers' sleep and the body clock",type:"Article in a popular science magazine",purpose:"Informative",audience:"Educated non-expert reader"},
 fr:`Pourquoi les adolescents ont-ils tant de mal à se lever ?

Le réveil sonne à 6 h 45, et l'adolescent n'émerge qu'au troisième rappel. Paresse ? Pas forcément. Les chercheurs savent depuis une trentaine d'années que la puberté s'accompagne d'un décalage de l'horloge biologique : la sécrétion de mélatonine, l'hormone qui favorise l'endormissement, survient plus tard dans la soirée, parfois avec deux heures de retard par rapport à l'enfance.

Résultat : un adolescent qui se couche à 22 heures aura souvent du mal à s'endormir avant minuit. Or, à cet âge, les besoins de sommeil restent élevés, de l'ordre de huit à dix heures par nuit. Avec des cours qui commencent à 8 heures, le compte n'y est pas. Selon une étude menée auprès de 4 000 lycéens, près de la moitié dorment moins de sept heures en semaine.

Les conséquences ne se limitent pas à la fatigue. Le manque de sommeil chronique est associé à des difficultés de concentration, à une plus grande irritabilité et à un risque accru de dépression. Il augmenterait aussi le risque d'accident, notamment chez les jeunes conducteurs.

Les écrans aggravent le phénomène, sans en être la cause première. La lumière bleue retarde encore la production de mélatonine, et les contenus stimulants repoussent l'heure du coucher. Les spécialistes recommandent de les éteindre au moins une heure avant d'aller au lit.

Certains pays en ont tiré les conséquences. Plusieurs États américains ont repoussé l'heure de début des cours dans le secondaire. Là où l'expérience a été menée, les élèves ont gagné en moyenne une demi-heure de sommeil, et les résultats scolaires ont légèrement progressé. En France, la question reste peu débattue.`,
 model:`Why do teenagers find it so hard to get up?

The alarm goes off at 6.45 am, and the teenager only surfaces after the third snooze. Laziness? Not necessarily. Researchers have known for about 30 years that puberty brings a shift in the body clock: melatonin, the hormone that helps us fall asleep, is released later in the evening, sometimes up to two hours later than in childhood.

As a result, a teenager who goes to bed at 10 pm will often struggle to fall asleep before midnight. Yet sleep needs remain high at this age, around eight to ten hours a night. With classes starting at 8 am, the numbers do not add up. According to a study of 4,000 senior secondary students, almost half sleep less than seven hours on school nights.

The consequences are not limited to tiredness. Chronic lack of sleep is linked to difficulty concentrating, greater irritability and a higher risk of depression. It may also increase the risk of accidents, particularly among young drivers.

Screens make the problem worse, although they are not the main cause. Blue light delays melatonin production even further, and stimulating content pushes bedtime back. Experts recommend switching them off at least an hour before going to bed.

Some countries have acted on these findings. Several US states have moved school start times later for secondary students. Where this has been tried, students gained an average of half an hour's sleep, and their school results improved slightly. In France, the issue is still rarely discussed.`,
 cp:[
  ["Pourquoi les adolescents","(teenagers|adolescents|teens)","omit","minor","Translate the title."],
  ["6 h 45","6\\.45|6:45|quarter to seven","dist","major","Time must be exact."],
  ["au troisième rappel","third (snooze|alarm|reminder|ring|time)","dist","minor","Third snooze/alarm."],
  ["Paresse ? Pas forcément","not necessarily|not always|not quite","dist","minor","Pas forcément = not necessarily.",[["not forcibly|not forcedly","dist","falsefriend","major","Pas forcément = not necessarily."]]],
  ["depuis une trentaine d'années","(for )?(about|around|some|roughly|nearly|almost) (30|thirty) years","dist","major","Une trentaine = about 30; depuis = for."],
  ["décalage de l'horloge biologique","(body|biological|internal) clock|circadian","dist","minor","Horloge biologique = body clock."],
  ["l'endormissement","fall(ing)? asleep|sleep onset|go(ing)? to sleep|sleepiness|drowsiness","dist","minor","Endormissement = falling asleep."],
  ["deux heures de retard","(two|2) hours","dist","major","Figure must be exact."],
  ["à 22 heures","10 ?pm|22:00|22\\.00|10 o'clock","dist","major","Time must be exact."],
  ["Or,","\\byet\\b|\\bhowever\\b|\\bbut\\b|\\bnow\\b","omit","minor","«Or» = yet/however."],
  ["de l'ordre de huit à dix heures","(around|about|roughly|some|approximately) (eight|8) (to|and|–|-) ?(ten|10)","dist","major","Figure range must be exact; keep the approximation."],
  ["le compte n'y est pas","(do(es)?n't|do(es)? not) add up|not enough|short|fall short|isn't enough|is not enough","dist","minor","Idiom = the numbers do not add up."],
  ["4 000 lycéens","4,000|4 000|four thousand","dist","major","Figure must be exact."],
  ["lycéens","(senior )?(high|secondary) school|upper secondary|year 1[012]|students","dist","minor","Lycéens = senior secondary students.",[["\\blyceans?\\b|lycée students","dist","calque","minor","Explain: senior secondary students."]]],
  ["près de la moitié","(almost|nearly) half","dist","major","Proportion must be exact."],
  ["moins de sept heures en semaine","(less|fewer) than (seven|7) hours","dist","major","Figure must be exact."],
  ["en semaine","(on )?(week ?nights|weekdays|school nights|during the week)","omit","minor","En semaine = on weeknights."],
  ["Il augmenterait aussi","(may|might|could|reportedly|is (also )?thought to|is believed to|appears to|seems to|is said to)","dist","major","Conditional = reported/uncertain claim: may also increase.",[["\\bwould (also )?increase\\b","dist","calque","major","French conditional of reported fact → «may/is thought to», not «would»."]]],
  ["sans en être la cause première","(not|without being) the (main|primary|root|first|chief) cause","dist","major","Keep the contrast: not the main cause."],
  ["en ont tiré les conséquences","acted on|drawn (the )?(conclusions|lessons)|taken action|responded|learned|learnt","dist","minor","Tirer les conséquences = act on the findings."],
  ["Plusieurs États américains","(several|a number of) (us|american|u\\.s\\.) states","dist","minor","États américains = US states."],
  ["une demi-heure","half an hour|30 minutes|thirty minutes","dist","major","Figure must be exact."],
  ["la question reste peu débattue","(rarely|seldom|little|hardly) (discussed|debated)|not (much|widely) (discussed|debated)","dist","major","«Peu débattue» = rarely discussed (not «a little debated»).",[["a little debated|little debated","unid","calque","minor","«Peu» negates: rarely discussed."]]]
 ]},
{id:"t11",genre:"Opinion piece",domain:"Health",diff:3,
 brief:{domain:"Health",topic:"Loneliness among older people",type:"Opinion column in a weekly magazine",purpose:"Persuasive",audience:"Educated non-expert reader"},
 fr:`La solitude des aînés n'est pas une fatalité

Deux millions de personnes âgées, en France, ne voient presque jamais personne. Pas un appel, pas une visite pendant des semaines entières. Ce chiffre, qui progresse d'année en année, devrait nous alarmer davantage qu'il ne le fait. Car l'isolement n'est pas seulement une souffrance morale : il accélère la perte d'autonomie, multiplie les hospitalisations et augmente la mortalité, au même titre que le tabac ou l'obésité.

On invoque volontiers l'éclatement des familles, l'exode des jeunes vers les métropoles ou la fermeture des commerces de proximité. Ces explications sont justes, mais elles ont l'inconvénient de nous dédouaner. Comme si la solitude de nos voisins relevait d'une évolution inéluctable de la société, et non de choix collectifs que nous pourrions faire autrement.

Car des solutions existent, et elles ne coûtent pas forcément cher. Dans certaines villes, les facteurs passent régulièrement chez les personnes seules pour prendre de leurs nouvelles. Ailleurs, des lycéens partagent un repas hebdomadaire avec des résidents de maison de retraite. Des programmes de cohabitation intergénérationnelle permettent à un étudiant d'être logé à moindre coût chez une personne âgée, en échange d'une présence le soir.

Ces initiatives ont un point commun : elles reposent sur des liens humains plutôt que sur des dispositifs techniques. Une tablette connectée ne remplacera jamais une conversation autour d'un café.

Il ne s'agit pas de culpabiliser les familles, souvent elles-mêmes épuisées, mais de faire de la lutte contre l'isolement une priorité de santé publique, au même titre que la prévention des chutes. Chacun de nous, un jour, sera concerné.`,
 model:`Loneliness among older people is not inevitable

In France, two million older people hardly ever see anyone. Not a phone call, not a visit, for weeks on end. This figure, which is rising year after year, should alarm us more than it does. Isolation is not just emotional suffering: it speeds up the loss of independence, leads to more hospital admissions and increases mortality, in the same way as smoking or obesity.

We are quick to blame the break-up of families, young people moving away to big cities or the closure of local shops. These explanations are valid, but they have the drawback of letting us off the hook. It is as if our neighbours' loneliness were the result of an inevitable change in society, rather than of collective choices that we could make differently.

Solutions do exist, and they are not necessarily expensive. In some towns, postal workers regularly drop in on people who live alone to check how they are. Elsewhere, secondary school students share a weekly meal with nursing home residents. Intergenerational home-sharing programs allow a student to live cheaply in an older person's home in exchange for keeping them company in the evenings.

These initiatives have one thing in common: they rely on human connection rather than on technology. A tablet will never replace a conversation over a cup of coffee.

The point is not to make families feel guilty, as they are often exhausted themselves, but to make tackling isolation a public health priority, just like preventing falls. All of us will be affected by it one day.`,
 cp:[
  ["La solitude des aînés","(loneliness|isolation)","omit","minor","Translate the title."],
  ["n'est pas une fatalité","(not|isn't) (inevitable|unavoidable|our fate|a given|bound to happen)","dist","major","Fatalité = inevitability.",[["not a fatality|isn't a fatality","dist","falsefriend","major","Fatalité = inevitability, not fatality."]]],
  ["Deux millions de personnes âgées","(two|2) million","dist","major","Figure must be exact."],
  ["ne voient presque jamais personne","(hardly|almost never|barely|rarely|scarcely) (ever )?see (anyone|anybody|any)","dist","major","Presque jamais = hardly ever."],
  ["pendant des semaines entières","weeks? (on end|at a time)|(for )?(entire|whole) weeks","dist","minor","For weeks on end."],
  ["devrait nous alarmer davantage qu'il ne le fait","(should|ought to) (alarm|worry|concern) us more","dist","major","Keep the comparison: more than it does."],
  ["souffrance morale","emotional|psychological|mental","dist","minor","Souffrance morale = emotional suffering.",[["moral suffering","dist","falsefriend","minor","Moral (FR) here = emotional/psychological."]]],
  ["la perte d'autonomie","(loss of|declining) independence|dependence|frailty|loss of autonomy","dist","minor","Perte d'autonomie = loss of independence."],
  ["au même titre que le tabac","(just )?(like|as much as|in the same way as|on a par with|as (do|does))[^.]{0,20}smoking","dist","major","Comparison with smoking must be kept.",[["\\btobacco\\b","unid","calque","minor","Le tabac (health risk) = smoking."]]],
  ["On invoque volontiers","(we|people) (are quick to|readily|often|tend to|like to|willingly) (blame|cite|point|invoke|mention|put)","dist","minor","Invoquer volontiers = be quick to cite."],
  ["l'éclatement des familles","(break-?up|breakdown|fragmentation|scattering|dispersal) of (the )?famil","dist","minor","Éclatement des familles = family break-up."],
  ["commerces de proximité","local (shops|businesses|stores)|corner (shops|stores)|neighbourhood shops","dist","minor","Commerces de proximité = local shops."],
  ["nous dédouaner","let(ting)? us off the hook|absolve|excuse us|clear our conscience|relieve us of (responsibility|blame)","dist","major","Se dédouaner = let oneself off the hook."],
  ["inéluctable","inevitable|unavoidable|inexorable","dist","minor","Inéluctable = inevitable."],
  ["pas forcément cher","(not|aren't|are not|don't) (necessarily|always)","dist","major","Pas forcément = not necessarily."],
  ["les facteurs","postal workers|posties|postmen|postal staff|mail carriers|postal (officers|employees)|letter carriers","dist","major","Facteur = postal worker.",[["\\bfactors\\b","dist","falsefriend","major","Facteurs (here) = postal workers."]]],
  ["prendre de leurs nouvelles","check (on|how|in on)|see how they are|ask after","dist","minor","Prendre des nouvelles = check how they are."],
  ["maison de retraite","nursing home|aged care|retirement home|residential care","dist","minor","Maison de retraite = nursing home / aged care home."],
  ["à moindre coût","(cheap|cheaply|low cost|low-cost|reduced (rent|cost)|affordabl|little cost|for less|lower (rent|cost))","dist","minor","À moindre coût = cheaply."],
  ["dispositifs techniques","technolog|technical (devices|solutions|systems)|gadgets|devices","dist","minor","Dispositifs techniques = technology."],
  ["culpabiliser les familles","(guilty|blame)","dist","minor","Culpabiliser = make feel guilty."],
  ["la prévention des chutes","prevent(ing|ion of)? falls|falls prevention","dist","minor","Prévention des chutes = falls prevention."],
  ["Chacun de nous, un jour, sera concerné","(all|each|every one) of us|everyone|we will all","dist","minor","Keep the closing point: all of us will be affected one day."]
 ]},
{id:"t12",genre:"News article",domain:"Migration & settlement",diff:3,
 brief:{domain:"Migration & settlement",topic:"Recognition of overseas qualifications",type:"News article in a national daily",purpose:"Informative",audience:"Educated non-expert reader"},
 fr:`Diplômes étrangers : un parcours du combattant pour exercer en France

Médecin en Syrie, ingénieure en Colombie, enseignant au Sénégal : nombre de personnes arrivées en France avec des qualifications solides se retrouvent à occuper des emplois très en deçà de leurs compétences. Selon une étude publiée la semaine dernière, près d'un tiers des immigrés diplômés du supérieur occupent un poste pour lequel ils sont surqualifiés, contre un salarié sur cinq parmi les personnes nées en France.

En cause, d'abord, la complexité des démarches. Faire reconnaître un diplôme obtenu hors de l'Union européenne suppose de constituer un dossier comprenant des traductions certifiées, des relevés de notes et des programmes détaillés, puis d'attendre parfois plus d'un an une décision. Pour les professions réglementées, comme la médecine, la pharmacie ou le droit, il faut en outre réussir des épreuves de vérification des connaissances, dont le nombre de places est limité.

La maîtrise insuffisante du français constitue un autre frein, de même que le manque de réseau professionnel. « On me répondait que mon expérience n'était pas transposable », raconte une architecte arrivée d'Iran il y a quatre ans, aujourd'hui assistante dans un cabinet.

Ce gâchis a un coût, pour les intéressés comme pour l'économie, alors même que des secteurs entiers peinent à recruter. Le gouvernement a annoncé la création d'un guichet unique chargé d'orienter les demandeurs et de réduire les délais à six mois. Les associations saluent l'intention, mais rappellent que les précédents plans n'ont jamais été dotés des moyens nécessaires.

Pour beaucoup, l'enjeu dépasse la question professionnelle : retrouver son métier, c'est aussi retrouver une place dans la société.`,
 model:`Overseas qualifications: an uphill battle to work in France

A doctor in Syria, an engineer in Colombia, a teacher in Senegal: many people who arrive in France with strong qualifications end up working in jobs well below their skill level. According to a study published last week, almost a third of immigrants with university degrees are in jobs for which they are overqualified, compared with one in five employees among people born in France.

The first problem is how complex the process is. Getting a qualification obtained outside the European Union recognised means putting together an application that includes certified translations, academic transcripts and detailed course outlines, and then sometimes waiting more than a year for a decision. For regulated professions, such as medicine, pharmacy and law, applicants must also pass knowledge assessment exams, for which there are only a limited number of places.

Limited French is another barrier, as is the lack of a professional network. "I was told my experience wasn't transferable," says an architect who arrived from Iran four years ago and now works as an assistant in a practice.

This waste of talent comes at a cost, both for the people concerned and for the economy, at a time when entire industries are struggling to recruit. The government has announced the creation of a one-stop shop to guide applicants and cut processing times to six months. Community organisations welcome the intention but point out that previous plans were never given the resources they needed.

For many, there is more at stake than work: getting back into their profession also means regaining their place in society.`,
 cp:[
  ["Diplômes étrangers","(foreign|overseas|international) (qualifications|degrees|diplomas|credentials)","omit","minor","Translate the title."],
  ["un parcours du combattant","uphill (battle|struggle)|obstacle course|ordeal|struggle|minefield|long haul|marathon","dist","minor","Idiom: an uphill battle.",[["fighter'?s (course|path)|combatant'?s","unid","calque","minor","Idiom: an uphill battle / obstacle course."]]],
  ["nombre de personnes","many|a (large )?number of|numerous|plenty of","dist","minor","Nombre de = many."],
  ["très en deçà de leurs compétences","(well|far) below|beneath their|under their","dist","major","En deçà de = below."],
  ["près d'un tiers","(almost|nearly) (a|one) third","dist","major","Proportion must be exact."],
  ["diplômés du supérieur","(university|tertiary|higher education) (degrees?|qualifications?|graduates?|educated)|graduates","dist","minor","Diplômés du supérieur = university-educated."],
  ["contre un salarié sur cinq","(compared (with|to)|versus|against|as opposed to)[^.]{0,30}(one|1) in (five|5)","dist","major","Keep the comparison and the figure.",[["against one employee","unid","calque","minor","«Contre» in comparisons = compared with."]]],
  ["En cause, d'abord","(first|main|primary|chief)[^.]{0,30}(reason|problem|cause|factor|issue|culprit)|is to blame|is partly to blame|first of all","dist","minor","En cause = the reason/cause is."],
  ["la complexité des démarches","complex|complicated","dist","minor","Complexity of the process."],
  ["hors de l'Union européenne","outside the (european union|eu)","dist","major","Must be exact."],
  ["traductions certifiées","certified translations","dist","minor","Traductions certifiées = certified translations."],
  ["relevés de notes","transcripts|academic records|marks|results","dist","minor","Relevés de notes = academic transcripts."],
  ["programmes détaillés","(course|subject|unit) (outlines|descriptions|content)|syllabus|syllabi|curricul","dist","minor","Programmes détaillés = course outlines."],
  ["plus d'un an","(more than|over) (a|one) year","dist","major","Figure must be exact."],
  ["professions réglementées","regulated professions|regulated occupations","dist","minor","Professions réglementées = regulated professions."],
  ["le droit","\\blaw\\b|legal profession","dist","major","Le droit (profession) = law.",[["\\bthe right\\b","dist","falsefriend","major","Le droit (profession) = law."]]],
  ["en outre","also|in addition|additionally|furthermore|moreover|as well","omit","minor","En outre = also."],
  ["épreuves de vérification des connaissances","(knowledge|competency|skills) (assessment|test|exam|check)|exam|test","dist","minor","Épreuves = exams/assessments."],
  ["La maîtrise insuffisante du français","(limited|poor|insufficient|inadequate|weak|lack of) (command of |knowledge of |proficiency in |skills in )?french|limited french","dist","minor","Maîtrise insuffisante = limited command."],
  ["un autre frein","(another|a further|an additional) (barrier|obstacle|hurdle|brake|impediment)","dist","minor","Frein = barrier/obstacle."],
  ["n'était pas transposable","(not|wasn't|was not) (transferable|transferrable|applicable|relevant|recognised|valid)","dist","major","Transposable = transferable."],
  ["dans un cabinet","practice|firm|office|studio","dist","minor","Cabinet (architect) = practice/firm.",[["\\bcabinet\\b","dist","falsefriend","major","Cabinet (architect) = practice/firm."]]],
  ["Ce gâchis","waste","dist","minor","Gâchis = waste."],
  ["alors même que","(at a time when|even though|while|whereas|when|even as)","dist","minor","Alors même que = at a time when."],
  ["peinent à recruter","(struggl|difficult|hard|trouble|battling)","dist","minor","Peiner à = struggle to."],
  ["un guichet unique","one-stop[- ]shop|single (point of contact|window|office|service)|central (office|service|point)","dist","minor","Guichet unique = one-stop shop."],
  ["à six mois","(six|6) months","dist","major","Figure must be exact."],
  ["dotés des moyens nécessaires","(resources|funding|funds|means|money)","dist","minor","Doter des moyens = give resources/funding."]
 ]}
]);
