"use client";
import React from "react";

export function Footer() {
  const buildDate =
    process.env.NEXT_PUBLIC_BUILD_DATE || "2026-02-28";

  return (
    <footer className="w-full bg-black px-6 py-8 border-t border-zinc-900 pb-28">
      <div className="max-w-5xl mx-auto text-sm font-mono text-zinc-500 space-y-1">
        <p>© {new Date().getFullYear()} Soman Dhir. All rights reserved.</p>
        <p>
          Last Updated on{" "}
          {new Date(buildDate).toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
        </p>
      </div>
    </footer>
  );
}