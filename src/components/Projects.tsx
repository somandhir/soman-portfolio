"use client";
import React from "react";
import { motion } from "framer-motion";
import { CanvasText } from "./ui/canvas-text";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const GithubSVG = () => (
    <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

interface Project {
    area: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    github: string;
    live?: string | null;
    slug: string;
}

const projectsData: Project[] = [
    {
        slug: "api-platform",

        area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
        title: "API Platform",
        subtitle: "Scalable Microservices Gateway",
        description:
            "A production-grade API Gateway built with Node.js and TypeScript, orchestrating containerised microservices via Docker Compose. Features a Redis caching layer for sub-5ms response times, a custom token-bucket rate limiter for burst traffic, and RabbitMQ-decoupled audit logging that keeps the gateway live regardless of downstream service health.",
        tags: ["Node.js", "TypeScript", "Redis", "Docker", "RabbitMQ"],
        github: "https://github.com/somandhir/api-platform",
    },

    {
        slug: "taskflow",

        area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
        title: "TaskFlow",
        subtitle: "Distributed Job Queue System",
        description:
            "A distributed job processing system powered by BullMQ over Redis with 5 concurrent workers. Implements exponential backoff retry logic and tracks full job lifecycle via MongoDB timestamps, enabling precise separation of queue wait time from execution latency for accurate observability.",
        tags: ["Node.js", "BullMQ", "Redis", "MongoDB"],
        github: "https://github.com/somandhir/taskFlow",
    },
    {
        slug: "capsulelink",

        area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
        title: "CapsuleLink",
        subtitle: "Time-Locked Messaging Platform",
        description:
            "A full-stack Next.js application where users compose messages that are sealed until a chosen unlock date. Payloads are withheld entirely at the API layer — not just hidden client-side — preventing early access via network inspection. Ships with dual auth (Google OAuth 2.0 + credentials), Redis-backed rate limiting on email routes, and static pre-rendering for near-zero server compute on dashboard loads.",
        tags: ["Next.js", "TypeScript", "MongoDB", "Redis", "OAuth 2.0"],
        github: "https://github.com/somandhir/capsuleLink",
        live: "https://capsule-link.vercel.app/",
    },
    {
        slug: "nexusstream",

        area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
        title: "NexusStream",
        subtitle: "Video Streaming Platform",
        description:
            "A scalable video platform backend handling uploads, subscriptions, playlists, and engagement analytics. Uses MongoDB aggregation pipelines with multi-collection lookups for sub-100ms query times, JWT access/refresh token rotation for stateless auth, and Cloudinary for automated media uploads with zero local disk I/O.",
        tags: ["Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
        github: "https://github.com/somandhir/backend-project",
    },
    {
        slug: "echo-chat",

        area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
        title: "ECHO Chat",
        subtitle: "Real-time Messaging Application",
        description:
            "A full-stack real-time chat application with a 3-state message delivery pipeline (sent → delivered → seen) synchronized across all clients via Socket.io WebSocket events. Unread counts are computed in a single MongoDB aggregation round-trip, cutting inbox load time by 60% over the prior approach. Auth secured with JWT in HTTP-only cookies against XSS and CSRF vectors.",
        tags: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
        github: "https://github.com/somandhir/chat-app",
        live: "https://chat-app-5ufs.onrender.com",
    },
];

const ProjectCard = ({
    area,
    title,
    subtitle,
    description,
    tags,
    github,
    live,
    slug
}: Project) => {
    return (
        <li className={`min-h-56 list-none ${area}`}>
                <div className="relative h-full rounded-2xl border border-zinc-800 p-2 md:rounded-3xl md:p-3 bg-black cursor-pointer"
                        onClick={() => window.open(`/projects/${slug}`, "_blank")}

                >
                    <GlowingEffect
                        spread={40}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                    />
                    <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-5 md:p-6 shadow-[0px_0px_27px_0px_#1a1a1a]">

                        {/* Header */}
                        <div className="flex items-start justify-between gap-2">
                            <div>
                                <h3 className="text-base md:text-lg font-semibold text-white tracking-tight leading-tight">
                                    {title}
                                </h3>
                                <p className="text-xs text-zinc-600 font-mono mt-0.5">
                                    {subtitle}
                                </p>
                            </div>
                            <div className="flex items-center gap-2 shrink-0 mt-0.5">
                                <a
                                    href={github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}

                                    className="text-zinc-600 hover:text-white transition-colors"
                                >
                                    <GithubSVG />
                                </a>
                                {live && (
                                    <a
                                        href={live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}

                                        className="text-zinc-600 hover:text-white transition-colors"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Description */}
                        <p className="flex-1 text-sm text-zinc-500 font-light leading-relaxed">
                            {description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-900">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-zinc-800 text-zinc-600 tracking-wider"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                    </div>
                </div>
        
        </li>
    );
};

export function Projects() {
    return (
        <section className="w-full bg-black px-6 py-12 md:py-16">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6 md:mb-10"
                >
                    <CanvasText
                        text="Projects"
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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-136 xl:grid-rows-2">
                        {projectsData.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}