import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import akai from '../../public/akai-lg.svg'

export default function Contacts() {
    return (
        <div className="page h-full flex flex-row justify-between text-white bg-gray-background">

            <div className='h-full z-10 w-1/2 flex flex-col item-center overflow-y-scroll scrollbar-hide'>

                <div className=' w-full h-full p-16 font-karla text-2xl bg-gray-dark bg-opacity-80'>
                    <h1 className=' text-5xl font-pfd mb-10 hover:text-akai-red'> Contacts </h1>

                    <p className='text-md'>If you are interested in what I&apos;m doing you an follow my socials and don&apos;t foget to join my discord channel!</p>
                    <br />
                    <div className=' w-full text-center'><p> <span className=' text-akai-red'>Art </span></p>
                        <p> <span className=' text-akai-red'>Twitch </span></p>
                        <p> <span className=' text-akai-red'>Web projects </span></p></div>
                    <hr className='h-1 my-2 opacity-0' />
                    <p>For art commissions, collaborations or web design projects you can e-mail me at: </p>
                    <div className=' w-full text-center'><a className='hover:text-akai-red' href="mailto:akaiko.socialsgmail.com">akaiko.socials@gmail.com</a></div>
                    <hr className='h-1 my-2 opacity-0' />
                    <p>If you like what I do and want to help me grow or just support you can do it here:</p>
                    <hr className='h-1 my-2 opacity-0' />
                </div>
            </div>

            <div className='h-full z-0 w-1/2  relative'>
                <Image alt='logo' src={akai} className=' absolute bottom-8 right-14 scale-125'></Image>
            </div>
        </div>
    )
}
