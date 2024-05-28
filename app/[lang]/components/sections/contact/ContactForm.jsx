import React from 'react';
import FormField from '../../common/FormField';

function ContactForm ({ form, sendEmail, isLoading, dict }) {
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
        <FormField 
          label={dict.contact.name} 
          name='name' 
          type='text' 
          required 
        />
        <FormField 
          label={dict.contact.phone_number} 
          name='phone' 
          type='text' 
        />
      </div>
      <FormField 
        label={dict.contact.email} 
        name='email' 
        type='email' 
        required 
      />
      <FormField 
        label={dict.contact.subject} 
        name='subject' 
        type='text' 
        required 
      />
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
        <button className='p-4 mt-4 btn'>
          {isLoading ? dict.contact.in_progress : dict.contact.send_message}
        </button>
      </div>
    </form>
  )
}

export default ContactForm;
