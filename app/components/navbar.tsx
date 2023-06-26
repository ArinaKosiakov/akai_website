import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo-gray.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Menu from './menu'



export default function Navbar() {
    return (
        <div className='w-full mt-2 mb-4 font-pfd bg-gray-background flex justify-between items-center '>
            <div><Link href={'/'}><Image alt='logo' className='py-3 mx-3 w-1/2 md:w-100 lg:w-100' src={logo} alt='Akai logo' width='100' ></Image></Link></div>
            <div className=''><Menu /></div>

        </div>
    )
}
