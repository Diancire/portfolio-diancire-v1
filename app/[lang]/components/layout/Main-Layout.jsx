import React from 'react';
import dynamic from 'next/dynamic';

const Navbar = dynamic(()=>import('./Navbar'))
const Footer = dynamic(()=>import('./Footer'))

export default function MainLayout({ children, dict, lang }) {
    return (
        <div>
            <Navbar dict={dict} lang={lang} />
            {children}
            <Footer dict={dict} />
        </div>
    );
}
