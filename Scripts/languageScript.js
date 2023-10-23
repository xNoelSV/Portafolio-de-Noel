
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
            contact_title: "CONTACTO",
            contact_btnCurriculum: "MI CURRÍCULUM",
            contact_subtitleForm: "Introduce los datos",
            contact_labelInpName: "Nombre y apellidos:",
            contact_labelInpEmail: "Dirección electrónica:",
            contact_labelInpComent: "Comentario:"
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