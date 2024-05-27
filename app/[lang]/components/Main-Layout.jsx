import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout({ children, dict, lang }) {
    return (
        <div>
            <Navbar dict={dict} lang={lang} />
            {children}
            <Footer dict={dict} />
        </div>
    );
}
