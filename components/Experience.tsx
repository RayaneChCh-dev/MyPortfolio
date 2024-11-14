"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Define types for the data structure
interface ExperienceItem {
    year: number;
    role: string;
    company: string;
    description: string;
    technologies: string[];
}

interface ExperienceData {
    experiences: ExperienceItem[];
}

const Experience = () => {
    // Initialize state with a type
    const [data, setData] = useState<ExperienceData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                const jsonData: ExperienceData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return ( 
        <div className="border-b border-[#1A1A2E] pb-4">
            <h1 className="my-20 text-center text-4xl text-white">Experiences</h1>
            <div>
                {data?.experiences ? (
                    data.experiences.map((experience, index) => (
                        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                            <motion.div 
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className="w-full lg:w-1/4">
                                <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                            </motion.div>
                            <motion.div 
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1 }}
                                className="w-full max-w-xl">
                                <h6 className="mb-2 font-semibold text-white">
                                    {experience.role} -{" "}
                                    <span className="text-sm text-white">{experience.company}</span>
                                </h6>
                                <p className="mb-4 text-neutral-400">{experience.description}</p>
                                {experience.technologies && experience.technologies.length > 0 && (
                                    <div className="flex flex-wrap">
                                        {experience.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="mr-2 mb-2 rounded border border-white/10 bg-white/5 px-4 py-2 text-xs text-white"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    ))
                ) : (
                    <p className="text-white">Loading experiences...</p>
                )}
            </div>
        </div>
    );
}

export default Experience;
