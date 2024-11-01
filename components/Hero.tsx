"use client";

import { useState, useEffect } from "react";
import Image from "next/image";



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
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl text-white">
                            {data.name}
                        </h1>
                        <span className="bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            {data.role}
                        </span>
                        <p className="text-white my-2 max-w-xl py-6 font-light tracking-tight">
                            {data.description}
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <Image 
                        src="/react.png"
                        width={300}
                        height={300}
                        alt="React logo"
                    />
                </div>
            </div>
            
        </div>
     );
}
 
export default Hero;