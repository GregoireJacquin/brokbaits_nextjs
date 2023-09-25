import { urlFor } from '@/sanity/sanity-utils';
import React from 'react'

const Modal = ({ image, setShowModal }) => {
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl m-6">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*body*/}
                        <div className="relative flex-auto ">
                            <img src={image && urlFor(image).url()} onClick={() => setShowModal(false)} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" ></div>
        </>    
    );
}

export default Modal;