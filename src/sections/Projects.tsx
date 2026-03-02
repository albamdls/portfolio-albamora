import { useMemo, useState } from "react"
import Section from "@/components/layout/Section"
import { projects } from "../data/projects"
import { Safari } from "@/components/ui/safari"
import { AuroraText } from "@/components/ui/aurora-text"

function pad2(n: number) {
    return String(n).padStart(2, "0")
}

function guessTypeFromTags(tags?: string[]) {
    const t = (tags ?? []).join(" ").toLowerCase()
    if (t.includes("mobile") || t.includes("react native")) return "MOBILE APP"
    if (t.includes("api") || t.includes("backend")) return "BACKEND"
    return "DESKTOP APP"
}

export default function Projects() {
    const INITIAL = 3
    const STEP = 3
    const MAX_BEFORE_GITHUB = 6 // 3 + 3

    // 🔁 Change to your GitHub profile
    const GITHUB_PROFILE_URL = "https://github.com/albamdls"

    const [visible, setVisible] = useState(INITIAL)

    const maxVisible = Math.min(MAX_BEFORE_GITHUB, projects.length)
    const visibleProjects = useMemo(
        () => projects.slice(0, Math.min(visible, maxVisible)),
        [visible, maxVisible]
    )

    const canLoadMore = visible < maxVisible
    const showGithubCTA = !canLoadMore && projects.length > maxVisible

    return (
        <Section id="projects" title="" subtitle="">
            {/* Header */}
            <div className="mx-auto max-w-5xl text-center">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-500 dark:text-slate-400">
                    MY MOST RECENT PROJECTS
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                    <span className="text-slate-900 dark:text-white">Always Thinking About </span>
                    <AuroraText className="inline-block">New Projects</AuroraText>
                </h2>

                <p className="mt-3 text-sm text-slate-600 dark:text-white/60">
                    Showing <span className="font-semibold">{visibleProjects.length}</span> of{" "}
                    <span className="font-semibold">{projects.length}</span>
                </p>
            </div>

            {/* Grid */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {visibleProjects.map((project, index) => {
                    const number = pad2(index + 1)
                    const type = guessTypeFromTags(project.tags)
                    const url = project.liveUrl ?? project.githubUrl ?? "https://example.com"

                    return (
                        <article
                            key={project.title}
                            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white/35 p-4 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                        >
                            {/* Gradient Blur Background */}
                            <div className="pointer-events-none absolute inset-0 -z-10">
                                <div className="absolute -inset-16 bg-gradient-to-br from-blue-500/25 via-fuchsia-500/20 to-pink-500/25 blur-2xl transition-transform duration-500 group-hover:scale-105 dark:from-blue-400/20 dark:via-fuchsia-400/15 dark:to-pink-400/20" />
                                <div className="absolute inset-0 bg-white/30 dark:bg-slate-950/10" />
                            </div>

                            {/* Meta */}
                            <div className="flex items-center justify-between gap-3">
                                <div className="text-[11px] font-semibold tracking-[0.22em] text-slate-500 dark:text-white/50">
                                    {number} <span className="mx-2 opacity-60">—</span> {type}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="mt-2 text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-white/60">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            {project.technologies?.length ? (
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                    {project.technologies.slice(0, 8).map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full bg-slate-900/5 px-2.5 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-900/10 dark:bg-white/5 dark:text-white/70 dark:ring-white/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 8 && (
                                        <span className="rounded-full bg-slate-900/5 px-2.5 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-900/10 dark:bg-white/5 dark:text-white/70 dark:ring-white/10">
                                            +{project.technologies.length - 8}
                                        </span>
                                    )}
                                </div>
                            ) : null}

                            {/* ✅ Safari panel (cropped like the screenshot) */}
                            <div className="mt-auto pt-6">
                                <div
                                    className={[
                                        "group/panel relative overflow-hidden rounded-3xl",
                                        // fixed height + crop bottom
                                        "h-[260px] sm:h-[280px]",
                                        "bg-white/60 dark:bg-slate-950/25 ring-1 ring-slate-900/10 dark:ring-white/10",
                                    ].join(" ")}
                                >
                                    {/* subtle glass overlay */}
                                    <div className="pointer-events-none absolute inset-0 bg-white/15 dark:bg-white/5" />

                                    {/* move Safari down so it gets cropped */}
                                    <div className="absolute inset-x-0 top-0 translate-y-10 px-3">
                                        <div className="transform-gpu transition-all duration-300 ease-out will-change-transform group-hover/panel:scale-[1.02]">
                                            <Safari
                                                url={url}
                                                imageSrc={project.imageUrl}
                                                className="drop-shadow-lg transition-all duration-300 group-hover/panel:drop-shadow-[0_20px_50px_rgba(0,0,0,0.20)]"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Terminal: zoom on card hover + extra zoom on terminal hover */}
                                <div className="relative mt-4 pb-20">
                                    <div
                                        className={[
                                            "absolute inset-x-0 -bottom-14",
                                            "pointer-events-auto",
                                            "opacity-0 translate-y-8 scale-[0.98]",
                                            "transition-all duration-300 ease-out",
                                            "group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-[1.1]",
                                            "hover:scale-[1.07]",
                                        ].join(" ")}
                                    >
                                        {/* Paste your existing terminal here (unchanged) */}
                                        {/* <YourTerminal /> */}
                                    </div>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-3.5 py-2 text-[11px] font-semibold !text-white no-underline shadow-sm ring-1 ring-white/20 transition hover:brightness-110 active:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
                                        aria-label={`Open GitHub repo: ${project.title}`}
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="h-4 w-4 !text-white"
                                            aria-hidden="true"
                                            fill="currentColor"
                                        >
                                            <path d="M12 .5C5.73.5.75 5.6.75 12c0 5.18 3.32 9.58 7.93 11.13.58.11.79-.26.79-.57v-2.1c-3.23.72-3.91-1.6-3.91-1.6-.53-1.38-1.29-1.75-1.29-1.75-1.05-.74.08-.73.08-.73 1.16.08 1.77 1.23 1.77 1.23 1.03 1.8 2.7 1.28 3.36.98.1-.77.4-1.28.73-1.58-2.58-.3-5.29-1.32-5.29-5.86 0-1.29.45-2.35 1.19-3.18-.12-.3-.52-1.5.11-3.12 0 0 .97-.32 3.18 1.21.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.53 3.18-1.21 3.18-1.21.63 1.62.23 2.82.11 3.12.74.83 1.19 1.89 1.19 3.18 0 4.55-2.72 5.56-5.31 5.86.41.37.78 1.09.78 2.2v3.26c0 .31.21.68.79.57C19.93 21.58 23.25 17.18 23.25 12 23.25 5.6 18.27.5 12 .5z" />
                                        </svg>
                                        GitHub
                                    </a>
                                )}

                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-3.5 py-2 text-[11px] font-semibold !text-white no-underline transition hover:bg-blue-500 active:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
                                    >
                                        Live demo
                                    </a>
                                )}
                            </div>
                        </article>
                    )
                })}
            </div>

            {/* Footer CTA */}
            <div className="mt-10 flex flex-col items-center gap-3">
                {canLoadMore ? (
                    <button
                        type="button"
                        onClick={() => setVisible((v) => Math.min(v + STEP, maxVisible))}
                        className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
                    >
                        Load more projects ({Math.min(STEP, maxVisible - visible)} more)
                    </button>
                ) : showGithubCTA ? (
                    <a
                        href={GITHUB_PROFILE_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-white/20 transition hover:brightness-110 active:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
                    >
                        Explore all projects on GitHub
                    </a>
                ) : (
                    <button
                        type="button"
                        onClick={() => setVisible(INITIAL)}
                        className="inline-flex items-center rounded-xl bg-slate-900/5 px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-900/10 transition hover:bg-slate-900/10 dark:bg-white/5 dark:text-white/70 dark:ring-white/10 dark:hover:bg-white/10"
                    >
                        Show less
                    </button>
                )}
            </div>
        </Section>
    )
}