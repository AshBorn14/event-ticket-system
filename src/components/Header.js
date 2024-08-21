import React from 'react'
import { IoQrCode } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom"
import sitelogo from "../assets/sitelogo.png"
import { navigation } from '../constants/Navigation';


const Header = () => {
  return (
    <header className="fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40">
        <div className='container mx-auto px-3 flex items-center h-full'>
            <Link to={"/"}>
                <img src={sitelogo}
                    alt='logo'
                    width={160}
                    />
            </Link>
            
            <div className="ml-auto flex items-center gap-5">
            <nav className='hidden lg:flex items-center gap-1 ml-4'>
                {
                    navigation.map((nav,index)=>{
                        return (
                            <div className='flex ml-5'>
                                <div className='text-2xl'>
                                {nav.icon}
                                </div>
                                
                                <NavLink key={nav.label} to={nav.href} className={({isActive})=>`px-2 hover:text-neutral-100 ${isActive && 'text-neutral-100'}`}>{nav.label}</NavLink>
                            </div>
                        )
                    })
                }
            </nav>
            </div>
        </div>
    </header>
  )
}

export default Header