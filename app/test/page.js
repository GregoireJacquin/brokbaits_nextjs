"use client"

import React, {useEffect, useState} from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import {getImages, urlFor} from "../../sanity/sanity-utils";
import AliceCarousel from "react-alice-carousel";

const Carrousel = () => {
    const [dataImages, setDataImages] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const data = await getImages()
            setDataImages(data)
        }
        fetchData();
    }, [])

    // const items = [
    //     <div className="w-auto h-auto relative">
    //         <Image src="/images/423454583_759632536253157_661292141324938537_n.jpg" nDragStart={handleDragStart} role="presentation"/>
    //     </div>,
    //     <div className="w-auto h-auto relative">
    //         <Image src={logo} nDragStart={handleDragStart} role="presentation"/>
    //     </div>,
    //     <div className="w-auto h-auto relative">
    //         <Image src={logo} nDragStart={handleDragStart} role="presentation"/>
    //     </div>,
    // ];
  return (
      <div className="w-1/2">
          <AliceCarousel items={dataImages?.map(image =>
              <img src={urlFor(image.image[0].asset._ref).url()} alt="logo"/>

          )} autoPlay infinite animationDuration={2000} disableButtonsControls/>
      </div>
  )
}

export default Carrousel