import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, ArrowLeft } from "lucide-react";

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

export function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;

}) {
      const { slug } = await params;

  const project = projectsData.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 md:py-20">
      <div className="max-w-3xl mx-auto space-y-12">

        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-600 hover:text-white transition-colors text-sm font-mono"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          back to portfolio
        </Link>

        {/* Header */}
        <div className="space-y-3">
          <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase">
            {project.subtitle}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            {project.title}
          </h1>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-zinc-800 text-zinc-500 tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors text-sm font-mono"
          >
            <GithubSVG />
            View on GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors text-sm font-mono"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          )}
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-900">
          {project.highlights.map((h) => (
            <div
              key={h.label}
              className="bg-black px-6 py-5 flex flex-col gap-1"
            >
              <span className="text-2xl font-bold text-white">{h.value}</span>
              <span className="text-xs font-mono text-zinc-600 tracking-wider">
                {h.label}
              </span>
            </div>
          ))}
        </div>

        {/* About */}
        <div className="space-y-3">
          <h2 className="text-xs font-mono text-zinc-600 tracking-widest uppercase">
            About
          </h2>
          <p className="text-zinc-400 leading-relaxed text-[15px]">
            {project.longDescription}
          </p>
        </div>

        {/* Features */}
        <div className="space-y-3">
          <h2 className="text-xs font-mono text-zinc-600 tracking-widest uppercase">
            Key Features
          </h2>
          <ul className="space-y-3">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-700" />
                <span className="text-zinc-400 text-sm leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </main>
  );
}