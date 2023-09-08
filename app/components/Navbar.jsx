"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import logo from '../images/brokbaits.png'
import Cart from './Cart'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [isOpen, setIsOpen] = useState();
  return (
    <div className='shadow-md'>
      <div className="flex items-center justify-between px-4 py-4 sm:p-0">
        <div className='flex w-full z-30 top-0 py-1 justify-center items-center'>
          <Link href='/' className='items-center'>
            <Image src={logo} alt="Logo" className='mx-auto pt-2 pb-2' width="200px" />
          </Link>
          <div className="sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="block text-gray-500 focus:outline-none left-4 absolute top-16">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen && <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />}
                {!isOpen && <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />}
              </svg>
            </button>
          </div>
          <div className='gap-4'>
            <div className='absolute right-6 top-14'>
              <button type='button' className='relative cursor-pointer border-none bg-transparent text-3xl mr-0' onClick={() => setShowCart(true)}>
                <AiOutlineShopping />
                <span className='bg-red-500  absolute -right-1 -bottom-1 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{totalQuantities}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <nav className={`${isOpen ? "block" : "hidden"}`} >
        <a href="/" className="block px-2 py-1 text-base uppercase font-light text-gray-500 rounded hover:bg-gray-200">Produits</a>
        <a href="/about" className="mt-1 block px-2 py-1 text-base uppercase font-light text-gray-500 hover:bg-gray-200 sm:mt-0 sm:ml-2">A propos</a>
      </nav>
      <div className='items-center justify-center gap-9 pb-4 hidden md:flex'>
        <Link href="/" className='text-base uppercase font-light text-gray-500'>Produits</Link>
        <Link href="/about" className='text-base uppercase font-light text-gray-500'>A propos</Link>
      </div>
      {showCart && <Cart />}
    </div>


  )
}
export default Navbar