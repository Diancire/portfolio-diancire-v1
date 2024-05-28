import React from 'react'

function FormField({ label, name, type, required }) {
  return (
    <div className='flex flex-col'>
        <label className='uppercase text-sm py-2'>{label} {required && '*'}</label>
        <input
            className='border-2 rounded-lg p-3 flex border-gray-300 bg-transparent'
            type={type}
            name={name}
            required={required}
        />
    </div>
  )
}

export default FormField