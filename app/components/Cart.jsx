"use client"
import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '@/sanity/sanity-utils';
import { useRouter } from 'next/navigation'

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();
  const router = useRouter()
  async function checkout() {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ cartItems })
    })
    const data = await res.json()
    router.push(data.session.url)
  }
  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">Votre panier</span>
          <span className="cart-num-items">({totalQuantities} articles)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <div className='items-center'>
              <AiOutlineShopping className='text-[150px] mx-auto'/>
            </div>
            <h3>Votre panier est vide</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continuer vos achats
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item._id}>
              <img src={urlFor(item?.imageSelected)} className="cart-product-image" />
              <div className="w-[350px] text-[#324d67]">
                <div className="justify-between flex flex-wrap gap-3">
                  <h5 className='uppercase font-extrabold text-gray-600'>{item.title}</h5>
                  <h4 className='font-bold'>{item.price}€</h4>
                </div>
                <h1 className='my-4'>Couleur : {item.colorSelected}</h1>
                <div className="flex gap-x-2 h-[36px] justify-between">
                  <div className='flex flex-1 max-w-[100px] items-center h-full border font-medium'>
                    <div className="flex-1 h-full flex items-center justify-center cursor-pointer text-[#f02d34]" onClick={() => toggleCartItemQuanitity(item, 'dec')}>
                      <AiOutlineMinus /></div>
                    <span className="flex h-full items-center justify-center px-2 select-none" onClick="">{item.quantity}</span>
                    <span className="flex-1 h-full flex items-center justify-center cursor-pointer text-[#31a831]" onClick={() => toggleCartItemQuanitity(item, 'inc')}><AiOutlinePlus /></span>
                  </div>
                  <button type="button" className="remove-item" onClick={() => onRemove(item)}>
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>

          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Sous total:</h3>          
              <h3>{`${parseFloat(totalPrice).toFixed(2)}€`}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={checkout}>
                Passer la commande
              </button>
            </div>
          </div>
        )}
      </div>
    </div >
  )
}

export default Cart