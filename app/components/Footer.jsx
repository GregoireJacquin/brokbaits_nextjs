import Link from 'next/link'
import React from 'react'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container select-none'>
      <p> 2023 Brobaits All Rights Reserved</p>
      <p className='icons'>
        <Link href="https://www.facebook.com/ludovic.pinchede">
          <AiFillFacebook />
        </Link>
        <Link href="https://www.instagram.com/brok_baits/?hl=fr">
          <AiFillInstagram />
        </Link>
      </p>
    </div>
  )
}

export default Footer