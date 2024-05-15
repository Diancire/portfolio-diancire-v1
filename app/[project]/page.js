'use client'
import { useParams } from 'next/navigation';
import projectsData from '@/data/projects.json';
import Image from 'next/image';
import Link from 'next/link'
import { RiRadioButtonFill } from 'react-icons/ri';
import { FaArrowLeft } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';

export default function Project() {
  const { project } = useParams();

  const projectInfo = projectsData.find(p => p.slug === project);

  if (!projectInfo) {
    return <div>Project not found</div>;
  }

  return (
    <div className='w-full md:min-h-screen p-4 py-20 overflow-hidden md:flex md:flex-col lg:flex-row lg:items-center'>
      <motion.div 
        className='flex justify-center py-4 lg:w-1/2'
        variants={ fadeIn('right', 0.2) }
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount:0.7}}
      >
        <Image
          className='w-full h-full rounded-lg'
          width={500}
          height={500}
          src={projectInfo.image}
          alt='/'
        />
      </motion.div>
      <motion.div 
        className='max-w-[1240px] lg:1/2 mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 lg:w-1/2 lg:pl-6 lg:flex lg:flex-col'
        variants={ fadeIn('left', 0.2) }
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount:0.7}}
      >
        <div className='col-span-4'>
          <h2 className='lg:text-center'>{projectInfo.title}</h2>
          <p className='text-justify'>
            {projectInfo.description}
          </p>
          <a
            href={projectInfo.github}
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 mt-4 mr-8 btn py-2'>Code</button>
          </a>
          <a
            href=''
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 mt-4 text-gradient py-2'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 lg:w-[150px] rounded-xl py-4 bg-[#DEE5F8]'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2 text-black'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              {projectInfo.tags.map((tag, index) => (
                <p className='text-gray-600 py-2 flex items-center' key={index}>
                  <RiRadioButtonFill className='pr-1' /> {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Link href='/#projects' className='btn py-2 max-w-12'>
          <FaArrowLeft className='cursor-pointer'/>
        </Link>
      </motion.div>
    </div>
  );
}