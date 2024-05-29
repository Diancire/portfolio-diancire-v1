import React from 'react'

function ContactDetail({ href, icon, title, subtitle }) {
  return (
    <a href={href} className='flex items-center mb-4 hover:text-accent' aria-label={`${title} - ${subtitle}`}>
      <div className='btn mr-8'>
        {icon}
      </div>
      <div>
        <p className='text-2xl'>{title}</p>
        <p>{subtitle}</p>
      </div>
    </a>
  )
}

export default ContactDetail