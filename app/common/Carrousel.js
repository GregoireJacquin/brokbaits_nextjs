"use client"

import React, {useEffect, useState} from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import {getImages, urlFor} from "@/sanity/sanity-utils";
import AliceCarousel from "react-alice-carousel";

const Carrousel = ({dataImages}) => {
    /*const [dataImages, setDataImages] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const data = await getImages()
            setDataImages(data[0].image)
        }
        fetchData();
    }, [])*/
    const responsive = {
            0: {
                items: 1,
            },
            568: {
                items:2,
            },
            1024: {
                items: 3,
                itemsFit: 'contain',
        }
    }

    return (
        <div className="flex border">
            {dataImages && <AliceCarousel items={dataImages.map(image =>
                <img src={urlFor(image.asset._ref).url()} alt="logo" key={image.key} className="mx-auto flex justify-center items-center"/>
            )} autoPlay infinite animationDuration={2000} autoWidth disableDotsControls disableButtonsControls responsive={responsive}/>
            }
        </div>
    )
}

export default Carrousel