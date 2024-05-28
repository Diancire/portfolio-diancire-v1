'use client';
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../../variant';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiOutlineChevronDoubleUp} from 'react-icons/hi';
import emailjs from '@emailjs/browser';

import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

function Contact({ dict = {} }) {
  // Reference to the form element
  const form = useRef(null);
  // State to handle loading state
  const [isLoading, setIsLoading] = useState(false);

  // State to handle language
  const [isFrench, setIsFrench] = useState(false);

  useEffect(() => {
    // Determine the current language based on the URL
    setIsFrench(window.location.pathname.startsWith('/fr'));
  }, []);

  // Messages for different languages
  const messages = {
    success: isFrench ? 'Message envoyé avec succès!' : 'Message sent successfully!',
    failure: isFrench ? 'Échec de l\'envoi du message. Veuillez réessayer.' : 'Failed to send message. Please try again.'
  };

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
        () => {
          setIsLoading(false);
          toast.success(messages.success);
          form.current.reset();
        },
        (error) => {
          setIsLoading(false);
          toast.error(messages.failure);
        }
      );
  };

  return (
    <section id='contact' className='w-full pt-12 overflow-hidden'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <ToastContainer />
        <div className='grid lg:grid-cols-5 gap-8'>
          <ContactInfo dict={dict} />
          <motion.div 
            className='col-span-3 w-full h-auto rounded-xl lg:p-4 border' 
            variants={fadeIn('right', 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <div className='p-4'>
              <ContactForm form={form} sendEmail={sendEmail} isLoading={isLoading} dict={dict} />
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
