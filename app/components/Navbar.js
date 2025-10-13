"use client"

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({light, setLight}) => {

  const [isScroll, setIsScroll] = useState(false)
  const menuRef = useRef()

  const openMenu = () => {
    menuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    menuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(scrollY > 50){
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    })
  }, [])

  return (
    <>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-500 ease-in ${isScroll ? `${light ? 'bg-white/50' : 'bg-[#2a004a]/50'} backdrop-blur-lg shadow-sm` : ""}`}>
        <a href='#top'><Image src={light ? assets.logo : assets.logo_dark} className='w-32 h-7' alt='logo' /></a>

        <ul className={`hidden lg:flex items-center justify-center gap-6 lg:gap-8 px-12 py-3 rounded-full transition-all duration-500 ease-in ${isScroll ? "" : `${light ? 'bg-white/50' : 'bg-[#2a004a]/50'} shadow-sm`}`}>
          <li className="relative group">
            <a href="#top" className="font-Ovo relative">
              Home
              <span className={`absolute left-0 -bottom-1 h-[1px] w-0 ${light ? 'bg-[#2f2f2f]' : 'bg-white'} transition-all duration-500 group-hover:w-full`}></span>
            </a>
          </li>
          <li className="relative group">
            <a href="#about" className="font-Ovo relative">
              About
              <span className={`absolute left-0 -bottom-1 h-[1px] w-0 ${light ? 'bg-[#2f2f2f]' : 'bg-white'} transition-all duration-500 group-hover:w-full`}></span>
            </a>
          </li>
          <li className="relative group">
            <a href="#services" className="font-Ovo relative">
              Services
              <span className={`absolute left-0 -bottom-1 h-[1px] w-0 ${light ? 'bg-[#2f2f2f]' : 'bg-white'} transition-all duration-500 group-hover:w-full`}></span>
            </a>
          </li>
          <li className="relative group">
            <a href="#work" className="font-Ovo relative">
              My work
              <span className={`absolute left-0 -bottom-1 h-[1px] w-0 ${light ? 'bg-[#2f2f2f]' : 'bg-white'} transition-all duration-500 group-hover:w-full`}></span>
            </a>
          </li>
          <li className="relative group">
            <a href="#contact" className="font-Ovo relative">
              Testimonials
              <span className={`absolute left-0 -bottom-1 h-[1px] w-0 ${light ? 'bg-[#2f2f2f]' : 'bg-white'} transition-all duration-500 group-hover:w-full`}></span>
            </a>
          </li>
        </ul>

        <div className='flex items-center gap-6 lg:gap-8'>
          <button onClick={() => {
            setLight(!light)
            }}>
            <Image src={light ? assets.moon_icon : assets.sun_icon} alt='' className='w-6 cursor-pointer' />
          </button>

          <a href='#contact' className='font-Ovo group hidden lg:flex gap-3 items-center justify-center border border-zinc-300 transition-all duration-700 px-8 py-2 rounded-full'>Contact<Image src={light ? assets.arrow_icon : assets.arrow_icon_dark} alt='arrow' className='h-3 w-auto group-hover:rotate-45 transition-all duration-500' /></a>

          <button className='block lg:hidden ml-1' onClick={openMenu}>
            <Image alt='' src={light ? assets.menu_black : assets.menu_white} className='w-6' />
          </button>
        </div>


        {/* MOBILE MENU */}
        <ul ref={menuRef} className={`flex lg:hidden ${light ? 'bg-rose-50 text-gray-700' : 'bg-[#2a004a] text-white'} flex-col py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen text-black transition-all duration-500 ease-in-out gap-8`}>
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={light ? assets.close_black : assets.close_white} alt='' className='w-5 cursor-pointer' />
          </div>
          <li><a href='#top' className='text-lg' onClick={closeMenu}>Home</a></li>
          <li><a href='#about' className='text-lg' onClick={closeMenu}>About me</a></li>
          <li><a href='#services' className='text-lg' onClick={closeMenu}>Services</a></li>
          <li><a href='#work' className='text-lg' onClick={closeMenu}>My work</a></li>
          <li><a href='#contact' className='text-lg' onClick={closeMenu}>Testimonials</a></li>
        </ul>

      </nav>
    </>
  )
}

export default Navbar