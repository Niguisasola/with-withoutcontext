import { createContext, useState } from "react";

const LanguageContext = createContext();
const initiallanguage = "es";

const translation = {
    es: {
        headerTitle: "Mi aplicación SIN context API",
        headerSubtitle: "Mi cabecera",
        headerLight: "claro",
        headerDark: "oscuro",
        buttonLogin: "Iniciar Sesión",
        buttonLogout: "Cerrar Sesión",
        mainWelcome: "Bienvenid@, Invitad@",
        mainHello: "Hola, Usuari@",
        mainContent: "Mi contenido principal",
        footerTitle: "Mi pie de página"
    },
    en: {
        headerTitle: "My App WITHOUT context API",
        headerSubtitle: "My header",
        headerLight: "light",
        headerDark: "dark",
        buttonLogin: "Log In",
        buttonLogout: "Logout",
        mainWelcome: "Welcome, guest",
        mainHello: "Hello, user",
        mainContent: "My main content",
        footerTitle: "My footer"
    },
}

const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState(initiallanguage);
    const [text, setText] = useState(translation[language]);

    const handleLanguage = (e) => {
        if (e.target.value === 'es') {
            setLanguage('es')
            setText(translation.es)
        }
        else {
            setLanguage('en')
            setText(translation.en)
        }
    }

    const data = {
        text,
        language,
        translation,
        handleLanguage
    }
    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    )
}

export { LanguageProvider };
export default LanguageContext;