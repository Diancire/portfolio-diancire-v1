'use client'
import Image from 'next/image'
import React from 'react'
import projects from '../data/projects'
import Link from 'next/link'
import { motion } from 'framer-motion';
import { fadeIn } from '../app/variant';

function Projects() {
  return (
    <div id='projects' className='w-full overflow-hidden pt-24'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <motion.div
              variants={ fadeIn('right', 0.2) }
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount:0.7}}
            >
              <h2>Projects</h2>
            </motion.div>
            <div className='grid md:grid-cols-2 gap-8'>
              {projects.map((item, index) => (
                <motion.div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group gradient' key={index}
                variants={ fadeIn('right', 0.2) }
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount:0.7}}
                >
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      width={1000}
                      height={1000}
                      className='rounded-xl group-hover:opacity-10'
                    />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full'>
                        <h3 className='text-center'>{item.title}</h3>
                        <p className='text-center p-4 m-4'>
                          {item.tags.map((tag, index) => (
                              <span key={index} className='text-xl'>
                                {tag}
                                {index !== item.tags.length - 1 && ' '}
                              </span>
                            ))}
                        </p>
                        <Link href={`/${item.slug}`} className='flex justify-center'>
                          <p className='text-center py-3 rounded-lg bg-white font-bold cursor-pointer text-black w-44'>More Info</p>
                        </Link>
                    </div>
                </motion.div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Projects