"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

function TerminalIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
    );
}

type HistoryEntry =
    | { type: "input"; text: string }
    | { type: "output"; lines: string[] }
    | { type: "welcome" };

const COMMANDS: Record<string, string[]> = {
    "--help": [
        "Available commands:",
        "  --help          Show this help message",
        "  --profile       Display profile information",
        "  --projects      List all projects",
        "  --skills        Display technical skills",
        "  --contact       Display contact information",
        "  --education     Show education details",
        "  --achievements  List all achievements",
        "  clear           Clear the terminal",
    ],
    "--profile": [
        "  name       Soman Dhir",
        "  degree     B.Tech CSE + Data Science",
        "  college    IIIT Pune",
        "  role       MERN Stack Developer",
        "  interest   Cats ",
    ],
    "--skills": [
        "  languages  C++ Python JavaScript TypeScript",
        "  backend    Node.js Express.js REST APIs",
        "  frontend   React Next.js Tailwind CSS Aceternity UI",
        "  databases  MongoDB MySQL Redis PostgreSQL",
    ],
    "--contact": [
        "  email      somandhir@gmail.com",
        "  linkedin   linkedin.com/in/somandhir",
        "  github     github.com/somandhir",
    ],
    "--education": [
        "  institute  IIIT Pune  (2023 — 2027)",
        "  degree     B.Tech CSE + B.Hons Data Science",
        "  cgpa       8.54 / 10",
    ],
    "--projects": [
        "  01  Api-platform (Scalable Microservices Gateway)",
        "  02  Capsulelink (Time-Locked Messaging Platform)",
        "  03  NexusStream (Video Streaming Platform)",
        "  04  Echo-chat (Real-time Messaging Application)",
        "  05  Portfolio Website",
    ],
    "--achievements": [
        "  01  Knight on Leetcode",
        "  02  Specialist on Codeforces",
        "  03  Top 20 Finalist — TrustAI Ideathon 2026",
        "  04  Reliance Foundation Scholar",
        "  05  98.2%ile in jee mains",
    ],

};

const INITIAL_HISTORY: HistoryEntry[] = [{ type: "welcome" }];

export function TerminalCLI() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<HistoryEntry[]>(INITIAL_HISTORY);
    const [cmdHistory, setCmdHistory] = useState<string[]>([]);
    const [cmdIndex, setCmdIndex] = useState(-1);

    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    useEffect(() => {
        if (isOpen && !isMinimized) {
            setTimeout(() => inputRef.current?.focus(), 120);
        }
    }, [isOpen, isMinimized]);

    const handleCommand = useCallback((raw: string) => {
        const cmd = raw.trim();
        if (!cmd) return;

        setCmdHistory((prev) => [cmd, ...prev]);
        setCmdIndex(-1);

        if (cmd === "clear") {
            setHistory([]);
            return;
        }

        const outputLines = COMMANDS[cmd];
        setHistory((prev) => [
            ...prev,
            { type: "input", text: cmd },
            {
                type: "output",
                lines: outputLines ?? [
                    `command not found: ${cmd}`,
                    "type --help for available commands",
                ],
            },
        ]);
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleCommand(input);
            setInput("");
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            const next = Math.min(cmdIndex + 1, cmdHistory.length - 1);
            setCmdIndex(next);
            setInput(cmdHistory[next] ?? "");
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            const next = Math.max(cmdIndex - 1, -1);
            setCmdIndex(next);
            setInput(next === -1 ? "" : cmdHistory[next] ?? "");
        }
    };

    return (
        <>
            <button
                onClick={() => {
                    if (isOpen) {
                        setIsMinimized((v) => !v);
                    } else {
                        setIsOpen(true);
                        setIsMinimized(false);
                    }
                }}
                className="
          fixed top-6 right-6 z-50
          flex items-center gap-2
          px-3 py-1.5
          bg-black border border-zinc-800
          text-zinc-400 hover:text-white hover:border-zinc-600
          font-mono text-xs tracking-widest
          transition-all duration-200
        "
                aria-label="Toggle terminal"
            >
                <TerminalIcon className="w-3.5 h-3.5" />
                <span>CLI</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="terminal"
                        initial={{ opacity: 0, y: -12, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -12, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="
              fixed top-18 right-6 z-50
              w-[min(520px,calc(100vw-3rem))]
              bg-black border border-zinc-800
              shadow-[0_8px_60px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.03)]
              flex flex-col
              font-mono text-xs
              overflow-hidden
            "
                    >
                        {/* Title bar */}
                        <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-900 bg-zinc-950 shrink-0">
                            <div className="flex items-center gap-2.5">
                                <TerminalIcon className="w-3 h-3 text-zinc-600" />
                                <span className="text-zinc-500 tracking-widest text-[10px]">
                                    soman@portfolio:~
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setIsMinimized((v) => !v)}
                                    className="cursor-pointer text-zinc-600 hover:text-zinc-300 transition-colors text-[10px] tracking-wider"
                                >
                                    {isMinimized ? "expand" : "—"}
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="cursor-pointer text-zinc-600 hover:text-zinc-300 transition-colors text-[10px] tracking-wider"
                                >
                                    ×
                                </button>
                            </div>
                        </div>

                        {/* Collapsible body */}
                        <AnimatePresence initial={false}>
                            {!isMinimized && (
                                <motion.div
                                    key="body"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                    className="overflow-hidden"
                                >
                                    <div
                                        className="overflow-y-auto px-4 pt-3 scroll-smooth"
                                        style={{ maxHeight: "380px" }}
                                        onClick={() => inputRef.current?.focus()}
                                    >
                                        <div className="space-y-0.5">
                                            {history.map((entry, i) => {
                                                if (entry.type === "welcome") {
                                                    return (
                                                        <div key={i} className="mb-3 space-y-0.5">
                                                            <div className="text-zinc-300 tracking-wider">
                                                                soman's portfolio — cli v1.0.0
                                                            </div>
                                                            <div className="text-zinc-600">
                                                                type{" "}
                                                                <span className="text-zinc-400">--help</span>{" "}
                                                                for available commands
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                                if (entry.type === "input") {
                                                    return (
                                                        <div key={i} className="flex items-start gap-2 mt-2">
                                                            <span className="text-zinc-600 select-none shrink-0">$</span>
                                                            <span className="text-white">{entry.text}</span>
                                                        </div>
                                                    );
                                                }
                                                if (entry.type === "output") {
                                                    return (
                                                        <div key={i} className="pl-4 space-y-0.5 mb-1">
                                                            {entry.lines.map((line, j) => (
                                                                <div
                                                                    key={j}
                                                                    className="text-zinc-400 whitespace-pre leading-5"
                                                                >
                                                                    {line}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    );
                                                }
                                                return null;
                                            })}

                                            {/* Input line — directly below last output */}
                                            <div className="flex items-center gap-2 mt-2 pb-3">
                                                <span className="text-zinc-600 select-none shrink-0">$</span>
                                                <input
                                                    ref={inputRef}
                                                    value={input}
                                                    onChange={(e) => setInput(e.target.value)}
                                                    onKeyDown={handleKeyDown}
                                                    className="flex-1 bg-transparent outline-none text-white caret-white"
                                                    spellCheck={false}
                                                    autoCapitalize="none"
                                                    autoComplete="off"
                                                />
                                            </div>

                                            <div ref={bottomRef} />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}