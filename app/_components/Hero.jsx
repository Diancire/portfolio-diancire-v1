'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { CgMail } from "react-icons/cg"

function Hero() {
  return (
    <section className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className='uppercase text-[40px] md:text-[56px] lg:text-[80px] leading-[0.8]'>Dianciré</h1>
                <div className='my-6 text-[40px] md:text-[56px] lg:text-[80px] font-primary font-semibold uppercase leading-[1]'>
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
                </div>
                <p className='text-center text-[20px] md:text-[25px] mb-8 mx-auto break-words'>I love coding and bringing ideas to life</p>
                <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto'>
                    <button className='btn py-2'>Contact me</button>
                    <a href='#' className='text-gradient py-2'>My Portfolio</a>
                </div>
                <div className='flex text-[20px] gap-x-6 max-w-max mx-auto'>
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
        </div>
    </section>
  )
}

export default Hero