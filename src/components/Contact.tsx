"use client";
import React from "react";
import { motion } from "framer-motion";
import { CanvasText } from "./ui/canvas-text";

export function Contact() {
    return (
        <section id="contact" className="w-full bg-black px-6 py-16 -mt-10">
            <div className="max-w-5xl mx-auto">

                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-12"
                >
                    <CanvasText
                        text="Contact"
                        backgroundClassName="bg-white"
                        colors={[
                            "rgba(0, 0, 0, 1)",
                            "rgba(24, 24, 27, 0.8)",
                            "rgba(63, 63, 70, 0.6)",
                            "rgba(113, 113, 122, 0.4)",
                            "rgba(212, 212, 216, 0.2)",
                        ]}
                        lineGap={4}
                        animationDuration={20}
                    />
                </motion.h2>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-xl md:text-2xl font-medium text-white">
                            Let's Connect.
                        </h3>

                        <p className="text-sm md:text-base text-zinc-500 font-light leading-relaxed max-w-md">
                            Always interested in backend challenges, system architecture
                            discussions, and building scalable solutions.
                            If you have something meaningful to build — I’m in.
                        </p>

                        <div className="space-y-2 pt-4">

                            <a
                                href="mailto:somandhir@gmail.com"
                                className="block text-sm font-mono text-zinc-400 hover:underline underline-offset-4"
                            >
                                somandhir@gmail.com →
                            </a>

                            <a
                                href="tel:+919465549984"
                                className="block text-sm font-mono text-zinc-400 hover:underline underline-offset-4"
                            >
                                +91 9465549984 →
                            </a>

                        </div>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4"
                    >
                        {[
                            { name: "GitHub", link: "https://github.com/somandhir/" },
                            { name: "LinkedIn", link: "https://www.linkedin.com/in/somandhir/" },
                            { name: "Instagram", link: "https://www.instagram.com/somandhir/" },
                            { name: "Resume", link: "https://drive.google.com/file/d/19tcbCovnNXcwPRXHWT5nYTF_dy8I0Tby/view?usp=drive_link" },
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                className="group flex items-center justify-between border-b border-zinc-900 py-3 transition-colors hover:border-zinc-700"
                            >
                                <span className="text-sm font-medium text-white tracking-wide">
                                    {item.name}
                                </span>
                                <span className="text-xs font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                                    →
                                </span>
                            </a>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}