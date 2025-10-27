"use client"

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Header = ({ light }) => {
  return (
    <>
      {/*  */}
      <div className='absolute h-screen top-0 right-0 left-0 transition-all duration-700 w-full lg:w-11/12 z-0 lg:translate-y-[-80%] opacity-70'>
        {light && <Image src={assets.header_bg_color} className='w-full transition-all duration-700' alt='' />}
      </div>
      <motion.div
        className={`w-11/12 max-w-3xl mx-auto h-screen flex flex-col items-center justify-center gap-4`}>
        <div className='z-1'>
          <div className='flex flex-col items-center justify-center gap-1 lg:gap-3'>
            <motion.div initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}><Image src={assets.user_image} alt='' className='rounded-full w-32' /></motion.div>
            <motion.h3
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='font-Ovo flex items-center justify-center gap-2 text-xl lg:text-2xl'>Hi! I am Huzaif Ibrahim<Image alt='' src={assets.hand_icon} className='' width={20} /></motion.h3>
          </div>

          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='font-Ovo mt-2 text-center text-3xl sm:text-6xl lg:text-[66px]'>Fullstack web developer <br /> based in India.</motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className='font-Ovo mt-2 px-4 lg:px-0 max-w-2xl mx-auto text-center'>I am a fullstack developer from Karnataka, India with hands-on experience building and deploying fullstack projects.</motion.p>

          <div className='flex items-center justify-center gap-2 lg:gap-4 mt-6'>
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              href='#contact' className={`group cursor-pointer flex items-center gap-2 rounded-full px-3 py-1 lg:px-6 lg:py-3 transition-all duration-700  border border-zinc-300 ${light ? "bg-black text-white" : " hover:bg-[#2a004a]/50"}`}><p className=''>connect with me</p> <Image alt='' src={assets.right_arrow_white} className='w-4 ml-0 group-hover:ml-3 transition-all duration-500' /></motion.a>
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              href='/huzaif_resume.pdf' download className={`cursor-pointer flex items-center gap-2 rounded-full px-3 py-1 lg:px-6 lg:py-3 transition-all duration-700 border border-zinc-400 bg-white text-black`}><p className=''>my resume</p> <Image alt='' src={assets.download_icon} className='w-4' /></motion.a>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Header