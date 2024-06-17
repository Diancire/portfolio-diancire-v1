import React from 'react';
import dynamic from 'next/dynamic';
import site_bg from '../../../../public/site-bg.webp'

const Navbar = dynamic(()=>import('./Navbar'))
const Footer = dynamic(()=>import('./Footer'))

export default function MainLayout({ children, dict, lang }) {
    return (
        <div style={{ backgroundImage: `url(${site_bg.src})`}} className='bg-no-repeat bg-cover'>
            <Navbar dict={dict} lang={lang} />
            {children}
            <Footer dict={dict} />
        </div>
    );
}
