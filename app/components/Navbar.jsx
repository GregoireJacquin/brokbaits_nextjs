"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import logo from '../images/brokbaits.png'
import Cart from './Cart'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div>
      <div className='flex shadow-md w-full z-30 top-0 py-1 justify-center items-center'>
        <Link href='/' className='items-center'>
          <Image src={logo} alt="Logo" width="200" height="50" className='mx-auto' />
        </Link>
        <div className='absolute right-6'>
          <button type='button' className='relative cursor-pointer border-none bg-transparent text-3xl mr-0' onClick={() => setShowCart(true)}>
            <AiOutlineShopping />
            <span className='bg-red-500  absolute -right-1 -bottom-1 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{totalQuantities}</span>
          </button>
        </div>
        {showCart && <Cart />}      
      </div>
    </div>
  )
}
export default Navbar