"use client";


import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";

import { motion } from "framer-motion";

const iconVariants = (duration: number) =>  ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse" as const,
        },
    },
});
const Technologies = () => {
   
    return (
        <div className="border-b border-[#1A1A2E] pb-4">
            <h1 className="my-20 text-center text-4xl text-white">Technologies</h1>
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-[#4E3B7F] p-4" >
                    <FaReact className="w-12 h-12 text-7xl text-cyan-400" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-[#4E3B7F] p-4" >
                    <FaNodeJs className="w-12 h-12 text-7xl text-green-700" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-[#4E3B7F] p-4" >
                    <SiNextdotjs className="w-12 h-12 text-7xl text-zinc-950" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-[#4E3B7F] p-4" >
                    <SiMongodb className="w-12 h-12 text-7xl text-green-700" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-[#4E3B7F] p-4" >
                    <BiLogoPostgresql className="w-12 h-12 text-7xl text-blue-600" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-[#4E3B7F] p-4">
                    <SiKotlin className="w-12 h-12 text-7xl text-violet-600" />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Technologies;
