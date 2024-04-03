import Link from 'next/link'
import React from 'react'
import {AiFillInstagram, AiFillFacebook, AiFillYoutube} from 'react-icons/ai'
import {BiLogoTiktok} from 'react-icons/bi'

const Footer = () => {
    return (
        <div className='footer-container select-none bg-[#282828]'>
            <p className='text-white'> 2023 Brobaits All Rights Reserved</p>
            <p className='icons'>
                <Link href="https://www.facebook.com/profile.php?id=61557264803972">
                    <AiFillFacebook className='text-white'/>
                </Link>
                <Link href="https://www.instagram.com/baik_baits/">
                    <AiFillInstagram className='text-white'/>
                </Link>
                <Link href="https://www.youtube.com/@baikbaits">
                    <AiFillYoutube className='text-white'/>
                </Link>
                <Link href="https://www.tiktok.com/@baik_baits">
                    <BiLogoTiktok className='text-white'/>
                </Link>
            </p>
        </div>
    )
}

export default Footer