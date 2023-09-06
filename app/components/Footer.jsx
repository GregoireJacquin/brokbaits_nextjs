import Link from 'next/link'
import React from 'react'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container select-none bg-[#282828]'>
      <p className='text-white'> 2023 Brobaits All Rights Reserved</p>
      <p className='icons'>
        <Link href="https://www.facebook.com/ludovic.pinchede">
          <AiFillFacebook className='text-white'/>
        </Link>
        <Link href="https://www.instagram.com/brok_baits/?hl=fr">
          <AiFillInstagram className='text-white' />
        </Link>
      </p>
    </div>
  )
}

export default Footer