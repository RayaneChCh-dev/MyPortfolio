"use client";

import React, { useEffect, useState } from 'react';
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
            <h1 className="my-20 text-center text-4xl text-white"> About <span className="opacity-50"> Me</span></h1>
            <div className="flex flex-wrap justify-center items-center lg:max-w-7xl">
                <div className="w-full lg:w-1/2 lg:flex lg:justify-center lg:p-8">
                    <div className="flex items-center justify-center">
                        <Image className='rounded-2xl' src="/4d948737ab38c860748edb417b8192b481b4cc8c_s2_n3_y1.png" alt="profile" width={350} height={350} />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:flex lg:justify-center'>
                    <p className='text-white my-2 max-w-xl py-6 font-light tracking-tight'>
                        {data.about_me}
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default About;