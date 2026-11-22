/* Certificado — Spanish → English content (original, written for the app). Card row: [Spanish, English, note, example ES, example EN] */
window.NAATI_EX=window.NAATI_EX||{};
window.NAATI_DATA = (function(){
const C=[];
const add=(cat,rows)=>rows.forEach(r=>{C.push([cat,r[0],r[1],r[2]||""]);if(r[3])window.NAATI_EX[r[0]]=[r[3],r[4]]});

add("False friends",[
["actualmente","currently / at present","Not 'actually' (= en realidad).","Actualmente vive en Melbourne con su familia.","She currently lives in Melbourne with her family."],
["eventualmente","possibly / if necessary","Not 'eventually' (= finalmente).","Eventualmente podríamos ampliar el plazo.","We could possibly extend the deadline."],
["asistir a","attend","'Assist' = ayudar.","Más de cien vecinos asistieron a la reunión.","More than a hundred residents attended the meeting."],
["embarazada","pregnant","'Embarrassed' = avergonzado.","Las mujeres embarazadas deben vacunarse.","Pregnant women should be vaccinated."],
["la carpeta","the folder / file","'Carpet' = alfombra, moqueta.","Guarde los recibos en una carpeta.","Keep the receipts in a folder."],
["éxito","success","'Exit' = salida.","El programa ha sido un éxito.","The program has been a success."],
["la librería","the bookshop","'Library' = biblioteca.","Compró el diccionario en una librería del centro.","He bought the dictionary at a bookshop in the city centre."],
["constipado","has a cold","'Constipated' = estreñido.","Estoy constipado y no puedo ir a trabajar.","I've got a cold and can't go to work."],
["sensible","sensitive","'Sensible' = sensato.","Es un tema muy sensible para la familia.","It is a very sensitive subject for the family."],
["la discusión","the argument / debate","Often 'argument', not just 'discussion'.","Tuvieron una discusión por el dinero.","They had an argument about money."],
["la desgracia","misfortune / tragedy","'Disgrace' = vergüenza, deshonra.","La inundación fue una desgracia para el pueblo.","The flood was a tragedy for the town."],
["realizar","carry out / do","'Realise' = darse cuenta.","La empresa realizará una auditoría en marzo.","The company will carry out an audit in March."],
["darse cuenta","realise","","No se dio cuenta del error hasta el lunes.","She didn't realise the mistake until Monday."],
["la molestia","inconvenience / trouble","'Molestation' = abuso.","Disculpe las molestias.","We apologise for the inconvenience."],
["el suceso","event / incident","'Success' = éxito.","La policía investiga el suceso.","Police are investigating the incident."],
["el colegio","school","'College' = universidad, instituto superior.","Los niños van al colegio a las ocho.","The children go to school at eight."],
["la nota","mark / grade / note","In education usually 'mark'.","Sacó una nota muy alta en el examen.","She got a very high mark in the exam."],
["la licenciatura","bachelor's degree","Not 'licence'.","Terminó la licenciatura en Derecho en 2015.","He completed a law degree in 2015."],
["el compromiso","commitment / engagement","'Compromise' = acuerdo, término medio.","El Gobierno reafirmó su compromiso con la salud pública.","The Government reaffirmed its commitment to public health."],
["el pariente","relative","'Parent' = padre o madre.","Vive con unos parientes en Sídney.","He lives with some relatives in Sydney."],
["la ropa","clothes","'Rope' = cuerda.","Lleve ropa cómoda.","Wear comfortable clothes."],
["recordar","remember / remind","Context decides.","Le recordamos que debe traer su pasaporte.","Please remember to bring your passport."],
["la advertencia","warning","'Advertisement' = anuncio.","El fabricante publicó una advertencia de seguridad.","The manufacturer issued a safety warning."],
["el lecturer","—","Use: 'la conferencia' = lecture.","",""],
["la conferencia","lecture / talk / conference","Context decides.","La conferencia empieza a las seis.","The talk starts at six."],
["introducir","insert / bring in","'Introduce a person' = presentar.","Introduzca su tarjeta en el cajero.","Insert your card into the ATM."],
["la renta","income / rent","Renta in tax texts = income.","Debe presentar la declaración de la renta.","You must file your income tax return."],
["el crimen","murder / serious crime","Often specifically murder.","El crimen ocurrió en un piso del centro.","The murder took place in a flat in the city centre."],
["el delito","offence / crime","","Conducir sin carné es un delito.","Driving without a licence is an offence."],
["contestar","answer / reply","'Contest' = impugnar.","No contestó a nuestra carta.","He did not reply to our letter."],
["la decepción","disappointment","'Deception' = engaño.","El resultado fue una gran decepción.","The result was a big disappointment."],
["el preservativo","condom","'Preservative' = conservante.","","" ],
["en absoluto","not at all","Not 'absolutely'.","No estoy en absoluto de acuerdo.","I don't agree at all."],
["el éxito de ventas","best-seller","","",""],
["la fábrica","factory","'Fabric' = tela.","La fábrica cerrará en diciembre.","The factory will close in December."],
["el ingreso","income / admission / deposit","Context decides: ingreso hospitalario = hospital admission.","Tras su ingreso en el hospital, mejoró.","After his admission to hospital, he improved."]
].filter(r=>r[1]!=="—"));

add("Civil status & ID",[
["el acta de nacimiento","birth certificate","Also 'partida de nacimiento' (Spain: certificado de nacimiento).","Necesita una copia del acta de nacimiento.","You need a copy of the birth certificate."],
["el certificado de matrimonio","marriage certificate","","Adjunte el certificado de matrimonio.","Attach the marriage certificate."],
["el estado civil","marital status","","Indique su estado civil.","State your marital status."],
["soltero/a","single / never married","","Estado civil: soltera.","Marital status: never married."],
["casado/a","married","","Están casados desde 2010.","They have been married since 2010."],
["divorciado/a","divorced","","Es divorciado y tiene dos hijos.","He is divorced and has two children."],
["viudo/a","widowed","","Quedó viuda en 2019.","She was widowed in 2019."],
["el registro civil","civil registry / registry of births, deaths and marriages","","El nacimiento se inscribió en el Registro Civil.","The birth was registered at the Civil Registry."],
["el DNI","national identity card","Spain. Keep the acronym + gloss.","Presente el DNI o el pasaporte.","Show your national identity card or passport."],
["la cédula de identidad","identity card","Latin America.","Número de cédula de identidad: 12.345.678.","Identity card number: 12,345,678."],
["el NIE","foreigner identity number","Spain: Número de Identidad de Extranjero.","Para trabajar en España necesita el NIE.","To work in Spain you need a foreigner identity number (NIE)."],
["los apellidos","surnames / family names","Two surnames: keep both, in order.","Escriba sus dos apellidos.","Write both of your surnames."],
["el lugar de nacimiento","place of birth","","Lugar de nacimiento: Valparaíso (Chile).","Place of birth: Valparaíso (Chile)."],
["el domicilio","address / place of residence","","Domicilio: calle Mayor, 12, 3.º B.","Address: calle Mayor 12, 3rd floor, flat B."],
["el empadronamiento","residence registration","Spain: registration on the local council's register.","El certificado de empadronamiento acredita su domicilio.","The residence registration certificate proves your address."],
["la nota marginal","marginal note / annotation","","Consta una nota marginal de divorcio.","There is a marginal note recording a divorce."],
["el sello","stamp / seal","Translate as [Stamp: …].","Firma y sello del funcionario.","Signature and stamp of the official."],
["la firma ilegible","illegible signature","Translate as [illegible signature].","","" ],
["el libro de familia","family book","Spain: official family record booklet; explain once.","Los hijos figuran en el libro de familia.","The children are listed in the family book."],
["la partida de defunción","death certificate","","Se adjunta la partida de defunción del padre.","The father's death certificate is attached."]
]);

add("Migration",[
["el permiso de residencia","residence permit","","Su permiso de residencia vence en mayo.","Her residence permit expires in May."],
["la solicitud","application","Not 'solicitation'.","La solicitud se presenta en línea.","The application is submitted online."],
["el solicitante","applicant","","Cada solicitante debe pagar la tasa.","Each applicant must pay the fee."],
["el visado","visa","Latin America: la visa.","Le concedieron el visado de estudiante.","She was granted a student visa."],
["el extranjero","foreign national / abroad","'En el extranjero' = abroad.","Vivió diez años en el extranjero.","He lived abroad for ten years."],
["la nacionalidad","citizenship / nationality","","Obtuvo la nacionalidad española en 2021.","She obtained Spanish citizenship in 2021."],
["el arraigo","residence based on settled ties","Spain: legal route; explain.","Solicitó la residencia por arraigo social.","He applied for residence on the basis of social ties."],
["la reagrupación familiar","family reunification","","Tramitó la reagrupación familiar de su esposa.","He applied for family reunification for his wife."],
["el refugiado","refugee","","La ONG ayuda a familias refugiadas.","The NGO helps refugee families."],
["el asilo","asylum","","Presentó una solicitud de asilo.","She lodged an asylum application."],
["la cita previa","appointment","'Pedir cita previa' = book an appointment.","Es obligatorio pedir cita previa.","You must book an appointment."],
["la oficina de extranjería","immigration office","","Acuda a la oficina de extranjería con su pasaporte.","Go to the immigration office with your passport."],
["renovar","renew","","Debe renovar la tarjeta antes de que caduque.","You must renew the card before it expires."],
["caducar","expire","","El pasaporte caduca el 3 de julio.","The passport expires on 3 July."],
["en situación irregular","without valid immigration status","Avoid 'illegal'.","Miles de personas viven en situación irregular.","Thousands of people live without valid immigration status."]
]);

add("Education",[
["el bachillerato","senior secondary school (final two years)","Spain: post-16; explain by function.","Terminó el bachillerato en 2012.","She completed senior secondary school in 2012."],
["la ESO","compulsory secondary education","Spain: ages 12–16.","El título de la ESO es obligatorio para muchos empleos.","The compulsory secondary education certificate is required for many jobs."],
["el título","degree / qualification / certificate","Not 'title' in education.","El título fue expedido en Madrid.","The degree was issued in Madrid."],
["el expediente académico","academic transcript","","Adjunte el expediente académico completo.","Attach the full academic transcript."],
["la asignatura","subject / unit","","Aprobó todas las asignaturas.","He passed all his subjects."],
["aprobar","pass (an exam) / approve","Context decides.","Aprobó el examen de conducir.","She passed her driving test."],
["suspender","fail (an exam) / suspend","Spain: suspender un examen = fail.","Suspendió matemáticas en junio.","He failed maths in June."],
["la matrícula","enrolment / registration fee","Also number plate in Driving.","El plazo de matrícula termina el viernes.","Enrolment closes on Friday."],
["la beca","scholarship / grant","","Recibió una beca para estudiar en Australia.","She received a scholarship to study in Australia."],
["el curso académico","academic year","","El curso académico empieza en septiembre.","The academic year starts in September."],
["la calificación","mark / grade","","Calificación final: sobresaliente (9,2).","Final mark: excellent (9.2)."],
["sobresaliente","excellent / high distinction","Spanish scale: sobresaliente 9–10, notable 7–8, aprobado 5–6.","",""],
["el profesorado","teaching staff","","El profesorado apoya la reforma.","Teaching staff support the reform."],
["la guardería","childcare centre","","La guardería abre a las siete y media.","The childcare centre opens at 7.30 am."],
["la homologación","official recognition of a qualification","","Solicitó la homologación de su título.","He applied for official recognition of his degree."]
]);

add("Work",[
["el contrato indefinido","permanent contract / ongoing employment","Not 'indefinite'.","Le ofrecieron un contrato indefinido.","He was offered a permanent contract."],
["el contrato temporal","fixed-term / temporary contract","","Trabaja con un contrato temporal de seis meses.","She is on a six-month fixed-term contract."],
["la nómina","payslip / payroll","","Adjunte las tres últimas nóminas.","Attach your last three payslips."],
["el sueldo bruto","gross salary","","Sueldo bruto anual: 32.000 €.","Gross annual salary: €32,000."],
["la plantilla","staff / workforce","Not 'template' here.","La empresa ampliará la plantilla.","The company will increase its workforce."],
["el despido","dismissal","'Despido improcedente' = unfair dismissal.","El tribunal declaró improcedente el despido.","The court ruled that the dismissal was unfair."],
["la baja por enfermedad","sick leave","","Está de baja por enfermedad desde el lunes.","He has been on sick leave since Monday."],
["la baja por maternidad","maternity leave","","Volverá tras la baja por maternidad.","She will return after maternity leave."],
["el paro","unemployment / unemployment benefit","Context decides.","Cobra el paro desde marzo.","He has been receiving unemployment benefit since March."],
["la jornada completa","full-time","'Media jornada' = part-time.","Busca un puesto a jornada completa.","She is looking for a full-time position."],
["el puesto de trabajo","position / job","","Se han creado cien puestos de trabajo.","A hundred jobs have been created."],
["el convenio colectivo","collective agreement","AU: closest is an enterprise agreement or award.","Las vacaciones se rigen por el convenio colectivo.","Annual leave is governed by the collective agreement."],
["las horas extraordinarias","overtime","","Las horas extraordinarias se pagan aparte.","Overtime is paid separately."],
["el periodo de prueba","probation period","","El periodo de prueba es de dos meses.","The probation period is two months."],
["la vida laboral","employment history","Spain: 'informe de vida laboral' = employment history report.","Pida el informe de vida laboral en la web de la Seguridad Social.","Request your employment history report on the Social Security website."],
["el autónomo","self-employed person / sole trader","","Trabaja como autónomo desde 2018.","He has been self-employed since 2018."]
]);

add("Money & tax",[
["la declaración de la renta","income tax return","","El plazo para la declaración de la renta termina el 30 de junio.","The deadline for income tax returns is 30 June."],
["Hacienda","the tax office","Spain: Agencia Tributaria.","Hacienda le devolverá 640 euros.","The tax office will refund you €640."],
["el IVA","VAT / GST","AU equivalent: GST.","Precio con IVA incluido.","Price including VAT."],
["la cuenta corriente","current account / transaction account","AU: everyday / transaction account.","Abrió una cuenta corriente en el banco.","He opened a transaction account at the bank."],
["el saldo","balance","","Saldo disponible: 1.250,30 €.","Available balance: €1,250.30."],
["la transferencia","bank transfer","","Pague por transferencia bancaria.","Pay by bank transfer."],
["el préstamo","loan","","Pidió un préstamo para el coche.","She took out a loan for the car."],
["la hipoteca","mortgage","","La hipoteca vence dentro de veinte años.","The mortgage will be paid off in twenty years."],
["el recibo","receipt / bill","Recibo de la luz = electricity bill.","Ha llegado el recibo de la luz.","The electricity bill has arrived."],
["la domiciliación bancaria","direct debit","","Pague los recibos mediante domiciliación bancaria.","Pay your bills by direct debit."],
["la deuda","debt","","La deuda asciende a 3.400 euros.","The debt amounts to €3,400."],
["el embargo","seizure / garnishee order","Not 'embargo' in this context.","El juez ordenó el embargo de la nómina.","The judge ordered his wages to be garnisheed."],
["la factura","invoice / bill","","Solicite una factura con sus datos.","Ask for an invoice in your name."],
["la pensión","pension","","Cobra una pensión de jubilación.","She receives an age pension."],
["la subvención","grant / subsidy","","El ayuntamiento concede subvenciones a pequeños comercios.","The council gives grants to small businesses."],
["el ingreso mínimo vital","minimum income benefit","Spain; explain once.","Más de 300.000 hogares cobran el ingreso mínimo vital.","More than 300,000 households receive the minimum income benefit."]
]);

add("Housing",[
["el alquiler","rent / rental","","El alquiler sube un 3 % al año.","The rent goes up by 3% a year."],
["el arrendador","landlord / lessor","","El arrendador debe hacer las reparaciones.","The landlord must carry out repairs."],
["el inquilino","tenant","","El inquilino pagará los gastos de comunidad.","The tenant will pay the strata fees."],
["la fianza","bond / security deposit","","La fianza equivale a un mes de alquiler.","The bond is equal to one month's rent."],
["el piso","flat / apartment / floor","Context decides.","Viven en un piso de tres habitaciones.","They live in a three-bedroom flat."],
["la comunidad de propietarios","owners corporation / body corporate","","La comunidad de propietarios aprobó la obra.","The owners corporation approved the work."],
["los gastos de comunidad","strata fees / body corporate fees","","Los gastos de comunidad son 60 € al mes.","Strata fees are €60 a month."],
["el desahucio","eviction","","El desahucio se suspendió por la ola de frío.","The eviction was postponed because of the cold snap."],
["la vivienda","housing / dwelling / home","","El precio de la vivienda sigue subiendo.","Housing prices keep rising."],
["la vivienda de protección oficial","public / social housing","","Solicitó una vivienda de protección oficial.","He applied for social housing."],
["el contrato de arrendamiento","lease / tenancy agreement","","El contrato de arrendamiento dura un año.","The lease runs for one year."],
["la mudanza","move / removal","","La empresa de mudanzas llegó a las nueve.","The removalists arrived at nine."],
["las humedades","damp","","El piso tiene humedades en el baño.","The flat has damp in the bathroom."],
["el portal","building entrance / lobby","","Nos vemos en el portal.","Let's meet at the building entrance."],
["el trastero","storage room","","El piso incluye plaza de garaje y trastero.","The flat comes with a parking space and a storage room."]
]);

add("Building & trades",[
["la obra","building work / construction site","","La obra durará seis meses.","The building work will last six months."],
["el presupuesto","quote / budget","Context decides: quote from a tradesperson.","Pida tres presupuestos antes de decidir.","Get three quotes before deciding."],
["el albañil","bricklayer / builder","","El albañil reparó la pared.","The builder repaired the wall."],
["el fontanero","plumber","LatAm: plomero.","Llame al fontanero por la fuga.","Call the plumber about the leak."],
["el electricista","electrician","","El electricista revisó el cuadro eléctrico.","The electrician checked the switchboard."],
["el cuadro eléctrico","switchboard / fuse box","","El cuadro eléctrico está en la entrada.","The switchboard is by the entrance."],
["la pintura","paint / painting","","Se necesitan dos manos de pintura.","Two coats of paint are needed."],
["el andamio","scaffolding","","Han montado un andamio en la fachada.","Scaffolding has been put up on the front of the building."],
["la fachada","facade / front of the building","","Rehabilitación de la fachada.","Refurbishment of the building's facade."],
["el tejado","roof","","La tormenta dañó el tejado.","The storm damaged the roof."],
["la gotera","leak (from the roof)","","Hay una gotera en el techo del salón.","There is a leak in the living-room ceiling."],
["la licencia de obras","building permit","","El ayuntamiento concedió la licencia de obras.","The council granted the building permit."],
["el plazo de ejecución","completion time / time frame","","Plazo de ejecución: tres meses.","Time frame for completion: three months."],
["el aislamiento","insulation","","Mejorar el aislamiento reduce la factura.","Better insulation lowers the bill."],
["el yeso","plaster","","Repararon el techo con placas de yeso.","They repaired the ceiling with plasterboard."],
["la reforma","renovation","Not 'reform' here.","La reforma de la cocina costó 9.000 €.","The kitchen renovation cost €9,000."]
]);

add("Insurance",[
["la póliza","policy","","Lea las condiciones de la póliza.","Read the policy conditions."],
["el asegurado","the insured / policyholder","","El asegurado debe comunicar el siniestro.","The policyholder must report the claim."],
["el siniestro","claim / insured event / incident","Not 'sinister'.","Declare el siniestro en un plazo de siete días.","Report the incident within seven days."],
["la prima","premium","","La prima anual es de 420 €.","The annual premium is €420."],
["la franquicia","excess","Not 'franchise' in insurance.","El seguro tiene una franquicia de 300 €.","The policy has a $300 excess."],
["la cobertura","cover","","La póliza ofrece cobertura a todo riesgo.","The policy provides comprehensive cover."],
["a todo riesgo","comprehensive","","Seguro de coche a todo riesgo.","Comprehensive car insurance."],
["el perito","assessor / loss adjuster","","El perito visitará la vivienda el martes.","The assessor will visit the home on Tuesday."],
["la indemnización","compensation / payout","","Recibió una indemnización de 5.000 €.","She received a €5,000 payout."],
["los daños materiales","property damage","","Solo hubo daños materiales.","There was only property damage."],
["el tomador","policyholder (who takes out the policy)","","El tomador del seguro firma la póliza.","The policyholder signs the policy."],
["el parte","report / claim form","'Parte de accidente' = accident report.","Rellenen juntos el parte amistoso.","Fill in the joint accident report together."],
["la cláusula de exclusión","exclusion clause","","Lea las cláusulas de exclusión.","Read the exclusion clauses."]
]);

add("Legal",[
["el juzgado","court","","El caso está en el juzgado de primera instancia.","The case is before the court of first instance."],
["la sentencia","judgment / ruling","Not always 'sentence'.","La sentencia es firme.","The judgment is final."],
["firme","final (not open to appeal)","","La resolución es firme desde el 4 de mayo.","The decision has been final since 4 May."],
["la demanda","claim / lawsuit","'Demand' = exigencia.","Presentó una demanda contra la empresa.","He filed a lawsuit against the company."],
["el demandante","plaintiff / applicant","","El demandante reclama 12.000 €.","The plaintiff is claiming €12,000."],
["el demandado","defendant / respondent","","El demandado no compareció.","The defendant did not appear."],
["el recurso","appeal","Also 'resource' elsewhere.","Contra esta resolución cabe recurso.","This decision may be appealed."],
["el plazo","deadline / time limit","","El plazo para recurrir es de veinte días.","The time limit to appeal is twenty days."],
["el abogado","lawyer / solicitor","","Su abogado presentó las pruebas.","Her lawyer submitted the evidence."],
["el notario","notary public","","Firmaron la escritura ante notario.","They signed the deed before a notary public."],
["la escritura","deed","","Escritura de compraventa.","Deed of sale."],
["el poder notarial","power of attorney","","Otorgó un poder notarial a su hija.","He granted his daughter power of attorney."],
["la custodia","custody","'Custodia compartida' = shared custody.","Los padres tienen la custodia compartida.","The parents have shared custody."],
["la pensión alimenticia","child support / maintenance","","Paga 300 € de pensión alimenticia.","He pays €300 a month in child support."],
["el auto","court order / ruling","Not a car.","El juez dictó un auto de embargo.","The judge issued a seizure order."],
["la ley","law / act","Name of a law: Act.","La Ley 29/1994 regula los alquileres.","Act 29/1994 regulates rentals."]
]);

add("Police",[
["la denuncia","police report / complaint","'Poner una denuncia' = report to police.","Puso una denuncia por el robo del móvil.","She reported the theft of her phone to the police."],
["la comisaría","police station","","Acuda a la comisaría más cercana.","Go to the nearest police station."],
["el atestado","police report","","El atestado recoge la declaración del conductor.","The police report includes the driver's statement."],
["la detención","arrest","","Se produjo la detención de dos sospechosos.","Two suspects were arrested."],
["el detenido","person under arrest / detainee","","El detenido pasará a disposición judicial.","The arrested man will be brought before a judge."],
["el robo","theft / robbery / burglary","Context decides.","Robo con fuerza en vivienda.","Burglary of a home."],
["el hurto","theft (without violence)","","El hurto de bicicletas ha aumentado.","Bike theft has increased."],
["la orden de alejamiento","restraining order / AVO","AU: apprehended violence order.","El juez dictó una orden de alejamiento.","The judge issued a restraining order."],
["el testigo","witness","","Un testigo vio la matrícula.","A witness saw the number plate."],
["los antecedentes penales","criminal record","","Certificado de antecedentes penales.","Criminal record certificate (police check)."],
["la Guardia Civil","Civil Guard","Spain; keep the name + gloss.","La Guardia Civil cortó la carretera.","The Civil Guard (national police force) closed the road."],
["la multa","fine","","Le pusieron una multa de 200 €.","He was fined €200."]
]);

add("Health",[
["el centro de salud","health centre / GP clinic","","Pida cita en su centro de salud.","Book an appointment at your local health centre."],
["el médico de cabecera","GP / family doctor","","Consulte a su médico de cabecera.","See your GP."],
["la receta","prescription / recipe","Context decides.","Este medicamento se vende con receta.","This medicine is prescription only."],
["las urgencias","emergency department","","Lo llevaron a urgencias.","He was taken to the emergency department."],
["el ingreso hospitalario","hospital admission","","El ingreso hospitalario duró tres días.","The hospital stay lasted three days."],
["el alta","discharge (from hospital) / sign-off","'Dar el alta' = discharge.","Le dieron el alta el viernes.","He was discharged on Friday."],
["la tarjeta sanitaria","health card / Medicare card","","Presente la tarjeta sanitaria.","Show your health card."],
["el análisis de sangre","blood test","","Tiene que hacerse un análisis de sangre en ayunas.","You need a fasting blood test."],
["en ayunas","fasting / on an empty stomach","","Tómelo en ayunas.","Take it on an empty stomach."],
["la dosis","dose","","No supere la dosis recomendada.","Do not exceed the recommended dose."],
["la enfermera","nurse","","La enfermera le tomará la tensión.","The nurse will take your blood pressure."],
["la tensión arterial","blood pressure","","Tiene la tensión alta.","He has high blood pressure."],
["el embarazo","pregnancy","","Durante el embarazo evite el alcohol.","Avoid alcohol during pregnancy."],
["la baja médica","medical certificate for sick leave","","El médico le dio la baja médica.","The doctor gave him a medical certificate for sick leave."],
["el efecto secundario","side effect","","Puede tener efectos secundarios leves.","It may have mild side effects."],
["la lista de espera","waiting list","","Hay ocho meses de lista de espera.","There is an eight-month waiting list."]
]);

add("Government",[
["el ayuntamiento","local council / town hall","","El ayuntamiento cerrará la piscina.","The council will close the pool."],
["el alcalde","mayor","","La alcaldesa inauguró el parque.","The mayor opened the park."],
["la comunidad autónoma","autonomous community (region)","Spain; Australia: state.","Cada comunidad autónoma gestiona su sanidad.","Each autonomous community runs its own health system."],
["el Boletín Oficial del Estado (BOE)","Official State Gazette","","La norma se publicó en el BOE.","The regulation was published in the Official State Gazette."],
["el trámite","procedure / formality","","El trámite se puede hacer en línea.","You can complete the process online."],
["la sede electrónica","online services portal","","Acceda a la sede electrónica con su certificado digital.","Log in to the online services portal with your digital certificate."],
["el funcionario","public servant / official","","Un funcionario revisará su solicitud.","An official will review your application."],
["la ventanilla","counter / service desk","'Ventanilla única' = one-stop shop.","Entregue los documentos en la ventanilla.","Hand in the documents at the counter."],
["la normativa","regulations / rules","","Según la normativa vigente…","Under current regulations…"],
["vigente","current / in force","","La ley vigente prohíbe fumar en bares.","The law in force bans smoking in bars."],
["el plazo de presentación","submission period / deadline","","El plazo de presentación es de quince días hábiles.","Applications must be submitted within fifteen business days."],
["los días hábiles","business days / working days","","Diez días hábiles a partir de la notificación.","Ten business days from notification."],
["la ayuda","benefit / grant / help","","Ayuda por hijo a cargo.","Dependent child benefit."]
]);

add("Driving",[
["el carné de conducir","driver's licence","LatAm: licencia de conducir.","Le retiraron el carné de conducir.","His driver's licence was suspended."],
["la matrícula","number plate / registration","","Anotó la matrícula del coche.","She noted the car's number plate."],
["la ITV","roadworthy inspection","Spain: Inspección Técnica de Vehículos.","El coche no pasó la ITV.","The car failed its roadworthy inspection."],
["la DGT","Directorate-General for Traffic","Spain; keep + gloss.","La DGT recomienda no viajar.","The Directorate-General for Traffic advises against travel."],
["el atasco","traffic jam","","Hubo un atasco de diez kilómetros.","There was a ten-kilometre traffic jam."],
["la rotonda","roundabout","","Gire a la derecha en la rotonda.","Turn right at the roundabout."],
["el permiso por puntos","points-based licence","","Perdió seis puntos del carné.","He lost six demerit points."],
["el exceso de velocidad","speeding","","Multa por exceso de velocidad.","Speeding fine."],
["el aparcamiento","car park / parking","LatAm: estacionamiento.","Aparcamiento gratuito para clientes.","Free parking for customers."],
["la autopista","motorway / freeway","","Corte de la autopista por obras.","Freeway closed for roadworks."],
["el seguro obligatorio","compulsory third-party insurance","","Circular sin seguro obligatorio es una infracción grave.","Driving without compulsory third-party insurance is a serious offence."]
]);

add("Connectors",[
["sin embargo","however","","Sin embargo, el plazo no se ampliará.","However, the deadline will not be extended."],
["no obstante","nevertheless / however","","No obstante, puede presentar un recurso.","However, you may lodge an appeal."],
["por lo tanto","therefore","","Por lo tanto, la solicitud se desestima.","The application is therefore refused."],
["además","also / in addition","","Además, debe presentar el pasaporte.","You must also show your passport."],
["en cambio","whereas / on the other hand","","Los jóvenes, en cambio, prefieren el alquiler.","Young people, on the other hand, prefer renting."],
["a pesar de","despite","","A pesar de la lluvia, el acto se celebró.","Despite the rain, the event went ahead."],
["siempre que","provided that / whenever","+ subjunctive = provided that.","Podrá entrar siempre que tenga la entrada.","You may enter provided that you have a ticket."],
["en cuanto a","as for / regarding","","En cuanto a los plazos, no hay cambios.","As for the deadlines, there are no changes."],
["es decir","that is / in other words","","El 30 %, es decir, uno de cada tres.","30%, that is, one in three."],
["de hecho","in fact","","De hecho, las ventas han subido.","In fact, sales have risen."],
["a partir de","from / as of","","A partir del 1 de enero.","From 1 January."],
["en virtud de","under / pursuant to","","En virtud del artículo 5…","Under section 5…"],
["mientras que","while / whereas","","Uno trabaja, mientras que el otro estudia.","One works, while the other studies."],
["por otra parte","on the other hand / moreover","Check: often 'moreover'.","Por otra parte, el coste es elevado.","Moreover, the cost is high."],
["con el fin de","in order to","","Con el fin de reducir esperas, se abre un nuevo centro.","A new centre is opening to cut waiting times."],
["dado que","since / given that","","Dado que no hubo respuesta, se cerró el expediente.","Since there was no reply, the file was closed."],
["ya que","since / because","","No pudo venir, ya que estaba enfermo.","He couldn't come because he was ill."],
["en definitiva","in short / ultimately","","En definitiva, el plan ha funcionado.","In short, the plan has worked."],
["a su vez","in turn","","El ministerio, a su vez, informará a las regiones.","The ministry will in turn inform the regions."],
["al respecto","on the matter / about this","","No hizo declaraciones al respecto.","He made no comment on the matter."]
]);

add("Admin verbs",[
["tramitar","process / handle / apply for","","Tramitamos su solicitud en diez días.","We process your application within ten days."],
["adjuntar","attach","","Adjunte una fotocopia del pasaporte.","Attach a photocopy of your passport."],
["cumplimentar","fill in / complete","","Cumplimente el formulario en mayúsculas.","Fill in the form in capital letters."],
["acreditar","prove / provide evidence of","","Debe acreditar sus ingresos.","You must provide evidence of your income."],
["expedir","issue","","El certificado fue expedido en Lima.","The certificate was issued in Lima."],
["presentar","submit / lodge / present","","Presente la solicitud antes del 30 de abril.","Submit your application by 30 April."],
["subsanar","correct / remedy","","Dispone de diez días para subsanar los errores.","You have ten days to correct the errors."],
["desestimar","refuse / dismiss","","Se desestima la solicitud.","The application is refused."],
["conceder","grant","","Se le concede una ayuda de 500 €.","You have been granted €500."],
["notificar","notify","","La resolución se notificará por correo.","You will be notified of the decision by post."],
["empadronarse","register one's address with the council","","Debe empadronarse en el ayuntamiento.","You must register your address with the council."],
["abonar","pay","Formal for 'pagar'.","Abone la tasa antes de la cita.","Pay the fee before your appointment."],
["solicitar","apply for / request","","Puede solicitar la ayuda en línea.","You can apply for the benefit online."],
["comparecer","appear (before an authority)","","Debe comparecer ante el juez el lunes.","He must appear before the judge on Monday."],
["prorrogar","extend","","Se prorroga el plazo hasta el viernes.","The deadline has been extended to Friday."]
]);

add("Contracts",[
["las partes","the parties","","Reunidas las partes, acuerdan…","The parties agree as follows…"],
["la cláusula","clause","","Cláusula tercera: duración.","Clause 3: Term."],
["la duración","term / duration","","La duración del contrato es de un año.","The term of this contract is one year."],
["el incumplimiento","breach / failure to comply","","El incumplimiento dará lugar a la rescisión.","Any breach will result in termination."],
["la rescisión","termination","","Rescisión por mutuo acuerdo.","Termination by mutual agreement."],
["la penalización","penalty","","Penalización por retraso: 50 € al día.","Late penalty: €50 a day."],
["el preaviso","notice","","Con un preaviso de treinta días.","With thirty days' notice."],
["de mutuo acuerdo","by mutual agreement","","Las partes podrán prorrogarlo de mutuo acuerdo.","The parties may extend it by mutual agreement."],
["en lo sucesivo","hereinafter / from now on","","En lo sucesivo, «el arrendatario».","Hereinafter «the tenant»."],
["obligarse a","undertake to","","El proveedor se obliga a entregar la mercancía.","The supplier undertakes to deliver the goods."],
["la firma","signature / signing","","En prueba de conformidad, firman…","In witness whereof, the parties sign…"],
["por duplicado","in duplicate","","Firmado por duplicado en Valencia.","Signed in duplicate in Valencia."]
]);

add("Manuals & products",[
["las instrucciones de uso","instructions for use","","Lea las instrucciones de uso.","Read the instructions for use."],
["el aparato","appliance / device","","No sumerja el aparato en agua.","Do not immerse the appliance in water."],
["enchufar","plug in","","Enchufe el aparato a una toma con tierra.","Plug the appliance into an earthed socket."],
["desenchufar","unplug","","Desenchufe el aparato antes de limpiarlo.","Unplug the appliance before cleaning it."],
["la garantía","warranty / guarantee","","Dos años de garantía.","Two-year warranty."],
["el mantenimiento","maintenance / care","","Mantenimiento: limpie el filtro cada mes.","Care: clean the filter every month."],
["el fabricante","manufacturer","","El fabricante no se hace responsable.","The manufacturer accepts no liability."],
["la pieza de recambio","spare part","","Use solo piezas de recambio originales.","Use only genuine spare parts."],
["el mando a distancia","remote control","","Pilas del mando a distancia incluidas.","Remote control batteries included."],
["la puesta en marcha","start-up / getting started","","Puesta en marcha: pulse el botón durante 3 segundos.","Getting started: press and hold the button for 3 seconds."],
["el sobrecalentamiento","overheating","","Riesgo de sobrecalentamiento.","Risk of overheating."]
]);

add("Business letters",[
["Estimado/a señor/a","Dear Sir or Madam","Close with 'Yours faithfully'.","Estimado señor:","Dear Sir,"],
["Atentamente","Yours faithfully / Yours sincerely","Depends on the greeting.","",""],
["Asunto","Re: / Subject:","","Asunto: pedido n.º 4587.","Re: Order No. 4587."],
["Por la presente","I am writing to / Hereby","Usually rephrased in English.","Por la presente le comunico mi baja voluntaria.","I am writing to tell you that I am resigning."],
["quedo a su disposición","please do not hesitate to contact me","","Quedo a su disposición para cualquier aclaración.","Please do not hesitate to contact me if you have any questions."],
["sin otro particular","—","Leave out: no English equivalent needed.","Sin otro particular, le saluda atentamente.","Yours sincerely,"],
["el pedido","order","","Hemos recibido su pedido.","We have received your order."],
["el albarán","delivery note","","Firme el albarán de entrega.","Sign the delivery note."],
["la reclamación","complaint / claim","","Presentó una reclamación formal.","She made a formal complaint."],
["adjunto le remito","please find attached","","Adjunto le remito la factura.","Please find the invoice attached."],
["en respuesta a","in reply to","","En respuesta a su carta del 3 de mayo…","In reply to your letter of 3 May…"],
["agradecer","thank / be grateful for","","Le agradecería una respuesta antes del viernes.","I would be grateful for a reply by Friday."]
].filter(r=>r[1]!=="—"));

const RULES=[
["Articles with general ideas","The health is important.","Health is important.","No 'the' for things in general (la salud)."],
["Present perfect with 'desde hace'","I live here since 9 years.","I have lived here for 9 years.","'Desde hace' = for + present perfect."],
["Hace + time","It makes 3 years I arrived.","I arrived 3 years ago.","'Hace tres años' = three years ago."],
["Finished past events","He has signed the contract in 2020.","He signed the contract in 2020.","A date or 'yesterday' = simple past."],
["Subject pronouns","Is necessary to bring the passport.","It is necessary to bring your passport.","English needs a subject: it, there, they."],
["There is / there are","Exist many problems.","There are many problems.","'Existen / hay' = there are."],
["Adjective order","A house big and old.","A big old house.","Adjectives go before the noun."],
["Plural adjectives","The documents originals.","The original documents.","English adjectives never take -s."],
["People","The people is worried.","People are worried.","'People' is plural."],
["Information / advice","Some informations and advices.","Some information and advice.","Uncountable in English."],
["Make vs do","Make the homework / do a mistake.","Do the homework / make a mistake.",""],
["Since vs for","Since two years.","For two years.","For + period; since + starting point."],
["Prepositions: in / on / at","In Monday, on March, at 2020.","On Monday, in March, in 2020.",""],
["Depend on","It depends of the income.","It depends on your income.",""],
["Consist of","The test consists in two parts.","The test consists of two parts.",""],
["Explain to","Explain me the rules.","Explain the rules to me.",""],
["Ask for","We ask you the documents.","We ask you for the documents.",""],
["Possessives","The car of my brother.","My brother's car.","'s for people."],
["Gerund after prepositions","Before to sign the contract.","Before signing the contract.","Preposition + -ing."],
["Infinitive of purpose","He came for to apply.","He came to apply.",""],
["Questions","Where you live?","Where do you live?","Do-support."],
["Negatives","He no has the visa.","He doesn't have the visa.",""],
["Passive 'se'","Se informa a los vecinos → It is informed the residents.","Residents are informed.","Make the real subject the subject."],
["Se ruega","It is begged to keep silence.","Please keep quiet.","'Se ruega' = please."],
["Long sentences","The council, which met on Tuesday and which…, has decided that…","The council met on Tuesday. It decided that…","Split long Spanish sentences."],
["Gerund overuse","He signed the contract, accepting the conditions.","He signed the contract and accepted the conditions.","Spanish chains gerunds; English uses 'and' or a new sentence."],
["Actual / current","The actual situation.","The current situation.","Actual = current."],
["Register","The kids can't come.","Children cannot attend.","Match the formality of the source."],
["Numbers","1.500,50 €","€1,500.50","Swap the separators."],
["Titles of laws","the law 29/1994","Act 29/1994 (Ley 29/1994)","Give the Spanish name in brackets the first time."]
];

const FORMATS=[["3 de marzo de 2025","3 March 2025"],["03/03/2025","3 March 2025 (spell the month)"],["1.500,50 €","€1,500.50"],["450.000 €","€450,000"],["40 %","40%"],["14:30 h / 14.30 h","2.30 pm"],["D. / D.ª, Sr. / Sra.","Mr / Ms (Mrs if marital status shown)"],["Lic. (México), Ldo.","Omit or give the degree: 'Lic.' is a courtesy title"],["n.º 12","No. 12"],["1.º, 2.ª","1st, 2nd"],["3.º B (dirección)","Keep the address in Spanish"],["Firma ilegible","[illegible signature]"],["Sello del Registro Civil","[Civil Registry stamp]"],["Nota manuscrita","[Handwritten note: …]"]];

const PASSAGES=[
{t:"School canteen",dom:"Education",fr:"Comedor escolar: cambios para el próximo curso\n\nA partir del 1 de septiembre, las familias deberán inscribir a sus hijos en el comedor escolar exclusivamente por internet, a través del portal de familias del ayuntamiento. Ya no se aceptarán las solicitudes en papel que hasta ahora se entregaban en la secretaría del centro.\n\nSegún la concejala de Educación, cerca del 70 % de las familias ya utiliza el portal para pagar los recibos. Las familias que no dispongan de acceso a internet podrán acudir a la biblioteca municipal, donde un técnico les ayudará a realizar el trámite.\n\nEl precio del menú diario se mantiene en 4,50 €. Las familias con ingresos bajos pueden solicitar una beca de comedor que cubre hasta el 100 % del coste. El plazo para presentar la solicitud termina el 15 de julio.",
en:"School canteen: changes for next year\n\nFrom 1 September, families will have to enrol their children in the school canteen online only, through the council's family portal. Paper applications, which until now were handed in at the school office, will no longer be accepted.\n\nAccording to the councillor for education, almost 70% of families already use the portal to pay their bills. Families without internet access can go to the public library, where a staff member will help them complete the process.\n\nThe daily meal price remains €4.50. Low-income families can apply for a canteen grant covering up to 100% of the cost. Applications close on 15 July.",
notes:["'Curso' = school year, not 'course'.","'Concejala de Educación' = councillor for education.","'Recibos' = bills here.","'Beca de comedor' = canteen grant / meal subsidy.","'El plazo termina' = applications close."]},
{t:"Storm damage",dom:"Insurance",fr:"Temporal: cómo declarar los daños al seguro\n\nTras las fuertes tormentas de la semana pasada, muchos vecinos se preguntan qué pasos deben seguir con su aseguradora. Tejados dañados, sótanos inundados y techos caídos: los daños son importantes en varios municipios.\n\nEn principio, los asegurados disponen de siete días para comunicar el siniestro. Se recomienda fotografiar los daños antes de limpiar y conservar los objetos estropeados hasta la visita del perito. Las facturas de compra ayudan a justificar el valor de los bienes.\n\nSi los daños se deben a un fenómeno extraordinario, como una inundación, la indemnización corresponde al Consorcio de Compensación de Seguros, siempre que la vivienda tenga un seguro en vigor. La solicitud puede presentarse por teléfono o en la página web del Consorcio.",
en:"Storm damage: how to make an insurance claim\n\nAfter last week's severe storms, many residents are wondering what to do about their insurance. Damaged roofs, flooded basements and collapsed ceilings: the damage is extensive in several towns.\n\nPolicyholders generally have seven days to report a claim. You should photograph the damage before cleaning up and keep damaged items until the assessor has visited. Purchase receipts help to prove the value of your belongings.\n\nIf the damage was caused by an extraordinary event such as a flood, compensation is paid by the Insurance Compensation Consortium (a state-backed fund), provided the home has a current insurance policy. Claims can be made by phone or on the Consortium's website.",
notes:["'Siniestro' = claim / insured event, never 'sinister'.","'Importantes' = extensive / significant here.","'Perito' = assessor.","'Consorcio de Compensación de Seguros': keep the name with a short gloss.","'Seguro en vigor' = current policy."]},
{t:"Burglary",dom:"Legal",fr:"Víctima de un robo en casa: qué hacer\n\nSi descubre que han entrado a robar en su vivienda, no toque nada y llame de inmediato al 112 o al 091. Así los agentes podrán buscar huellas antes de que se limpie el lugar.\n\nA continuación, debe presentar una denuncia en la comisaría más cercana. Puede ganar tiempo rellenando antes una denuncia en línea, que deberá firmar en persona en un plazo de 72 horas. Lleve su documento de identidad y, si es posible, una lista de los objetos robados con facturas, fotografías o números de serie.\n\nPor último, comunique el robo a su aseguradora en un plazo de 48 horas e incluya una copia de la denuncia. Si le han robado las llaves, cambie la cerradura lo antes posible.",
en:"Burglary at home: what to do\n\nIf you find that your home has been broken into, do not touch anything and call 112 or 091 (police) immediately. This allows officers to look for fingerprints before the scene is cleaned.\n\nNext, report the burglary at your nearest police station. You can save time by filling in a report online beforehand, which you must then sign in person within 72 hours. Bring your ID and, if possible, a list of stolen items with receipts, photos or serial numbers.\n\nFinally, notify your insurer within 48 hours and include a copy of the police report. If your keys were stolen, change the locks as soon as possible.",
notes:["'Entrar a robar' = break in / burgle.","Keep 112 and 091; add a short gloss rather than changing to 000.","'Denuncia' = police report.","'En un plazo de' = within.","'Cerradura' = lock."]},
{t:"Resignation",dom:"Business letter",fr:"Asunto: baja voluntaria\n\nEstimada Sra. Ortega:\n\nPor la presente le comunico mi decisión de causar baja voluntaria en la empresa, en la que trabajo como técnico de mantenimiento desde marzo de 2019. De acuerdo con el convenio colectivo, respetaré un preaviso de quince días, por lo que mi último día de trabajo será el 31 de octubre.\n\nLe agradezco la confianza depositada en mí durante estos años. Quedo a su disposición para facilitar el traspaso de mis tareas al compañero que se designe.\n\nAtentamente,\n\nJavier Molina Ruiz",
en:"Re: Resignation\n\nDear Ms Ortega,\n\nI am writing to inform you of my decision to resign from the company, where I have worked as a maintenance technician since March 2019. In accordance with the collective agreement, I will give fifteen days' notice, so my last day of work will be 31 October.\n\nThank you for the trust you have placed in me over the years. I will be happy to help hand over my duties to whoever is appointed.\n\nYours sincerely,\n\nJavier Molina Ruiz",
notes:["'Baja voluntaria' = resignation.","'Por la presente' = I am writing to.","'Preaviso' = notice.","'Quedo a su disposición' = I will be happy to help.","Named greeting → 'Yours sincerely'. Keep both surnames."]}
];

const REVS=[
{t:"Revision 1: school works",dom:"Education",fr:"El pleno municipal aprobó el martes por la noche un presupuesto de 450.000 € para reformar el colegio público. Las obras, que empezarán en abril, afectarán principalmente al tejado y al aislamiento de las aulas. Mientras duren los trabajos, los alumnos recibirán clase en módulos prefabricados instalados en el patio. La alcaldesa precisó que el ayuntamiento había obtenido una subvención del Estado que cubre el 40 % del coste total.",
bad:"The municipal plenary approved on Tuesday at the night a budget of 450.000 € to reform the public college. The works, that will start in April, will affect principally the roof and the isolation of the classrooms. While last the works, the pupils will receive class in prefabricated modules installed in the patio. The mayoress precised that the town hall had obtained a subvention of the State that covers the 40 % of the total cost.",
errs:[["The municipal plenary","The council"],["on Tuesday at the night","on Tuesday night"],["450.000 €","€450,000"],["to reform","to renovate"],["the public college","the public school"],["that will start","which will start"],["principally","mainly"],["isolation","insulation"],["While last the works","While the work is under way"],["will receive class","will be taught"],["in the patio","in the playground"],["The mayoress precised","The mayor explained"],["a subvention of the State","a government grant"],["the 40 %","40%"]],
good:"On Tuesday night the council approved a budget of €450,000 to renovate the public school. The work, which will start in April, will mainly involve the roof and the insulation of the classrooms. While the work is under way, students will be taught in prefabricated classrooms set up in the playground. The mayor explained that the council had obtained a government grant covering 40% of the total cost."},
{t:"Revision 2: flu vaccine",dom:"Health",fr:"La campaña de vacunación contra la gripe empezará el 15 de octubre. Está dirigida prioritariamente a las personas de 65 años o más, a las embarazadas y a las personas con enfermedades crónicas. Los pacientes pueden pedir cita en su centro de salud o a través de la aplicación del servicio de salud. La vacuna es gratuita y se administra en una sola dosis.",
bad:"The campaign of vaccination against the flu will begin the 15 of October. It is directed prioritarily to the persons of 65 years or more, to the embarrassed and to the persons with chronical illnesses. The patients can ask appointment in their centre of health or through the application of the health service. The vaccine is gratuitous and is administered in one only dose.",
errs:[["The campaign of vaccination against the flu","The flu vaccination campaign"],["the 15 of October","on 15 October"],["directed prioritarily to","aimed mainly at"],["the persons of 65 years or more","people aged 65 and over"],["the embarrassed","pregnant women"],["chronical illnesses","chronic illnesses"],["ask appointment","book an appointment"],["centre of health","local health centre"],["the application","the app"],["gratuitous","free"],["in one only dose","as a single dose"]],
good:"The flu vaccination campaign will begin on 15 October. It is aimed mainly at people aged 65 and over, pregnant women and people with chronic illnesses. Patients can book an appointment at their local health centre or through the health service app. The vaccine is free and is given as a single dose."}
];

return {CARDS:C,RULES,FORMATS,PASSAGES,REVS};
})();
