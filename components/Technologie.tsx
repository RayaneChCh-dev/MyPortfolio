"use client";

import { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";

const Technologie = () => {
   
    return (
        <div className="border-b border-[#1A1A2E] pb-4">
            <h1 className="my-20 text-center text-4xl text-white">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-[#4E3B7F] p-4" >
                    <FaReact className="w-12 h-12 text-7xl text-cyan-400" />
                </div>
                <div className="rounded-2xl border-4 border-[#4E3B7F] p-4" >
                    <FaNodeJs className="w-12 h-12 text-7xl text-green-700" />
                </div>
                <div className="rounded-2xl border-4 border-[#4E3B7F] p-4" >
                    <SiNextdotjs className="w-12 h-12 text-7xl text-zinc-950" />
                </div>
                <div className="rounded-2xl border-4 border-[#4E3B7F] p-4" >
                    <SiMongodb className="w-12 h-12 text-7xl text-green-700" />
                </div>
                <div className="rounded-2xl border-4 border-[#4E3B7F] p-4" >
                    <BiLogoPostgresql className="w-12 h-12 text-7xl text-blue-600" />
                </div>
                <div className="rounded-2xl border-4 border-[#4E3B7F] p-4">
                    <SiKotlin className="w-12 h-12 text-7xl text-violet-600" />
                </div>
            </div>
        </div>
    );
}

export default Technologie;
