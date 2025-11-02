import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({light}) => {
    return (
        <div className='w-full px-4 lg:px-24 mt-12 scroll-mt-20 overflow-hidden' id='footer'>
            <div className='py-8 flex flex-col items-center justify-center'>
                <Image alt='' src={light ? assets.logo : assets.logo_dark} className='w-24 lg:w-28 mb-2' />
                <div className='flex items-center justify-center gap-1'>
                    <Image alt='' src={assets.mail_icon} className='w-4 lg:w-6' />
                    <p className='text-base'>i.huzaif.ibrahim@gmail.com</p>
                </div>
            </div>


            <div className='w-full border-t border-gray-400 py-4 flex flex-col lg:flex-row justify-between items-center'>
                <p>© 2025 Huzaif Ibrahim. All rights reserved.</p>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-4'>
                    <a className='' href='https://github.com/huzaif-ibrahim' target='_blank'>Github</a>
                    <a className='' href='https://instagram.com/huz4if_ibrahim' target='_blank'>Instagram</a>
                    <a className='' href='https://x.com/Huzaif_ibrahim1' target='_blank'>X</a>

                </div>
            </div>
        </div>
    )
}

export default Footer