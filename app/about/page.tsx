import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import akai from '../../public/akai-lg.svg'

export default function AboutMe() {
    return (
        <div className="page h-full flex flex-row justify-between text-white bg-gray-background">

            <div className='h-full w-1/2 flex flex-col item-center overflow-y-scroll scrollbar-hide'>

                <div className=' w-full h-full p-16 font-karla text-2xl bg-gray-dark bg-opacity-20'>
                    <h1 className=' text-5xl font-pfd mb-10 hover:text-akai-red'> About me </h1>

                    <p>Hello, I’m <span className=' text-akai-red'>Akai</span> .</p>
                    <hr className='h-1 my-2 opacity-0' />
                    <p><span className=' text-akai-red'>Akai</span> means red in japanese and this name represents who I am. Akai for me means being passionate, loving and energetic.</p>
                    <hr className='h-1 my-2 opacity-0' />
                    <p>I’ve been into science since I was little and currently I’m studying Computer science at the University. My biggest dream is to work in the <span className=' text-akai-red'>game industry</span> and I
                        try to improve my programming skills in order to achieve this dream.</p>
                    <hr className='h-1 my-2 opacity-0' />
                    <p>I have different hobbies. I consider myself an <span className=' text-akai-red'>artist</span>,
                        <span className=' text-akai-red'> streamer</span>, <span className=' text-akai-red'> content creator</span>,
                        <span className=' text-akai-red'> painter</span> and <span className=' text-akai-red'> web developer</span> (and yes this site, I made it! ).
                        I am also a big fan of video games and anime. I am always opened to suggestions! </p>
                    <hr className='h-1 my-2 opacity-0' />
                </div>
            </div>
            <div className='h-full w-1/2  relative'>
                <Image src={akai} className=' absolute bottom-8 right-14 scale-125'></Image>
            </div>

        </div>

    )
}
