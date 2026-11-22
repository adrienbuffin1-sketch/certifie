/* Certified Translator track: translation texts (Task A), Spanish → English. Original texts written for Certificado, not NAATI material.
   cp: [source phrase, regex of acceptable renderings, NAATI category if missed, minor|major, note, optional traps [[regex, cat, tag, sev, note]]] */
window.CT_TEXTS=(window.CT_TEXTS||[]).concat([
{id:"t01",genre:"Government information",domain:"Health",diff:1,
 brief:{domain:"Health",topic:"Seasonal flu vaccination",type:"Public health information page",purpose:"Informative",audience:"Educated non-expert reader"},
 fr:`Gripe estacional: por qué vacunarse ya

Cada invierno, la gripe afecta a entre uno y dos millones de personas en nuestro país. Aunque la mayoría se recupera en una semana, la enfermedad puede provocar complicaciones graves en las personas más vulnerables, sobre todo en los mayores de 65 años, las embarazadas y quienes padecen enfermedades crónicas.

La campaña de vacunación comienza el 15 de octubre y se prolonga hasta el 31 de enero. Conviene no esperar a los primeros casos: la vacuna tarda unos quince días en hacer efecto. Para los grupos prioritarios es totalmente gratuita y puede pedirse cita en el centro de salud o a través de la aplicación del servicio sanitario.

La vacuna la administran el personal de enfermería y, en algunas comunidades, también los farmacéuticos. Los efectos secundarios suelen ser leves: un ligero dolor en la zona de la inyección o unas décimas de fiebre, que desaparecen en uno o dos días.

La vacunación no protege al cien por cien, pero reduce notablemente el riesgo de ingreso hospitalario. Debe repetirse cada año, ya que los virus que circulan cambian de una temporada a otra.

Por último, las medidas de higiene siguen siendo imprescindibles: lavarse las manos con frecuencia, toser en el codo y usar mascarilla si se tienen síntomas. Estos hábitos sencillos también frenan la transmisión de otros virus invernales.`,
 model:`Seasonal flu: why you should get vaccinated now

Every winter, flu affects between one and two million people in this country. While most people recover within a week, the illness can cause serious complications in those most at risk, particularly people over 65, pregnant women and people with chronic illnesses.

The vaccination campaign starts on 15 October and runs until 31 January. It is best not to wait for the first cases: the vaccine takes about two weeks to work. It is completely free for priority groups, and you can book an appointment at your local health centre or through the health service app.

The vaccine is given by nurses and, in some regions, also by pharmacists. Side effects are usually mild: slight pain where the injection was given or a slight temperature, which go away within a day or two.

Vaccination does not give 100% protection, but it significantly reduces the risk of being admitted to hospital. It needs to be repeated every year, because the viruses in circulation change from one season to the next.

Finally, hygiene measures are still essential: wash your hands often, cough into your elbow and wear a mask if you have symptoms. These simple habits also slow the spread of other winter viruses.`,
 cp:[
  ["Gripe estacional","seasonal (flu|influenza)","omit","minor","The title must be translated too."],
  ["entre uno y dos millones","(one|1) (and|to|-|–) ?(two|2) million","dist","major","The number range must be exact."],
  ["Aunque la mayoría se recupera","while most|although most|most people recover|most recover","dist","minor","«Aunque» is concessive: while / although."],
  ["embarazadas","pregnant","dist","major","Embarazada = pregnant, a classic false friend.",[["embarrass","dist","falsefriend","major","«Embarazada» means pregnant, not embarrassed."]]],
  ["el 15 de octubre","15 october|october 15","dist","major","Date must be exact."],
  ["hasta el 31 de enero","31 january|january 31","dist","major","Date must be exact."],
  ["unos quince días","two weeks|fortnight|15 days|fifteen days","dist","major","«Quince días» = two weeks.",[["\\bfifteen days\\b","unid","calque","minor","«Quince días» is idiomatically «two weeks»."]]],
  ["totalmente gratuita","free","dist","major","Gratuita = free of charge.",[["gratuitous","dist","falsefriend","major","«Gratuito» = free; «gratuitous» means unjustified."]]],
  ["centro de salud","health (centre|center|clinic)|gp|clinic","omit","minor","Centro de salud = local health centre / GP clinic."],
  ["efectos secundarios","side effects?","dist","minor","Efectos secundarios = side effects."],
  ["unas décimas de fiebre","(slight|mild|low|low-grade) (fever|temperature)","dist","minor","«Unas décimas de fiebre» = a slight temperature."],
  ["ingreso hospitalario","(admitted|admission|being admitted) (to|into)? ?hospital|hospitali[sz]","dist","major","Ingreso hospitalario = hospital admission, not income.",[["\\bincome\\b","dist","falsefriend","major","«Ingreso hospitalario» = hospital admission."]]],
  ["mascarilla","mask","omit","minor","Mascarilla = mask."]
 ]},
{id:"t02",genre:"News report",domain:"Housing",diff:2,
 brief:{domain:"Housing",topic:"Rent cap for main homes",type:"National newspaper article",purpose:"Informative",audience:"Educated non-expert reader"},
 fr:`El Gobierno pone tope a la subida de los alquileres

El Consejo de Ministros aprobó ayer un real decreto que limita al 3 % la actualización anual de los alquileres de vivienda habitual. La medida, que entrará en vigor el 1 de enero, se aplicará tanto a los contratos nuevos como a las renovaciones.

Según los datos del Ministerio de Vivienda, el precio medio del alquiler ha aumentado un 11 % en los dos últimos años en las ciudades de más de 100.000 habitantes. En algunos barrios de Madrid y Barcelona, el incremento supera el 20 %.

Las asociaciones de inquilinos han recibido la noticia con satisfacción, aunque consideran que el límite llega tarde. «Muchas familias ya destinan más de la mitad de sus ingresos a pagar el alquiler», señaló la portavoz de una de ellas.

Los propietarios, por su parte, advierten de que el tope podría reducir la oferta de pisos en alquiler de larga duración. Algunos pequeños arrendadores, que dependen de esa renta para completar su pensión, estudian vender sus viviendas o destinarlas al alquiler turístico.

El decreto también obliga a devolver la fianza en un plazo máximo de treinta días desde la entrega de las llaves. Si el arrendador no lo hace, deberá abonar intereses de demora al inquilino.`,
 model:`Government caps rent increases

Cabinet yesterday approved a royal decree capping annual rent increases on people's main homes at 3%. The measure, which comes into force on 1 January, will apply to both new leases and renewals.

According to Ministry of Housing figures, average rents have risen by 11% over the past two years in cities with more than 100,000 residents. In some neighbourhoods in Madrid and Barcelona, the increase is more than 20%.

Tenants' associations have welcomed the news, although they say the cap has come too late. "Many families already spend more than half of their income on rent," said a spokeswoman for one association.

Landlords, for their part, warn that the cap could reduce the number of properties available for long-term rental. Some small landlords who rely on the rental income to top up their pension are considering selling their properties or turning them into holiday rentals.

The decree also requires bonds to be returned within thirty days of the keys being handed back. Landlords who fail to do so will have to pay the tenant interest on the late payment.`,
 cp:[
  ["pone tope","cap|limit","omit","minor","Title: «poner tope» = cap."],
  ["El Consejo de Ministros","cabinet|council of ministers|government","omit","minor","Consejo de Ministros = Cabinet."],
  ["real decreto","royal decree|decree|regulation","omit","minor","Real decreto = royal decree."],
  ["al 3 %","3 ?%|three per ?cent","dist","major","Figure must be exact."],
  ["vivienda habitual","main (home|residence)|primary (home|residence)|principal (home|residence)","dist","minor","Vivienda habitual = main home."],
  ["el 1 de enero","1 january|january 1","dist","major","Date must be exact."],
  ["un 11 %","11 ?%|eleven per ?cent","dist","major","Figure must be exact."],
  ["más de 100.000 habitantes","100,000|100 000|100000|hundred thousand","dist","major","100.000 = 100,000 in English.",[["100\\.000","punct","numbers","minor","Spanish thousands point: write 100,000."]]],
  ["supera el 20 %","20 ?%|twenty per ?cent","dist","major","Figure must be exact."],
  ["la mitad de sus ingresos","half (of )?their (income|earnings)","dist","major","Ingresos = income."],
  ["Los propietarios","landlords|owners|property owners","dist","minor","Propietarios = landlords here."],
  ["esa renta","income|rent","dist","minor","«Renta» here = rental income."],
  ["alquiler turístico","holiday (rental|let)s?|short[- ]term (rental|let)s?|tourist (rental|accommodation)","dist","minor","Alquiler turístico = holiday rental."],
  ["la fianza","bond|deposit","dist","major","Fianza = bond / security deposit.",[["\\bbail\\b","dist","falsefriend","major","In a lease, «fianza» = bond, not bail."]]],
  ["treinta días","thirty days|30 days","dist","major","Figure must be exact."],
  ["intereses de demora","interest|late[- ]payment","omit","minor","Intereses de demora = late-payment interest."]
 ]},
{id:"t03",genre:"Opinion",domain:"Education",diff:2,
 brief:{domain:"Education",topic:"Mobile phones in schools",type:"Opinion column in a regional newspaper",purpose:"Persuasive",audience:"Educated non-expert reader"},
 fr:`Prohibir el móvil en clase no basta

Desde este curso, los alumnos de Primaria y de la ESO no pueden utilizar el teléfono móvil en el centro escolar. La medida, aprobada por la mayoría de las comunidades autónomas, cuenta con el apoyo de muchas familias, cansadas de ver a sus hijos pegados a una pantalla. Sin embargo, sería un error pensar que una prohibición resolverá por sí sola el problema.

Los adolescentes pasan de media más de cuatro horas diarias conectados, y la mayor parte de ese tiempo transcurre fuera del colegio: por la tarde, por la noche y durante el fin de semana. Retirar el móvil de las aulas puede mejorar la concentración, pero no les enseña a gestionar su uso cuando nadie los vigila.

Lo que hace falta es educación digital. Los jóvenes tienen que aprender a reconocer un bulo, a proteger sus datos personales y a desconectar a tiempo. Y los adultos debemos predicar con el ejemplo: es difícil pedir a un niño que deje el teléfono durante la cena si sus padres no lo sueltan ni un momento.

Por otra parte, la tecnología no es el enemigo. Bien utilizada, permite acceder a recursos de gran calidad y facilita el aprendizaje de los alumnos con dificultades. Prohibir es fácil; enseñar a usar con criterio exige tiempo, formación del profesorado y medios. Ahí es donde deberían centrarse ahora los esfuerzos.`,
 model:`Banning phones in class is not enough

From this school year, primary and lower secondary students are not allowed to use their mobile phones at school. The measure, approved by most of the regional governments, has the support of many families who are tired of seeing their children glued to a screen. However, it would be a mistake to think that a ban will solve the problem on its own.

On average, teenagers spend more than four hours a day online, and most of that time is outside school: in the afternoon, in the evening and at the weekend. Taking phones out of classrooms may improve concentration, but it does not teach young people how to manage their use when nobody is watching.

What is needed is digital education. Young people need to learn to recognise fake news, protect their personal data and know when to switch off. And we adults must lead by example: it is hard to ask a child to put their phone away at dinner if their parents never let go of theirs.

Moreover, technology is not the enemy. Used well, it gives access to high-quality resources and makes learning easier for students who struggle. Banning is easy; teaching students to use technology wisely takes time, teacher training and resources. That is where the effort should now go.`,
 cp:[
  ["no basta","not enough|isn't enough|is insufficient","dist","minor","«No basta» = is not enough."],
  ["Desde este curso","(this|the current) (school|academic) year","dist","minor","«Curso» = school year, not course.",[["this course","dist","falsefriend","minor","«Curso» here = school year."]]],
  ["Primaria y de la ESO","primary","omit","minor","Explain ESO: lower / compulsory secondary."],
  ["comunidades autónomas","region|autonomous communit|state","omit","minor","Comunidades autónomas = regions / regional governments."],
  ["Sin embargo","however|but|yet","omit","minor","Keep the contrast."],
  ["más de cuatro horas diarias","(more than|over) (four|4) hours (a|per|each) day","dist","major","Figure and frequency must be exact."],
  ["la mayor parte","most","dist","minor","«La mayor parte» = most."],
  ["un bulo","fake news|hoax|misinformation|false information|disinformation","dist","major","Bulo = hoax / fake news."],
  ["predicar con el ejemplo","lead by example|set an example|set a good example","unid","minor","Idiom: lead by example.",[["preach (with|by) (the )?example","unid","calque","minor","Calque: use «lead by example»."]]],
  ["Por otra parte","moreover|also|on the other hand|furthermore|besides","omit","minor","Connector must be kept."],
  ["con dificultades","struggl|difficult|learning difficult|need (extra )?(help|support)","dist","minor","Alumnos con dificultades = students who struggle."],
  ["formación del profesorado","teacher training|training (for|of) teachers","dist","major","Formación = training.",[["formation","dist","falsefriend","major","«Formación» = training."]]]
 ]},
{id:"t04",genre:"Consumer information",domain:"Finance",diff:2,
 brief:{domain:"Finance",topic:"Bank phone scams",type:"Bank customer information leaflet",purpose:"Informative and persuasive",audience:"Educated non-expert reader"},
 fr:`Cómo protegerse de las estafas telefónicas

En los últimos meses ha aumentado de forma preocupante el número de clientes que reciben llamadas o mensajes de personas que se hacen pasar por empleados de su banco. El objetivo es siempre el mismo: obtener las claves de acceso a la banca en línea o convencer a la víctima de que realice una transferencia.

Los estafadores suelen crear una sensación de urgencia. Afirman que se ha detectado un movimiento sospechoso en la cuenta y que es necesario actuar de inmediato para bloquearlo. En muchos casos, el número que aparece en la pantalla coincide con el de la entidad, lo que hace el engaño más creíble.

Recuerde que su banco nunca le pedirá por teléfono, correo electrónico o SMS sus contraseñas, el código PIN ni los códigos de verificación que recibe en el móvil. Tampoco le pedirá que traslade su dinero a una «cuenta segura».

Si recibe una llamada de este tipo, cuelgue y llame usted mismo al número que figura en el reverso de su tarjeta. Si ya ha facilitado algún dato, bloquee la tarjeta cuanto antes desde la aplicación y presente una denuncia ante la policía. Cuanto antes actúe, más posibilidades tendrá de recuperar el dinero.`,
 model:`How to protect yourself from phone scams

In recent months there has been a worrying increase in the number of customers receiving calls or messages from people pretending to be bank staff. The aim is always the same: to obtain the login details for online banking or to persuade the victim to make a transfer.

Scammers usually create a sense of urgency. They claim that suspicious activity has been detected on the account and that immediate action is needed to stop it. In many cases, the number that appears on the screen matches the bank's own number, which makes the scam more convincing.

Remember that your bank will never ask you for your passwords, PIN or the verification codes sent to your mobile, whether by phone, email or text message. Nor will it ever ask you to move your money to a "safe account".

If you receive a call like this, hang up and call the number on the back of your card yourself. If you have already given out any details, block your card as soon as possible in the app and report the matter to the police. The sooner you act, the better your chances of getting your money back.`,
 cp:[
  ["estafas telefónicas","(phone|telephone) (scam|fraud)","dist","minor","Estafa = scam."],
  ["En los últimos meses","(recent|past|last few) months","dist","minor","Time reference must be kept."],
  ["se hacen pasar por","pretend|posing as|pose as|impersonat|claiming to be","dist","major","Hacerse pasar por = pretend to be / pose as."],
  ["las claves de acceso","login|password|access (code|detail)|credential","dist","minor","Claves de acceso = login details."],
  ["realice una transferencia","make a (bank )?transfer|transfer (money|funds)","dist","major","Realizar = make / carry out.",[["reali[sz]e a transfer","dist","falsefriend","major","«Realizar» = make / carry out, not realise."]]],
  ["movimiento sospechoso","suspicious (activity|transaction|movement)","dist","major","Movimiento = transaction / activity."],
  ["la entidad","(the )?bank('s)?|institution","dist","minor","«Entidad» here = the bank."],
  ["nunca le pedirá","never (ask|request)","dist","major","Negation must be kept."],
  ["SMS","text|sms","omit","minor","SMS = text message."],
  ["cuelgue","hang up","dist","major","Colgar = hang up."],
  ["en el reverso de su tarjeta","back of (your|the) card","dist","minor","Reverso = back."],
  ["presente una denuncia","report (it|this|the matter|the scam)? ?to the police|police report|make a report","dist","major","Denuncia = police report.",[["\\bdenounce","dist","falsefriend","major","«Presentar una denuncia» = report to the police."]]]
 ]},
{id:"t05",genre:"Popular science",domain:"Environment",diff:3,
 brief:{domain:"Environment",topic:"Drought and water management",type:"Feature article in a general-interest magazine",purpose:"Informative",audience:"Educated non-expert reader"},
 fr:`La sequía obliga a repensar el uso del agua

Los embalses de la cuenca se encuentran al 18 % de su capacidad, el nivel más bajo desde que existen registros. Tras tres años de lluvias escasas y veranos cada vez más calurosos, los expertos coinciden en que no se trata de un episodio pasajero, sino de un anticipo de lo que vendrá.

La agricultura consume alrededor del 80 % del agua disponible en la región. Muchos agricultores han modernizado sus sistemas de riego y han pasado del riego por inundación al goteo, lo que permite ahorrar hasta un 40 % de agua. Sin embargo, ese ahorro se ha utilizado con frecuencia para ampliar la superficie cultivada, de modo que el consumo total apenas ha disminuido.

En las ciudades, las pérdidas en la red de distribución siguen siendo elevadas: en algunos municipios, uno de cada cuatro litros se pierde por fugas antes de llegar al grifo. Renovar las tuberías es caro, pero los técnicos insisten en que es la inversión más rentable a largo plazo.

Otras soluciones, como la desalinización o la reutilización de aguas residuales depuradas, ganan terreno, aunque requieren mucha energía. Para los científicos, la clave está en combinar todas las medidas y, sobre todo, en asumir que el agua es un recurso limitado.`,
 model:`Drought forces a rethink of water use

Reservoirs in the river basin are at 18% of capacity, the lowest level since records began. After three years of low rainfall and increasingly hot summers, experts agree that this is not a passing episode but a sign of things to come.

Agriculture uses around 80% of the water available in the region. Many farmers have modernised their irrigation systems, switching from flood irrigation to drip irrigation, which saves up to 40% of water. However, these savings have often been used to expand the area under cultivation, so total consumption has barely fallen.

In cities, losses in the distribution network are still high: in some towns, one in every four litres is lost through leaks before it reaches the tap. Replacing pipes is expensive, but engineers insist it is the most cost-effective investment in the long term.

Other solutions, such as desalination and the reuse of treated wastewater, are gaining ground, although they require a great deal of energy. For scientists, the key is to combine all these measures and, above all, to accept that water is a finite resource.`,
 cp:[
  ["La sequía","drought","omit","minor","Title must be translated."],
  ["al 18 % de su capacidad","18 ?%","dist","major","Figure must be exact."],
  ["desde que existen registros","since records began|on record|ever recorded","dist","minor","Fixed expression: since records began."],
  ["no se trata de un episodio pasajero","not (a )?(passing|temporary|one-off)","dist","major","Negation and meaning must be kept."],
  ["alrededor del 80 %","80 ?%","dist","major","Figure must be exact."],
  ["riego por inundación al goteo","drip","dist","minor","Goteo = drip irrigation."],
  ["hasta un 40 %","40 ?%","dist","major","Figure must be exact."],
  ["Sin embargo","however|but|yet","omit","minor","Keep the contrast."],
  ["apenas ha disminuido","barely|hardly|scarcely|only slightly","dist","major","«Apenas» = barely: the meaning flips if left out."],
  ["uno de cada cuatro litros","one (in|out of) (every )?four|25 ?%|a quarter","dist","major","Proportion must be exact."],
  ["la inversión más rentable","cost[- ]effective|best (value|return)|most profitable","dist","minor","Rentable = cost-effective here."],
  ["aguas residuales depuradas","(treated|purified|recycled) (waste ?water|sewage)","dist","minor","Aguas residuales depuradas = treated wastewater."],
  ["un recurso limitado","(finite|limited|scarce) resource","dist","minor","Recurso limitado = finite resource."]
 ]},
{id:"t06",genre:"Government information",domain:"Government",diff:3,
 brief:{domain:"Government",topic:"Digital certificate for online government services",type:"Government agency web page",purpose:"Informative",audience:"Educated non-expert reader"},
 fr:`El certificado digital: qué es y cómo obtenerlo

El certificado digital es un documento electrónico que permite identificarse en internet con las mismas garantías que el documento nacional de identidad. Con él se pueden realizar cientos de trámites sin desplazarse: presentar la declaración de la renta, solicitar una ayuda, consultar el historial médico o pedir un certificado de empadronamiento.

Para obtenerlo, el ciudadano debe solicitarlo en la página web de la Fábrica Nacional de Moneda y Timbre y, a continuación, acreditar su identidad en una oficina de registro, como un ayuntamiento o una delegación de Hacienda. En esa visita es imprescindible presentar el DNI o el NIE en vigor y el código de solicitud recibido por correo electrónico.

Una vez verificada la identidad, el certificado puede descargarse en el mismo ordenador desde el que se solicitó. Es gratuito y tiene una validez de cuatro años. Antes de que caduque, el titular puede renovarlo en línea sin necesidad de volver a la oficina.

Conviene guardar una copia de seguridad protegida con contraseña y no instalarlo en equipos compartidos. Si se pierde el dispositivo o se sospecha que alguien ha accedido al certificado, hay que revocarlo inmediatamente por teléfono o a través de la web.`,
 model:`Digital certificates: what they are and how to get one

A digital certificate is an electronic document that lets you prove your identity online with the same level of security as a national identity card. You can use it to complete hundreds of procedures without leaving home: lodging your income tax return, applying for a benefit, viewing your medical records or requesting a residence registration certificate.

To get one, you need to apply on the website of the Royal Mint (Fábrica Nacional de Moneda y Timbre) and then prove your identity at a registration office, such as a local council or a tax office. On this visit you must bring a current national identity card (DNI) or foreigner identity number card (NIE) and the application code you received by email.

Once your identity has been verified, you can download the certificate onto the same computer you used to apply. It is free and valid for four years. Before it expires, you can renew it online without going back to the office.

It is a good idea to keep a password-protected backup copy and not to install the certificate on shared computers. If you lose your device or suspect that someone has accessed your certificate, you must cancel it immediately by phone or online.`,
 cp:[
  ["identificarse en internet","identi(fy|ty)|prove (your|their) identity","dist","minor","Identificarse = prove one's identity."],
  ["documento nacional de identidad","national (identity|id) card|dni","omit","minor","Keep or gloss DNI."],
  ["sin desplazarse","without (leaving (home|the house)|going (anywhere|in person)|travel)","dist","minor","Sin desplazarse = without leaving home."],
  ["la declaración de la renta","(income )?tax return","dist","major","Declaración de la renta = income tax return.",[["\\brent\\b","dist","falsefriend","major","«Renta» here = income, not rent."]]],
  ["certificado de empadronamiento","(residence|address|resident) registration|proof of (address|residence)|census","dist","minor","Empadronamiento = residence registration."],
  ["Fábrica Nacional de Moneda y Timbre","mint|fábrica nacional|fnmt","omit","minor","Keep the name with a gloss (Royal Mint)."],
  ["acreditar su identidad","prove (your|their) identity|verify (your|their) identity|confirm","dist","minor","Acreditar = prove."],
  ["delegación de Hacienda","tax office|tax agency","dist","minor","Hacienda = tax office."],
  ["en vigor","current|valid","dist","minor","En vigor = valid / current."],
  ["cuatro años","four years|4 years","dist","major","Figure must be exact."],
  ["Antes de que caduque","before it expires|before (its|the) expiry","dist","major","Caducar = expire."],
  ["copia de seguridad","back ?up","dist","minor","Copia de seguridad = backup."],
  ["revocarlo","revoke|cancel","dist","major","Revocar = revoke / cancel."]
 ]}
]);
