'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../app/variant';

function About() {
  return (
    <section id='about' className='w-full md:h-screen p-4 flex items-center py-20 overflow-hidden'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-2 gap-8'>
            <motion.div
                variants={ fadeIn('right', 0.2) }
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount:0.7}}
            >
                <img src="/assets/about.jpg" alt="photo of a computer" className='h-full rounded-lg object-cover'/>
            </motion.div>
            <motion.div
                variants={ fadeIn('left', 0.3) }
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount:0.7}}
            >
                <h2 className=' mt-4'>About me</h2>
                <h3 className=''>Web Developper</h3>
                <p className='mb-6 text-justify'>I'm Dianciré, a passionate web developer based in Île-de-France. Having undergone training at OpenClassrooms and Doranco, I have gained experience in creating high-performance web applications. My journey has allowed me to explore various web technologies and continually enhance my skills. My objective is to become an experienced web developer and actively contribute to innovative and stimulating projects.<br/> I'm open to discussions and available to talk about potential projects or any other collaboration opportunities. Feel free to contact me.</p>
                <a href='#contact' className='btn py-2'>Contact me</a>
            </motion.div>
        </div>
    </section>
  )
}

export default About