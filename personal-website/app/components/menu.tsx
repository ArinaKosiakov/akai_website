'use client'

import React, { useState } from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const COLORS = {
    grayDark: '#0F0F0F',
    grayBackground: '#343536',
    grayLight: '#5D5E5F',
    akaiRed: '#FA5C5C',
};

const MenuLabel = styled.label`
background-color: ${'grayBackground'};
cursor: pointer;
margin-top: 2rem;
margin-left:2rem
`;

const Icon = styled.div`
position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "#5D5E5F")};
  width: 2rem;
  height: 3px;
  display: inline-block;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: #5D5E5F;
    width: 2rem;
    height: 3px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const List = styled.ul`
    width: ${(props) => (props.clicked ? "100%" : "0")};
    opacity: ${(props) => (props.clicked ? "1" : "0")};
    
    transition: width 0.8s, opacity 0.8s;
`;


function Menu() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <div className='flex flex-row justify-center items-center'>
                <List className='flex flex-row items-center justify-between text-2xl text-white text-opacity-75' clicked={click}>
                    <li className='hover:text-akai-red mr-5'><Link href={'/about'}>About me</Link></li>
                    <li className='hover:text-akai-red mr-5'><Link href={'/portfolio'}>Portfolio</Link></li>
                    <li className='hover:text-akai-red mr-5'><Link href={'/twitch'}>Twitch</Link></li>
                    <li className='hover:text-akai-red'><Link href={'/contacts'}>Contacts</Link></li>
                </List>

                <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
                    <Icon clicked={click}> &nbsp;</Icon>
                </MenuLabel>
            </div>



        </>
    )
}

export default Menu