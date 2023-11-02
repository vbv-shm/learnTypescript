import React from 'react'
import {headerLogo} from "../assets/images"
import {hamburger} from "../assets/icons"

import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container '>
            <a href="/">
                <img src={headerLogo}
                alt="Logo"
                width={130}
                height={29}
                />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 '>
                {navLinks.map((item)=>(
                    <li key={item.lable}>
                        <a
                            href={item.href}
                            className='font-monts errat leading-normal text-slate-gray max-md:hidden'
                        >
                            {item.label}
                        </a>
                    </li>
                ))}

            </ul>
            <div>
                <img src={hamburger}
                width={25}
                height={25}
                className='hidden max-md:block'
                />
            </div>
            
        </nav>
    </header>
  )
}

export default Nav