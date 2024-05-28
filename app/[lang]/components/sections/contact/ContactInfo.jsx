import React from 'react';
import { FaGithub, FaLinkedinIn, FaPhone } from 'react-icons/fa';
import { HiLocationMarker, HiMail } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../../variant';
import ContactDetail from './ContactDetail';
import SocialLink from '../../common/SocialLink';

function ContactInfo ({ dict }) {
  return (
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
          <ContactDetail 
            href='tel:0669787563' 
            icon={<FaPhone />} 
            title={dict.contact.phone_number} 
            subtitle='0669787563' 
          />
          <ContactDetail 
            href='mailto:diancire.d01@gmail.com' 
            icon={<HiMail />} 
            title={dict.contact.email} 
            subtitle='diancire.d01@gmail.com' 
          />
          <ContactDetail 
            href='https://www.google.com/maps/place/%C3%8Ele-de-France/@48.6788887,1.8433252,9z/data=!3m1!4b1!4m6!3m5!1s0x47e5e1c403a68c17:0x10b82c3688b2570!8m2!3d48.8499198!4d2.6370411!16zL20vMDVxcTZt?authuser=0&entry=ttu' 
            icon={<HiLocationMarker />} 
            title={dict.contact.location} 
            subtitle='Île-de-France, France' 
          />
        </div>
        <div className='pt-10'>
          <h3 className='text-2xl uppercase'>{dict.contact.social_media} | <span className='text-gradient'>{dict.contact.follow_me}</span></h3>
          <div className='flex items-center py-4'>
            <SocialLink 
              href='https://www.linkedin.com/in/diancir%C3%A9-diallo-b1888a21b/' 
              icon={<FaLinkedinIn />} 
            />
            <SocialLink 
              href='https://github.com/Diancire' 
              icon={<FaGithub />} 
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactInfo;