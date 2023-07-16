'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Image from 'next/image'
import akai from '../../public/akai-lg.svg'
import my_photo from '../../public/me.jpg'

function AboutMe() {
    useEffect(() => {
        document.title = 'Akaiko - About me';
    });
    return (
        <div className="page h-full flex flex-row justify-between text-white bg-gray-background">

            <div className='h-full md:w-1/2 z-10 flex flex-col item-center overflow-y-scroll scrollbar-hide'>

                <div className=' w-full p-10 md:p-16 font-karla text-xl md:text-2xl bg-gray-dark bg-opacity-80'>
                    <h1 className=' text-5xl font-pfd mb-10 hover:text-akai-red'> About me </h1>

                    <p>Hello, I&apos;m <span className=' text-akai-red'>Akai</span> .</p>
                    <hr className='h-1 my-2 opacity-0' />
                    <p><span className=' text-akai-red'>Akai</span> means red in japanese and for me Akai means being passionate, loving and energetic.</p>
                    <hr className='h-1 my-2 opacity-0' />
                    <p>I&apos;ve been into technology since I was little and currently I&apos;m studying Telecomunication engineering at the University. My biggest dream is to work in the
                        <span className=' text-akai-red'>game industry</span> and I am trying my best
                        to improve my programming and srtistic skills in order to achieve this dream.</p>
                    <hr className='h-1 my-2 opacity-0' />
                    <p>I have different hobbies, some are being an <span className=' text-akai-red'>artist</span>,
                        <span className=' text-akai-red'> streamer</span>,
                        <span className=' text-akai-red'> painter</span>, and <span className=' text-akai-red'> web developer</span> (and yes this site, I made it! ).
                        I like to work out and in my free time I spend my time playing video games and watching animes. I am always opened to suggestions! </p>
                    <hr className='h-1 my-2 opacity-0' />
                </div>

                <div className='w-full flex flex-col  items-center my-3 bg-gray-dark bg-opacity-80'>
                    <div><p className='py-3 text-sm md:text-lg lg:text-xl'>Little spoiler, this is me. <span className=' text-akai-red'>Hi!</span></p></div>
                    <Image src={my_photo} alt='logo' className='w-3/4 md:w-2/4 rounded-md mb-12'></Image>
                </div>

            </div>
            <div className='h-full z-0 md:w-1/2  relative'>
                <Image src={akai} alt='logo' className=' absolute bottom-8 right-14 scale-125'></Image>
            </div>

        </div>

    )
}
export default AboutMe