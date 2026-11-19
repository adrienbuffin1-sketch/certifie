/* Certified Translator track: original source texts written for Certifié (not NAATI material).
   Each text: id, genre, domain, diff (1 easier – 3 harder), brief, fr, model (Australian English),
   cp = checkpoints [French snippet, accepted English (regex, case-insensitive), NAATI category if missing, severity, note, traps]
   traps = [[regex for a wrong rendering, category, tag, severity, note]]
   Categories: dist (distortion), omit (unjustified omission), add (unjustified addition), reg (inappropriate register),
   unid (unidiomatic expression), gram (grammar, syntax), spell (spelling), punct (punctuation).
   Tags: meaning, omission, addition, falsefriend, calque, register, grammar, spelling, numbers, brief, smallword. */
window.CT_TEXTS=(window.CT_TEXTS||[]).concat([
{id:"t01",genre:"Government information",domain:"Health",diff:1,
 brief:{domain:"Health",topic:"Seasonal flu vaccination",type:"Public health information page",purpose:"Informative",audience:"Educated non-expert reader"},
 fr:`Grippe saisonnière : pourquoi se faire vacciner dès maintenant ?

Chaque hiver, la grippe touche entre deux et six millions de personnes en France. Si la plupart guérissent en une semaine, la maladie peut entraîner des complications graves chez les personnes fragiles, notamment les plus de 65 ans, les femmes enceintes et les personnes atteintes de maladies chroniques.

La campagne de vaccination débute le 15 octobre et se poursuit jusqu'au 31 janvier. Il est conseillé de ne pas attendre les premiers cas : le vaccin met environ quinze jours à agir. Pour les publics prioritaires, il est pris en charge à 100 % par l'Assurance maladie, qui leur adresse un bon de prise en charge par courrier.

Le vaccin peut être administré par un médecin, un infirmier, une sage-femme ou un pharmacien. Dans la plupart des pharmacies, il n'est pas nécessaire de prendre rendez-vous. Les effets indésirables sont généralement bénins : une légère douleur au point d'injection ou une petite fièvre, qui disparaissent en un ou deux jours.

La vaccination ne protège pas à 100 %, mais elle réduit nettement le risque d'hospitalisation. Elle doit être renouvelée tous les ans, car les virus en circulation évoluent d'une année à l'autre.

Enfin, les gestes barrières restent indispensables : se laver régulièrement les mains, tousser dans son coude et porter un masque en cas de symptômes. Ces habitudes simples limitent aussi la transmission des autres virus hivernaux.`,
 model:`Seasonal flu: why you should get vaccinated now

Every winter, flu affects between two and six million people in France. While most recover within a week, the illness can lead to serious complications in vulnerable people, particularly those aged over 65, pregnant women and people with chronic illnesses.

The vaccination campaign starts on 15 October and runs until 31 January. People are advised not to wait for the first cases, as the vaccine takes about two weeks to take effect. For priority groups, it is fully covered by the national health insurance scheme (Assurance Maladie), which sends them a voucher by post.

The vaccine can be given by a doctor, a nurse, a midwife or a pharmacist. At most pharmacies, you do not need to make an appointment. Side effects are generally mild: slight pain where the injection was given or a mild fever, which goes away within one or two days.

Vaccination does not give 100% protection, but it significantly reduces the risk of being admitted to hospital. It must be repeated every year, because the viruses in circulation change from one year to the next.

Finally, simple protective measures are still essential: wash your hands regularly, cough into your elbow and wear a mask if you have symptoms. These simple habits also limit the spread of other winter viruses.`,
 cp:[
  ["Grippe saisonnière","seasonal (flu|influenza)","omit","minor","Title must be translated too."],
  ["entre deux et six millions","two (and|to) six million|2 (and|to|–|-) ?6 million","dist","major","Number range must be exact."],
  ["Si la plupart guérissent","while most|although most|most people recover|most recover","dist","minor","«Si» here is concessive (while/although), not conditional.",[["\\bif most\\b","dist","smallword","major","«Si» is concessive here: «while most…», not «if most…»."]]],
  ["notamment","particularly|in particular|especially|including|notably","omit","minor","«Notamment» introduces examples: particularly / including."],
  ["le 15 octobre","15 october|october 15","dist","major","Date must be exact."],
  ["jusqu'au 31 janvier","31 january|january 31","dist","major","Date must be exact."],
  ["quinze jours","two weeks|fortnight|15 days|fifteen days","dist","major","«Quinze jours» = two weeks.",[["\\bfifteen days\\b","unid","calque","minor","«Quinze jours» is idiomatically «two weeks» or «a fortnight»."]]],
  ["pris en charge à 100 %","fully covered|covered in full|100 ?(%|per cent) covered|covered (at|by) 100|free of charge|free","dist","major","Fully covered = paid in full by the scheme."],
  ["l'Assurance maladie","health insurance|assurance maladie|medicare","omit","major","Name the scheme or explain it for the reader."],
  ["bon de prise en charge","voucher|form|letter","omit","minor","The voucher/letter that confirms coverage."],
  ["sage-femme","midwi(fe|ves)","dist","major","Sage-femme = midwife.",[["wise woman|sage","dist","falsefriend","major","Sage-femme = midwife."]]],
  ["prendre rendez-vous","appointment|book","omit","minor","Rendez-vous = appointment."],
  ["Les effets indésirables","side effects|adverse (effects|reactions)","dist","minor","Effets indésirables = side effects."],
  ["bénins","mild|minor","dist","minor","Bénin = mild/minor here (not «benign» for side effects).",[["\\bbenign\\b","unid","falsefriend","minor","«Benign» suits tumours; side effects are «mild»."]]],
  ["réduit nettement","significantly|considerably|greatly|markedly|substantially|clearly","omit","minor","«Nettement» = significantly."],
  ["risque d'hospitalisation","hospital|hospitalisation|hospitalization","dist","minor","Risk of being admitted to hospital."],
  ["renouvelée tous les ans","every year|each year|annually|yearly","dist","major","Must be repeated every year."],
  ["les gestes barrières","protective measures|hygiene|precautions|measures|habits","omit","minor","Gestes barrières = protective/hygiene measures."],
  ["tousser dans son coude","elbow","omit","minor","Cough into your elbow."]
 ]},
{id:"t02",genre:"Community notice",domain:"Migration & settlement",diff:1,
 brief:{domain:"Migration & settlement",topic:"Free French classes for newcomers",type:"Community notice from a city council",purpose:"Informative",audience:"Educated non-expert reader"},
 fr:`Cours de français gratuits pour les nouveaux arrivants

La Ville de Lyon, en partenariat avec plusieurs associations du quartier de la Guillotière, propose à partir du lundi 3 février des cours de français gratuits destinés aux adultes récemment installés en France.

Les cours ont lieu deux fois par semaine, le lundi et le jeudi, de 18 h 30 à 20 h 30, à la Maison des services publics, 12 rue Montesquieu. Trois niveaux sont proposés : débutant, intermédiaire et avancé. Un test de positionnement, d'une durée de vingt minutes, permet d'orienter chaque participant vers le groupe qui lui convient.

L'inscription se fait sur place, du lundi au vendredi, entre 9 h et 12 h. Il suffit de présenter une pièce d'identité ; aucun justificatif de domicile n'est exigé. Les places étant limitées à quinze personnes par groupe, il est recommandé de s'inscrire au plus tôt.

Au-delà de l'apprentissage de la langue, ces ateliers abordent des thèmes de la vie quotidienne : prendre rendez-vous chez le médecin, ouvrir un compte bancaire, comprendre un bail ou remplir une déclaration d'impôts. Des bénévoles assurent par ailleurs une permanence d'aide aux démarches administratives le samedi matin.

Une garderie est mise à disposition des parents pendant les cours, sur réservation. Pour toute information complémentaire, vous pouvez contacter le service Intégration au 04 72 10 30 30 ou écrire à integration@mairie-lyon.fr.`,
 model:`Free French classes for newcomers

From Monday 3 February, the City of Lyon, in partnership with several community organisations in the Guillotière neighbourhood, is offering free French classes for adults who have recently settled in France.

Classes are held twice a week, on Mondays and Thursdays, from 6.30 to 8.30 pm, at the Public Services Centre, 12 rue Montesquieu. Three levels are offered: beginner, intermediate and advanced. A 20-minute placement test is used to put each participant in the right group.

You can enrol in person, Monday to Friday, between 9 am and 12 noon. You only need to show proof of identity; no proof of address is required. As places are limited to 15 people per group, you are advised to enrol as early as possible.

Beyond learning the language, these workshops cover everyday topics such as making an appointment with a doctor, opening a bank account, understanding a lease and filling in a tax return. Volunteers also run a drop-in help session for paperwork on Saturday mornings.

Child care is available for parents during classes, if booked in advance. For more information, please contact the Integration Service on 04 72 10 30 30 or email integration@mairie-lyon.fr.`,
 cp:[
  ["Cours de français gratuits","free french (classes|lessons|courses)","omit","minor","Translate the title."],
  ["associations du quartier","organisations|organizations|associations|groups","dist","minor","Associations = community organisations/non-profits."],
  ["lundi 3 février","3 february|february 3","dist","major","Date must be exact."],
  ["récemment installés","recently (settled|arrived|moved)|newly arrived|new arrivals","dist","minor","Recently settled."],
  ["le lundi et le jeudi","mondays and thursdays|monday and thursday","dist","major","Days must be exact."],
  ["de 18 h 30 à 20 h 30","6\\.30|6:30|18:30|1830","dist","major","Times must be exact (6.30 to 8.30 pm).",[["18 h 30","punct","numbers","minor","Use English time format: 6.30 pm or 18:30."]]],
  ["test de positionnement","placement (test|assessment)|level test","dist","minor","Test de positionnement = placement test."],
  ["vingt minutes","20 minutes|twenty minutes|20-minute|twenty-minute","dist","major","Duration must be exact."],
  ["L'inscription se fait sur place","in person|on site|on-site|on the spot","dist","minor","Sur place = in person."],
  ["entre 9 h et 12 h","9 ?am|9:00|9\\.00","dist","major","Times must be exact."],
  ["pièce d'identité","identification|identity|\\bid\\b","dist","minor","Pièce d'identité = proof of identity / ID."],
  ["aucun justificatif de domicile","proof of (address|residence)","dist","major","Justificatif de domicile = proof of address."],
  ["quinze personnes","15 people|fifteen people|15 participants|fifteen participants|15 per|fifteen per","dist","major","Number must be exact."],
  ["un bail","lease|rental (agreement|contract)|tenancy agreement","dist","major","Bail = lease.",[["\\bbail\\b","dist","falsefriend","major","Bail (FR) = lease, not bail."]]],
  ["déclaration d'impôts","tax return","dist","minor","Déclaration d'impôts = tax return."],
  ["par ailleurs","also|in addition|additionally|moreover|furthermore|as well","omit","minor","«Par ailleurs» = also/in addition."],
  ["permanence","drop-in|help (desk|session)|session|service","dist","minor","Permanence = drop-in session/help desk.",[["permanence","dist","falsefriend","major","Permanence = drop-in session, not «permanence»."]]],
  ["démarches administratives","paperwork|administrative (procedures|formalities|matters|tasks)|forms","dist","minor","Démarches administratives = paperwork / dealing with government offices."],
  ["Une garderie","child ?care|crèche|creche|childminding|babysitting","dist","minor","Garderie = child care."],
  ["sur réservation","book|reservation|in advance","omit","minor","Must be booked."]
 ]},
{id:"t03",genre:"News article",domain:"Environment",diff:2,
 brief:{domain:"Environment",topic:"Urban heat and street trees",type:"News article in a regional daily",purpose:"Informative",audience:"Educated non-expert reader"},
 fr:`Canicules : les villes misent sur les arbres pour faire baisser la température

Face à la multiplication des épisodes de forte chaleur, de nombreuses villes françaises accélèrent la végétalisation de leurs rues. À Montpellier, la municipalité s'est engagée à planter 50 000 arbres d'ici 2030, soit près de trois fois plus qu'au cours de la décennie précédente.

L'enjeu est de taille. En été, l'écart de température entre le centre d'une grande ville et la campagne environnante peut atteindre 8 °C la nuit. Ce phénomène, appelé « îlot de chaleur urbain », s'explique par la densité du bâti, l'absence de végétation et l'omniprésence de surfaces sombres, comme le bitume, qui emmagasinent la chaleur le jour et la restituent la nuit.

Or, un arbre adulte peut faire baisser de plusieurs degrés la température ressentie à ses pieds, grâce à l'ombre qu'il procure et à l'eau qu'il évapore. Encore faut-il choisir des essences adaptées : certaines espèces, très gourmandes en eau, supportent mal les sécheresses à répétition.

Les spécialistes mettent toutefois en garde contre une vision trop optimiste. Un jeune arbre met une quinzaine d'années à atteindre sa pleine efficacité, et près d'un sujet sur cinq meurt avant l'âge adulte faute d'entretien. « Planter ne suffit pas, il faut arroser, protéger et remplacer », résume une urbaniste interrogée.

D'autres solutions complètent donc l'arsenal : toitures blanches, cours d'école désimperméabilisées ou fontaines publiques. Leur efficacité dépendra largement de la capacité des communes à les financer sur le long terme.`,
 model:`Heatwaves: cities turn to trees to bring temperatures down

As periods of extreme heat become more frequent, many French cities are speeding up efforts to green their streets. In Montpellier, the council has committed to planting 50,000 trees by 2030, almost three times as many as in the previous decade.

A great deal is at stake. In summer, the temperature difference between the centre of a large city and the surrounding countryside can reach 8°C at night. This phenomenon, known as the "urban heat island", is caused by dense buildings, a lack of vegetation and dark surfaces everywhere, such as asphalt, which absorb heat during the day and release it at night.

Yet a mature tree can lower the temperature people feel beneath it by several degrees, thanks to the shade it provides and the water it evaporates. The right species still have to be chosen, however: some trees need a lot of water and cope poorly with repeated droughts.

Experts warn, however, against being too optimistic. A young tree takes around 15 years to become fully effective, and almost one in five dies before reaching maturity because it is not looked after. "Planting is not enough. You have to water, protect and replace," one urban planner summed up.

Other solutions are therefore being used as well: white roofs, school playgrounds with permeable surfaces, and public fountains. How effective they are will largely depend on councils' ability to fund them over the long term.`,
 cp:[
  ["Canicules","heatwaves?|heat waves?","omit","minor","Translate the title."],
  ["misent sur","turn to|rely on|count on|bank on|bet on|invest in","dist","minor","Miser sur = bank on / turn to."],
  ["la végétalisation de leurs rues","green|plant|vegetation|trees","dist","minor","Végétaliser = to green / plant vegetation."],
  ["50 000 arbres","50,000|50 000|fifty thousand","dist","major","Number must be exact; use an English thousands separator.",[["50\\.000","punct","numbers","minor","Use 50,000 (comma) in English."]]],
  ["d'ici 2030","by 2030","dist","major","D'ici 2030 = by 2030 (not «from 2030»).",[["from (here|now) (to|until) 2030|since 2030","dist","meaning","major","D'ici 2030 = by 2030."]]],
  ["près de trois fois plus","(almost|nearly) (three times|triple)","dist","major","Almost three times as many."],
  ["L'enjeu est de taille","at stake|significant|major|big (challenge|issue)|important","omit","minor","«L'enjeu est de taille» = a lot is at stake."],
  ["8 °C","8 ?°c|8 degrees","dist","major","Figure must be exact."],
  ["« îlot de chaleur urbain »","urban heat island","dist","major","Established term: urban heat island."],
  ["densité du bâti","dense|density|built-up|buildings","omit","minor","Density of buildings."],
  ["bitume","asphalt|bitumen|tarmac|road surface","dist","minor","Bitume = asphalt (AU: also bitumen)."],
  ["Or,","\\byet\\b|\\bhowever\\b|\\bbut\\b|\\bnow\\b","omit","minor","«Or» = yet/however (connector), not «gold».",[["\\bgold\\b","dist","smallword","major","«Or» here is a connector (yet/now), not gold."]]],
  ["température ressentie","feels?|perceived|felt","dist","minor","Température ressentie = the temperature people feel."],
  ["Encore faut-il","still|however|but|provided|as long as|only if","omit","minor","«Encore faut-il» = but… still have to / provided that."],
  ["essences","species|varieties|types of trees|trees","dist","major","Essence (tree) = species.",[["\\bessences?\\b","dist","falsefriend","major","Essence (of a tree) = species."]]],
  ["une quinzaine d'années","15 years|fifteen years|around 15|about 15","dist","major","Une quinzaine = about 15."],
  ["près d'un sujet sur cinq","one in five|1 in 5|20 ?(%|per ?cent)","dist","major","Proportion must be exact (almost one in five).",[["one subject","dist","falsefriend","major","Sujet (tree) = specimen/tree, not «subject»."]]],
  ["faute d'entretien","(lack|absence) of (care|maintenance|upkeep)|not (looked after|maintained|cared for)|neglect","dist","minor","Faute de = for lack of."],
  ["mettent toutefois en garde","warn|caution","dist","minor","Mettre en garde = warn."],
  ["cours d'école désimperméabilisées","(school|playground)","omit","minor","School playgrounds with permeable surfaces."],
  ["des communes","councils|local (governments|authorities)|municipalities|towns","dist","minor","Commune = local council/municipality."]
 ]},
{id:"t04",genre:"Opinion piece",domain:"Education",diff:2,
 brief:{domain:"Education",topic:"Mobile phones in schools",type:"Opinion piece in a national newspaper",purpose:"Persuasive",audience:"Educated non-expert reader"},
 fr:`Interdire le portable à l'école ne suffira pas

Depuis la rentrée, les téléphones portables sont interdits dans l'enceinte de plusieurs centaines de collèges, qui expérimentent une « pause numérique » : les élèves déposent leur appareil à l'entrée et le récupèrent en fin de journée. La mesure est populaire, et l'on comprend pourquoi. Les enseignants constatent une meilleure concentration en classe et des cours de récréation plus animées.

Pourtant, il serait naïf de croire qu'une simple interdiction réglera le problème. Les adolescents passent en moyenne plus de quatre heures par jour devant un écran, et l'essentiel de ce temps se situe en dehors de l'établissement : le soir, dans leur chambre, souvent jusque tard dans la nuit. Confisquer le téléphone de 8 h à 17 h revient à soigner le symptôme sans s'attaquer à la cause.

Ce dont les jeunes ont besoin, c'est d'apprendre à se servir de ces outils. Repérer une fausse information, protéger ses données personnelles, comprendre comment les applications captent l'attention : autant de compétences qui devraient être enseignées au même titre que la lecture ou le calcul. Or, l'éducation aux médias ne représente aujourd'hui que quelques heures par an dans les programmes.

Les parents ont eux aussi un rôle à jouer. Difficile d'exiger d'un enfant qu'il lâche son écran quand les adultes consultent le leur à table. Plutôt que de multiplier les interdits, l'école et les familles gagneraient à fixer ensemble des règles claires et cohérentes. C'est moins spectaculaire qu'une interdiction, mais sans doute bien plus efficace.`,
 model:`Banning phones at school will not be enough

Since the start of the school year, mobile phones have been banned on the grounds of several hundred lower secondary schools that are trialling a "digital break": students hand in their phones when they arrive and collect them at the end of the day. The measure is popular, and it is easy to see why. Teachers report better concentration in class and livelier playgrounds.

However, it would be naive to think that a simple ban will solve the problem. Teenagers spend more than four hours a day in front of a screen on average, and most of that time is spent outside school: in the evening, in their bedrooms, often until late at night. Confiscating phones from 8 am to 5 pm amounts to treating the symptom without tackling the cause.

What young people need is to learn how to use these tools. Spotting false information, protecting their personal data and understanding how apps capture their attention are all skills that should be taught just like reading or maths. Yet media literacy currently makes up only a few hours a year in the curriculum.

Parents have a role to play too. It is hard to expect a child to put down their screen when adults check theirs at the dinner table. Rather than adding more and more bans, schools and families would do better to set clear and consistent rules together. That is less spectacular than a ban, but probably far more effective.`,
 cp:[
  ["Interdire le portable à l'école","(ban|banning|prohibit).*(phone|mobile)","omit","minor","Translate the title."],
  ["Depuis la rentrée","(start|beginning) of (the )?(school|academic) (year|term)|since (the )?(school year|term) (began|started)","dist","minor","La rentrée = start of the school year."],
  ["dans l'enceinte","grounds|premises|on site|inside","omit","minor","Dans l'enceinte = on the grounds."],
  ["plusieurs centaines de collèges","(several|a few) hundred","dist","major","Quantity must be kept: several hundred.",[["\\bcolleges?\\b","dist","falsefriend","major","Collège = lower secondary school (years 6–9 in France), not college."]]],
  ["expérimentent","trial|testing|piloting|experimenting","dist","minor","Expérimenter = trial/pilot."],
  ["déposent leur appareil","hand in|leave|drop off|deposit|store","dist","minor","Hand in their phones."],
  ["des cours de récréation plus animées","playground|recess|lunchtime|break","omit","minor","Cour de récréation = playground."],
  ["Pourtant","however|yet|but|nevertheless|even so","omit","minor","Pourtant = however/yet."],
  ["plus de quatre heures par jour","(more than|over) (four|4) hours (a|per) day","dist","major","Figure must be exact."],
  ["l'essentiel de ce temps","most of|the bulk of|the majority of","dist","minor","L'essentiel = most of.",[["the essential of|essential part","unid","calque","minor","«L'essentiel de» = most of."]]],
  ["de 8 h à 17 h","8 ?am|8:00|8\\.00","dist","major","Times must be exact (8 am to 5 pm)."],
  ["revient à","amounts to|is (like|the same as|tantamount to)|means","dist","minor","Revenir à = amount to.",[["comes back to","dist","calque","major","«Revient à» = amounts to, not «comes back to»."]]],
  ["Repérer une fausse information","(spot|identify|recogni[sz]e|detect).*(false|fake|mis)","dist","minor","Spotting false information."],
  ["au même titre que","(just )?like|in the same way as|as much as|alongside|on a par with|as well as","omit","minor","Au même titre que = just like / on a par with."],
  ["le calcul","math(s|ematics)?|arithmetic|numeracy","dist","minor","Le calcul (school) = maths/arithmetic.",[["\\bcalculus\\b|\\bcalculation\\b","dist","falsefriend","minor","Le calcul at school = maths/arithmetic."]]],
  ["Or,","\\byet\\b|\\bhowever\\b|\\bbut\\b","omit","minor","«Or» = yet/however."],
  ["l'éducation aux médias","media (literacy|education)","dist","minor","Éducation aux médias = media literacy."],
  ["ne représente aujourd'hui que quelques heures","only (a few|a couple of) hours|just a few hours","dist","major","«Ne… que» = only.",[["represents? (today )?some hours","unid","calque","minor","Rewrite: «makes up only a few hours»."]]],
  ["dans les programmes","curriculum|syllabus|program","dist","minor","Programmes (school) = curriculum."],
  ["qu'il lâche son écran","put (down|away)|let go|stop using|give up","dist","minor","Lâcher son écran = put down their screen."],
  ["gagneraient à","would do (well|better)|would benefit|would gain|should","dist","minor","Gagner à = would do well to.",[["would win","dist","calque","major","«Gagneraient à» = would do well to."]]],
  ["sans doute","probably|no doubt|likely|undoubtedly|doubtless","omit","minor","Sans doute = probably."]
 ]},
{id:"t05",genre:"Consumer information",domain:"Finance",diff:2,
 brief:{domain:"Finance",topic:"Buy now, pay later and consumer credit",type:"Consumer information article from a consumer association",purpose:"Informative and persuasive",audience:"Educated non-expert reader"},
 fr:`Paiement fractionné : attention aux achats « indolores »

Payer un téléviseur en trois ou quatre fois sans frais apparents : le paiement fractionné séduit de plus en plus de consommateurs, en particulier les moins de 35 ans. Proposé en quelques clics au moment de valider un panier en ligne, il donne l'impression de pouvoir s'offrir un produit sans entamer son budget du mois.

Le revers de la médaille est moins visible. D'abord, ces facilités ne sont pas toujours gratuites : au-delà de quatre mensualités, ou lorsque l'échéance est dépassée, des frais peuvent s'appliquer, parfois élevés. Ensuite, la multiplication des petits crédits rend difficile une vision d'ensemble de ses dépenses. Un consommateur peut ainsi se retrouver à rembourser simultanément cinq ou six achats, sans en avoir pleinement conscience.

Jusqu'à présent, ces offres échappaient en grande partie à la réglementation sur le crédit à la consommation. Ce ne sera bientôt plus le cas : une directive européenne, qui doit être transposée d'ici fin 2026, obligera les prêteurs à vérifier la solvabilité de l'emprunteur et à remettre une information claire sur le coût total.

En attendant, notre association recommande quelques réflexes simples. Avant de cliquer, demandez-vous si vous auriez acheté le produit en le payant comptant. Notez chaque échéance dans votre agenda et évitez de cumuler plusieurs paiements fractionnés en même temps. Enfin, en cas de difficulté, n'attendez pas les relances : contactez rapidement le prêteur ou une association de consommateurs, qui pourra vous aider à négocier un échéancier.`,
 model:`Pay-in-instalments schemes: beware of "painless" purchases

Paying for a television in three or four instalments with no visible fees: buy now, pay later schemes are attracting more and more consumers, particularly people under 35. Offered in just a few clicks when you check out online, they give the impression that you can afford something without eating into your monthly budget.

The downside is less obvious. First, these payment options are not always free: beyond four monthly payments, or when a payment is late, fees may apply, sometimes high ones. Second, taking out lots of small loans makes it hard to keep track of your overall spending. A consumer can end up repaying five or six purchases at the same time without being fully aware of it.

Until now, these offers have largely fallen outside consumer credit regulations. That will soon change: a European directive, which must be incorporated into national law by the end of 2026, will require lenders to check whether borrowers can afford to repay and to provide clear information about the total cost.

In the meantime, our association recommends a few simple habits. Before you click, ask yourself whether you would have bought the product if you had to pay for it in full upfront. Write down each due date in your diary and avoid having several instalment plans running at the same time. Finally, if you run into difficulty, do not wait for reminder letters: contact the lender or a consumer organisation promptly, as they can help you negotiate a repayment plan.`,
 cp:[
  ["Paiement fractionné","instal?ments?|buy now,? pay later|split payments?|pay later","omit","minor","Translate the title; established term: buy now, pay later / paying in instalments."],
  ["en trois ou quatre fois","(three|3) or (four|4) (instal?ments|payments|parts)","dist","major","Number of instalments must be kept."],
  ["les moins de 35 ans","under 35|under-35s|younger than 35","dist","major","Figure must be exact."],
  ["valider un panier","check ?out|checkout|confirm (your|the|an) (cart|basket|order)","dist","minor","Valider son panier = check out."],
  ["sans entamer son budget","without (eating into|denting|touching|affecting|breaking)","dist","minor","Entamer = eat into."],
  ["Le revers de la médaille","downside|other side of the coin|flip ?side|drawback","dist","minor","Idiom = the downside.",[["reverse of the medal","unid","calque","minor","Idiom: «the downside» or «the other side of the coin»."]]],
  ["au-delà de quatre mensualités","(beyond|over|more than|after) (four|4) (monthly )?(payments|instal?ments)","dist","major","Figure must be kept."],
  ["l'échéance est dépassée","late|overdue|missed|past the due date","dist","major","Échéance dépassée = payment is late."],
  ["une vision d'ensemble","overall|overview|big picture|keep track","dist","minor","Vision d'ensemble = overview."],
  ["cinq ou six achats","(five|5) or (six|6)","dist","major","Figure must be kept."],
  ["simultanément","at the same time|simultaneously|at once","omit","minor","Simultaneously."],
  ["échappaient en grande partie","largely|mostly|for the most part|to a large extent","omit","minor","«En grande partie» = largely."],
  ["crédit à la consommation","consumer (credit|lending|loans?)","dist","minor","Crédit à la consommation = consumer credit."],
  ["transposée","(incorporated|transposed|implemented|written) into (national|french) law|transposed|implemented","dist","minor","Transposer (EU law) = incorporate into national law."],
  ["d'ici fin 2026","by (the end of )?(late )?2026","dist","major","D'ici fin 2026 = by the end of 2026."],
  ["la solvabilité","afford|creditworthiness|solvency|ability to repay|credit ?worth","dist","major","Vérifier la solvabilité = check the borrower can afford to repay."],
  ["en le payant comptant","(in )?(full|cash|upfront|up front)|outright","dist","major","Payer comptant = pay in full upfront."],
  ["dans votre agenda","diary|calendar|planner","dist","minor","Agenda = diary/calendar.",[["\\bagenda\\b","dist","falsefriend","minor","Agenda (FR) = diary/planner, not agenda."]]],
  ["n'attendez pas les relances","reminders?|chas(er|ing)|follow-up|demand letters?","dist","minor","Relances = reminder letters."],
  ["un échéancier","repayment (plan|schedule)|payment (plan|schedule)|instal?ment plan","dist","minor","Échéancier = repayment plan."]
 ]},
{id:"t06",genre:"News article",domain:"Technology",diff:3,
 brief:{domain:"Technology",topic:"Artificial intelligence in public services",type:"News article on a current affairs website",purpose:"Informative",audience:"Educated non-expert reader"},
 fr:`L'intelligence artificielle s'invite dans les services publics

Rédiger une réponse à un courrier d'usager, résumer un dossier de plusieurs centaines de pages, orienter un appel vers le bon interlocuteur : depuis un an, l'administration française teste des outils d'intelligence artificielle dits « génératifs » dans une vingtaine de services. Le gouvernement en attend un gain de temps considérable pour des agents souvent débordés.

Les premiers retours sont encourageants, du moins en apparence. Selon un bilan publié en mars, les agents concernés déclarent gagner en moyenne quarante minutes par jour. Mais le rapport reconnaît aussi que près d'une réponse sur dix proposée par l'outil comportait une erreur factuelle, parfois sur des points aussi sensibles que le montant d'une allocation.

C'est précisément là que le bât blesse, selon les syndicats. Ils redoutent qu'à terme, la pression sur les effectifs ne pousse les agents à valider les propositions de la machine sans les vérifier. « L'outil ne remplace pas le discernement d'un professionnel qui connaît le terrain », insiste une représentante.

Les associations de défense des droits numériques, quant à elles, s'inquiètent du traitement des données. Les courriers des usagers contiennent fréquemment des informations sur leur santé, leurs revenus ou leur situation familiale. L'administration assure que ces données restent hébergées en France et ne servent pas à entraîner les modèles, sans toutefois publier le détail des contrats passés avec ses prestataires.

Le débat dépasse la seule question technique. Il s'agit de savoir quelle place on souhaite laisser à l'humain dans la relation entre l'État et les citoyens, en particulier pour les plus vulnérables.`,
 model:`Artificial intelligence makes its way into public services

Drafting a reply to a letter from a member of the public, summarising a file several hundred pages long, putting a call through to the right person: for the past year, the French public service has been testing so-called "generative" artificial intelligence tools in around 20 departments. The government expects them to save a considerable amount of time for staff who are often overwhelmed.

The first results are encouraging, at least on the surface. According to a review published in March, the staff involved say they save an average of 40 minutes a day. However, the report also acknowledges that almost one in ten replies suggested by the tool contained a factual error, sometimes on points as sensitive as the amount of a benefit payment.

That is exactly where the problem lies, according to the unions. They fear that, in the long run, pressure on staffing levels will push employees to approve the machine's suggestions without checking them. "The tool does not replace the judgement of a professional who knows the situation on the ground," one representative stressed.

Digital rights groups, for their part, are concerned about how data is handled. Letters from members of the public frequently contain information about their health, income or family situation. The government says the data remains stored in France and is not used to train the models, but it has not published the details of its contracts with its service providers.

The debate goes beyond the technical issue alone. The question is how much of a role we want people to keep in the relationship between the state and its citizens, especially the most vulnerable.`,
 cp:[
  ["L'intelligence artificielle s'invite","artificial intelligence|\\bai\\b","omit","minor","Translate the title."],
  ["courrier d'usager","member of the public|members of the public|user|service user|citizen|client|customer","dist","minor","Usager = member of the public / service user."],
  ["orienter un appel vers le bon interlocuteur","(put|direct|route|transfer|redirect)[^.]*(call)|(call)[^.]*(right|appropriate|correct) (person|contact|officer)","dist","minor","Direct a call to the right person."],
  ["depuis un an","(for )?the (past|last) year|for a year|over the past year|since last year","dist","major","Depuis un an + present = for the past year (still ongoing).",[["since one year|since a year","gram","calque","major","Depuis + duration = for (the past) year."]]],
  ["dits « génératifs »","so-called|known as|described as","omit","minor","«Dits» = so-called."],
  ["une vingtaine de services","(around|about|some|roughly) (20|twenty)","dist","major","Une vingtaine = about 20."],
  ["agents","staff|employees|officers|public servants|workers","dist","minor","Agents (public service) = staff/public servants.",[["\\bagents\\b","dist","falsefriend","minor","Agents (public service) = staff/officers."]]],
  ["débordés","overwhelmed|overworked|stretched|swamped|snowed under","dist","minor","Débordé = overwhelmed."],
  ["du moins en apparence","at least (on the surface|apparently|in appearance|at first glance|seemingly)","omit","minor","Keep the hedge: at least on the surface."],
  ["quarante minutes par jour","(40|forty) minutes (a|per) day","dist","major","Figure must be exact."],
  ["près d'une réponse sur dix","(almost|nearly) (one|1) in (ten|10)|(almost|nearly) 10 ?(%|per ?cent)","dist","major","Proportion must be exact."],
  ["le montant d'une allocation","(benefit|allowance|payment|welfare)","dist","major","Allocation = benefit payment.",[["\\ballocation\\b","dist","falsefriend","major","Allocation = benefit/allowance."]]],
  ["là que le bât blesse","problem|where it hurts|sticking point|catch|rub","dist","minor","Idiom = that is where the problem lies."],
  ["à terme","(in the )?long (run|term)|eventually|over time|ultimately","omit","minor","À terme = in the long run."],
  ["la pression sur les effectifs","staff(ing)? (levels|numbers|cuts)|workforce|headcount|staff","dist","minor","Effectifs = staffing levels."],
  ["valider","approve|accept|sign off|validate|rubber-stamp","dist","minor","Valider = approve."],
  ["le discernement","judg(e)?ment|discernment|discretion","dist","minor","Discernement = judgement."],
  ["qui connaît le terrain","(on the ground|in the field|first-hand|front ?line|local)","dist","minor","Connaître le terrain = know the situation on the ground."],
  ["quant à elles","for their part|meanwhile|on the other hand|as for|for its part","omit","minor","Quant à elles = for their part."],
  ["leurs revenus","income|earnings|revenue","dist","minor","Revenus = income."],
  ["sans toutefois publier","but|however|although|without (however )?publishing","omit","major","Keep the contrast: but it has not published…"],
  ["prestataires","(service )?providers|contractors|suppliers|vendors","dist","minor","Prestataires = service providers."]
 ]}
]);
