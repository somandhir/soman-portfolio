"use client";

import React from "react";
import { motion } from "framer-motion";
import { CanvasText } from "./ui/canvas-text";
import { LinkPreview } from "./ui/link-preview";

export function FromCuriosityToCode() {
    return (
        <section className="w-full bg-black px-6 py-12 md:py-16">
            <div className="max-w-5xl mx-auto">

                {/* Section Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-8"
                >
                    <CanvasText
                        text="From Curiosity to Code"
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
                </motion.h2>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-6 text-sm md:text-base text-zinc-400 leading-relaxed font-light"
                >

                    <div>

                        I grew up in Khanna — a warm city in Punjab — uncertain about what to pursue
                        after 12th grade, I chose engineering (yeah very unique) — and Computer Science felt
                        like the most natural path. I prepared for JEE (Jeevan Ek Etihaas). That journey eventually led me to{" "}
                        <LinkPreview url="https://www.iiitp.ac.in/">
                            <span className="text-white underline underline-offset-4 cursor-pointer">
                                IIIT Pune
                            </span>
                        </LinkPreview>{" "}, where my
                        curiosity for systems and algorithms truly began to take direction.
                    </div>

                    <div>
                        Even before coding, I was drawn to structured thinking. Games like{" "}
                        <LinkPreview url="https://www.chess.com/member/biggener133">
                            <span className="text-white underline underline-offset-4 cursor-pointer">
                                chess
                            </span>
                        </LinkPreview>{" "}
                        fascinated me — not just for winning ( wdym - could not win ¬_¬ ), but for logic and pattern recognition.
                    </div>

                    <div>
                        In college, I discovered competitive programming and began solving problems
                        on{" "}
                        <LinkPreview url="https://www.codechef.com/users/somanx">
                            <span className="text-white underline underline-offset-4 cursor-pointer">
                                CodeChef
                            </span>
                        </LinkPreview>. 
                        Within two months I became a 2★ coder(but took way too long for 3★ O.O), eventually reaching a rating of 1742.
       
                        I later transitioned into deeper problem solving on{" "}
                        <LinkPreview url="https://leetcode.com/somandhir">
                            <span className="text-white underline underline-offset-4 cursor-pointer">
                                LeetCode
                            </span>
                        </LinkPreview>,
                        solving 800+ problems and reaching a rating of 1932.
                    </div>

                    <div>
                        Alongside algorithms, I began building — starting with HTML/CSS,
                        evolving into Next.js, Docker, Redis, and scalable backend systems.
                    
                        Today, my curiosity has shifted toward system design —
                        exploring how systems handle{" "}
                        <LinkPreview url="https://youtu.be/W4EwfEU8CGA?si=cA5lUHZYbIMNBOMc">
                            <span className="text-white underline underline-offset-4 cursor-pointer">
                                1 million requests per second
                            </span>
                        </LinkPreview>{" "}
                        and what makes distributed systems resilient at scale.
                    </div>

                    <div>
                        What began as curiosity evolved into structured thinking,
                        performance obsession, and a drive to build reliable systems.
                    </div>

                </motion.div>
            </div>
        </section>
    );
}