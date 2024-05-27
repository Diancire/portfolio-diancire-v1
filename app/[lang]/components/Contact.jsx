"use client"
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { FaGithub, FaLinkedinIn, FaPhone } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp, HiLocationMarker, HiMail } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variant';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact({dict = {}}) {
  // Reference to the form element
  const form = useRef(null);
  // State to handle loading state
  const [isLoading, setIsLoading] = useState(false);

  
  const sendEmail = (event) => {
    event.preventDefault();
    setIsLoading(true);
    // Send email using emailjs
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setIsLoading(false);
          toast.success('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          setIsLoading(false);
          toast.error('Failed to send message. Please try again.');
        }
      );
  };
  return (
    <section id='contact' className='w-full pt-12 overflow-hidden'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <ToastContainer />
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <motion.div 
            className='col-span-3 lg:col-span-2 w-full h-full rounded-xl p-4 border' 
            variants={fadeIn('right', 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <div className='lg:p-4 h-full '>
              <div>
                <h2 className='py-2'>{dict.contact.title}</h2>
              </div>
              <div>
                <a href='tel:0669787563' className='flex items-center mb-4 hover:text-accent'>
                    <div className='btn mr-8'>
                        <FaPhone />
                    </div>
                    <div>
                        <p className='text-2xl'>{dict.contact.phone_number}</p>
                        <p>0669787563</p>
                    </div>
                </a>
                <a href='mailto:diancire.d01@gmail.com' className='flex items-center mb-4 hover:text-accent'>
                  <div className='btn mr-8'>
                    <HiMail />
                  </div>
                  <div>
                    <p className='text-2xl'>{dict.contact.email}</p>
                    <p>diancire.d01@gmail.com</p>
                  </div>
                </a>
                <a href='https://www.google.com/maps/place/%C3%8Ele-de-France/@48.6788887,1.8433252,9z/data=!3m1!4b1!4m6!3m5!1s0x47e5e1c403a68c17:0x10b82c3688b2570!8m2!3d48.8499198!4d2.6370411!16zL20vMDVxcTZt?authuser=0&entry=ttu' className='flex items-center mb-4 hover:text-accent'>
                    <div className='btn mr-8'>
                        <HiLocationMarker />
                    </div>
                    <div>
                        <p className='text-2xl'>{dict.contact.location}</p>
                        <p>Île-de-France, France</p>
                    </div>
                </a>
              </div>
              <div className='pt-10'>
                <h3 className='text-2xl uppercase'>{dict.contact.social_media} | <span className='text-gradient'>{dict.contact.follow_me}</span></h3>
                <div className='flex items-center py-4'>
                  <a
                    href='https://www.linkedin.com/in/diancir%C3%A9-diallo-b1888a21b/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300 btn mr-5'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/Diancire'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300 btn'>
                      <FaGithub />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          {/* right */}
          <motion.div 
            className='col-span-3 w-full h-auto rounded-xl lg:p-4 border' 
            variants={fadeIn('right', 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <div className='p-4'>
              <form ref={form} onSubmit={sendEmail}>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>{dict.contact.name} *</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300 bg-transparent'
                      type='text'
                      name='name'
                      required
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>{dict.contact.phone_number}</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300 bg-transparent'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>{dict.contact.email} *</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300 bg-transparent'
                    type='email'
                    name='email'
                    required
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>{dict.contact.subject} *</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300 bg-transparent'
                    type='text'
                    name='subject'
                    required
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message *</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300 bg-transparent'
                    rows='4'
                    name='message'
                    required
                  ></textarea>
                </div>
                <div className='flex justify-center'>
                  <button className='p-4 text-gray-100 mt-4 btn'>
                    {isLoading ? dict.contact.in_progress : dict.contact.send_message}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full btn pointer ease-in duration-300'>
              <HiOutlineChevronDoubleUp size={30} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contact;
