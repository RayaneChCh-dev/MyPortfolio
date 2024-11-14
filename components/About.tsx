"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';


const About = () => {

    const [data, setData] = useState({ about_me: '' });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/data.json');
            const jsonData = await response.json();
            setData(jsonData);
        };

        fetchData();
    }, []);

    return ( 
        <div className="border-b border-[#1A1A2E] pb-4">
            <motion.h1 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl text-white">À propos de <span className="text-neutral-500">Moi</span></motion.h1>
            <div className="flex flex-wrap">
                    <motion.div 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-1/2 lg:p-8">
                        <div className="flex items-center justify-center">
                            <Image className='rounded-2xl' src="/4d948737ab38c860748edb417b8192b481b4cc8c_s2_n3_y1.png" alt="About" width={450} height={450} />
                        </div>
                    </motion.div>
                    <motion.div 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                        className='w-full lg:w-1/2'>
                        <div className="flex jusitfy-center lg:justify-start">
                            <p className='text-white my-2 max-w-xl py-6'>
                                {data.about_me}
                            </p>
                        </div>
                    </motion.div>
                </div>
            
        </div>
     );
}
 
export default About;