import React from 'react'
import Link from 'next/link'
import { FaCopyright } from "react-icons/fa";

function Footer({dict = {}}) {
  return (
    <div className='h-20 bg-primary flex items-center justify-center'>
        <Link href='/'>
            <span className='font-logo text-4xl px-4'>DD</span>
        </Link>
        <FaCopyright className='mr-2' />
        <p>{dict.footer.all_rights_reserved_by} <span className='text-gradient text-base'>Dianciré</span></p>
    </div>
  )
}

export default Footer