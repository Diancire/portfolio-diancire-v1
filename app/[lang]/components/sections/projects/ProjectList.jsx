'use client';
import React from 'react';
import projects from '../../../../data/projects';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../../variant';
import { useParams } from 'next/navigation';
import ProjectCard from './ProjectCard';

function ProjectList({ dict = {} }) {
  const { lang } = useParams();

  return (
    <div id='projects' className='w-full overflow-hidden pt-24'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h2>{dict.projects.title}</h2>
        </motion.div>
        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((item, index) => (
            <ProjectCard 
              key={index} 
              item={item} 
              lang={lang} 
              dict={dict} 
              fadeIn={fadeIn} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
