'use client'

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'motion/react'
import { toast } from 'react-toastify';

const Contact = ({ light }) => {

    const [loading, setLoading] = useState(false)

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)
        const formData = new FormData(event.target);

        formData.append("access_key", "1bcf08fc-7890-4f00-b423-95043829de17");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            toast.success('Submitted Successfully.')
            event.target.reset()
        } else {
            toast.error('Something went wrong!')
        }
        setLoading(false)
    };

    return (
        <motion.div
            nitial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='relative w-full px-[12%] py-10 scroll-mt-20 overflow-hidden' id='contact'>
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='font-Ovo text-center text-lg mb-2'>Connect with me</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='font-Ovo text-center text-5xl'>Get in touch</motion.h2>
            <div className='flex justify-center my-6'>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className='font-Ovo max-w-xl text-center'>I&apos;d love to hear from you! If you have any questions, comments or
                    feedback, please use the form below.</motion.p>
            </div>

            <motion.form
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                onSubmit={onSubmit} className='max-w-xl mx-auto flex flex-col gap-6 items-center justify-center w-full'>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-4 w-full'>
                    <motion.input
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        name='name' type='text' className={`outline-0 rounded-sm border border-gray-400 p-3 w-full ${!light && 'bg-[#2a004a]/50'}`} placeholder='Enter your name' required />
                    <motion.input
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        name='email' type='email' className={`outline-0 rounded-sm border border-gray-400 p-3 w-full ${!light && 'bg-[#2a004a]/50'}`} placeholder='Enter your email' required />
                </div>
                <motion.textarea
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    name='message' className={`outline-0 w-full p-3 min-h-32 rounded-sm border border-gray-400 ${!light && 'bg-[#2a004a]/50'}`} placeholder='Describe your message' />

                <motion.button
                    whileHover={!loading ? { scale: 1.05 } : {}}
                    transition={{ duration: 0.3 }}
                    type='submit'
                    disabled={loading}
                    className={`transition-all duration-700 cursor-pointer mt-6 group flex items-center justify-center rounded-full py-2 px-4 ${light
                            ? 'bg-black'
                            : 'bg-transparent border border-gray-400 hover:bg-[#2a004a]/50'
                        } text-white disabled:opacity-60 disabled:cursor-not-allowed`}
                >
                    {loading ? (
                        <>
                            <span className="animate-pulse">Sending...</span>
                            <Image
                                alt=""
                                src={light ? assets.right_arrow_white : assets.right_arrow}
                                className="ml-2 w-4 animate-spin-slow"
                            />
                        </>
                    ) : (
                        <>
                            Submit now
                            <Image
                                alt=""
                                src={light ? assets.right_arrow_white : assets.right_arrow}
                                className="ml-2 group-hover:ml-6 transition-all duration-500 w-4"
                            />
                        </>
                    )}
                </motion.button>

            </motion.form>
        </motion.div>
    )
}

export default Contact