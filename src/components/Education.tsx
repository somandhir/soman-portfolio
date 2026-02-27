"use client";
import React from "react";
import { motion } from "framer-motion";

import { CanvasText } from "./ui/canvas-text";



export function Education() {
    const educationData = [
        {
            year: "2023 — 2027",
            degree: "B.Tech CSE + B.Hons. Data Science",
            institute: "Indian Institute of Information Technology, Pune",
            score: "8.54 / 10",
            stream: "Computer Science",
        },

    ];

    return (
        <section className="w-full bg-black px-6 py-12 md:py-16">
            <div className="max-w-5xl mx-auto">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6 md:mb-8"
                >
                    <CanvasText
                        text="Education"
                        // Matches your site's white background
                        backgroundClassName="bg-white"

                        // Replaced Whites with Blacks/Grays for visibility on White
                        colors={[
                            "rgba(0, 0, 0, 1)",       // Pure Black
                            "rgba(9, 9, 11, 0.9)",    // Zinc-950
                            "rgba(24, 24, 27, 0.8)",  // Zinc-900
                            "rgba(39, 39, 42, 0.7)",  // Zinc-800
                            "rgba(63, 63, 70, 0.6)",  // Zinc-700
                            "rgba(82, 82, 91, 0.5)",  // Zinc-600
                            "rgba(113, 113, 122, 0.4)", // Zinc-500
                            "rgba(161, 161, 170, 0.3)", // Zinc-400
                            "rgba(212, 212, 216, 0.2)", // Zinc-300
                            "rgba(228, 228, 231, 0.1)", // Zinc-200
                        ]}

                        lineGap={4}
                        animationDuration={20}
                    />


                </motion.h2>

                {/* Education Items */}
                <div className="space-y-6 -mt-4">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-6 pb-6  border-zinc-900 hover:border-zinc-800 transition-colors">
                                {/* Left Side - Content */}
                                <div className="flex-1 space-y-1.5">
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className="text-xs font-mono text-zinc-600 tracking-wider">
                                            {edu.year}
                                        </span>
                                        <span className="text-zinc-800">•</span>
                                        <span className="text-xs font-mono text-zinc-600">
                                            {edu.score}
                                        </span>
                                    </div>

                                    <h3 className="text-base md:text-lg font-medium text-white">
                                        {edu.degree}
                                    </h3>

                                    <p className="text-sm text-zinc-500 font-light">
                                        {edu.institute}
                                    </p>
                                </div>

                                {/* Right Side - Stream */}
                                <div className="flex md:items-end md:justify-end">
                                    <span className="text-sm font-mono text-zinc-500">
                                        {edu.stream}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}