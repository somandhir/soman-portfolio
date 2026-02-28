"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { CanvasText } from "./ui/canvas-text";


export function TechStack() {
    const [expanded, setExpanded] = useState(false);
    const [hovered, setHovered] = useState<string | null>(null);

    const scrollTech = [
        { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
        { name: "TypeScript", icon: "typescript", color: "3178C6" },
        { name: "Python", icon: "python", color: "3776AB" },
        { name: "C++", icon: "cplusplus", color: "00599C" },

        { name: "React", icon: "react", color: "61DAFB" },
        { name: "Next.js", icon: "nextdotjs", color: "ffffff" },
        { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },

        { name: "Node.js", icon: "nodedotjs", color: "339933" },
        { name: "Express.js", icon: "express", color: "ffffff" },
        { name: "JWT Auth", icon: "jsonwebtokens", color: "ffffff" },

        { name: "MongoDB", icon: "mongodb", color: "47A248" },
        { name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
        { name: "Redis", icon: "redis", color: "DC382D" },

        { name: "Docker", icon: "docker", color: "2496ED" },
        { name: "Vercel", icon: "vercel", color: "ffffff" },

        { name: "Git", icon: "git", color: "F05032" },
        { name: "GitHub", icon: "github", color: "ffffff" },
    ];

    const fullStack = {
        Languages: [
            { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
            { name: "TypeScript", icon: "typescript", color: "3178C6" },
            { name: "Python", icon: "python", color: "3776AB" },
            { name: "C++", icon: "cplusplus", color: "00599C" },
        ],
        Frontend: [
            { name: "React", icon: "react", color: "61DAFB" },
            { name: "Next.js", icon: "nextdotjs", color: "ffffff" },
            { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
            { name: "Aceternity UI", icon: "react", color: "61DAFB" },
            { name: "Framer Motion", icon: "framer", color: "0055FF" },
        ],
        "Backend & DB": [
            { name: "Node.js", icon: "nodedotjs", color: "339933" },
            { name: "Express.js", icon: "express", color: "ffffff" },
            { name: "JWT Auth", icon: "jsonwebtokens", color: "ffffff" },
            { name: "MongoDB", icon: "mongodb", color: "47A248" },
            { name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
            { name: "Redis", icon: "redis", color: "DC382D" },
        ],
        Tools: [
            { name: "Git", icon: "git", color: "F05032" },
            { name: "GitHub", icon: "github", color: "ffffff" },
            { name: "Docker", icon: "docker", color: "2496ED" },
            { name: "Vercel", icon: "vercel", color: "ffffff" },
        ],
    };

    return (
        <section className="w-full bg-black px-6 py-12 md:py-16 -mt-15">
            <div className="max-w-5xl mx-auto">

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-end justify-between mb-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">

                        <CanvasText
                            text="Tech Stack"
                            backgroundClassName="bg-white"

                            colors={[
                                "rgba(0, 0, 0, 1)",       
                                "rgba(9, 9, 11, 0.9)",    
                                "rgba(24, 24, 27, 0.8)",  
                                "rgba(39, 39, 42, 0.7)",  
                                "rgba(63, 63, 70, 0.6)",  
                                "rgba(82, 82, 91, 0.5)",  
                                "rgba(113, 113, 122, 0.4)", 
                                "rgba(161, 161, 170, 0.3)", 
                                "rgba(212, 212, 216, 0.2)", 
                                "rgba(228, 228, 231, 0.1)", 
                            ]}

                            lineGap={4}
                            animationDuration={20}
                        />
                    </h2>

                    <button
                        onClick={() => setExpanded((prev) => !prev)}
                        className="text-xs font-mono text-zinc-600 hover:text-zinc-400 tracking-wider"
                    >
                        {expanded ? "Show Less ↑" : "Show Full Stack ↓"}
                    </button>
                </motion.div>

                <p className="text-sm text-zinc-500 font-light mb-8 max-w-xl">
                    Tools and technologies I use to build production-ready systems.
                </p>

                {/* Infinite Scroll */}
                {!expanded && (
                    <div className="relative overflow-hidden mb-10">
                        <div className="flex w-max gap-12 animate-scroll">
                            {[...scrollTech, ...scrollTech].map((tech, index) => {
                                const isHovered = hovered === tech.name;

                                return (
                                    <div
                                        key={index}
                                        onMouseEnter={() => setHovered(tech.name)}
                                        onMouseLeave={() => setHovered(null)}
                                        className="flex flex-col items-center gap-2 transition-all duration-300 "
                                    >
                                        <img
                                            src={`https://cdn.simpleicons.org/${tech.icon}/${isHovered ? tech.color : "white"}`}
                                            alt={tech.name}
                                            className="w-8 h-8 opacity-80 transition-all duration-300"
                                        />

                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Expanded View */}
                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-8"
                        >
                            {Object.entries(fullStack).map(([category, techs]) => (
                                <div key={category}>
                                    <h4 className="text-xs font-mono text-zinc-600 tracking-wider uppercase mb-4">
                                        {category}
                                    </h4>

                                    <div className="flex flex-wrap gap-x-8 gap-y-6">
                                        {techs.map((tech) => {
                                            const isHovered = hovered === tech.name;

                                            return (
                                                <div
                                                    key={tech.name}
                                                    onMouseEnter={() => setHovered(tech.name)}
                                                    onMouseLeave={() => setHovered(null)}
                                                    className="flex items-center gap-3 transition-all duration-300 "
                                                >
                                                    <img
                                                        src={`https://cdn.simpleicons.org/${tech.icon}/${isHovered ? tech.color : "white"}`}
                                                        alt={tech.name}
                                                        className="w-6 h-6 opacity-80 transition-all duration-300"
                                                    />

                                                    <span
                                                        className="text-sm transition-colors duration-300 z-5"
                                                        style={{
                                                            color: isHovered ? `#${tech.color}` : "#52525b",
                                                        }}
                                                    >
                                                        {tech.name}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}