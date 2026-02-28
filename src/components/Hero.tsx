"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Volume2 } from "lucide-react";
import { PointerHighlight } from "./ui/pointer-highlight";
import type { Variants } from "framer-motion";

export function Hero() {
    const [time, setTime] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.7);
    const [isDragging, setIsDragging] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const volumeBarRef = useRef<HTMLDivElement>(null);

    // Animation variants for staggering entrance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    useEffect(() => {
        const updateTime = () => {
            const puneTime = new Intl.DateTimeFormat("en-IN", {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            }).format(new Date());
            setTime(`${puneTime} IST`);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        audioRef.current = new Audio("/aventure-dreamy-lofi-nostalgic-background-469629.mp3");
        audioRef.current.loop = true;
        audioRef.current.volume = volume;
        return () => {
            audioRef.current?.pause();
            audioRef.current = null;
        };
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (!volumeBarRef.current || !audioRef.current) return;
        const rect = volumeBarRef.current.getBoundingClientRect();
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const newVolume = x / rect.width;
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
    };

    useEffect(() => {
        if (!isDragging) return;
        const handleMouseMove = (e: MouseEvent) => {
            if (!volumeBarRef.current || !audioRef.current) return;
            const rect = volumeBarRef.current.getBoundingClientRect();
            const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
            const newVolume = x / rect.width;
            setVolume(newVolume);
            audioRef.current.volume = newVolume;
        };
        const handleMouseUp = () => setIsDragging(false);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging]);

    return (
        <motion.section 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full bg-black px-6 py-12 md:py-16"
        >
            <div className="z-10 flex flex-col items-center text-center">

                {/* Image — Animated Entrance */}
                <motion.div 
                    variants={itemVariants}
                    className="relative w-64 h-64 md:w-80 md:h-80 -mb-12 -mt-6"
                >
                    <Image
                        src="/profilePic.jpg"
                        alt="Soman Dhir"
                        fill
                        className="object-contain"
                        style={{
                            maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
                        }}
                        priority
                    />
                </motion.div>

                {/* Name — Animated Entrance */}
                <motion.h1 
                    variants={itemVariants}
                    className="text-5xl md:text-7xl font-bold bg-linear-to-b from-white to-zinc-400 bg-clip-text text-transparent tracking-tighter relative z-20 leading-none"
                >
                    Soman Dhir
                </motion.h1>

                {/* Status line — Animated Entrance */}
                <motion.div 
                    variants={itemVariants}
                    className="mt-2 flex flex-wrap items-center justify-center gap-3 text-zinc-500 font-mono text-xs md:text-sm"
                >
                    <span>Pune, India</span>
                    <span>•</span>
                    <span className="tabular-nums">{time}</span>
                    <span>•</span>

                    <button
                        onClick={togglePlay}
                        className="flex items-center gap-2 hover:text-white transition-colors py-1 px-2 rounded-md"
                    >
                        <motion.div
                            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                            transition={
                                isPlaying
                                    ? { repeat: Infinity, duration: 3, ease: "linear" }
                                    : { duration: 0.3 }
                            }
                        >
                            <Music
                                size={14}
                                className={isPlaying ? "text-zinc-200" : "text-zinc-500"}
                            />
                        </motion.div>

                        <span className={isPlaying ? "text-zinc-200 cursor-pointer" : "cursor-pointer"}>
                            {isPlaying ? "pause" : "music"}
                        </span>

                        <AnimatePresence>
                            {isPlaying && (
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: "auto", opacity: 1 }}
                                    exit={{ width: 0, opacity: 0 }}
                                    className="flex items-center gap-2 ml-1 border-l border-zinc-700 pl-2"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Volume2 size={14} className="text-zinc-400 shrink-0" />
                                    <div
                                        ref={volumeBarRef}
                                        className="w-16 h-1.5 bg-zinc-800 rounded-full overflow-visible cursor-pointer relative"
                                        onMouseDown={(e) => {
                                            setIsDragging(true);
                                            handleVolumeChange(e);
                                        }}
                                        onTouchMove={handleVolumeChange}
                                    >
                                        <div
                                            className="h-full bg-zinc-200 rounded-full pointer-events-none"
                                            style={{ width: `${volume * 100}%` }}
                                        />
                                        <div
                                            className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow pointer-events-none transition-none"
                                            style={{ left: `calc(${volume * 100}% - 5px)` }}
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </motion.div>

                {/* Bio Sections — Animated Entrance */}
                <div className="mt-10 max-w-3xl px-4">
                    <motion.div variants={itemVariants} className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light tracking-wide">
                        I'm a{" "}
                        <PointerHighlight
                            pointerClassName="text-zinc-500"
                            rectangleClassName="border-zinc-600"
                        >
                            <span className="text-white font-normal">MERN Stack Developer</span>
                        </PointerHighlight>{" "}
                        and Computer Science student at{" "}
                        <span className="text-white font-normal">IIIT Pune</span>.
                    </motion.div>

                    <motion.div variants={itemVariants} className="text-zinc-500 text-base md:text-lg leading-relaxed font-light tracking-wide mt-6">
                        I spend my time sharpening my problem-solving skills through{" "}
                        <span className="text-zinc-300">Competitive Programming</span> and building{" "}
                        <PointerHighlight
                            pointerClassName="text-zinc-500"
                            rectangleClassName="border-zinc-600"
                        >
                            <span className="text-white font-normal">full-stack applications with scalable backend.</span>
                        </PointerHighlight>{" "}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}