import React from 'react'
import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'motion/react'

const Services = ({ light }) => {
    return (
        <motion.div id="services"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='z-2 font-Ovo text-center text-lg mb-2'>what I offers</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='z-2 font-Ovo text-center text-5xl'>My services</motion.h2>
            <div className='z-2 flex justify-center my-6'>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className='font-Ovo max-w-xl text-center'>I am a fullstack developer from Karnataka, India with hands-on experience building and deploying fullstack projects.</motion.p>
            </div>

            <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
                {
                    serviceData.map((item, indx) => {
                        return <motion.li
                        whileHover={{ scale: 1.05 }}
                        key={indx} className={`group p-6 border-[0.5px] border-gray-400 rounded-xl cursor-pointer transition-all duration-500 hover:-translate-y-1 ${light ? 'hover:bg-[#fcf4ff] hover:shadow-[4px_4px_0_#000]' : 'hover:bg-[#2a004a] hover:shadow-[4px_4px_0_#fcf4ff]'} `}>
                            <Image alt='' src={item.icon} className='w-7 mt-3' />
                            <h3 className='my-4 font-semibold'>{item.title}</h3>
                            <p className='text-sm'>{item.description}</p>
                            <a href={item.link} target='_blank' className='mt-6 flex items-center text-sm'>Read more <Image src={assets.right_arrow} alt='' className='ml-2 group-hover:ml-4 transition-all duration-500 w-4' /></a>
                        </motion.li>
                    })
                }
            </motion.ul>
        </motion.div>
    )
}

export default Services