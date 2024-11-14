"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const container = (delay: number) => ({
    hidden: { x:-100, opacity: 0 },
    visible: { 
        x: 0, 
        opacity: 1,
        transition: {
            delay: delay,
            duration: 0.5
        }
    },
})

const Hero = () => {
    const [data, setData] = useState({ name: '', role: '', description: '' });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/data.json');
            const jsonData = await response.json();
            setData(jsonData);
        };

        fetchData();
    }, []);

    return ( 
        <div className="border-b border-[#1A1A2E] pb-4 lg:mb-35">
            <div className="flex flex-wrap justify-center items-center">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start mt-2">
                        <motion.h1 
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl text-white">
                            {data.name}
                        </motion.h1>
                        <motion.span
                            variants={container(1)}
                            initial="hidden"
                            animate="visible" 
                            className="bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                            {data.role}
                        </motion.span>
                        <motion.p 
                            variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                            className="text-white my-2 max-w-xl py-6 font-light tracking-tight">
                            {data.description}
                        </motion.p>
                    </div>
                </div>
                <motion.div 
                    
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.5 }}
                    className="w-full lg:w-1/2 lg:p-8 flex justify-center items-center tracking-tight">
                    <Image 
                        src="/desktop.png"
                        width={600}
                        height={600}
                        className="w-full h-full object-contain rounded-3xl"
                        alt="Desktop Logo"
                    />
                </motion.div>
            </div>
        </div>
     );
}
 
export default Hero;