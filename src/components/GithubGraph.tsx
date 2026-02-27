"use client";
import React, { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { ActivityCalendar } from "react-activity-calendar";
import { motion } from "framer-motion";

export function ActivityHub() {
  const [leetcodeData, setLeetcodeData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false); // 👈 fix

  useEffect(() => {
    setMounted(true); // 👈 only runs on client

    async function fetchLeetCode() {
      try {
        const res = await fetch("https://alfa-leetcode-api.onrender.com/somandhir/calendar");
        const data = await res.json();

        if (data && data.submissionCalendar) {
          const parsed = JSON.parse(data.submissionCalendar);
          const formattedData = Object.entries(parsed).map(([timestamp, count]) => {
            const date = new Date(parseInt(timestamp) * 1000);
            return {
              date: date.toISOString().split("T")[0],
              count: count as number,
              level: Math.min(Number(count), 4),
            };
          });
          setLeetcodeData(formattedData);
        }
      } catch (err) {
        console.error("LeetCode API fetch failed:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchLeetCode();
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
          In the Trenches
        </motion.h2>

        {/* GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4 -mt-5">
            <span className="text-xs font-mono text-zinc-600 tracking-wider uppercase">GitHub</span>
            <span className="text-zinc-800">•</span>
            <span className="text-xs font-mono text-zinc-600">Contributions</span>
          </div>

          <div className="pb-6 -mb-10">
            <div className="overflow-x-auto">
              {mounted && ( 
                <GitHubCalendar
                  username="somandhir"
                  theme={{
                    dark: ["#0d0d0d", "#0e4429", "#006d32", "#26a641", "#39d353"],
                  }}
                  style={{ color: "#52525b" }}
                  labels={{
                    totalCount: "{{count}} contributions in the last year",
                  }}
                />
              )}
            </div>
          </div>
        </motion.div>

        {/* LeetCode */}
        {mounted && leetcodeData && leetcodeData.length > 0 && ( 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-zinc-600 tracking-wider uppercase">LeetCode</span>
              <span className="text-zinc-800">•</span>
              <span className="text-xs font-mono text-zinc-600">Submissions</span>
            </div>

            <div className="pb-6 ">
              <div className="overflow-x-auto">
                <ActivityCalendar
                  data={leetcodeData}
                  theme={{
                    dark: ["#0d0d0d", "#6b4c00", "#9e7100", "#cf9500", "#ffb800"],
                  }}
                  style={{ color: "#52525b" }}
                  labels={{
                    totalCount: "{{count}} submissions in the last year",
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Loading state */}
        {mounted && loading && (
          <div className="flex items-center gap-3 pb-6 border-b border-zinc-900">
            <span className="text-xs font-mono text-zinc-600 tracking-wider uppercase">LeetCode</span>
            <span className="text-zinc-800">•</span>
            <span className="text-xs font-mono text-zinc-700 animate-pulse">fetching activity...</span>
          </div>
        )}

      </div>
    </section>
  );
}