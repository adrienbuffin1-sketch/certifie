/* Certified Translator track: revision tasks (Task B). Original texts written for Certificado.
   bad = English translation containing seeded errors (NAATI uses 14 to 18 per task).
   errs: b = exact text of the error in `bad`, corr = a correct version, fix = regex of acceptable corrections,
   cat = acceptable NAATI categories, sev = minor|major, note = explanation. */
window.CT_REV=[
{id:"r01",genre:"Health brochure",domain:"Health",diff:1,
 brief:{domain:"Health",topic:"Staying safe in a heatwave",type:"Brochure from a regional health department",purpose:"Informative and persuasive",audience:"Educated non-expert reader"},
 fr:`Ola de calor: cómo protegerse

Durante una ola de calor, el cuerpo tiene que esforzarse mucho para mantener su temperatura en torno a los 37 °C. Las personas mayores, los niños pequeños y quienes padecen enfermedades del corazón son especialmente vulnerables.

Beba agua con frecuencia, aunque no tenga sed, y evite el alcohol. Coma de forma ligera, preferiblemente frutas y verduras. En las horas de más calor, entre las 12:00 y las 17:00 h, permanezca en casa con las persianas bajadas. Si su vivienda es demasiado calurosa, pase al menos dos o tres horas al día en un lugar fresco, como una biblioteca o un centro comercial con aire acondicionado.

Refrésquese con duchas frecuentes y use ropa ligera y holgada. Evite hacer ejercicio físico intenso.

Interésese por sus familiares y por los vecinos que viven solos al menos una vez al día. Muchos ayuntamientos disponen de un servicio de teleasistencia al que puede apuntarse o apuntar a un familiar.

Algunos síntomas deben ponerle en alerta: dolor de cabeza, náuseas, calambres, confusión o fiebre alta. En ese caso, llame inmediatamente al 112. Mientras llegan los servicios de emergencia, lleve a la persona a la sombra, mójele la piel y no le dé medicamentos para la fiebre, que no son eficaces en caso de golpe de calor.`,
 bad:`Heat wave: how to protect yourself

During a heat wave, the body has to make big efforts to maintain its temperature in around 37°C. The major persons, small children and those who suffer from heart illnesses are specially vulnerable.

Drink water frequently, even if you are thirsty, and avoid alcohol. Eat in a light form, preferably fruits and vegetables. In the hours of more heat, between 12:00 and 17:00 h, stay at home with the blinds raised. If your house is too hot, spend at least two hours a day in a fresh place, like a library or a commercial centre with air conditioning.

Refresh yourself with frequent showers and wear light and loose clothes. Avoid doing intense physical exercise.

Interest yourself for your family and for the neighbours who live alone at least once a week. Many town halls dispose of a teleassistance service to which you can sign up or sign up a relative.

Some symptoms must put you in alert: headache, nausea, cramps, confusion or high fever. In that case, call immediately 000. While the emergency services arrive, take the person to the shade, wet their skin and give them medicines for the fever, which are not efficient in case of heat stroke.`,
 good:`Heatwave: how to protect yourself

During a heatwave, the body has to work hard to keep its temperature at around 37°C. Older people, young children and people with heart conditions are particularly at risk.

Drink water often, even if you are not thirsty, and avoid alcohol. Eat light meals, preferably fruit and vegetables. During the hottest part of the day, between 12 noon and 5 pm, stay at home with the blinds down. If your home is too hot, spend at least two or three hours a day somewhere cool, such as a library or an air-conditioned shopping centre.

Cool down with frequent showers and wear light, loose clothing. Avoid strenuous exercise.

Check on your family and on neighbours who live alone at least once a day. Many councils offer a personal alarm service, which you can sign up to yourself or sign a relative up to.

Some symptoms are warning signs: headache, nausea, cramps, confusion or a high temperature. If this happens, call 112 immediately. While you wait for the emergency services, move the person into the shade, wet their skin and do not give them medicine for fever, as it does not work for heatstroke.`,
 errs:[
  {b:"make big efforts",corr:"work hard",fix:"work hard|make (a great|a lot of) effort|strain",cat:["unid"],sev:"minor",note:"«Esforzarse mucho» = work hard; «make big efforts» is a calque."},
  {b:"in around 37°C",corr:"at around 37°C",fix:"at (around|about) 37",cat:["gram"],sev:"minor",note:"English: keep its temperature at around 37°C."},
  {b:"The major persons",corr:"Older people",fix:"older people|the elderly|seniors|older adults",cat:["dist"],sev:"major",note:"«Personas mayores» = older people; «major persons» is meaningless."},
  {b:"heart illnesses",corr:"heart conditions",fix:"heart (conditions|disease|problems)",cat:["unid"],sev:"minor",note:"Natural English: heart conditions / heart disease."},
  {b:"specially vulnerable",corr:"particularly at risk",fix:"particularly|especially",cat:["unid","gram"],sev:"minor",note:"«Especialmente» = particularly / especially."},
  {b:"even if you are thirsty",corr:"even if you are not thirsty",fix:"(are not|aren't|don't feel|do not feel) thirsty",cat:["dist","omit"],sev:"major",note:"The negation «no tenga sed» was lost: the advice is reversed."},
  {b:"Eat in a light form",corr:"Eat light meals",fix:"eat (light|lightly)|light meals",cat:["unid"],sev:"minor",note:"«Coma de forma ligera» = eat light meals."},
  {b:"In the hours of more heat",corr:"During the hottest part of the day",fix:"hottest",cat:["unid"],sev:"minor",note:"Natural English: the hottest part of the day."},
  {b:"between 12:00 and 17:00 h",corr:"between 12 noon and 5 pm",fix:"12 ?(noon|pm|midday).{0,8}5 ?pm|midday.{0,8}5 ?pm",cat:["punct"],sev:"minor",note:"Use English time format: 12 noon to 5 pm."},
  {b:"the blinds raised",corr:"the blinds down",fix:"blinds (down|closed|drawn|lowered)",cat:["dist"],sev:"major",note:"«Persianas bajadas» = blinds down; the meaning is reversed."},
  {b:"at least two hours",corr:"at least two or three hours",fix:"two or three hours|2 or 3 hours|2–3 hours|2-3 hours",cat:["omit"],sev:"minor",note:"«Dos o tres horas»: part of the range was left out."},
  {b:"a fresh place",corr:"somewhere cool",fix:"(somewhere|a place that is|a) cool",cat:["unid","dist"],sev:"minor",note:"«Fresco» = cool here, not fresh."},
  {b:"a commercial centre with air conditioning",corr:"an air-conditioned shopping centre",fix:"shopping (centre|center|mall)",cat:["unid"],sev:"minor",note:"«Centro comercial» = shopping centre."},
  {b:"Interest yourself for",corr:"Check on",fix:"check on|keep in touch with|look in on|contact",cat:["unid"],sev:"minor",note:"«Interesarse por» = check on."},
  {b:"at least once a week",corr:"at least once a day",fix:"once a day|daily|every day",cat:["dist"],sev:"major",note:"«Al día» = a day; frequency changed."},
  {b:"dispose of",corr:"offer / have",fix:"offer|have|provide|run",cat:["dist"],sev:"major",note:"«Disponer de» = have / offer, not «dispose of» (throw away)."},
  {b:"call immediately 000",corr:"call 112 immediately",fix:"112",cat:["dist","add"],sev:"major",note:"Keep the number in the source (112). Do not localise emergency numbers."},
  {b:"give them medicines for the fever",corr:"do not give them medicine for fever",fix:"(do not|don't|never) give",cat:["dist","omit"],sev:"major",note:"The negation was lost: the instruction is reversed and dangerous."},
  {b:"not efficient",corr:"not effective / do not work",fix:"not effective|ineffective|do(es)? not work|don't work",cat:["dist"],sev:"minor",note:"«Eficaz» = effective."}
 ]},
{id:"r02",genre:"Council news",domain:"Government",diff:2,
 brief:{domain:"Government",topic:"New public library opening",type:"Local council news release",purpose:"Informative",audience:"Educated non-expert reader"},
 fr:`Abre sus puertas la nueva biblioteca municipal

La nueva biblioteca municipal Gloria Fuertes abrirá al público el próximo lunes, 3 de marzo, tras dos años de obras. El edificio, situado junto a la estación de autobuses, cuenta con 2.400 metros cuadrados distribuidos en tres plantas.

Además de una colección de más de 60.000 libros, la biblioteca dispone de una sala de estudio con 120 puestos, un espacio infantil y un aula de informática. Los usuarios podrán llevarse en préstamo hasta seis documentos durante quince días.

El horario será de lunes a viernes, de 9:00 a 21:00 h, y los sábados por la mañana. Durante la época de exámenes, la sala de estudio permanecerá abierta hasta la medianoche.

La obra ha costado 5,2 millones de euros, financiados en un 60 % con fondos europeos. Según el alcalde, el objetivo es que la biblioteca se convierta en un punto de encuentro para todos los vecinos, y no solo para los estudiantes.

Para obtener el carné de lectura basta con presentar un documento de identidad. Los menores de 14 años necesitan la autorización de sus padres o tutores.`,
 bad:`The new municipal library opens its doors

The new municipal library Gloria Fuertes will open to the public the next Monday, 3 of March, after two years of works. The building, situated next to the bus station, counts with 2.400 square metres distributed in three plants.

Apart from a collection of more than 6,000 books, the library disposes of a study room with 120 positions, an infantile space and a classroom of informatics. The users will be able to take in loan up to six documents during fifteen days.

The timetable will be from Monday to Friday, from 9:00 to 21:00 h, and the Saturdays in the afternoon. During the period of exams, the study room will remain open until midday.

The work has cost 5,2 million euros, financed in 60 % with European funds. According to the mayor, the objective is that the library becomes a meeting point for all the neighbours, and not only for the students.

To obtain the reading card, it is enough to present an identity document. The minors of 14 years need the authorisation of their parents or tutors.`,
 good:`New public library opens

The new Gloria Fuertes public library will open to the public next Monday, 3 March, after two years of construction. The building, next to the bus station, has 2,400 square metres of floor space over three floors.

As well as a collection of more than 60,000 books, the library has a study room with 120 desks, a children's area and a computer room. Members can borrow up to six items for two weeks.

Opening hours will be 9 am to 9 pm Monday to Friday, and Saturday mornings. During exam periods, the study room will stay open until midnight.

The project cost €5.2 million, 60% of which was funded by the European Union. According to the mayor, the aim is for the library to become a meeting place for all residents, not just students.

To get a library card, you just need to show ID. Children under 14 need permission from a parent or guardian.`,
 errs:[
  {b:"the next Monday, 3 of March",corr:"next Monday, 3 March",fix:"next monday,? 3 march|monday,? 3 march",cat:["gram","punct"],sev:"minor",note:"English date: next Monday, 3 March."},
  {b:"two years of works",corr:"two years of construction",fix:"construction|building work|work\\b",cat:["unid"],sev:"minor",note:"«Obras» = construction / building work."},
  {b:"counts with",corr:"has",fix:"\\bhas\\b",cat:["unid","gram"],sev:"minor",note:"«Contar con» = have."},
  {b:"2.400",corr:"2,400",fix:"2,400|2 400|2400",cat:["punct"],sev:"minor",note:"Spanish thousands point: use a comma in English."},
  {b:"three plants",corr:"three floors",fix:"(three|3) (floors|storeys|levels)",cat:["dist"],sev:"major",note:"«Plantas» = floors here."},
  {b:"6,000 books",corr:"60,000 books",fix:"60,000|60 000|60000|sixty thousand",cat:["dist"],sev:"major",note:"Number copied wrongly: 60,000."},
  {b:"disposes of",corr:"has",fix:"\\bhas\\b|offers|includes",cat:["dist"],sev:"major",note:"«Dispone de» = has; «dispose of» means get rid of."},
  {b:"120 positions",corr:"120 desks / seats",fix:"desks|seats|places|study spaces",cat:["unid"],sev:"minor",note:"«Puestos» in a study room = desks / seats."},
  {b:"an infantile space",corr:"a children's area",fix:"children'?s",cat:["dist","reg"],sev:"minor",note:"«Infantil» = children's; «infantile» means childish."},
  {b:"a classroom of informatics",corr:"a computer room",fix:"computer (room|lab)",cat:["unid"],sev:"minor",note:"«Aula de informática» = computer room."},
  {b:"during fifteen days",corr:"for two weeks",fix:"for (two weeks|a fortnight|15 days|fifteen days)",cat:["gram","unid"],sev:"minor",note:"Duration takes «for»; «quince días» = two weeks."},
  {b:"from 9:00 to 21:00 h",corr:"9 am to 9 pm",fix:"9 ?am.{0,6}9 ?pm",cat:["punct"],sev:"minor",note:"Use English time format."},
  {b:"the Saturdays in the afternoon",corr:"Saturday mornings",fix:"saturday mornings?|on saturday morning",cat:["dist"],sev:"major",note:"«Por la mañana» = in the morning."},
  {b:"until midday",corr:"until midnight",fix:"midnight",cat:["dist"],sev:"major",note:"«Medianoche» = midnight."},
  {b:"5,2 million euros",corr:"€5.2 million",fix:"5\\.2 million",cat:["punct"],sev:"minor",note:"Decimal comma → decimal point."},
  {b:"the neighbours",corr:"residents",fix:"residents|locals|the community|local people",cat:["unid"],sev:"minor",note:"«Vecinos» in council texts = residents."},
  {b:"The minors of 14 years",corr:"Children under 14",fix:"under 14|under the age of 14|aged under 14|younger than 14",cat:["dist"],sev:"major",note:"«Menores de 14 años» = under 14."},
  {b:"tutors",corr:"guardians",fix:"guardians?",cat:["dist"],sev:"minor",note:"«Tutores» (legal) = guardians."}
 ]},
{id:"r03",genre:"Business news",domain:"Business",diff:3,
 brief:{domain:"Business",topic:"Family olive oil company expands abroad",type:"Business section of a regional newspaper",purpose:"Informative",audience:"Educated non-expert reader"},
 fr:`Una almazara familiar conquista el mercado asiático

La almazara Hermanos Ruiz, fundada en 1952 en un pequeño pueblo de Jaén, exportará este año el 70 % de su producción, principalmente a Japón y Corea del Sur. Hace apenas una década, la empresa vendía casi todo su aceite en el mercado nacional.

El cambio llegó con la tercera generación. Lucía Ruiz, que estudió Administración de Empresas en Londres, decidió apostar por un aceite de oliva virgen extra de alta calidad, envasado en botellas pequeñas y con un diseño cuidado. «Nuestros clientes asiáticos no buscan cantidad, sino un producto con historia», explica.

La empresa, que emplea a 35 personas de forma permanente y a más de 100 durante la campaña de recogida, prevé facturar este ejercicio 8,4 millones de euros, un 25 % más que el año anterior.

No todo han sido buenas noticias. La sequía de los dos últimos años redujo la cosecha casi a la mitad y disparó los precios. Aun así, Ruiz se muestra optimista: la empresa ha invertido en un sistema de riego por goteo y ha firmado acuerdos con otros agricultores de la zona para garantizar el suministro.`,
 bad:`A family oil mill conquers the Asian market

The oil mill Hermanos Ruiz, founded in 1952 in a small town of Jaén, will export this year the 70 % of its production, mainly to Japan and North Korea. Barely a decade ago, the company sold almost all its oil in the national market.

The change arrived with the second generation. Lucía Ruiz, who studied Business Administration in London, decided to bet for a high-quality extra virgin olive oil, packed in small bottles and with a careful design. "Our Asian clients don't look for quantity, but a product with history", she explains.

The company, which employs 35 persons in a permanent way and more than 100 during the collection campaign, foresees to invoice this exercise 8,4 million euros, a 25 % more than the previous year.

Not all have been good news. The drought of the last two years reduced the harvest almost to the half and shot the prices. Even so, Ruiz shows herself optimist: the company has invested in a drip irrigation system and has signed agreements with other farmers of the zone to guarantee the supply.`,
 good:`Family olive oil mill wins over Asian market

The Hermanos Ruiz olive oil mill, founded in 1952 in a small town in Jaén, will export 70% of its production this year, mainly to Japan and South Korea. Just ten years ago, the company sold almost all of its oil in Spain.

The change came with the third generation. Lucía Ruiz, who studied business administration in London, decided to focus on high-quality extra virgin olive oil in small, well-designed bottles. "Our Asian customers are not looking for quantity, but for a product with a story behind it," she explains.

The company, which has 35 permanent employees and more than 100 during the harvest season, expects turnover of €8.4 million this financial year, up 25% on the previous year.

It has not all been good news. Two years of drought almost halved the harvest and sent prices soaring. Even so, Ruiz is optimistic: the company has invested in drip irrigation and signed agreements with other local farmers to secure its supply.`,
 errs:[
  {b:"A family oil mill",corr:"Family olive oil mill",fix:"olive oil mill|olive mill",cat:["omit","dist"],sev:"minor",note:"«Almazara» = olive oil mill; «oil mill» alone is vague."},
  {b:"in a small town of Jaén",corr:"in a small town in Jaén",fix:"town in jaén|town in jaen",cat:["gram"],sev:"minor",note:"Preposition: in Jaén."},
  {b:"the 70 %",corr:"70%",fix:"(?<!the )70 ?%",cat:["gram","punct"],sev:"minor",note:"No article before a percentage; no space before %."},
  {b:"North Korea",corr:"South Korea",fix:"south korea",cat:["dist"],sev:"major",note:"«Corea del Sur» = South Korea."},
  {b:"in the national market",corr:"in Spain / on the domestic market",fix:"in spain|domestic market|home market|local market",cat:["unid"],sev:"minor",note:"«Mercado nacional» = the domestic market / Spain."},
  {b:"second generation",corr:"third generation",fix:"third generation",cat:["dist"],sev:"major",note:"«Tercera» = third."},
  {b:"to bet for",corr:"to focus on",fix:"focus on|invest in|concentrate on|opt for|go for",cat:["unid"],sev:"minor",note:"«Apostar por» = focus on / go for."},
  {b:"with a careful design",corr:"well-designed",fix:"well[- ]designed|attractive (design|packaging)|stylish",cat:["unid"],sev:"minor",note:"«Diseño cuidado» = well designed."},
  {b:"a product with history",corr:"a product with a story behind it",fix:"(a )?story|heritage|history behind",cat:["unid"],sev:"minor",note:"«Con historia» = with a story behind it."},
  {b:"35 persons in a permanent way",corr:"35 permanent employees",fix:"35 permanent|35 people (on a )?permanent",cat:["unid"],sev:"minor",note:"Natural English: 35 permanent employees."},
  {b:"the collection campaign",corr:"the harvest season",fix:"harvest|picking season",cat:["dist","unid"],sev:"minor",note:"«Campaña de recogida» = harvest season."},
  {b:"foresees to invoice this exercise",corr:"expects turnover this financial year",fix:"(expects|forecasts|projects).{0,20}(turnover|revenue|sales)|financial year",cat:["unid","dist"],sev:"major",note:"«Facturar» = turnover; «ejercicio» = financial year."},
  {b:"8,4 million euros",corr:"€8.4 million",fix:"8\\.4 million",cat:["punct"],sev:"minor",note:"Decimal comma → decimal point."},
  {b:"a 25 % more",corr:"up 25%",fix:"up 25|25 ?% (more|up|higher|increase)",cat:["gram"],sev:"minor",note:"«Un 25 % más» = up 25% / 25% more."},
  {b:"reduced the harvest almost to the half",corr:"almost halved the harvest",fix:"halved|by (almost|nearly) half|cut the harvest (almost|nearly) in half",cat:["unid"],sev:"minor",note:"Natural English: almost halved."},
  {b:"shot the prices",corr:"sent prices soaring",fix:"soar|skyrocket|shot up|rise sharply|surge",cat:["unid","dist"],sev:"minor",note:"«Disparar los precios» = send prices soaring."},
  {b:"Ruiz shows herself optimist",corr:"Ruiz is optimistic",fix:"is optimistic|remains optimistic",cat:["gram","unid"],sev:"minor",note:"«Mostrarse optimista» = be optimistic."},
  {b:"of the zone",corr:"local",fix:"local|in the area|in the region",cat:["unid"],sev:"minor",note:"«De la zona» = local."}
 ]}
];
