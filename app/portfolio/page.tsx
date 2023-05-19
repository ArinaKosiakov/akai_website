import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import akai from '../../public/akai-lg.svg'

export default function Portfolio() {
    return (
        <div className="page h-full flex flex-row justify-between text-white bg-gray-background">

            <div className='h-full md:w-1/2 flex flex-col item-center overflow-y-scroll scrollbar-hide'>

                <div className='h-4 flex items-center justify-center flex-col w-full h-full md:mt-5 p-16 font-pfd text-xl md:text-7xl text-justify bg-akai-red-dark text-white'>
                    <h2>CONCEPTS</h2>
                    <h2>SKETCHBOOKS</h2>
                    <h2>ILLUSTRATIONS</h2>


                </div>
                <hr className='my-2 opacity-0' />

                <div>

                    <div>concepts</div>
                    <div>sketchbook</div>
                    <div>illustration</div>

                </div>
            </div>


        </div>
    )
}

