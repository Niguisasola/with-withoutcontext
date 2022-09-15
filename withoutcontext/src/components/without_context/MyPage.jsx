import React from 'react';
import { useState } from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

const initialTheme = "light";
const initiallanguage = "es";
const initialAuth = null;

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

function MyPage() {
    const [theme, setTheme] = useState(initialTheme);
    const [language, setLanguage] = useState(initiallanguage);
    const [text, setText] = useState(translation[language]);
    const [auth, setAuth] = useState(initialAuth)

    const handleTheme = (e) => {
        if(e.target.value === 'light'){
            setTheme('light')
        }else{
            setTheme('dark')
        }
    }

    const handleLanguage = (e) => {
        if(e.target.value === 'es'){
            setLanguage('es')
            setText(translation.es)
        }
        else{
            setLanguage('en')
            setText(translation.en)
        }
    }

    const handleAuth = () =>{
        if(auth){
            setAuth(null);
        }
        else{
            setAuth(true);
        }
    }


  return (
    <div className='my-page'>
        
        <Header 
        theme={theme} 
        handleTheme ={handleTheme}
        text={text}
        handleLanguage={handleLanguage}
        auth={auth}
        handleAuth={handleAuth}/>

        <Main 
        theme={theme}
        text={text}
        auth={auth}/>

        <Footer 
        theme={theme}
        text={text}/>

    </div>
  )
}

export default MyPage;