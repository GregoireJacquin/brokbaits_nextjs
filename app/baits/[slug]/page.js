"use client"
import React, { useEffect, useState } from 'react'
import { getProduct, urlFor } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useStateContext } from '@/app/context/StateContext';
import Modal from '@/app/components/Modal';
import {data} from "autoprefixer";


const ProductDetails = ({ params }) => {
  const [dataProduct, setDataProduct] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProduct(params.slug)
      setDataProduct(data)
    }
    fetchData();
  }, [])
  const { image, price, title, description, color } = dataProduct || {};
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { decQty, incQty, qty, onAdd, setShowCart,cartItems } = useStateContext();
  const handleBuyNow = () => {
    onAdd(dataProduct, qty, index);
    setShowCart(true);
  }
  const components = {
    block: {
      normal: ({children}) => <h1 className="text-sm">{children}</h1>,      
    },
  }
  const handleAddOn = () => {
    const foundProduct = cartItems.find((item) => item._id === dataProduct._id && item.colorSelected === dataProduct.color[index])
    if(foundProduct?.quantity + qty > 10)
      alert(`Vous ne devez pas depasser les 20 produits, veuillez réduire de ${(foundProduct.quantity + qty) - 20} votre quantité`);
    else
      onAdd(dataProduct, qty, index)
  }
  return (
    <>
      <div>
        <div className="product-detail-container">
          <div>
            <div className="image-container">
              <img src={image && urlFor(image[index]).url()} className="product-detail-image"
                   onClick={() => setShowModal(true)}/>
            </div>
          </div>
          <div className="lg:hidden sm:block">
            <div className="small-images-container">
              {image?.map((item, i) => (
                  <div key={i}>
                    <img
                        src={urlFor(item)}
                        className={i === index ? 'small-image selected-image' : 'small-image'}
                        onMouseEnter={() => setIndex(i)}
                    />
                    <div className='items-center justify-center flex text-xs'>
                      {color && <h1>{color.length > 1 ? color[i] : []}</h1>}
                    </div>
                  </div>
              ))}
            </div>
          </div>
          <div className="product-detail-desc">
            <h1 className='font-extrabold text-3xl'>{title}</h1>
            <h4>Description: </h4>
            <div className='text-gray-800 font-semibold'>
              <PortableText value={description} components={components}/>
            </div>
            <p className="price">{price}€</p>
            <div className="flex gap-x-2 h-[36px] mt-5">
              <h1 className='mt-1 mr-2'>Quantité : </h1>
              <div className="flex flex-1 max-w-[100px] items-center h-full border font-medium">
                <div className="flex-1 h-full flex items-center justify-center cursor-pointer text-[#f02d34]"
                     onClick={decQty}><AiOutlineMinus/></div>
                <div className="flex h-full items-center justify-center px-2 select-none">{qty}</div>
                <div className="flex-1 h-full flex items-center justify-center cursor-pointer text-[#31a831]"
                     onClick={incQty}><AiOutlinePlus/></div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="small-images-container">
                {image?.map((item, i) => (
                    <div key={i}>
                      <img
                          src={urlFor(item)}
                          className={i === index ? 'small-image selected-image' : 'small-image'}
                          onMouseEnter={() => setIndex(i)}
                      />
                      <div className='items-center justify-center flex text-xs'>
                        {color && <h1>{color.length > 1 ? color[i] : []}</h1>}
                      </div>
                    </div>
                ))}
              </div>
            </div>
            <div className="buttons">
              <button type="button" className="add-to-cart select-none"
                      onClick={() => handleAddOn()}>Ajouter au panier
              </button>
              <button type="button" className="buy-now select-none" onClick={handleBuyNow}>Acheter</button>
            </div>
          </div>

        </div>
      </div>
      {showModal ? (
          <Modal setShowModal={setShowModal} image={image[index]}/>
      ) : null}
    </>
  )
}

export default ProductDetails