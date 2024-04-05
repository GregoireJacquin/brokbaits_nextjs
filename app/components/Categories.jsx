import Link from "next/link";
import {urlFor} from "@/sanity/sanity-utils";
import React from "react";

const Categories = ({category : {image,category,title,name,slug}}) => {
    console.log(category)
return (

    <div>
        <Link href={`/${category}`} key={slug}>
            <div className="hover:scale-110 duration-500">
                <img src={urlFor(image[0]).url()} alt={name} className="w-[240px] mx-auto flex justify-center items-center rounded-lg bg-[#f9f5f5]"/>
                <p className="font-medium text-center">{title}</p>
            </div>
        </Link>
    </div>
)}
export default Categories;