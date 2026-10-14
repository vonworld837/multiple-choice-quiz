const questions = [
    {
        question: "¿A quién se otorga la licencia tipo F?",
        answers: [
            { text: "A las personas mayores de edad que conducen vehículos comerciales", correct: false},
            { text: "A las personas de 16 años que no cumplen la mayoría de edad", correct: false},
            { text: "A las personas que tienen un carnet de discapacidad con más del 30%", correct: true},
        ]
    },

    {
        question: "¿Cuál es la manera más segura para llevar a un niño en el vehículo?",
        answers: [
            { text: "En la falda de un adulto que va con su cinturón de seguridad", correct: false},
            { text: "En cualquier asiento, siempre que lleve puesto el cinturón de seguridad para adultos", correct: false},
            { text: "En el asiento trasero, en un sistema de seguridad", correct: true},
        ]
    },

    {
        question: "En una vía urbana, ¿cuál es el límite máximo de velocidad en el que debe circular un vehículo considerado liviano?",
        answers: [
            { text: "40 Km/h", correct: false},
            { text: "50 Km/h", correct: true},
            { text: "60 Km/h", correct: false},
        ]
    },

    {
        question: "¿Cuál es la razón principal por la que la distancia mínima entre el conductor y el volante debe ser de 25 cm?",
        answers: [
            { text: "Porque al sentarse a mayor distancia no tendría suficiente visibilidad", correct: false},
            { text: "Porque es la distancia de acción del airbag al explotar", correct: true},
            { text: "Ninguna de las anteriores", correct: false},
        ]
    },

    {
        question: "En una vía perimetral, ¿cuál es el límite máximo de velocidad en el que debe circular un vehículo considerado liviano?",
        answers: [
            { text: "80 Km/h", correct: false},
            { text: "90 Km/h", correct: true},
            { text: "95 Km/h", correct: false},
        ]
    },

    {
        question: "¿Para quién es obligatorio el uso del cinturón de seguridad?",
        answers: [
            { text: "Solamente para el conducto", correct: false},
            { text: "Solamente para los pasajeros", correct: false},
            { text: "Para todos los ocupantes del vehículo", correct: true},
        ]
    },

    {
        question: "En vías rectas, ¿cuál es el límite máximo de velocidad en el que debe circular un vehículo considerado liviano?",
        answers: [
            { text: "80 Km/h", correct: false},
            { text: "90 Km/h", correct: true},
            { text: "95 Km/h", correct: false},
        ]
    },

    {
        question: "El freno de mano actúa sobre las ruedas:",
        answers: [
            { text: "Delanteras", correct: false},
            { text: "Posteriores", correct: true},
            { text: "Todas las anteriores", correct: false},
        ]
    },

    {
        question: "¿Qué tiempo de vigencia tienen las licencias no profesional tipo B?",
        answers: [
            { text: "4 años", correct: false},
            { text: "6 años", correct: false},
            { text: "5 años", correct: true},
        ]
    },

    {
        question: "El conductor con licencia tipo B, ¿puede llevar pasajeros en el balde de una camioneta?",
        answers: [
            { text: "Si", correct: false},
            { text: "No, nunca", correct: true},
            { text: "Sí, sólo si están dentro del área urbana", correct: false},
        ]
    },

    {
        question: "¿Cuándo una Licencia de conducir puede ser anulada?",
        answers: [
            { text: "Cuando los exámenes correspondientes determinen la incapacidad física mental y psicológica de su titular.", correct: false},
            { text: "Cuando esté caducada", correct: false},
            { text: "Cuando se detecte que éstas han sido otorgadas mediante un acto viciado por defectos de forma o falta de requisitos de fondo.", correct: true},
        ]
    },

    {
        question: "¿Qué tipo de vehículos puede conducir una persona que posee licencia tipo B?",
        answers: [
            { text: "Automóviles y camionetas con acoplados de hasta 1,55 toneladas de carga útil o casas rodantes A", correct: false},
            { text: "Automóviles y camionetas con acoplados de hasta 1.65 toneladas de carga útil o casas rodantes", correct: false},
            { text: "Automóviles y camionetas con acoplados de hasta 1.75 toneladas de carga útil o casas rodantes", correct: true},
        ]
    },

    {
        question: "En un paso cebra no regulado, ¿Quién tiene la preferencia de paso?",
        answers: [
            { text: "Los vehículos en circulación", correct: false},
            { text: "Los Peatones", correct: true},
            { text: "El transporte público", correct: false},
        ]
    },

    {
        question: "El ajuste del asiento del conductor debe:",
        answers: [
            { text: "Facilitar el acceso a los mandos y disponer de buena visibilidad", correct: true},
            { text: "Ser lo más alto posible para ver mejor hacia delante", correct: false},
            { text: "Estar lo más adelante posible para poder acelerar mejor", correct: false},
        ]
    },

    {
        question: "¿Cuál es la distancia mínima de seguimiento que debe mantener entre vehículo y ciclista al conducir?",
        answers: [
            { text: "1 metro", correct: false},
            { text: "3 metros", correct: true},
            { text: "2 metros", correct: false},
        ]
    },

    {
        question: "¿A qué velocidad se estima que un atropellamiento de un niño/a sería mortal?",
        answers: [
            { text: "10km/h", correct: false},
            { text: "15km/h", correct: false},
            { text: "25km/h", correct: true},
        ]
    },

    {
        question: "El no acatar lo indicado en una señal de tránsito, ¿Es una infracción?",
        answers: [
            { text: "Verdadero", correct: true},
            { text: "Falso", correct: false},
            { text: "Desconoce", correct: false},
        ]
    },

    {
        question: "Cuándo un cruce de vía está regulado por un agente de tránsito, ¿Las señales manuales de éste prevalecen sobre cualquier otra existente, incluso semáforos?",
        answers: [
            { text: "A veces", correct: false},
            { text: "Siempre", correct: true},
            { text: "Nunca", correct: false},
        ]
    },

    {
        question: "La luz amarilla intermitente en un semáforo significa:",
        answers: [
            { text: "Parar siempre y cuando lo pueda hacer con seguridad", correct: false},
            { text: "Disminuir la velocidad y atraversar la intersección con mucha precaución", correct: true},
            { text: "Parar, ceda el paso a todo el tráfico que cruza antes de atravesar la intersección", correct: false},
        ]
    },

    {
        question: "¿Las instrucciones del agente de tránsito prevalecen sobre las señales de tránsito aunque el semáforo se encuentre en luz roja?",
        answers: [
            { text: "Verdadero", correct: true},
            { text: "Falso", correct: false},
            { text: "Desconoce", correct: false},
        ]
    },

    {
        question: "¿En cuál de las siguientes luces de semáforo debería siempre detener su vehículo?",
        answers: [
            { text: "Luces rojas y luces rojas intermitentes", correct: true},
            { text: "Luces rojas continuas, flechas rojas y luces amarillas intermitentes", correct: false},
            { text: "Luces rojas conitnuas, luces rojas intermitentes y luces amarillas", correct: false},
        ]
    },
    
    {
        question: "¿La luz roja intermitente en un semáforo significa?",
        answers: [
            { text: "Parar siempre", correct: true},
            { text: "Disminuir la velocidad y atravesar la intersección con mucha precaución", correct: false},
            { text: "Parar, ceda el paso a todo el tráfico que cruza antes de atravesar la intersección", correct: false},
        ]
    },

    {
        question: "La luz roja intermitente en una señal de PARE en el extremo lateral izquierdo de un transporte escolar, ¿Qué significa?",
        answers: [
            { text: "Prohibido adelantar o rebasar al transporte escolar, hasta que se apague la luz intermitente y se guarde la señal de PARE", correct: true},
            { text: "Disminuir la velocidad y adelantar con precaución al transporte escolar", correct: false},
            { text: "Que se encendió las luces de estacionamiento del transporte escolar", correct: false},
        ]
    },

    {
        question: "La licencia digital es válida para circular en el Ecuador:",
        answers: [
            { text: "Si", correct: true},
            { text: "Solo si está impresa", correct: false},
            { text: "Ninguna de las anteriores", correct: false},
        ]
    },

    {
        question: "Es válido portar una copia simple de la licencia o matrícula para circular en el Ecuador?",
        answers: [
            { text: "No, nunca", correct: true},
            { text: "Solo si está impresa", correct: false},
            { text: "Ninguna de las anteriores", correct: false},
        ]
    },

    {
        question: "Debo hacer un curso de conducción para obtener mi licencia de conductor en el Ecuador:",
        answers: [
            { text: "No", correct: false},
            { text: "Solo si me pide el agente de tránsito", correct: false},
            { text: "Sí, siempre", correct: true},
        ]
    },

    {
        question: "El no cancelar el valor de multas no le permitirá: renovar la licencia, realizar la revisión técnica vehicular y matricular su vehículo",
        answers: [
            { text: "Verdadero", correct: true},
            { text: "Falso", correct: false},
            { text: "Desconoce", correct: false},
        ]
    },

    {
        question: "¿El conductor que NO haya sido sancionado durante el tiempo de vigencia de la licencia de conducir y mantenga los 30 (puntos), se beneficiará del 30% en el pago del valor de la especie de la licencia de conducir?",
        answers: [
            { text: "Verdadero", correct: false},
            { text: "Falso", correct: true},
            { text: "Desconoce", correct: false},
        ]
    },

    {
        question: "Si conduce su vehículo con un nivel de alcohol por litro de sangre de 0,3 a 0,80; ¿Qué sanción será aplicada?",
        answers: [
            { text: "Treinta días de privación de libertad y retención del vehículo por veinticuatro horas", correct: false},
            { text: "Cinco días de privación de libertad y retención del vehículo por veinticuatro horas", correct: true},
            { text: "Ninguna de las anteriores", correct: false},
        ]
    },

    {
        question: "El conductor que falte de obra a la autoridad o agente de tránsito. ¿Será sancionado con pena privativa de libertad de tres días?",
        answers: [
            { text: "Verdadero", correct: true},
            { text: "Falso", correct: false},
            { text: "Desconoce", correct: false},
        ]
    },

    {
        question: "Si se queda sin combustible y por esa razón obstaculiza el tránsito vehicular, ¿Está cometiendo una contravención?",
        answers: [
            { text: "Verdadero", correct: true},
            { text: "Falso", correct: false},
            { text: "Desconoce", correct: false},
        ]
    },

    {
        question: "¿Es una contravención de tránsito, la o el conductor que conduzca con licencia caducada?",
        answers: [
            { text: "Verdadero", correct: true},
            { text: "Falso", correct: false},
            { text: "Desconoce", correct: false},
        ]
    },

    {
        question: "La o el conductor y pasajeros que no hagan uso del cinturón de seguridad, ¿Corresponde a una contravención de transito?",
        answers: [
            { text: "Verdadero", correct: true},
            { text: "Falso", correct: false},
            { text: "Desconoce", correct: false},
        ]
    },

    {
        question: "La o el conductor que invada con su vehículo circulando o estacionándose, en las vías asignadas para uso exclusivo de los ciclistas, ¿Corresponde a una contravención de tránsito?",
        answers: [
            { text: "Verdadero", correct: true},
            { text: "Falso", correct: false},
            { text: "Desconoce", correct: false},
        ]
    },

    {
        question: "Los conductores que conduzcan en estado de embriaguez o bajo los efectos de sustancias estupefacientes, psicotrópicas o preparados que las contengan y del cual provoquen un siniestro del cual resulte la muerte, ¿Qué sanción corresponde?",
        answers: [
            { text: "Pena privativa de la libertad de doce a veinte años", correct: false},
            { text: "Revocatoria definitiva de la licencia para conducir", correct: true},
            { text: "Ninguna de las anteriores", correct: false},
        ]
    },

    {
        question: "El conducir un vehículo cuyas llantas se encuentren lisas o en mal estado, ¿Será sancionado con pena privativa de libertad de cinco a quince días?",
        answers: [
            { text: "Verdadero", correct: true},
            { text: "Falso", correct: false},
            { text: "Desconoce", correct: false},
        ]
    },

    {
        question: "El conducir un vehículo con las luces no encendidas en horas de la noche o conduzca en sitios oscuros como túneles con la luces apagadas, ¿Corresponde a una contravención de tránsito?",
        answers: [
            { text: "Verdadero", correct: true},
            { text: "Falso", correct: false},
            { text: "Desconoce", correct: false},
        ]
    },

    {
        question: "¿Cuál de los siguientes enunciados corresponde a una contravención de tránsito?",
        answers: [
            { text: "La o el conductor que conduce sin mantener una distancia prudente de seguimiento respecto al vehículo y ciclista de adelante", correct: true},
            { text: "La o el conductor que conduce con una distancia prudente de seguimiento respecto al vehículo de adelante", correct: false},
            { text: "La o el conductor que cede el paso y permite el adelantamiento de otros vehículos.", correct: false},
        ]
    },

    {
        question: "La o el conductor de un vehículo automotor que circule con personas en los estribos o pisaderas, baldes de camionetas, parachoques o colgados de las carrocerías de los vehículos, ¿Es una contravención de transito?",
        answers: [
            { text: "Verdadero", correct: true},
            { text: "Falso", correct: false},
            { text: "Desconoce", correct: false},
        ]
    },

    {
        question: "La o el conductor de un vehículo particular que tenga vidrios con películas antisolares oscuras, polarizados o cualquier tipo de adhesivo y que no tenga la debida autorización, ¿Corresponde a una contravención de tránsito?",
        answers: [
            { text: "Verdadero", correct: true},
            { text: "Falso", correct: false},
            { text: "Desconoce", correct: false},
        ]
    },

    {
        question: "¿Qué es la movilidad activa?",
        answers: [
            { text: "Es aquella que depende del movimiento motorizado, incluye el transporte público", correct: false},
            { text: "Es aquella que depende del movimiento físico de las personas, incluye la caminata el uso de la bicicleta y movilidad personal", correct: true},
            { text: "Ninguna de las anteriores", correct: false},
        ]
    },

    {
        question: "¿Cuáles son los derechos de los bisiusuario?",
        answers: [
            { text: "Derecho preferente de vía o circulación en los desvíos de avenidas y carreteras, cruce de caminos intersecciones no señalizadas y ciclovías", correct: false},
            { text: "Disponer vías de circulación privilegiada dentro de las ciudades y en carreteras, como ciclovías y espacios similares", correct: false},
            { text: "Todas la anteriores", correct: true},
        ]
    },

    {
        question: "De acuerdo a la normativa, ¿Dónde tienen derecho a circular los ciclistas?",
        answers: [
            { text: "Únicamente en las sendas especiales destinadas al uso de bicicletas", correct: false},
            { text: "En las aceras, con cuidado respectivo a los peatones", correct: false},
            { text: "Transitar por todas las vías del país con respeto y seguridad.", correct: true},
        ]
    },

    {
        question: "¿En qué momento los conductores son responsables de su seguridad, de los pasajeros y el resto de usuarios viales?",
        answers: [
            { text: "Los conductores no son responsables de lo que el pasajero haga o deje de hacer en cuanto a su seguridad", correct: false},
            { text: "En todo momento", correct: true},
            { text: "Solo cuando esté encendido el motor del vehículo", correct: false},
        ]
    },

    {
        question: "¿Qué se entiende por vía pública?",
        answers: [
            { text: "El lugar por donde circulan los vehículos", correct: false},
            { text: "Espacio público destinado al libre tránsito vehicular, bicicletas y peatonal", correct: true},
            { text: "El lugar por donde circulan los peatones", correct: false},
        ]
    },

    {
        question: "¿Cuáles son las obligaciones de los peatones en la vía pública?",
        answers: [
            { text: "Solicitar transporte o pedir ayuda a los automovilistas en lugares apropiados o prohibidos", correct: false},
            { text: "Cruzar por las esquinas o cruces peatonales en las vías primarías y vías secundarias con más de dos carriles efectivos de circulación; en vías secundarias que cuenten con un máximo de dos carriles efectivos de circulación podrán cruzar en cualquier punto: y siempre y cuando le sea posible hacerlo de manera segura", correct: true},
            { text: "Cruzar la calle por la parte anterior y posterior de los automotores que se hayan detenido momentáneamente", correct: false},
        ]
    },

    {
        question: "¿Cuáles son derechos de los peatonales?",
        answers: [
            { text: "Tener libre circulación sobre las aceras y zonas peatonales exclusivas, tener preferencia de vía sobre todas las intersecciones, inclusive en las tienen que semáforo cuando la luz verde peatonal esté encendida, todo el tiempo en los pasos cebra y en las esquinas no reguladas por semáforos, procurando su propia seguridad y la de los demás", correct: false},
            { text: "Disponer de las vías públicas libres de obstáculos y no invadidas, y contar con infraestructura y señalización vial adecuadas que les brinden seguridad, en especial para las personas pertenecientes a los grupos de atención prioritaria", correct: false},
            { text: "Todas las anteriores", correct: true},
        ]
    },

    {
        question: "Uno de los objetivos de la Ley de Transporte Terrestre Tránsito y Seguridad Vial, es:",
        answers: [
            { text: "Definir sus principios, garantizar el derecho a la educación superior de calidad que propenda a la excelencia", correct: false},
            { text: "Contribuir al desarrollo del País a través de la formulación de políticas, regulaciones, planes, programas y proyectos que garanticen el buen vivir", correct: false},
            { text: "El establecimiento de programas de capacitación y difusión para conductores, peatones, pasajeros y autoridades, en materia de seguridad vial para la creación de una cultura y concienia vial responsable y solidaria", correct: true},
        ]
    },

    {
        question: "¿Cómo se sanciona a los responsables de un siniestro de tránsito no sean conductores (pasajeros, controladores, peatones, etc.)?",
        answers: [
            { text: "Con las mismas penas que a un conductor responsable del siniestro", correct: false},
            { text: "Con las mismas sanciones que un conductor, exceptuando la pérdida de puntos", correct: true},
            { text: "Con la mitad de las penas establecidas para un conductor responsable de un siniestro", correct: false},
        ]
    },

    {
        question: "¿Qué implica conducir con prudencia a pesar de las acciones incorrectas de otros conductores y de las condiciones adversas del clima y las vías, practicando normas de seguridad para no provocar un siniestro de tránsito?",
        answers: [
            { text: "Conducción con precaución", correct: true},
            { text: "Conducir con rapidez", correct: false},
            { text: "Cumplir con las normas de tránsito", correct: false},
        ]
    },

    {
        question: "¿Qué implica la prevención de siniestros?",
        answers: [
            { text: "Evitar las conductas riesgosas: exceso de velocidad, consumo de alcohol, no uso de cinturón, casco o sistemas de retención infantil, no respetar las señales de tránsito, manejo distraído", correct: false},
            { text: "Desarrollar un sistema seguro de movilidad, lo cual implica infraestructura para la seguridad vial, control y capacitación de los actores viales", correct: false},
            { text: "Todas las anteriores", correct: true},
        ]
    },

    {
        question: "¿Cuáles son los objetivos de la educación vial?",
        answers: [
            { text: "Reducir de forma sistemática los siniestros de tránsito", correct: false},
            { text: "Formar y capacitar a las personas en general para el uso correcto de todos los medios de transporte terrestre", correct: false},
            { text: "Todas las anteriores", correct: true},
        ]
    },

    {
        question: "Los niños menores de 12 años podrán viajar en:",
        answers: [
            { text: "En el asiento delantero con cinturón de seguridad", correct: false},
            { text: "En el asiento delantero sin cinturón de seguridad", correct: false},
            { text: "En los asientos posteriores utilizando los sistemas de retención infantil de acuerdo a la edad y altura", correct: true},
        ]
    },

    {
        question: "¿Para qué sirven los seguros a prueba de niños en los vehículos?",
        answers: [
            { text: "Aseguran las hebillas de los cinturones de seguridad", correct: false},
            { text: "Bloquean las ventanas traseras manteniéndolas cerradas", correct: false},
            { text: "Impiden que las puertas puedan abrirse desde el interior", correct: true},
        ]
    },

    {
        question: "El dispositivo de seguridad pasiva que reduce el desplazamiento de la cabeza hacia atrás para evitar el efecto latigazo cervical, se conoce como:",
        answers: [
            { text: "Apoya cabeza", correct: true},
            { text: "Cinturón de seguridad", correct: false},
            { text: "Airbag", correct: false},
        ]
    },

    {
        question: "¿Cómo se conoce al dispositivo de seguridad pasiva incluida en algunos vehículos el cual se acciona en milisegundos al producirse un impacto?",
        answers: [
            { text: "Apoya cabeza", correct: false},
            { text: "Cinturón de seguridad", correct: false},
            { text: "Airbag o bolsa de aire", correct: true},
        ]
    },

    {
        question: "¿Cuál es la distancia mínima que debe mantener entre vehículo y ciclista al conducir?",
        answers: [
            { text: "1,0 metros", correct: false},
            { text: "1,5 metros", correct: true},
            { text: "Todas las anteriores", correct: false},
        ]
    },

    {
        question: "¿Cuándo debo llevar el kit de emergencia o carretero en mi vehículo?",
        answers: [
            { text: "Solo triángulos", correct: false},
            { text: "Siempre", correct: true},
            { text: "Solo en caso de emergencia", correct: false},
        ]
    },

    {
        question: "¿En un paso cebra no regulado, ¿Quién tiene la preferencia de paso?",
        answers: [
            { text: "Los vehículos en circulación", correct: false},
            { text: "Los Peatones", correct: true},
            { text: "El transporte público", correct: false},
        ]
    },

    {
        question: "En caso de avería mecánica en la vía, ¿Debo poner los triángulos o conos de seguridad?",
        answers: [
            { text: "No, es necesario", correct: false},
            { text: "Si, siempre", correct: true},
            { text: "Solo en caso de haber agentes de tránsito", correct: false},
        ]
    },

    {
        question: "¿A qué distancia mínima antes de una maniobra es obligatorio poner la respectiva luz intermitente?",
        answers: [
            { text: "Cuando ejecuto la maiobra", correct: false},
            { text: "Mínimo 30 metros antes", correct: true},
            { text: "Mínimo 10 metros antes", correct: false},
        ]
    },

    {
        question: "En un siniestro de tránsito las autoridades encargadas del control del tránsito, ¿Pueden detener a las personas involucradas?",
        answers: [
            { text: "No pueden detener a nadie hasta que tengan una orden judicial", correct: false},
            { text: "Pueden detenerlos y ponerlos a las órdenes del fiscal, en el caso donde resultaron personas lesionadas fallecidas", correct: true},
            { text: "Solamente pueden detener a los vehículos", correct: false},
        ]
    },

    {
        question: "Al momento de rebasar a un ciclista en circulación, ¿Qué distancia mínima debe tomar el vehículo?",
        answers: [
            { text: "1 metro", correct: false},
            { text: "1,5 metros", correct: true},
            { text: "50 centímetros", correct: false},
        ]
    },

    {
        question: "¿Qué debe realizar un conductor cuando ve que un bus escolar e institucional se detiene en una parada?",
        answers: [
            { text: "Acelerar la marcha para pasar al bus", correct: false},
            { text: "Esperar y dar el paso a todos los peatones que se bajan del bus", correct: true},
            { text: "Ninguna de las anteriores", correct: false},
        ]
    },

    {
        question: "En las carreteras, ¿Los conductores cuando circulan deben dar preferencia?",
        answers: [
            { text: "Otros conductores", correct: false},
            { text: "Peatones, ciclistas, motociclistas y similares", correct: true},
            { text: "Ninguna de las anteriores", correct: false},
        ]
    },

    {
        question: "¿Qué se presume si un conductor se niega a realizarse pruebas para la detección de alcohol o de la presencia de sustancias estupefacientes?",
        answers: [
            { text: "No", correct: false},
            { text: "Será considerada como presunción de estar en el máximo grado de intoxicación", correct: true},
            { text: "Solo en el día", correct: false},
        ]
    },

    {
        question: "Cuando se conduzca un vehículo a motor y se requiera cruzar una acera para entrar o salir de un estacionamiento, ¿quién tiene preferencia de paso?",
        answers: [
            { text: "El conductor que está saliendo", correct: false},
            { text: "Otros vehículos", correct: false},
            { text: "Peatones, ciclistas y vehículos", correct: true},
        ]
    },

    {
        question: "¿A qué velocidad se estima que un atropellamiento de un adulto sería mortal?",
        answers: [
            { text: "20km/h", correct: false},
            { text: "40km/h", correct: false},
            { text: "60km/h", correct: true},
        ]
    },
    
    {
        question: "En caso de que no exista señalización horizontal y/o vertical, ¿Quién tendría derecho de paso en la vía en caso de que los usuarios presentes incluyan peatones, ciclistas, vehículos livianos, carga pesada?",
        answers: [
            { text: "Peatones", correct: true},
            { text: "Bisiusuarios", correct: false},
            { text: "Transporte público de pasajeros", correct: false},
        ]
    },

    {
        question: "Si un peatón va a cruzar una luz verde intersección del semáforo vehicular o una intersección no regulada y un vehículo va girar, ¿Quién tiene la preferencia de paso?",
        answers: [
            { text: "El auto", correct: false},
            { text: "El peatón", correct: true},
            { text: "Los dos", correct: false},
        ]
    },
    
    {
        question: "¿Qué son las zonas 30?",
        answers: [
            { text: "Zona en donde la velocidad máxima es 30 km/h", correct: true},
            { text: "Es una zona peatonal", correct: false},
            { text: "Zona en donde la velocidad mínima es 30 km/h", correct: false},
        ]
    },

    {
        question: "¿Por qué la movilidad activa es importante?",
        answers: [
            { text: "Está de moda", correct: false},
            { text: "Genera menor impacto ambiental, social y económico", correct: true},
            { text: "Ninguna de las anteriores", correct: false},
        ]
    },

    {
        question: "¿Un pasajero de transporte público puede denunciar ante la autoridad de tránsito, cuando el conductor esté en estado de ebriedad?",
        answers: [
            { text: "Es su obligación", correct: true},
            { text: "Tal vez", correct: false},
            { text: "No", correct: false},
        ]
    },

    {
        question: "¿Es qué porcentaje disminuyen las probabilidades de muerte para un motociclista o ciclista durante un siniestro si utiliza casco homologado?",
        answers: [
            { text: "No disminuyen, aumentan", correct: false},
            { text: "1%", correct: false},
            { text: "39%", correct: true},
        ]
    },
];

const setup = document.getElementById("setup");
const app = document.getElementById("app");
const quiz = document.getElementById("quiz");
const allquestionsb = document.getElementById("all-btn");
const pruebab = document.getElementById("fixed-btn");
const resultElement = document.getElementById("result");
const infoElement = document.getElementById("info");
const statusElement = document.getElementById("estado");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const n=20;

let currentQuestionIndex = 0;
let score = 0;
let quizQuestions = [];

function startQuiz(number = questions.length){
    currentQuestionIndex = 0;
    score = 0;
    quizQuestions = [...questions];
    quizQuestions.sort(()=> Math.random()-0.5);
    quizQuestions = quizQuestions.slice(0, number);
    setup.style.display = "none";
    app.style.display = "block";
    quiz.style.display = "block";
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = quizQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    resultElement.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Obtuviste ${score} de ${quizQuestions.length}`;
    if(quizQuestions.length == 20){
        resultElement.style.display = "block";
        infoElement.innerHTML = `El minimo para aprobar es 16`;
        if(score>=16){
            statusElement.innerHTML = `Estado: Aprobado`;
        }else{
            statusElement.innerHTML = `Estado: Reprobado`
        }
    }
    nextButton.innerHTML = "Empezar de nuevo";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < quizQuestions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(nextButton.innerHTML === "Empezar de nuevo"){
        setup.style.display = "block";
        app.style.display = "none";
        quiz.style.display = "none";
    }else{
        handleNextButton();
    }
});

allquestionsb.addEventListener("click",()=>{
    startQuiz(questions.length);
});

pruebab.addEventListener("click", ()=>{
    const amount = Math.min(
        n,
        questions.length
    );
    startQuiz(amount)
});
