'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import akai from '../../public/akai-lg.svg'
import Link from 'next/link'

function Twitch() {
    useEffect(() => {
        document.title = 'Akaiko - Twitch';
    });

    return (
        <div className="page h-full flex flex-row justify-between text-white bg-gray-background">

            <div className='h-full z-10 w-1/2 flex flex-col item-center overflow-y-scroll scrollbar-hide'>

                <div className=' w-full h-full p-16 font-karla text-2xl bg-gray-dark bg-opacity-80'>
                    <h1 className=' text-5xl font-pfd mb-10 hover:text-akai-red'> <Link href={'https://www.twitch.tv/ak_aiko'}>Twitch</Link> </h1>

                    <p>I&apos;ve been streaming for the past two years and I got to know a lot of amazing people. I am a <span className=' text-akai-red'>variety streamer </span>
                        which means I bring different content. I usually stream <span className=' text-akai-red'>video-games</span>, but sometimes I like to share also how I create my <span className=' text-akai-red'>art</span>.</p>
                    <hr className='h-1 my-2 opacity-0' />
                </div>

                <div className=' w-full h-full mt-5 p-16 font-karla text-2xl bg-gray-dark bg-opacity-80'>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nisi exercitationem adipisci alias, commodi soluta, fugiat corrupti accusamus porro earum vero at, est recusandae? Repudiandae ea aspernatur nobis sequi cupiditate.</p>
                </div>
            </div>

            <div className='h-full z-0 w-1/2  relative'>
                <Image alt='logo' src={akai} className=' absolute bottom-8 right-14 scale-125'></Image>
            </div>

        </div>
    )
}
export default Twitch