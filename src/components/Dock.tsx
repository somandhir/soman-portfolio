"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconMail,
    IconFileCv,
    IconCode,
    IconMessage
} from "@tabler/icons-react";

export function Dock() {
    const links = [
        {
            title: "GitHub",
            icon: <IconBrandGithub className="h-full w-full text-white" />,
            href: "https://github.com/somandhir/"
        },
        {
            title: "LinkedIn",
            icon: <IconBrandLinkedin className="h-full w-full text-white" />,
            href: "https://linkedin.com/in/somandhir"
        },
        {
            title: "LeetCode",
            icon: <IconCode className="h-full w-full text-white" />,
            href: "https://leetcode.com/u/somandhir/"
        },
        {
            title: "Resume",
            icon: <IconFileCv className="h-full w-full text-white" />,
            href: "https://drive.google.com/file/d/19tcbCovnNXcwPRXHWT5nYTF_dy8I0Tby/view?usp=drive_link"
        },
        {
            title: "Contact",
            icon: <IconMessage className="h-full w-full text-white" />, 
            href: "/contact"
        },
    ];

    return (
        <div className="fixed bottom-10 inset-x-0 flex justify-center z-50">
            <FloatingDock items={links} />
        </div>
    );
}