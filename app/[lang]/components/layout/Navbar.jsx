'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { CgMenuRight, CgClose, CgMail } from "react-icons/cg"
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Navbar({dict = {}, lang }) {
    // State variable to manage the visibility of the mobile menu
    const [nav, setNav] = useState(false);

    // State variable to store the id of the currently active section
    const [activeSection, setActiveSection] = useState(null);

    // Function to toggle the mobile menu visibility
    const handleNav = () => {
        setNav(!nav)
    }

    // Effect hook to run the scrolling event listener when the component mounts
    useEffect(() => {
        // Function to handle scrolling events
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            let currentSection = null;
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                    currentSection = section.id;
                }
            });
            setActiveSection(currentSection);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <header className='fixed w-full h-20 shadow z-[100]'>
        {/* Container for the navigation bar */}
        <div className='flex justify-between items-center w-full h-full px-4 2xl:px-16 bg-primary'>
            <Link href={`/${lang}/`}>
                <span className='font-logo text-4xl'>DD</span>
            </Link>
            {/* Navigation links and menu button */}
            <nav>
                <ul className='hidden md:flex items-center'>
                    <li className={`pl-6 uppercase hover:text-accent transition-all ease-in-out ${activeSection === 'home' ? 'active' : ''}`}>
                        <Link href={`/${lang}/`}>{dict.navbar.home}</Link>
                    </li>
                    <li className={`pl-6 uppercase hover:text-accent transition-all ease-in-out ${activeSection === 'about' ? 'active' : ''}`}>
                        <Link href={`/${lang}/#about`}>{dict.navbar.about}</Link>
                    </li>
                    <li className={`pl-6 uppercase hover:text-accent transition-all ease-in-out ${activeSection === 'skills' ? 'active' : ''}`}>
                        <Link href={`/${lang}/#skills`}>{dict.navbar.skills}</Link>
                    </li>
                    <li className={`pl-6 uppercase hover:text-accent transition-all ease-in-out ${activeSection === 'projects' ? 'active' : ''}`}>
                        <Link href={`/${lang}/#projects`}>{dict.navbar.projects}</Link>
                    </li>
                    <li className={`pl-6 uppercase hover:text-accent transition-all ease-in-out ${activeSection === 'contact' ? 'active' : ''}`}>
                        <Link href={`/${lang}/#contact`}>{dict.navbar.contact}</Link>
                    </li>
                    <li className="flex items-end ml-10 border p-2 rounded-md">
                        <Link href="/en">
                            <div className={`pr-2 hover:text-accent ${lang === "en" ? "text-base text-gradient" : "text-sm"}`}>EN</div>
                        </Link>
                        <Link href="/fr">
                            <div className={`hover:text-accent ${lang === "fr" ? "text-base text-gradient" : "text-sm"}`}>FR</div>
                        </Link>
                    </li>
                </ul>
                <div 
                    className='md:hidden'
                    onClick={handleNav}
                >
                    <CgMenuRight size={25} className='hover:text-accent'/>
                </div>
            </nav>
        </div>
        {/* Mobile menu container */}
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/20' : ''}>
            <div className={
                    nav 
                    ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-primary p-10 ease-in duration-500' 
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}
            >
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Link href={`/${lang}/`}>
                            <span className='font-logo text-4xl'>DD</span>
                        </Link>
                        <CgClose 
                            size={25}
                            onClick={handleNav}
                            className='hover:text-accent'
                            aria-label="Close Menu"
                        />
                    </div>
                    <div className='my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>{dict.navbar.slogan}</p>
                    </div>
                </div>
                <nav className='py-4 flex flex-col'>
                    <ul>
                        <li className={`py-4 uppercase hover:text-accent transition-all ease-in-out ${activeSection === 'home' ? 'active' : ''}`} onClick={() => setNav(false)}>
                            <Link href={`/${lang}/`}>{dict.navbar.home}</Link>
                        </li>
                        <li className={`py-4 uppercase hover:text-accent transition-all ease-in-out ${activeSection === 'about' ? 'active' : ''}`} onClick={() => setNav(false)}>
                            <Link href={`/${lang}/#about`}>{dict.navbar.about}</Link>
                        </li>
                        <li className={`py-4 uppercase hover:text-accent transition-all ease-in-out ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => setNav(false)}>
                            <Link href={`/${lang}/#skills`}>{dict.navbar.skills}</Link>
                        </li>
                        <li className={`py-4 uppercase hover:text-accent transition-all ease-in-out ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => setNav(false)}>
                            <Link href={`/${lang}/#projects`}>{dict.navbar.projects}</Link>
                        </li>
                        <li className={`py-4 uppercase hover:text-accent transition-all ease-in-out ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => setNav(false)}>
                            <Link href={`/${lang}/#contact`}>{dict.navbar.contact}</Link>
                        </li>
                    </ul>
                    <div className='pt-8'>
                        <p className='uppercase tracking-widest'>{dict.navbar.connect}</p>
                        <div className='flex items-center my-4 gap-6'>
                            <a href="https://www.linkedin.com/in/diancir%C3%A9-diallo-b1888a21b/" className='hover:text-accent' aria-label="LinkedIn">
                                <FaLinkedinIn size={25}/>
                            </a>
                            <a href="https://github.com/Diancire" className='hover:text-accent' aria-label="GitHub">
                                <FaGithub size={25}/>
                            </a>
                            <a href='mailto:diancire.d01@gmail.com' className='hover:text-accent' aria-label="Email">
                                <CgMail size={25}/>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-end border p-4 rounded-md w-20">
                        <Link href="/en">
                        <div className={`pr-4 ${lang === "en" ? "text-base text-gradient" : "text-sm"}`}>
                            EN
                        </div>
                        </Link>
                        <Link href="/fr">
                        <div className={`${lang === "fr" ? "text-base text-gradient" : "text-sm"}`}>
                            FR
                        </div>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Navbar