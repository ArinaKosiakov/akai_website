import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import akai from '../../public/akai-lg.svg'

export default function Portfolio() {
    return (
        <div className="page h-full flex flex-row justify-between text-white bg-gray-background">

            <div className='h-full w-1/2 flex flex-col item-center overflow-y-scroll scrollbar-hide'>

                <div className=' w-full h-full p-16 font-karla text-2xl bg-gray-dark bg-opacity-20'>
                    <h1 className=' text-5xl font-pfd mb-10 hover:text-akai-red'> Portfolio </h1>

                    <p>I’ve been drawing since little, but just recently I started to dedicate it more time.</p>
                    <hr className='h-1 my-2 opacity-0' />
                    <p> Here you can see some of my best pieces, and don’t hesitate to contact me for <span className=' text-akai-red'>commissions</span>.</p>

                </div>

                <div className='flex items-center justify-center flex-col w-full h-full mt-5 p-16 font-pfd text-7xl text-justify bg-akai-red-dark text-white'>
                    <h2>CONCEPTS</h2>
                    <h2>SKETCHBOOKS</h2>
                    <h2>ILLUSTRATIONS</h2>
                </div>
            </div>

            <div className='h-full w-1/2  relative'>
                <Image src={akai} className=' absolute bottom-8 right-14 scale-125'></Image>
            </div>

        </div>
    )
}

