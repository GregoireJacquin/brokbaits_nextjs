import React from "react";

const TextAndImage = ({image,title,desciption,order}) => {
    return (
        <div className="relative px-8">
            <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center">
                <div className="md:w-6/12 flex-shrink-0 relative "><a className="relative" href="/blog">
                        <img className="rounded-lg object-cover object-center" src={image}/>
                </a>
                </div>
                    <div className={`md:w-6/12 mt-16 md:mt-0 md:mr-12 lg:mr-16 md:${order}`}>
                        <div className="g:py-8 text-center md:text-left">
                            <span className="font-bold text-primary-500 text-sm text-center md:text-left uppercase"></span>
                                <h2 className="font-display text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 lg:leading-tight md:text-left">{title}</h2>
                            <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200">
                                {desciption}</p>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default TextAndImage;