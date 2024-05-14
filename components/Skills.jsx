'use client'
import Image from 'next/image'
import React from 'react'
import skills from '../data/skills'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import {Autoplay} from 'swiper/modules'
import { motion } from 'framer-motion';
import { fadeIn } from '../app/variant';


function Skills() {
  return (
    <section id='skills' className='items-center justify-center overflow-hidden pt-24'>
        <div className='flex flex-col gap-20 text-center items-center mb-20'>
            <motion.div 
                variants={ fadeIn('right', 0.2) }
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount:0.7}}
                className='flex flex-col items-center gap-4'
            >
                <h2>Skills & Technologies</h2>
            </motion.div>
            <Swiper
                slidesPerView={5}
                loop={true}
                autoplay={{
                    delay:0,
                    disableOnInteraction: false
                }}
                speed={5000}
                modules={[Autoplay]}
                className='max-w-[90%] bg-[#DEE5F8] flex items-center justify-center rounded-lg'
            >
                {skills.map((item, index) => (
                    <SwiperSlide key={index} className='py-2 w-0'>
                        <Image
                            src={item.img}
                            alt={item.name}
                            width={80}
                            height={80}
                            className='h-[150px] w-[150px] px-4'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  )
}

export default Skills