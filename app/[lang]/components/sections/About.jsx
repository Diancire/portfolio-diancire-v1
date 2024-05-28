'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variant';
import imageAbout from '../../../../public/assets/about.jpg'
import Image from 'next/image';

function About({dict = {}}) {
    return (
      <section id='about' className='w-full md:h-screen p-4 flex items-center py-20 overflow-hidden'>
          <div className='max-w-[1240px] m-auto md:grid grid-cols-2 gap-8'>
              <motion.div
                  variants={ fadeIn('right', 0.2) }
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: false, amount:0.7}}
              >
                  <Image src={imageAbout} alt="photo of a computer" className='h-full rounded-lg object-cover'/>
              </motion.div>
              <motion.div
                  variants={ fadeIn('left', 0.3) }
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: false, amount:0.7}}
              >
                  <h2 className=' mt-4'>{dict.about.title}</h2>
                  <h3 className=''>{dict.about.role}</h3>
                  <p className='mb-6 text-justify'>{dict.about.description}</p>
                  <a href='#contact' className='btn py-2'>{dict.about.contact_button}</a>
              </motion.div>
          </div>
      </section>
    )
}

export default About