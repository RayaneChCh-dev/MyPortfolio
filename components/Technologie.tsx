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
    const initialStates = Array(7).fill(0); // Initial y values for each icon
    const [positions, setPositions] = useState(initialStates);
    const [directions, setDirections] = useState(Array(7).fill(true)); // Tracks movement direction for each icon (up or down)

    useEffect(() => {
        const handle = setInterval(() => {
            setPositions((currentPositions) => {
                return currentPositions.map((pos, index) => {
                    const up = directions[index];
                    const newPos = up ? pos + 0.1 : pos - 0.1;

                    // Update direction if limits are reached
                    if (newPos >= 1) {
                        directions[index] = false;
                    }
                    if (newPos <= -1) {
                        directions[index] = true;
                    }

                    return newPos;
                });
            });

            // Update directions using a setter to ensure reactivity
            setDirections((currentDirections) =>
                currentDirections.map((dir, index) => {
                    const newPos = positions[index];
                    if (newPos >= 1) {
                        return false;
                    } else if (newPos <= -1) {
                        return true;
                    }
                    return dir;
                })
            );
        }, 20);

        return () => clearInterval(handle);
    }, [positions, directions]);

    return (
        <div className="border-b border-[#1A1A2E] pb-4">
            <h1 className="my-20 text-center text-4xl text-white">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-[#4E3B7F] p-4" style={{ transform: `translateY(${positions[0]}rem)` }}>
                    <FaReact className="w-12 h-12 text-7xl text-cyan-400" />
                </div>
                <div className="rounded-2xl border-4 border-[#4E3B7F] p-4" style={{ transform: `translateY(${positions[1]}rem)` }}>
                    <FaNodeJs className="w-12 h-12 text-7xl text-green-700" />
                </div>
                <div className="rounded-2xl border-4 border-[#4E3B7F] p-4" style={{ transform: `translateY(${positions[3]}rem)` }}>
                    <SiNextdotjs className="w-12 h-12 text-7xl text-zinc-950" />
                </div>
                <div className="rounded-2xl border-4 border-[#4E3B7F] p-4" style={{ transform: `translateY(${positions[4]}rem)` }}>
                    <SiMongodb className="w-12 h-12 text-7xl text-green-700" />
                </div>
                <div className="rounded-2xl border-4 border-[#4E3B7F] p-4" style={{ transform: `translateY(${positions[5]}rem)` }}>
                    <BiLogoPostgresql className="w-12 h-12 text-7xl text-blue-600" />
                </div>
                <div className="rounded-2xl border-4 border-[#4E3B7F] p-4" style={{ transform: `translateY(${positions[6]}rem)` }}>
                    <SiKotlin className="w-12 h-12 text-7xl text-violet-600" />
                </div>
            </div>
        </div>
    );
}

export default Technologie;
