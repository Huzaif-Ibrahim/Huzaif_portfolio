"use client"
import React from 'react'
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'motion/react'

const LatestWork = ({ light }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="work" className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='font-Ovo text-center text-lg mb-2'>My portfolio</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='font-Ovo text-center text-5xl'>My latest work</motion.h2>
            <div className='flex justify-center my-6'>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className='font-Ovo max-w-xl text-center'>Welcome to my web development portfolio! Explore a collection of projects showcasing
                    my expertise in front-end development.</motion.p>
            </div>

            <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
                {
                    workData.map((item, indx) => {
                        return <motion.li
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            key={indx} >
                            <a href={item.link} target='_blank' className='relative group min-h-72 overflow-hidden p-6 rounded-xl flex items-end'>
                                <Image alt='' src={item.bgImage} fill className='absolute inset-0 object-cover z-0' />
                                <div className='z-1 w-full transition-all duration-500 group-hover:-translate-y-1 px-4 py-2 rounded-lg bg-white h-fit flex items-center justify-between'>
                                    <div className='flex flex-col justify-center'>
                                        <h3 className='font-semibold text-gray-700 leading-5 mb-3'>{item.title}</h3>
                                        <p className='text-gray-600 text-sm'>{item.description}</p>
                                    </div>
                                    <div className='p-4 border border-gray-400 rounded-full group-hover:bg-lime-300 transition-all duration-500 cursor-pointer shadow-[2px_2px_0_#000]'>
                                        <Image src={assets.send_icon} className='w-4' alt='' />
                                    </div>
                                </div>
                            </a>
                        </motion.li>
                    })
                }
            </motion.ul>

            <div className='flex justify-center mt-8 lg:mt-12'>
                <motion.a
                href='https://github.com/huzaif-ibrahim'
                target='_blank'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.1, delay: 0.5 }}
                className={`group cursor-pointer ${light ? 'hover:bg-gray-300' : 'hover:bg-[#2a004a]/50'} transition-all duration-500 flex items-center justify-center border border-gray-400 rounded-full px-4 py-2`}>
                    Show more <Image alt='' src={assets.right_arrow} className='ml-2 group-hover:ml-6 transition-all duration-500 w-4' />
                </motion.a>
            </div>
        </motion.div>
    )
}

export default LatestWork