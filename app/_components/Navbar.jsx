'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { CgMenuRight, CgClose, CgMail } from "react-icons/cg"
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Navbar() {
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
            sections.forEach((section) => {
                // Get the bounding rectangle of the section
                const rect = section.getBoundingClientRect();
                // Check if the top and bottom of the section are within the viewport
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    setActiveSection(section.id);
                }
            });
        };
        // Add a scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <header className='fixed w-full h-20 shadow z-[100]'>
        {/* Container for the navigation bar */}
        <div className='flex justify-between items-center w-full h-full px-4 2xl:px-16 bg-primary'>
            <Link href='/'>
                <span className='font-logo text-4xl'>DD</span>
            </Link>
            {/* Navigation links and menu button */}
            <nav>
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className={`ml-10 uppercase hover:text-accent transition-all ease-in-out ${activeSection === 'home' ? 'active' : ''}`}>Accueil</li>
                    </Link>
                    <Link href='/#about'>
                        <li className={`ml-10 uppercase hover:text-accent transition-all ease-in-out ${activeSection === 'about' ? 'active' : ''}`}>About</li>
                    </Link>
                    <Link href='/#skills'>
                        <li className={`ml-10 uppercase hover:text-accent transition-all ease-in-out  ${activeSection === 'skills' ? 'active' : ''}`}>Skills</li>
                    </Link>
                    <Link href='/#projects'>
                        <li className={`ml-10 uppercase hover:text-accent transition-all ease-in-out  ${activeSection === 'projects' ? 'active' : ''}`}>Projects</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 uppercase hover:text-accent transition-all ease-in-out'>Contact</li>
                    </Link>
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
                        <Link href='/'>
                            <span className='font-logo text-4xl'>DD</span>
                        </Link>
                        <CgClose 
                            size={25}
                            onClick={handleNav}
                            className='hover:text-accent'
                        />
                    </div>
                    <div className='my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>I love coding and bringing ideas to life</p>
                    </div>
                </div>
                <nav className='py-4 flex flex-col'>
                    <ul>
                        <Link href='/'>
                            <li className={`py-4 uppercase hover:text-accent transition-all ease-in-out ${activeSection === 'home' ? 'active' : ''}`}>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className={`py-4 uppercase hover:text-accent transition-all ease-in-out ${activeSection === 'about' ? 'active' : ''}`}>About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className={`py-4 uppercase hover:text-accent transition-all ease-in-out ${activeSection === 'skills' ? 'active' : ''}`}>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className={`py-4 uppercase hover:text-accent transition-all ease-in-out ${activeSection === 'projects' ? 'active' : ''}`}>Projects</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 uppercase hover:text-accent transition-all ease-in-out'>Contact</li>
                        </Link>
                    </ul>
                    <div className='pt-36'>
                        <p className='uppercase tracking-widest'>Let's connect</p>
                        <div className='flex items-center my-4 gap-6'>
                            <a href="https://www.linkedin.com/in/diancir%C3%A9-diallo-b1888a21b/" className='hover:text-accent'>
                                <FaLinkedinIn size={25}/>
                            </a>
                            <a href="https://github.com/Diancire" className='hover:text-accent'>
                                <FaGithub size={25}/>
                            </a>
                            <a href="" className='hover:text-accent'>
                                <CgMail size={25}/>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Navbar