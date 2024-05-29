'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

function ProjectCard({ item, lang, dict, fadeIn }) {
  return (
    <motion.div 
      className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group gradient' 
      variants={fadeIn('right', 0.2)} 
      initial="hidden" 
      whileInView={"show"} 
      viewport={{ once: false, amount: 0.7 }}
    >
      <Image 
        src={require(`../../../../../public/assets/projects/${item.image}`)} 
        alt={item.title} 
        width={600} 
        height={400} 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
        <Link href={`/${lang}/${item.slug}`} className='flex justify-center'>
          <p className='text-center py-3 rounded-lg bg-white font-bold cursor-pointer text-black w-44'>{dict.projects.more_info}</p>
        </Link>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
