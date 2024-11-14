"use client";


import { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProjectItem {
    title: string;
    image: string;
    description: string;
    technologies: string[];
    link: string;
}

interface ProjectData {
    projects: ProjectItem[];
}

const Project = () => {

    const [data, setData] = useState<ProjectData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                const jsonData: ProjectData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    return ( 
        <div className="border-b border-[#1A1A2E] pb-4">
            <motion.h1 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl text-white">Projets</motion.h1>
            <div>
                {data?.projects ? (
                    data.projects.map((project, index) => (
                        <div key={index} className="mb-8 flex flex-wrap justify-center lg:gap-4">
                            <motion.div 
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2">
                                <Image className='rounded-2xl w-full h-auto' src={project.image} alt="profile" width={350} height={350} />
                            </motion.div>
                            <motion.div 
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1 }}
                                className="w-full sm:w-1/2 md:w-2/3 lg:max-w-xl px-2 mt-4 lg:mt-0">
                                <h6 className="mb-2 font-semibold text-center lg:text-left text-white">{project.title}</h6>
                                <p className="text-white my-2 max-w-xl py-6 font-light tracking-tight text-center lg:text-left">
                                    {project.description}
                                </p>
                                {project.technologies && project.technologies.length > 0 && (
                                    <div className="flex flex-wrap justify-center lg:justify-start">
                                        {project.technologies.map((technology, index) => (
                                            <span key={index} className="mr-2 mb-2 inline-block rounded-full bg-[#1A1A2E] px-3 py-1 text-sm font-semibold text-white">
                                                {technology}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                <div className="flex justify-center lg:justify-start mt-4">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-[#8b288f] px-4 py-2 text-sm font-semibold text-white hover:bg-[#834094] transition duration-300 ease-in-out">
                                        <span className="flex items-center">
                                            <span className="mr-2">Visiter le projet</span>
                                            <FaArrowRight className="inline-block group-hover:inline-block" />
                                        </span>
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    ))
                ) : (
                    <p>Loading projects...</p>
                )}
            </div>
        </div>
     );
}
 
export default Project;