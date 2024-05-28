import React from 'react'

function SocialLink({ href, icon }) {
  return (
    <a href={href} target='_blank' rel='noreferrer'>
        <div className='rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300 btn mr-5'>
            {icon}
        </div>
    </a>
  )
}

export default SocialLink