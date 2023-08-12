"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineShopping} from 'react-icons/ai'
import logo from '../images/brokbaits.png'
import Cart from './Cart'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className='shadow-md w-full z-30 top-0 py-1'>
      <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3'>
      <p className='flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl '>
        <Link href='/'>
          <Image src={logo}  alt="Logo" width="200" height="50"/>
        </Link>
      </p>
      <button type='button' className='relative cursor-pointer border-none bg-transparent text-3xl mr-0' onClick={() => setShowCart(true)}>
        <AiOutlineShopping/>
        <span className='bg-red-500 absolute -right-1 -bottom-1 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{totalQuantities}</span>
      </button>
      </div>
      {showCart && <Cart />}
    </div>
  )
}
export default Navbar