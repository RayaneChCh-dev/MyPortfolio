"use client";


import { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

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
            <h1 className="my-20 text-center text-4xl text-white">Projects</h1>
            <div>
                {data?.projects ? (
                    data.projects.map((project, index) => (
                        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                            <div className="w-full lg:w-1/4">
                                <Image className='rounded-2xl' src={project.image} alt="profile" width={350} height={350} />
                            </div>
                            <div className="w-full max-w-xl">
                                <h6 className="mb-2 font-semibold text-white">{project.title}</h6>
                                <p className="text-white my-2 max-w-xl py-6 font-light tracking-tight">
                                    {project.description}
                                </p>
                                {project.technologies && project.technologies.length > 0 && (
                                    <div className="flex flex-wrap">
                                        {project.technologies.map((technology, index) => (
                                            <span key={index} className="mr-2 mb-2 inline-block rounded-full bg-[#1A1A2E] px-3 py-1 text-sm font-semibold text-white">
                                                {technology}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-[#8b288f] px-4 py-2 text-sm font-semibold text-white hover:bg-[#834094] transition duration-300 ease-in-out">
                                    <span className="flex items-center">
                                        <span className="mr-2">Visit the project</span>
                                        <FaArrowRight className="inline-block group-hover:inline-block" />
                                    </span>
                                </a>

                            </div>
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