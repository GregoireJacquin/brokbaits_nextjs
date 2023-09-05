"use client"
import React, { useEffect, useState } from 'react'
import { getProduct, urlFor } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useStateContext } from '@/app/context/StateContext';


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
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  const handleBuyNow = () => {
    onAdd(dataProduct, qty,index);
    setShowCart(true);
  }
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={image && urlFor(image[index]).url()} className="product-detail-image" />
          </div>
        </div>

        <div className="product-detail-desc">
          <h1 className='font-extrabold text-3xl'>{title}</h1>
          {/* <div className="flex text-[#f02d34] items-center gap-1">         
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            <h1>(20)</h1>
          </div> */}
          <h4>Description: </h4>
          <div className='text-gray-800 font-semibold'>
            <PortableText value={description} />
          </div>
          <p className="price">{price}€</p>
          <div className="flex gap-x-2 h-[36px] mt-5">
            <h1 className='mt-1 mr-2'>Quantité : </h1>
            <div className="flex flex-1 max-w-[100px] items-center h-full border font-medium">
              <div className="flex-1 h-full flex items-center justify-center cursor-pointer text-[#f02d34]" onClick={decQty}><AiOutlineMinus /></div>
              <div className="flex h-full items-center justify-center px-2 select-none">{qty}</div>
              <div className="flex-1 h-full flex items-center justify-center cursor-pointer text-[#31a831]" onClick={incQty}><AiOutlinePlus /></div>
            </div>
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <div key={i}>
                <img                  
                  src={urlFor(item)}
                  className={i === index ? 'small-image selected-image' : 'small-image'}
                  onMouseEnter={() => setIndex(i)}
                />
                <div className='items-center justify-center flex'>
                  {color && <h1>{color[i]}</h1>}
                </div>
              </div>
            ))}
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart select-none" onClick={() => onAdd(dataProduct, qty,index)}>Ajouter au panier</button>
            <button type="button" className="buy-now select-none" onClick={handleBuyNow}>Acheter</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails