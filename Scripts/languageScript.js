
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
            headerResume: "CURRÍCULUM",
            headerContact: "CONTACTO",
            headerLanguage: "IDIOMA",
            about_title: "SOBRE MÍ",
            about_subtitle1: "¡Conóceme!",
            about_subtitle2: "Especialidades",
            about_text1_1: "",
            about_text1_2: "",
            about_text1_3: ""
        },
        en: {
            presentation_btnProjects: "PROJECTS",
            presentation_initialText: "Hey, I am",
            presentation_nameText: "NOEL SARIÑENA",
            presentation_subnameText: "Lead full-stack developer of several personal projects.",
            headerAbout: "ABOUT",
            headerProjects: "PROJECTS",
            headerResume: "RESUME",
            headerContact: "CONTACT",
            headerLanguage: "LANGUAGE",
            about_title: "ABOUT",
            about_subtitle1: "Know me!",
            about_subtitle2: "Specializations",
            about_text1_1: "I'm a FullStack Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.",
            about_text1_2: "I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming.",
            about_text1_3: "I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me."
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
    const headerResume = document.getElementById("headerResume");
    const headerContact = document.getElementById("headerContact");
    const headerLanguage = document.getElementById("headerLanguage");
        // About
    const about_title = document.getElementById("about_title");
    const about_subtitle1 = document.getElementById("about_subtitle1");
    const about_subtitle2 = document.getElementById("about_subtitle2");
    const about_text1_1 = document.getElementById("about_text1_1");
    const about_text1_2 = document.getElementById("about_text1_2");
    const about_text1_3 = document.getElementById("about_text1_3");

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
        headerResume.textContent = translations[language].headerResume;
        headerContact.textContent = translations[language].headerContact;
        headerLanguage.textContent = translations[language].headerLanguage;
        // About
        about_title.textContent = translations[language].about_title;
        about_subtitle1.textContent = translations[language].about_subtitle1;
        about_subtitle2.textContent = translations[language].about_subtitle2;
        about_text1_1.textContent = translations[language].about_text1_1;
        about_text1_2.textContent = translations[language].about_text1_2;
        about_text1_3.textContent = translations[language].about_text1_3;
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