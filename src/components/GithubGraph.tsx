"use client";

import React, { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";

import { CanvasText } from "./ui/canvas-text";



export function ActivityHub() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="w-full bg-black px-6 py-12 md:py-16 -mt-18">
            <div className="max-w-5xl mx-auto space-y-12">

                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white tracking-tight"
                >
                    <CanvasText
                        text="In the Trenches"
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

                {/* GitHub Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono text-zinc-600 tracking-wider uppercase">
                            GitHub
                        </span>
                        <span className="text-zinc-800">•</span>
                        <span className="text-xs font-mono text-zinc-600">
                            Contributions
                        </span>
                    </div>

                    <div className="overflow-x-auto">
                        {mounted && (
                            <GitHubCalendar
                                username="somandhir"
                                theme={{
                                    dark: [
                                        "#0d0d0d",
                                        "#0e4429",
                                        "#006d32",
                                        "#26a641",
                                        "#39d353",
                                    ],
                                }}
                                style={{ color: "#52525b" }}
                                labels={{
                                    totalCount: "{{count}} contributions in the last year",
                                }}
                            />
                        )}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}