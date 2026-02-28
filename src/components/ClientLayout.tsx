"use client";

import { Dock } from "@/components/Dock";
import { TerminalCLI } from "@/components/TerminalCLI";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Dock />
      <TerminalCLI />
    </>
  );
}