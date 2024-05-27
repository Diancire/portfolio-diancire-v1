'use client'
import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import projectsData from '../../data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variant';

export default function Project({dict = {}}) {
  const { project } = useParams();

  // Use memoization to prevent unnecessary computations
  const projectInfo = useMemo(() => projectsData.find(p => p.slug === project), [project]);

  if (!projectInfo) {
    return <div className="text-center text-red-500">Project not found</div>;
  }

  return (
    <div className='w-full md:min-h-screen p-4 py-20 overflow-hidden md:flex md:flex-col lg:flex-row lg:items-center'>
      <motion.div
        className='flex justify-center py-4 lg:w-1/2'
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <Image
          className='w-full h-full rounded-lg'
          width={500}
          height={500}
          src={require(`../../../public/assets/projects/${projectInfo.image}`)}
          alt={projectInfo.title}
          priority
        />
      </motion.div>
      <motion.div
        className='lg:w-1/2 lg:pl-6'
        variants={fadeIn('left', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <h2 className='lg:text-center'>{projectInfo.title}</h2>
        <div className='bg-[#DEE5F8] rounded-lg md:w-3/4 mx-auto my-6'>
          <p className='text-center font-bold pb-2 text-black'>Technologies</p>
          <div className='flex justify-around'>
            {projectInfo.tags.map((tag, index) => (
              <p className='text-gray-600 py-2 flex items-center' key={index}>
                <RiRadioButtonFill className='pr-1' /> {tag}
              </p>
            ))}
          </div>
        </div>
        <p className='text-justify mb-6'>
          {projectInfo.description}
        </p>
        <div className='mb-8'>
          <a
            href={projectInfo.github}
            className='px-8 btn py-2'
          >
            Code
          </a>
          <a
            href={projectInfo.url}
            className='px-8 text-gradient py-2'
          >
            Demo
          </a>
        </div>
        <Link href='/#projects' className='inline-block btn'>
          <FaArrowLeft className='cursor-pointer' />
        </Link>
      </motion.div>
    </div>
  );
}
