import React from 'react';
import { useState } from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import HeaderContext from '../with_context/HeaderContext';
import MainContext from '../with_context/MainContext';
import FooterContext from '../with_context/FooterContext';
import { LanguageProvider } from '../context/LanguageContext';
import { AuthProvider } from '../context/AuthContext';



function MyPageContext() {
    return (
        <div className='my-page'>

            <ThemeProvider>
                <LanguageProvider>
                    <AuthProvider>
                        <HeaderContext />
                        <MainContext />
                        <FooterContext />
                    </AuthProvider>
                </LanguageProvider>
            </ThemeProvider>

        </div>
    )
}

export default MyPageContext;