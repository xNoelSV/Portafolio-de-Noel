
// Function that translates the language
function changeLanguage(language) {
    const translations = {
        es: {
            presentation_btnProjects: "PROYECTOS",
            presentation_initialText: "Saludos, soy",
            presentation_nameText: "NOEL SARIÑENA",
            presentation_subnameText: "Full-stack developer líder de varios proyectos personales.",
            headerAbout: "SOBRE MÍ",
            headerProjects: "PROYECTOS",
            headerContact: "CONTACTO",
            headerLanguage: "IDIOMA",
            about_title: "SOBRE MÍ",
            about_subtitle1: "¡Conóceme!",
            about_subtitle2: "Especialidades",
            about_text1_1: "Soy un desarrollador Junior que se está especializando en el FullStack de Aplicaciones Web. Échale un vistazo a algunos de mis trabajos en la sección de Proyectos.",
            about_text1_2: "También me gusta compartir contenido relacionado con lo que he aprendido a lo largo de los años en el Desarrollo de Aplicaciones, para ayudar a otras personas de la comunidad de desarrolladores. Siéntete libre de conectarte o seguirme en mi GitHub, donde publico mis proyectos de programación más grandes.",
            about_text1_3: "Estoy abierto a oportunidades laborales en las que pueda contribuir, aprender y crecer. Si tienes una buena oportunidad que coincida con mis habilidades, no dudes en ",
            about_text1_3_link: "contactarme.",
            proj_title: "PROYECTOS",
            proj_btnRepoMoustache: "REPOSITORIO",
            proj_btnInfoMoustache: "INFORMACIÓN",
            proj_btnRepoMatheorite: "REPOSITORIO",
            proj_btnInfoMatheorite: "INFORMACIÓN",
            proj_btnRepoPortafolio: "REPOSITORIO",
            proj_btnInfoPortafolio: "INFORMACIÓN",
            proj_txtRepoPortafolio: "PORTAFOLIO",
            // -- Moustache
            proj_cardBody_moustache_txt1: "Proyecto Final de Grado Superior: Moustache",
            proj_cardBody_moustache_txt2: "Gestor de Reservas para Barbería",
            proj_cardBody_moustache_txt3: "¡Felicidades por llegar al final de este emocionante proyecto individual que he desarrollado en los últimos 3 meses durante mi Grado Superior! Este proyecto es una aplicación web destinada a facilitar la gestión de reservas en una barbería. Con un enfoque reactivo, he empleado tecnologías como HTML, CSS, JavaScript y PHP para ofrecer una experiencia de usuario dinámica y eficiente.",
            proj_cardBody_moustache_txt4: "Objetivo del Proyecto",
            proj_cardBody_moustache_txt5: "El objetivo principal de este proyecto era crear una aplicación web que simplificara el proceso de reserva en una barbería. Desde la programación de citas por parte de los clientes hasta la gestión eficiente de las reservas por el personal de la barbería, buscaba mejorar la eficiencia y la experiencia del usuario en el contexto de la gestión de citas.",
            proj_cardBody_moustache_txt6: "Tecnologías Utilizadas",
            proj_cardBody_moustache_txt7: "HTML",
            proj_cardBody_moustache_txt7_1: "Utilizado para la estructura básica de la página web, garantizando la accesibilidad y la usabilidad.",
            proj_cardBody_moustache_txt8: "CSS",
            proj_cardBody_moustache_txt8_1: "Implementado para el diseño y estilo de la aplicación, creando una interfaz atractiva y fácil de usar.",
            proj_cardBody_moustache_txt9: "JavaScript",
            proj_cardBody_moustache_txt9_1: "Proporciona la interactividad y la lógica del lado del cliente, mejorando la experiencia del usuario al realizar acciones dinámicas sin necesidad de recargar la página.",
            proj_cardBody_moustache_txt10: "PHP",
            proj_cardBody_moustache_txt10_1: "Empleado para la lógica del lado del servidor, procesando y almacenando la información de las reservas. Además, facilita la comunicación con la base de datos.",
            proj_cardBody_moustache_txt11: "Reactive Design",
            proj_cardBody_moustache_txt11_1: "La aplicación se ha diseñado de manera reactiva, asegurando que sea compatible con diferentes dispositivos y tamaños de pantalla. Esto garantiza una experiencia consistente y agradable tanto en computadoras de escritorio como en dispositivos móviles.",
            proj_cardBody_moustache_txt12: "Valores de Aprendizaje",
            proj_cardBody_moustache_txt13: "Este proyecto, realizado de forma individual en un período de 3 meses, ha sido más que una simple aplicación técnica. Ha representado el crecimiento y desarrollo de habilidades valiosas:",
            proj_cardBody_moustache_txt14: "Autonomía y Autogestión",
            proj_cardBody_moustache_txt14_1: "La capacidad de trabajar de forma independiente, gestionar mi tiempo y priorizar tareas se ha fortalecido significativamente.",
            proj_cardBody_moustache_txt15: "Desarrollo Rápido y Eficiente",
            proj_cardBody_moustache_txt15_1: "El plazo de 3 meses ha exigido eficiencia en el desarrollo, promoviendo una mentalidad de entrega rápida y desarrollo iterativo.",
            proj_cardBody_moustache_txt16: "Resiliencia ante Desafíos",
            proj_cardBody_moustache_txt16_1: "En un proyecto individual, enfrentar desafíos técnicos y superar obstáculos ha requerido resiliencia y determinación para alcanzar soluciones efectivas.",
            proj_cardBody_moustache_txt17: "Compromiso con la Calidad",
            proj_cardBody_moustache_txt17_1: "La responsabilidad de cada aspecto del proyecto ha promovido un compromiso constante con la calidad del código, diseño y experiencia del usuario.",
            proj_cardBody_moustache_txt18: "Aprendizaje Profundo y Rápido",
            proj_cardBody_moustache_txt18_1: "La necesidad de aprender nuevas tecnologías y adaptarse rápidamente ha sido constante, fomentando un aprendizaje profundo y rápido.",
            proj_cardBody_moustache_txt19: "Instrucciones de Despliegue",
            proj_cardBody_moustache_txt20: "Para desplegar la aplicación, sigue estos pasos:",
            proj_cardBody_moustache_txt21: "Clona este repositorio en tu servidor web.",
            proj_cardBody_moustache_txt22: "Configura la base de datos con el script proporcionado en `moustache.sql`.",
            proj_cardBody_moustache_txt23: "Asegúrate de tener un servidor web configurado con soporte para PHP.",
            proj_cardBody_moustache_txt24: "Abre la aplicación en tu navegador preferido.",
            proj_cardBody_moustache_txt25: "¡Disfruta de la experiencia de reserva simplificada en tu barbería favorita!",
            proj_cardBody_moustache_txt26: "Gracias por ser parte de este viaje. Este proyecto representa mi dedicación, aprendizaje y pasión por la creación de soluciones tecnológicas. ¡Espero que esta aplicación sea tan útil y emocionante de usar como fue para mí desarrollarla!",
            // -- Matheorite
            proj_cardBody_matheorite_txt1: "Proyecto Final de Grado Superior: Matheorite",
            proj_cardBody_matheorite_txt2: "Matheorite: Aventura Matemática en el Espacio",
            proj_cardBody_matheorite_txt3: "¡Bienvenido/a a \"Matheorite\", el emocionante proyecto que mi compañero/a y yo hemos desarrollado durante los últimos 3 meses como parte crucial de nuestro Grado Superior! Este juego, centrado en la aventura matemática en el espacio, representa un hito significativo en nuestra formación académica, con un peso sustancial en términos de nota.",
            proj_cardBody_matheorite_txt4: "Objetivo del Proyecto",
            proj_cardBody_matheorite_txt5: "El objetivo principal de \"Matheorite\" es ofrecer una experiencia de juego educativa y entretenida que combine la emoción de un juego espacial con la resolución de problemas matemáticos. A lo largo de distintos niveles, los jugadores enfrentarán desafíos matemáticos para avanzar en la trama y derrotar a los Matheorites, invasores del espacio.",
            proj_cardBody_matheorite_txt6: "Tecnologías Utilizadas",
            proj_cardBody_matheorite_txt7: "Unity2D",
            proj_cardBody_matheorite_txt7_1: "Utilizado como el motor principal para el desarrollo del juego, proporcionando herramientas sólidas para la creación de entornos 2D y la implementación de la lógica del juego.",
            proj_cardBody_matheorite_txt8: "C#",
            proj_cardBody_matheorite_txt8_1: "El lenguaje de programación principal para Unity2D, utilizado para la implementación de la mecánica del juego, la lógica y la interacción entre los elementos.",
            proj_cardBody_matheorite_txt9: "Diseño Colaborativo",
            proj_cardBody_matheorite_txt9_1: "Hemos trabajado en estrecha colaboración para diseñar y crear los gráficos, sonidos y niveles del juego. La comunicación constante fue clave para garantizar la coherencia y la calidad del proyecto.",
            proj_cardBody_matheorite_txt10: "Valores de Aprendizaje",
            proj_cardBody_matheorite_txt11: "Este proyecto \"Matheorite\" ha sido una experiencia enriquecedora que ha contribuido al desarrollo de habilidades técnicas y personales:",
            proj_cardBody_matheorite_txt12: "Colaboración Efectiva",
            proj_cardBody_matheorite_txt12_1: "La colaboración estrecha ha sido esencial, asegurando que nuestras habilidades se complementen y que la visión del juego sea coherente.",
            proj_cardBody_matheorite_txt13: "Gestión de Proyectos en Pareja",
            proj_cardBody_matheorite_txt13_1: "Coordinar tareas, establecer plazos y superar desafíos juntos ha fortalecido nuestras habilidades de gestión de proyectos en un entorno colaborativo.",
            proj_cardBody_matheorite_txt14: "Compromiso con la Educación",
            proj_cardBody_matheorite_txt14_1: "La creación de un juego educativo implica un compromiso constante con la calidad y relevancia de los problemas matemáticos presentados.",
            proj_cardBody_matheorite_txt15: "Responsabilidad Compartida",
            proj_cardBody_matheorite_txt15_1: "La responsabilidad compartida en todos los aspectos del proyecto ha fomentado un sentido de responsabilidad y compromiso mutuo.",
            proj_cardBody_matheorite_txt16: "Aprendizaje a través del Juego",
            proj_cardBody_matheorite_txt16_1: "\"Matheorite\" no solo es un juego, sino también una herramienta educativa. Hemos aprendido a equilibrar la diversión del juego con la efectividad de la enseñanza.",
            proj_cardBody_matheorite_txt17: "Instrucciones de Despliegue",
            proj_cardBody_matheorite_txt18: "Para disfrutar de \"Matheorite\", sigue estos sencillos pasos:",
            proj_cardBody_matheorite_txt19: "Descarga el archivo de instalación desde el repositorio.",
            proj_cardBody_matheorite_txt20: "Instala el juego en tu dispositivo.",
            proj_cardBody_matheorite_txt21: "Embárcate en una aventura matemática en el espacio y destruye todos los meteoritos.",
            proj_cardBody_matheorite_txt22: "Gracias por explorar \"Matheorite\". Este juego representa nuestro esfuerzo conjunto, creatividad y dedicación. ¡Esperamos que disfrutes de la experiencia educativa y de juego que hemos creado con tanto entusiasmo!",
            contact_title: "CONTACTO",
            contact_btnCurriculum: "MI CURRÍCULUM",
            contact_subtitleForm: "Introduce los datos",
            contact_labelInpName: "Nombre y apellidos:",
            contact_labelInpEmail: "Dirección electrónica:",
            contact_labelInpComent: "Comentario:"
        },
        ca: {
            presentation_btnProjects: "PROJECTES",
            presentation_initialText: "Salutacions, sóc",
            presentation_nameText: "NOEL SARIÑENA",
            presentation_subnameText: "Desenvolupador Full-stack líder de diversos projectes personals.",
            headerAbout: "SOBRE MI",
            headerProjects: "PROJECTES",
            headerContact: "CONTACTE",
            headerLanguage: "IDIOMA",
            about_title: "SOBRE MI",
            about_subtitle1: "¡Coneix-me!",
            about_subtitle2: "Especialitats",
            about_text1_1: "Sóc un desenvolupador Junior que s'està especialitzant en el FullStack d'Aplicacions Web. Fes una ullada a alguns dels meus treballs a la secció de Projectes.",
            about_text1_2: "També m'agrada compartir contingut relacionat amb el que he après al llarg dels anys en el Desenvolupament d'Aplicacions, per ajudar altres persones de la comunitat de desenvolupadors. Siéntete lliure de connectar-te o seguir-me al meu GitHub, on publico els meus projectes de programació més grans.",
            about_text1_3: "Estic obert a oportunitats laborals en les quals pugui contribuir, aprendre i créixer. Si tens una bona oportunitat que coincideixi amb les meves habilitats, no dubtis a ",
            about_text1_3_link: "contactar-me.",
            proj_title: "PROJECTES",
            proj_btnRepoMoustache: "REPOSITORI",
            proj_btnInfoMoustache: "INFORMACIÓ",
            proj_btnRepoMatheorite: "REPOSITORI",
            proj_btnInfoMatheorite: "INFORMACIÓ",
            proj_btnRepoPortafolio: "REPOSITORI",
            proj_btnInfoPortafolio: "INFORMACIÓ",
            proj_txtRepoPortafolio: "PORTAFOLI",
            // -- Moustache
            proj_cardBody_moustache_txt1: "Projecte Final de Grau Superior: Moustache",
            proj_cardBody_moustache_txt2: "Gestor de Reserves per a Barberia",
            proj_cardBody_moustache_txt3: "Felicitats per arribar al final d'aquest emocionant projecte individual que he desenvolupat en els últims 3 mesos durant el meu Grau Superior! Aquest projecte és una aplicació web destinada a facilitar la gestió de reserves en una barberia. Amb un enfocament reactiu, he utilitzat tecnologies com HTML, CSS, JavaScript i PHP per oferir una experiència d'usuari dinàmica i eficient.",
            proj_cardBody_moustache_txt4: "Objectiu del Projecte",
            proj_cardBody_moustache_txt5: "L'objectiu principal d'aquest projecte era crear una aplicació web que simplifiqués el procés de reserva en una barberia. Des de la programació de cites per part dels clients fins a la gestió eficient de les reserves per part del personal de la barberia, buscava millorar l'eficiència i l'experiència de l'usuari en el context de la gestió de cites.",
            proj_cardBody_moustache_txt6: "Tecnologies Utilitzades",
            proj_cardBody_moustache_txt7: "HTML",
            proj_cardBody_moustache_txt7_1: "Utilitzat per a l'estructura bàsica de la pàgina web, garantint l'accessibilitat i la usabilitat.",
            proj_cardBody_moustache_txt8: "CSS",
            proj_cardBody_moustache_txt8_1: "Implementat per al disseny i estil de l'aplicació, creant una interfície atractiva i fàcil d'utilitzar.",
            proj_cardBody_moustache_txt9: "JavaScript",
            proj_cardBody_moustache_txt9_1: "Proporciona la interactivitat i la lògica del costat del client, millorant l'experiència de l'usuari en realitzar accions dinàmiques sense necessitat de recarregar la pàgina.",
            proj_cardBody_moustache_txt10: "PHP",
            proj_cardBody_moustache_txt10_1: "Emprat per a la lògica del costat del servidor, processant i emmagatzemant la informació de les reserves. A més, facilita la comunicació amb la base de dades.",
            proj_cardBody_moustache_txt11: "Disseny Reactiu",
            proj_cardBody_moustache_txt11_1: "L'aplicació s'ha dissenyat de manera reactiva, assegurant-se que sigui compatible amb diferents dispositius i mides de pantalla. Això garanteix una experiència consistent i agradable tant en ordinadors d'escriptori com en dispositius mòbils.",
            proj_cardBody_moustache_txt12: "Valors d'Aprenentatge",
            proj_cardBody_moustache_txt13: "Aquest projecte, realitzat de forma individual en un període de 3 mesos, ha estat més que una simple aplicació tècnica. Ha representat el creixement i desenvolupament de habilitats valuosas:",
            proj_cardBody_moustache_txt14: "Autonomia i Autogestió",
            proj_cardBody_moustache_txt14_1: "La capacitat de treballar de forma independent, gestionar el meu temps i prioritzar tasques s'ha reforçat significativament.",
            proj_cardBody_moustache_txt15: "Desenvolupament Ràpid i Eficient",
            proj_cardBody_moustache_txt15_1: "El termini de 3 mesos ha exigit eficiència en el desenvolupament, promoguent una mentalitat d'entrega ràpida i desenvolupament iteratiu.",
            proj_cardBody_moustache_txt16: "Resiliència davant Desafiaments",
            proj_cardBody_moustache_txt16_1: "En un projecte individual, enfrontar desafiaments tècnics i superar obstacles ha requerit resiliència i determinació per assolir solucions efectives.",
            proj_cardBody_moustache_txt17: "Compromís amb la Qualitat",
            proj_cardBody_moustache_txt17_1: "La responsabilitat de cada aspecte del projecte ha promogut un compromís constant amb la qualitat del codi, disseny i experiència de l'usuari.",
            proj_cardBody_moustache_txt18: "Aprenentatge Profund i Ràpid",
            proj_cardBody_moustache_txt18_1: "La necessitat d'aprendre noves tecnologies i adaptar-se ràpidament ha estat constant, fomentant un aprenentatge profund i ràpid.",
            proj_cardBody_moustache_txt19: "Instruccions de Desplegament",
            proj_cardBody_moustache_txt20: "Per desplegar l'aplicació, segueix aquests passos:",
            proj_cardBody_moustache_txt21: "Clona aquest repositori al teu servidor web.",
            proj_cardBody_moustache_txt22: "Configura la base de dades amb l'script proporcionat a `moustache.sql`.",
            proj_cardBody_moustache_txt23: "Assegura't de tenir un servidor web configurat amb suport per PHP.",
            proj_cardBody_moustache_txt24: "Obre l'aplicació al teu navegador preferit.",
            proj_cardBody_moustache_txt25: "¡Disfruta de l'experiència de reserva simplificada a la teva barberia preferida!",
            proj_cardBody_moustache_txt26: "Gràcies per ser part d'aquest viatge. Aquest projecte representa la meva dedicació, aprenentatge i passió per la creació de solucions tecnològiques. ¡Espero que aquesta aplicació sigui tan útil i emocionant d'utilitzar com ho va ser per a mi desenvolupar-la!",
            // -- Matheorite
            proj_cardBody_matheorite_txt1: "Projecte Final de Grau Superior: Matheorite",
            proj_cardBody_matheorite_txt2: "Matheorite: Aventura Matemàtica a l'Espai",
            proj_cardBody_matheorite_txt3: "Benvingut/da a \"Matheorite\", l'apassionant projecte que el meu company/a i jo hem desenvolupat durant els últims 3 mesos com a part crucial del nostre Grau Superior! Aquest joc, centrat en l'aventura matemàtica a l'espai, representa un hito significatiu en la nostra formació acadèmica, amb un pes substancial en termes de nota.",
            proj_cardBody_matheorite_txt4: "Objectiu del Projecte",
            proj_cardBody_matheorite_txt5: "L'objectiu principal de \"Matheorite\" és oferir una experiència de joc educativa i entretinguda que combini l'emoció d'un joc espacial amb la resolució de problemes matemàtics. Al llarg de diferents nivells, els jugadors enfrontaran reptes matemàtics per avançar en la trama i derrotar els Matheorites, invasors de l'espai.",
            proj_cardBody_matheorite_txt6: "Tecnologies Utilitzades",
            proj_cardBody_matheorite_txt7: "Unity2D",
            proj_cardBody_matheorite_txt7_1: "Utilitzat com el motor principal per al desenvolupament del joc, proporcionant eines sòlides per a la creació d'entorns 2D i la implementació de la lògica del joc.",
            proj_cardBody_matheorite_txt8: "C#",
            proj_cardBody_matheorite_txt8_1: "El llenguatge de programació principal per a Unity2D, utilitzat per a la implementació de la mecànica del joc, la lògica i la interacció entre els elements.",
            proj_cardBody_matheorite_txt9: "Disseny Col·laboratiu",
            proj_cardBody_matheorite_txt9_1: "Hem treballat en estreta col·laboració per a dissenyar i crear els gràfics, sons i nivells del joc. La comunicació constant va ser clau per garantir la coherència i la qualitat del projecte.",
            proj_cardBody_matheorite_txt10: "Valors d'Aprenentatge",
            proj_cardBody_matheorite_txt11: "Aquest projecte \"Matheorite\" ha estat una experiència enriquidora que ha contribuït al desenvolupament de habilitats tècniques i personals:",
            proj_cardBody_matheorite_txt12: "Col·laboració Efectiva",
            proj_cardBody_matheorite_txt12_1: "La col·laboració estreta ha estat essencial, assegurant que les nostres habilitats es complementin i que la visió del joc sigui coherent.",
            proj_cardBody_matheorite_txt13: "Gestió de Projectes en Parella",
            proj_cardBody_matheorite_txt13_1: "Coordina tasques, estableix terminis i supera reptes junts ha reforçat les nostres habilitats de gestió de projectes en un entorn col·laboratiu.",
            proj_cardBody_matheorite_txt14: "Compromís amb l'Educació",
            proj_cardBody_matheorite_txt14_1: "La creació d'un joc educatiu implica un compromís constant amb la qualitat i rellevància dels problemes matemàtics presentats.",
            proj_cardBody_matheorite_txt15: "Responsabilitat Compartida",
            proj_cardBody_matheorite_txt15_1: "La responsabilitat compartida en tots els aspectes del projecte ha fomentat un sentiment de responsabilitat i compromís mutu.",
            proj_cardBody_matheorite_txt16: "Aprenentatge a través del Joc",
            proj_cardBody_matheorite_txt16_1: "\"Matheorite\" no és només un joc, sinó també una eina educativa. Hem après a equilibrar la diversió del joc amb l'eficàcia de l'ensenyament.",
            proj_cardBody_matheorite_txt17: "Instruccions de Desplegament",
            proj_cardBody_matheorite_txt18: "Per gaudir de \"Matheorite\", segueix aquests senzills passos:",
            proj_cardBody_matheorite_txt19: "Descarrega l'arxiu d'instal·lació des del repositori.",
            proj_cardBody_matheorite_txt20: "Instal·la el joc al teu dispositiu.",
            proj_cardBody_matheorite_txt21: "Embarca't en una aventura matemàtica a l'espai i destrueix tots els meteorits.",
            proj_cardBody_matheorite_txt22: "Gràcies per explorar \"Matheorite\". Aquest joc representa el nostre esforç conjunt, creativitat i dedicació. Esperem que gaudeixis de l'experiència educativa i de joc que hem creat amb tant entusiasme!",
            contact_title: "CONTACTE",
            contact_btnCurriculum: "EL MEU CURRÍCULUM",
            contact_subtitleForm: "Introdueix les dades",
            contact_labelInpName: "Nom i cognoms:",
            contact_labelInpEmail: "Adreça electrònica:",
            contact_labelInpComent: "Comentari:"
        },
        en: {
            presentation_btnProjects: "PROJECTS",
            presentation_initialText: "Hey, I am",
            presentation_nameText: "NOEL SARIÑENA",
            presentation_subnameText: "Lead full-stack developer of several personal projects.",
            headerAbout: "ABOUT",
            headerProjects: "PROJECTS",
            headerContact: "CONTACT",
            headerLanguage: "LANGUAGE",
            about_title: "ABOUT",
            about_subtitle1: "Know me!",
            about_subtitle2: "Specializations",
            about_text1_1: "I am a Junior developer who is specializing in the FullStack of Web Applications. Check out some of my work in the Projects section.",
            about_text1_2: "I also like sharing content related to the stuff that I have learned over the years in Application Development so it can help other people of the Dev Community. Feel free to connect or follow me on my GitHub where I publish my biggest programming projects.",
            about_text1_3: "I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills then don't hesitate to ",
            about_text1_3_link: "contact me.",
            proj_title: "PROJECTS",
            proj_btnRepoMoustache: "REPOSITORY",
            proj_btnInfoMoustache: "INFORMATION",
            proj_btnRepoMatheorite: "REPOSITORY",
            proj_btnInfoMatheorite: "INFORMATION",
            proj_btnRepoPortafolio: "REPOSITORY",
            proj_btnInfoPortafolio: "INFORMATION",
            proj_txtRepoPortafolio: "PORTFOLIO",
            // -- Moustache
            proj_cardBody_moustache_txt1: "Final Project of Higher Degree: Moustache",
            proj_cardBody_moustache_txt2: "Reservation Manager for Barbershop",
            proj_cardBody_moustache_txt3: "Congratulations on reaching the end of this exciting individual project that I have developed over the last 3 months during my Higher Degree! This project is a web application aimed at facilitating reservation management in a barbershop. With a reactive approach, I have used technologies such as HTML, CSS, JavaScript, and PHP to provide a dynamic and efficient user experience.",
            proj_cardBody_moustache_txt4: "Project Objective",
            proj_cardBody_moustache_txt5: "The main objective of this project was to create a web application that simplifies the reservation process in a barbershop. From customer appointment scheduling to efficient reservation management by barbershop staff, I aimed to improve efficiency and the user experience in the context of appointment management.",
            proj_cardBody_moustache_txt6: "Technologies Used",
            proj_cardBody_moustache_txt7: "HTML",
            proj_cardBody_moustache_txt7_1: "Used for the basic structure of the web page, ensuring accessibility and usability.",
            proj_cardBody_moustache_txt8: "CSS",
            proj_cardBody_moustache_txt8_1: "Implemented for the design and style of the application, creating an attractive and user-friendly interface.",
            proj_cardBody_moustache_txt9: "JavaScript",
            proj_cardBody_moustache_txt9_1: "Provides interactivity and client-side logic, enhancing the user experience by performing dynamic actions without reloading the page.",
            proj_cardBody_moustache_txt10: "PHP",
            proj_cardBody_moustache_txt10_1: "Used for server-side logic, processing and storing reservation information. It also facilitates communication with the database.",
            proj_cardBody_moustache_txt11: "Reactive Design",
            proj_cardBody_moustache_txt11_1: "The application has been designed reactively, ensuring compatibility with different devices and screen sizes. This ensures a consistent and pleasant experience on both desktop computers and mobile devices.",
            proj_cardBody_moustache_txt12: "Learning Values",
            proj_cardBody_moustache_txt13: "This project, carried out individually over a period of 3 months, has been more than just a technical application. It has represented the growth and development of valuable skills:",
            proj_cardBody_moustache_txt14: "Autonomy and Self-Management",
            proj_cardBody_moustache_txt14_1: "The ability to work independently, manage my time, and prioritize tasks has significantly strengthened.",
            proj_cardBody_moustache_txt15: "Rapid and Efficient Development",
            proj_cardBody_moustache_txt15_1: "The 3-month timeframe has demanded efficiency in development, promoting a mindset of quick delivery and iterative development.",
            proj_cardBody_moustache_txt16: "Resilience to Challenges",
            proj_cardBody_moustache_txt16_1: "In an individual project, facing technical challenges and overcoming obstacles has required resilience and determination to achieve effective solutions.",
            proj_cardBody_moustache_txt17: "Commitment to Quality",
            proj_cardBody_moustache_txt17_1: "The responsibility for every aspect of the project has promoted a consistent commitment to code quality, design, and user experience.",
            proj_cardBody_moustache_txt18: "Deep and Fast Learning",
            proj_cardBody_moustache_txt18_1: "The need to learn new technologies and adapt quickly has been constant, fostering deep and rapid learning.",
            proj_cardBody_moustache_txt19: "Deployment Instructions",
            proj_cardBody_moustache_txt20: "To deploy the application, follow these steps:",
            proj_cardBody_moustache_txt21: "Clone this repository on your web server.",
            proj_cardBody_moustache_txt22: "Set up the database with the script provided in `moustache.sql`.",
            proj_cardBody_moustache_txt23: "Make sure you have a web server configured with support for PHP.",
            proj_cardBody_moustache_txt24: "Open the application in your preferred browser.",
            proj_cardBody_moustache_txt25: "Enjoy the simplified reservation experience at your favorite barbershop!",
            proj_cardBody_moustache_txt26: "Thank you for being part of this journey. This project represents my dedication, learning, and passion for creating technological solutions. I hope this application is as useful and exciting to use as it was for me to develop!",
            // -- Matheorite
            proj_cardBody_matheorite_txt1: "Final Project of Higher Degree: Matheorite",
            proj_cardBody_matheorite_txt2: "Matheorite: Mathematical Adventure in Space",
            proj_cardBody_matheorite_txt3: "Welcome to 'Matheorite,' the exciting project that my partner and I have developed over the last 3 months as a crucial part of our Higher Degree! This game, focused on mathematical adventure in space, represents a significant milestone in our academic training, with substantial weight in terms of grades.",
            proj_cardBody_matheorite_txt4: "Project Objective",
            proj_cardBody_matheorite_txt5: "The main objective of 'Matheorite' is to offer an educational and entertaining gaming experience that combines the excitement of a space game with solving mathematical problems. Throughout different levels, players will face mathematical challenges to advance in the plot and defeat the Matheorites, space invaders.",
            proj_cardBody_matheorite_txt6: "Technologies Used",
            proj_cardBody_matheorite_txt7: "Unity2D",
            proj_cardBody_matheorite_txt7_1: "Used as the main engine for game development, providing robust tools for creating 2D environments and implementing game logic.",
            proj_cardBody_matheorite_txt8: "C#",
            proj_cardBody_matheorite_txt8_1: "The main programming language for Unity2D, used for implementing game mechanics, logic, and interaction between elements.",
            proj_cardBody_matheorite_txt9: "Collaborative Design",
            proj_cardBody_matheorite_txt9_1: "We worked closely to design and create the graphics, sounds, and levels of the game. Constant communication was key to ensuring project coherence and quality.",
            proj_cardBody_matheorite_txt10: "Learning Values",
            proj_cardBody_matheorite_txt11: "This 'Matheorite' project has been an enriching experience contributing to the development of technical and personal skills:",
            proj_cardBody_matheorite_txt12: "Effective Collaboration",
            proj_cardBody_matheorite_txt12_1: "Close collaboration has been essential, ensuring our skills complement each other and that the game's vision is consistent.",
            proj_cardBody_matheorite_txt13: "Pair Project Management",
            proj_cardBody_matheorite_txt13_1: "Coordinating tasks, setting deadlines, and overcoming challenges together has strengthened our project management skills in a collaborative environment.",
            proj_cardBody_matheorite_txt14: "Commitment to Education",
            proj_cardBody_matheorite_txt14_1: "Creating an educational game involves constant commitment to the quality and relevance of the presented mathematical problems.",
            proj_cardBody_matheorite_txt15: "Shared Responsibility",
            proj_cardBody_matheorite_txt15_1: "Shared responsibility in all aspects of the project has fostered a sense of mutual responsibility and commitment.",
            proj_cardBody_matheorite_txt16: "Learning through Play",
            proj_cardBody_matheorite_txt16_1: "'Matheorite' is not just a game but also an educational tool. We've learned to balance the fun of the game with the effectiveness of teaching.",
            proj_cardBody_matheorite_txt17: "Deployment Instructions",
            proj_cardBody_matheorite_txt18: "To enjoy 'Matheorite,' follow these simple steps:",
            proj_cardBody_matheorite_txt19: "Download the installation file from the repository.",
            proj_cardBody_matheorite_txt20: "Install the game on your device.",
            proj_cardBody_matheorite_txt21: "Embark on a mathematical adventure in space and destroy all the meteorites.",
            proj_cardBody_matheorite_txt22: "Thank you for exploring 'Matheorite.' This game represents our joint effort, creativity, and dedication. We hope you enjoy the educational and gaming experience we've created with so much enthusiasm!",
            contact_title: "CONTACT",
            contact_btnCurriculum: "MY RESUME",
            contact_subtitleForm: "Enter the data",
            contact_labelInpName: "Name and surname:",
            contact_labelInpEmail: "E-mail:",
            contact_labelInpComent: "Comments:"
        },
        // More traductions if necessary
    };

    // Get the IDs of texts who will be translated
    // Presentation
    const presentation_btnProjects = document.getElementById("presentation_btnProjects");
    const presentation_initialText = document.getElementById("presentation_initialText");
    const presentation_nameText = document.getElementById("presentation_nameText");
    const presentation_subnameText = document.getElementById("presentation_subnameText");
    // Header
    const headerAbout = document.getElementById("headerAbout");
    const headerProjects = document.getElementById("headerProjects");
    const headerContact = document.getElementById("headerContact");
    const headerLanguage = document.getElementById("headerLanguage");
    // About
    const about_title = document.getElementById("about_title");
    const about_subtitle1 = document.getElementById("about_subtitle1");
    const about_subtitle2 = document.getElementById("about_subtitle2");
    const about_text1_1 = document.getElementById("about_text1_1");
    const about_text1_2 = document.getElementById("about_text1_2");
    const about_text1_3 = document.getElementById("about_text1_3");
    const about_text1_3_link = document.getElementById("about_text1_3_link");
    // Project
    const proj_title = document.getElementById("proj_title");
    const proj_btnRepoMoustache = document.getElementById("proj_btnRepoMoustache");
    const proj_btnInfoMoustache = document.getElementById("proj_btnInfoMoustache");
    const proj_btnRepoMatheorite = document.getElementById("proj_btnRepoMatheorite");
    const proj_btnInfoMatheorite = document.getElementById("proj_btnInfoMatheorite");
    const proj_btnRepoPortafolio = document.getElementById("proj_btnRepoPortafolio");
    const proj_btnInfoPortafolio = document.getElementById("proj_btnInfoPortafolio");
    const proj_txtRepoPortafolio = document.getElementById("proj_txtRepoPortafolio");
    // -- Moustache
    const proj_cardBody_moustache_txt1 = document.getElementById("proj_cardBody_moustache_txt1");
    const proj_cardBody_moustache_txt2 = document.getElementById("proj_cardBody_moustache_txt2");
    const proj_cardBody_moustache_txt3 = document.getElementById("proj_cardBody_moustache_txt3");
    const proj_cardBody_moustache_txt4 = document.getElementById("proj_cardBody_moustache_txt4");
    const proj_cardBody_moustache_txt5 = document.getElementById("proj_cardBody_moustache_txt5");
    const proj_cardBody_moustache_txt6 = document.getElementById("proj_cardBody_moustache_txt6");
    const proj_cardBody_moustache_txt7 = document.getElementById("proj_cardBody_moustache_txt7");
    const proj_cardBody_moustache_txt7_1 = document.getElementById("proj_cardBody_moustache_txt7_1");
    const proj_cardBody_moustache_txt8 = document.getElementById("proj_cardBody_moustache_txt8");
    const proj_cardBody_moustache_txt8_1 = document.getElementById("proj_cardBody_moustache_txt8_1");
    const proj_cardBody_moustache_txt9 = document.getElementById("proj_cardBody_moustache_txt9");
    const proj_cardBody_moustache_txt9_1 = document.getElementById("proj_cardBody_moustache_txt9_1");
    const proj_cardBody_moustache_txt10 = document.getElementById("proj_cardBody_moustache_txt10");
    const proj_cardBody_moustache_txt10_1 = document.getElementById("proj_cardBody_moustache_txt10_1");
    const proj_cardBody_moustache_txt11 = document.getElementById("proj_cardBody_moustache_txt11");
    const proj_cardBody_moustache_txt11_1 = document.getElementById("proj_cardBody_moustache_txt11_1");
    const proj_cardBody_moustache_txt12 = document.getElementById("proj_cardBody_moustache_txt12");
    const proj_cardBody_moustache_txt13 = document.getElementById("proj_cardBody_moustache_txt13");
    const proj_cardBody_moustache_txt14 = document.getElementById("proj_cardBody_moustache_txt14");
    const proj_cardBody_moustache_txt14_1 = document.getElementById("proj_cardBody_moustache_txt14_1");
    const proj_cardBody_moustache_txt15 = document.getElementById("proj_cardBody_moustache_txt15");
    const proj_cardBody_moustache_txt15_1 = document.getElementById("proj_cardBody_moustache_txt15_1");
    const proj_cardBody_moustache_txt16 = document.getElementById("proj_cardBody_moustache_txt16");
    const proj_cardBody_moustache_txt16_1 = document.getElementById("proj_cardBody_moustache_txt16_1");
    const proj_cardBody_moustache_txt17 = document.getElementById("proj_cardBody_moustache_txt17");
    const proj_cardBody_moustache_txt17_1 = document.getElementById("proj_cardBody_moustache_txt17_1");
    const proj_cardBody_moustache_txt18 = document.getElementById("proj_cardBody_moustache_txt18");
    const proj_cardBody_moustache_txt18_1 = document.getElementById("proj_cardBody_moustache_txt18_1");
    const proj_cardBody_moustache_txt19 = document.getElementById("proj_cardBody_moustache_txt19");
    const proj_cardBody_moustache_txt20 = document.getElementById("proj_cardBody_moustache_txt20");
    const proj_cardBody_moustache_txt21 = document.getElementById("proj_cardBody_moustache_txt21");
    const proj_cardBody_moustache_txt22 = document.getElementById("proj_cardBody_moustache_txt22");
    const proj_cardBody_moustache_txt23 = document.getElementById("proj_cardBody_moustache_txt23");
    const proj_cardBody_moustache_txt24 = document.getElementById("proj_cardBody_moustache_txt24");
    const proj_cardBody_moustache_txt25 = document.getElementById("proj_cardBody_moustache_txt25");
    const proj_cardBody_moustache_txt26 = document.getElementById("proj_cardBody_moustache_txt26");
    // -- Matheorite
    const proj_cardBody_matheorite_txt1 = document.getElementById("proj_cardBody_matheorite_txt1");
    const proj_cardBody_matheorite_txt2 = document.getElementById("proj_cardBody_matheorite_txt2");
    const proj_cardBody_matheorite_txt3 = document.getElementById("proj_cardBody_matheorite_txt3");
    const proj_cardBody_matheorite_txt4 = document.getElementById("proj_cardBody_matheorite_txt4");
    const proj_cardBody_matheorite_txt5 = document.getElementById("proj_cardBody_matheorite_txt5");
    const proj_cardBody_matheorite_txt6 = document.getElementById("proj_cardBody_matheorite_txt6");
    const proj_cardBody_matheorite_txt7 = document.getElementById("proj_cardBody_matheorite_txt7");
    const proj_cardBody_matheorite_txt7_1 = document.getElementById("proj_cardBody_matheorite_txt7_1");
    const proj_cardBody_matheorite_txt8 = document.getElementById("proj_cardBody_matheorite_txt8");
    const proj_cardBody_matheorite_txt8_1 = document.getElementById("proj_cardBody_matheorite_txt8_1");
    const proj_cardBody_matheorite_txt9 = document.getElementById("proj_cardBody_matheorite_txt9");
    const proj_cardBody_matheorite_txt9_1 = document.getElementById("proj_cardBody_matheorite_txt9_1");
    const proj_cardBody_matheorite_txt10 = document.getElementById("proj_cardBody_matheorite_txt10");
    const proj_cardBody_matheorite_txt11 = document.getElementById("proj_cardBody_matheorite_txt11");
    const proj_cardBody_matheorite_txt12 = document.getElementById("proj_cardBody_matheorite_txt12");
    const proj_cardBody_matheorite_txt12_1 = document.getElementById("proj_cardBody_matheorite_txt12_1");
    const proj_cardBody_matheorite_txt13 = document.getElementById("proj_cardBody_matheorite_txt13");
    const proj_cardBody_matheorite_txt13_1 = document.getElementById("proj_cardBody_matheorite_txt13_1");
    const proj_cardBody_matheorite_txt14 = document.getElementById("proj_cardBody_matheorite_txt14");
    const proj_cardBody_matheorite_txt14_1 = document.getElementById("proj_cardBody_matheorite_txt14_1");
    const proj_cardBody_matheorite_txt15 = document.getElementById("proj_cardBody_matheorite_txt15");
    const proj_cardBody_matheorite_txt15_1 = document.getElementById("proj_cardBody_matheorite_txt15_1");
    const proj_cardBody_matheorite_txt16 = document.getElementById("proj_cardBody_matheorite_txt16");
    const proj_cardBody_matheorite_txt16_1 = document.getElementById("proj_cardBody_matheorite_txt16_1");
    const proj_cardBody_matheorite_txt17 = document.getElementById("proj_cardBody_matheorite_txt17");
    const proj_cardBody_matheorite_txt18 = document.getElementById("proj_cardBody_matheorite_txt18");
    const proj_cardBody_matheorite_txt19 = document.getElementById("proj_cardBody_matheorite_txt19");
    const proj_cardBody_matheorite_txt20 = document.getElementById("proj_cardBody_matheorite_txt20");
    const proj_cardBody_matheorite_txt21 = document.getElementById("proj_cardBody_matheorite_txt21");
    const proj_cardBody_matheorite_txt22 = document.getElementById("proj_cardBody_matheorite_txt22");

    // Contact
    const contact_title = document.getElementById("contact_title");
    const contact_btnCurriculum = document.getElementById("contact_btnCurriculum");
    const contact_labelInpName = document.getElementById("contact_labelInpName");
    const contact_labelInpEmail = document.getElementById("contact_labelInpEmail");
    const contact_labelInpComent = document.getElementById("contact_labelInpComent");
    const contact_subtitleForm = document.getElementById("contact_subtitleForm");

    // Verify traduction tag
    if (translations[language]) {
        // Presentation
        presentation_btnProjects.textContent = translations[language].presentation_btnProjects;
        presentation_initialText.textContent = translations[language].presentation_initialText;
        presentation_nameText.textContent = translations[language].presentation_nameText;
        presentation_subnameText.textContent = translations[language].presentation_subnameText;
        // Header
        headerAbout.textContent = translations[language].headerAbout;
        headerProjects.textContent = translations[language].headerProjects;
        headerContact.textContent = translations[language].headerContact;
        headerLanguage.textContent = translations[language].headerLanguage;
        // About
        about_title.textContent = translations[language].about_title;
        about_subtitle1.textContent = translations[language].about_subtitle1;
        about_subtitle2.textContent = translations[language].about_subtitle2;
        about_text1_1.textContent = translations[language].about_text1_1;
        about_text1_2.textContent = translations[language].about_text1_2;
        about_text1_3.textContent = translations[language].about_text1_3;
        about_text1_3_link.textContent = translations[language].about_text1_3_link;
        // Project
        proj_title.textContent = translations[language].proj_title;
        proj_btnRepoMoustache.textContent = translations[language].proj_btnRepoMoustache;
        proj_btnInfoMoustache.textContent = translations[language].proj_btnInfoMoustache;
        proj_btnRepoMatheorite.textContent = translations[language].proj_btnRepoMatheorite;
        proj_btnInfoMatheorite.textContent = translations[language].proj_btnInfoMatheorite;
        proj_btnRepoPortafolio.textContent = translations[language].proj_btnRepoPortafolio;
        proj_btnInfoPortafolio.textContent = translations[language].proj_btnInfoPortafolio;
        proj_txtRepoPortafolio.textContent = translations[language].proj_txtRepoPortafolio;
        // -- Moustache
        proj_cardBody_moustache_txt1.textContent = translations[language].proj_cardBody_moustache_txt1;
        proj_cardBody_moustache_txt2.textContent = translations[language].proj_cardBody_moustache_txt2;
        proj_cardBody_moustache_txt3.textContent = translations[language].proj_cardBody_moustache_txt3;
        proj_cardBody_moustache_txt4.textContent = translations[language].proj_cardBody_moustache_txt4;
        proj_cardBody_moustache_txt5.textContent = translations[language].proj_cardBody_moustache_txt5;
        proj_cardBody_moustache_txt6.textContent = translations[language].proj_cardBody_moustache_txt6;
        proj_cardBody_moustache_txt7.textContent = translations[language].proj_cardBody_moustache_txt7;
        proj_cardBody_moustache_txt7_1.textContent = translations[language].proj_cardBody_moustache_txt7_1;
        proj_cardBody_moustache_txt8.textContent = translations[language].proj_cardBody_moustache_txt8;
        proj_cardBody_moustache_txt8_1.textContent = translations[language].proj_cardBody_moustache_txt8_1;
        proj_cardBody_moustache_txt9.textContent = translations[language].proj_cardBody_moustache_txt9;
        proj_cardBody_moustache_txt9_1.textContent = translations[language].proj_cardBody_moustache_txt9_1;
        proj_cardBody_moustache_txt10.textContent = translations[language].proj_cardBody_moustache_txt10;
        proj_cardBody_moustache_txt10_1.textContent = translations[language].proj_cardBody_moustache_txt10_1;
        proj_cardBody_moustache_txt11.textContent = translations[language].proj_cardBody_moustache_txt11;
        proj_cardBody_moustache_txt11_1.textContent = translations[language].proj_cardBody_moustache_txt11_1;
        proj_cardBody_moustache_txt12.textContent = translations[language].proj_cardBody_moustache_txt12;
        proj_cardBody_moustache_txt13.textContent = translations[language].proj_cardBody_moustache_txt13;
        proj_cardBody_moustache_txt14.textContent = translations[language].proj_cardBody_moustache_txt14;
        proj_cardBody_moustache_txt14_1.textContent = translations[language].proj_cardBody_moustache_txt14_1;
        proj_cardBody_moustache_txt15.textContent = translations[language].proj_cardBody_moustache_txt15;
        proj_cardBody_moustache_txt15_1.textContent = translations[language].proj_cardBody_moustache_txt15_1;
        proj_cardBody_moustache_txt16.textContent = translations[language].proj_cardBody_moustache_txt16;
        proj_cardBody_moustache_txt16_1.textContent = translations[language].proj_cardBody_moustache_txt16_1;
        proj_cardBody_moustache_txt17.textContent = translations[language].proj_cardBody_moustache_txt17;
        proj_cardBody_moustache_txt17_1.textContent = translations[language].proj_cardBody_moustache_txt17_1;
        proj_cardBody_moustache_txt18.textContent = translations[language].proj_cardBody_moustache_txt18;
        proj_cardBody_moustache_txt18_1.textContent = translations[language].proj_cardBody_moustache_txt18_1;
        proj_cardBody_moustache_txt19.textContent = translations[language].proj_cardBody_moustache_txt19;
        proj_cardBody_moustache_txt20.textContent = translations[language].proj_cardBody_moustache_txt20;
        proj_cardBody_moustache_txt21.textContent = translations[language].proj_cardBody_moustache_txt21;
        proj_cardBody_moustache_txt22.textContent = translations[language].proj_cardBody_moustache_txt22;
        proj_cardBody_moustache_txt23.textContent = translations[language].proj_cardBody_moustache_txt23;
        proj_cardBody_moustache_txt24.textContent = translations[language].proj_cardBody_moustache_txt24;
        proj_cardBody_moustache_txt25.textContent = translations[language].proj_cardBody_moustache_txt25;
        proj_cardBody_moustache_txt26.textContent = translations[language].proj_cardBody_moustache_txt26;
        // -- Matheorite
        proj_cardBody_matheorite_txt1.textContent = translations[language].proj_cardBody_matheorite_txt1;
        proj_cardBody_matheorite_txt2.textContent = translations[language].proj_cardBody_matheorite_txt2;
        proj_cardBody_matheorite_txt3.textContent = translations[language].proj_cardBody_matheorite_txt3;
        proj_cardBody_matheorite_txt4.textContent = translations[language].proj_cardBody_matheorite_txt4;
        proj_cardBody_matheorite_txt5.textContent = translations[language].proj_cardBody_matheorite_txt5;
        proj_cardBody_matheorite_txt6.textContent = translations[language].proj_cardBody_matheorite_txt6;
        proj_cardBody_matheorite_txt7.textContent = translations[language].proj_cardBody_matheorite_txt7;
        proj_cardBody_matheorite_txt7_1.textContent = translations[language].proj_cardBody_matheorite_txt7_1;
        proj_cardBody_matheorite_txt8.textContent = translations[language].proj_cardBody_matheorite_txt8;
        proj_cardBody_matheorite_txt8_1.textContent = translations[language].proj_cardBody_matheorite_txt8_1;
        proj_cardBody_matheorite_txt9.textContent = translations[language].proj_cardBody_matheorite_txt9;
        proj_cardBody_matheorite_txt9_1.textContent = translations[language].proj_cardBody_matheorite_txt9_1;
        proj_cardBody_matheorite_txt10.textContent = translations[language].proj_cardBody_matheorite_txt10;
        proj_cardBody_matheorite_txt11.textContent = translations[language].proj_cardBody_matheorite_txt11;
        proj_cardBody_matheorite_txt12.textContent = translations[language].proj_cardBody_matheorite_txt12;
        proj_cardBody_matheorite_txt12_1.textContent = translations[language].proj_cardBody_matheorite_txt12_1;
        proj_cardBody_matheorite_txt13.textContent = translations[language].proj_cardBody_matheorite_txt13;
        proj_cardBody_matheorite_txt13_1.textContent = translations[language].proj_cardBody_matheorite_txt13_1;
        proj_cardBody_matheorite_txt14.textContent = translations[language].proj_cardBody_matheorite_txt14;
        proj_cardBody_matheorite_txt14_1.textContent = translations[language].proj_cardBody_matheorite_txt14_1;
        proj_cardBody_matheorite_txt15.textContent = translations[language].proj_cardBody_matheorite_txt15;
        proj_cardBody_matheorite_txt15_1.textContent = translations[language].proj_cardBody_matheorite_txt15_1;
        proj_cardBody_matheorite_txt16.textContent = translations[language].proj_cardBody_matheorite_txt16;
        proj_cardBody_matheorite_txt16_1.textContent = translations[language].proj_cardBody_matheorite_txt16_1;
        proj_cardBody_matheorite_txt17.textContent = translations[language].proj_cardBody_matheorite_txt17;
        proj_cardBody_matheorite_txt18.textContent = translations[language].proj_cardBody_matheorite_txt18;
        proj_cardBody_matheorite_txt19.textContent = translations[language].proj_cardBody_matheorite_txt19;
        proj_cardBody_matheorite_txt20.textContent = translations[language].proj_cardBody_matheorite_txt20;
        proj_cardBody_matheorite_txt21.textContent = translations[language].proj_cardBody_matheorite_txt21;
        proj_cardBody_matheorite_txt22.textContent = translations[language].proj_cardBody_matheorite_txt22;

        // Contact
        contact_title.textContent = translations[language].contact_title;
        //contact_btnCurriculum.textContent = translations[language].contact_btnCurriculum;
        contact_labelInpName.textContent = translations[language].contact_labelInpName;
        contact_labelInpEmail.textContent = translations[language].contact_labelInpEmail;
        contact_labelInpComent.textContent = translations[language].contact_labelInpComent;
        contact_subtitleForm.textContent = translations[language].contact_subtitleForm;
    }
}

// Event that transalte the page.
document.addEventListener("DOMContentLoaded", function () {
    const languageDropdown = document.querySelector(".dropdown-menu");
    languageDropdown.addEventListener("click", function (event) {
        if (event.target.getAttribute("data-language")) {
            const selectedLanguage = event.target.getAttribute("data-language");
            changeLanguage(selectedLanguage);
        }
    });
});