'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { CgMail } from "react-icons/cg"
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variant';

function Hero({dict = {}}) {
  return (
    <section id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <motion.h1
                    variants={fadeIn('up', 0.2)}
                    initial="hidden" whileInView={'show'}
                    viewport={{once: false, amount:0.2}}
                    className='uppercase text-[40px] md:text-[56px] lg:text-[80px] leading-[0.8]'
                >
                    {dict.hero.title}
                </motion.h1>
                <motion.div
                    variants={fadeIn('up', 0.2)} 
                    initial="hidden" whileInView={'show'} 
                    viewport={{once: false, amount: 0.7}} 
                    className='my-6 text-[40px] md:text-[56px] lg:text-[80px] font-primary font-semibold uppercase leading-[1]'>
                    <span className='mr-4'>I am a</span>
                    <TypeAnimation sequence={[
                        'Developer',
                        2000,
                        'Passionate',
                        2000,
                        'Curious',
                        2000,
                        'Creative ',
                        2000,
                    ]}
                    speed={50}
                    className='text-accent'
                    wrapper='span'
                    repeat={Infinity}
                    />
                </motion.div>
                <motion.p
                    variants={fadeIn('up', 0.3)} 
                    initial="hidden" whileInView={'show'} 
                    viewport={{once: false, amount: 0.7}} 
                    className='text-center text-[20px] md:text-[25px] mb-8 mx-auto break-words'>
                    {dict.hero.slogan}
                </motion.p>
                <motion.div 
                    variants={fadeIn('up', 0.3)} 
                    initial="hidden" whileInView={'show'} 
                    viewport={{once: false, amount: 0.7}} 
                    className='flex max-w-max gap-x-6 items-center mb-12 mx-auto'>
                    <a className='btn py-2 cursor-pointer' href="#contact">{dict.hero.contact_button}</a>
                    <a href='#' className='text-gradient py-2'>{dict.hero.portfolio_button}</a>
                </motion.div>
                <motion.div
                    variants={fadeIn('up', 0.3)} 
                    initial="hidden" whileInView={'show'} 
                    viewport={{once: false, amount: 0.8}}
                    className='flex text-[20px] gap-x-6 max-w-max mx-auto'>
                    <a href="https://www.linkedin.com/in/diancir%C3%A9-diallo-b1888a21b/" className='hover:text-accent'>
                        <FaLinkedinIn size={25}/>
                    </a>
                    <a href="https://github.com/Diancire" className='hover:text-accent'>
                        <FaGithub size={25}/>
                    </a>
                    <a href='mailto:diancire.d01@gmail.com' className='hover:text-accent'>
                        <CgMail size={25}/>
                    </a>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero