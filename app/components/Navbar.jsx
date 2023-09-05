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
    <div className='shadow-md'>
      <div className='flex  w-full z-30 top-0 py-1 justify-center items-center'>
        <Link href='/' className='items-center'>
          <Image src={logo} alt="Logo" className='mx-auto pt-2 pb-2' />
        </Link>
      </div>
      <div className='gap-4'>
        <div className='absolute right-6 top-14'>
          <button type='button' className='relative cursor-pointer border-none bg-transparent text-3xl mr-0' onClick={() => setShowCart(true)}>
            <AiOutlineShopping />
            <span className='bg-red-500  absolute -right-1 -bottom-1 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{totalQuantities}</span>
          </button>
        </div>
        <div className='flex items-center justify-center gap-9 pb-4'>
        <Link href="/" className='text-base uppercase font-light text-gray-500'>Produits</Link>
        <Link href="/about"  className='text-base uppercase font-light text-gray-500'>A propos</Link>
        </div>
        {showCart && <Cart />}
      </div>
    </div>

  )
}
export default Navbar