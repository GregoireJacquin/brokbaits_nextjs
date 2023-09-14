import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/sanity/sanity-utils'


const Product = ({product : {image,slug,price,title,name}}) => {
  return (
    <div>
      <Link href={`/product/${slug}`} key={slug}>
        <div className="hover:scale-110 duration-500">
           <img src={urlFor(image[0]).url()} alt={name} className="w-[240px] h-[260px] mx-auto flex justify-center items-center rounded-lg bg-[#f9f5f5]"/>
          <p className="font-medium">{title}</p>
          <p className="font-extrabold mt-0">{price}€</p>
        </div>
      </Link>
    </div>
  )
}

export default Product

// .product-card{
//   cursor: pointer;
//    transform: scale(1, 1);
//    transition: transform 0.5s ease;
//   color: #324d67;
 
//  }
//  .product-card:hover{
//    transform: scale(1.1,1.1)
//  }
//  .product-image{
//    border-radius: 15px;
//   background-color: #ebebeb;
//    transform: scale(1, 1);
//    transition: transform 0.5s ease;
//  }
 
//  .product-name{
//    font-weight: 500;
//  }
//  .product-price{
//    font-weight: 800;
//    margin-top: 6px;
//    color: black;
//  }