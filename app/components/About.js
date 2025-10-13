import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = ({ light }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='font-Ovo text-center text-lg mb-2'>introduction</motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='font-Ovo text-center text-5xl'>About me</motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex w-full flex-col lg:flex-row items-center gap-8 lg:gap-20 my-8 lg:my-20'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='w-72 lg:w-92 rounded-3xl max-w-none'>
          <Image alt='' src={assets.profile_img} className='rounded-3xl w-full' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1'>
          <p
          className='font-Ovo mb-10 max-w-2xl'>I am a passionate Fullstack Developer with hands-on experience in building modern web applications. I have worked on multiple fullstack projects, gaining practical expertise in both frontend and backend development while continuously enhancing my skills.</p>

          <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className='grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-2xl'>
            {
              infoList.map((item, indx) => {
                return <motion.li
                whileHover={{ scale: 1.05 }}
                key={indx} className={`p-6 border-[0.5px] border-gray-400 rounded-xl cursor-pointer transition-all duration-500 hover:-translate-y-1 ${light ? 'hover:bg-[#fcf4ff] hover:shadow-[4px_4px_0_#000]' : 'hover:bg-[#2a004a] hover:shadow-[4px_4px_0_#fcf4ff]'} `}>
                  <Image alt='' src={item.icon} className='w-7 mt-3' />
                  <h3 className='my-4 font-semibold'>{item.title}</h3>
                  <p className='text-sm'>{item.description}</p>
                </motion.li>
              })
            }
          </motion.ul>

          <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className='font-Ovo mt-6 mb-3'>Tools I use</motion.h4>

          <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className='flex items-center gap-3 lg:gap-5'>
            {
              toolsData.map((item, indx) => {
                return <motion.li
                whileHover={{scale: 1.1}}
                key={indx} className='p-2 lg:p-4 border border-gray-400 rounded-xl hover:-translate-y-1 transition-all duration-500'>
                  <Image alt='' src={item} className='w-7' />
                </motion.li>
              })
            }
          </motion.ul>

        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About