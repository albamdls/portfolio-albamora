import Section from "@/components/layout/Section"
import { Link } from "react-router-dom"
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
    return (
        <Section
            id="projects"
            title=""
            subtitle=""
        >
            {/* Header centrado */}
            <div className="mx-auto max-w-6xl text-center">
                <p className="text-xs font-semibold tracking-[0.25em] text-slate-500 dark:text-slate-400">
                    MY MOST RECENT PROJECTS
                </p>

                <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                    <span className="text-slate-900 dark:text-white">Always Thinking About </span>
                    <AuroraText className="inline-block">New Projects</AuroraText>
                </h2>
            </div>
            <div className="mt-12 grid gap-10 lg:grid-cols-2">
                {projects.map((project, index) => {
                    const number = pad2(index + 1)
                    const type = guessTypeFromTags(project.tags)
                    const url =
                        project.liveUrl ?? project.githubUrl ?? "https://example.com"

                    const panelClass =
                        index % 2 === 0
                            ? "bg-amber-500/80 dark:bg-amber-500/70"
                            : "bg-emerald-500/75 dark:bg-emerald-500/65"

                    return (
                        <article
                            key={project.title}
                            className="group relative rounded-[28px] border border-slate-200/70 bg-white/40 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
                        >
                            {/* Top meta */}
                            <div className="flex items-center justify-between gap-4">
                                <div className="text-xs font-semibold tracking-[0.25em] text-slate-500 dark:text-white/50">
                                    {number} <span className="mx-2 opacity-60">—</span> {type}
                                </div>

                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10 transition hover:bg-slate-900/10 dark:bg-white/5 dark:text-white/70 dark:ring-white/10 dark:hover:bg-white/10"
                                    >
                                        Ver
                                    </a>
                                )}
                            </div>

                            {/* Title */}
                            <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-3 max-w-[54ch] text-sm leading-relaxed text-slate-600 dark:text-white/60">
                                {project.description}
                            </p>

                            {/* Colored panel + Safari */}
                            <div
                                className={[
                                    "group/panel mt-6 overflow-hidden rounded-[26px] ring-1 ring-black/10 dark:ring-white/10",
                                    panelClass,
                                ].join(" ")}
                            >
                                <div className="p-6 sm:p-7">
                                    <div className="mx-auto w-full max-w-[560px]">
                                        <div className="transform-gpu transition-all duration-300 ease-out will-change-transform group-hover/panel:-translate-y-4 group-hover/panel:scale-[1.01]">
                                            <Safari
                                                url={url}
                                                imageSrc={project.imageUrl}
                                                className="drop-shadow-2xl transition-all duration-300 group-hover/panel:drop-shadow-[0_35px_80px_rgba(0,0,0,0.35)]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Technologies */}
                            {project.technologies?.length ? (
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10 dark:bg-white/5 dark:text-white/70 dark:ring-white/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            ) : null}

                            {/* Bottom buttons */}
                            <div className="mt-6 flex flex-wrap gap-3">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:scale-105 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                                    >
                                        GitHub
                                    </a>
                                )}

                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:scale-105 hover:bg-blue-500"
                                    >
                                        Ver demo
                                    </a>
                                )}
                            </div>
                        </article>
                    )
                })}
            </div>

            {/* View more projects button */}
            <div className="mt-16 flex justify-center">
                <Link
                    to="/projects"
                    className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white dark:bg-slate-100 dark:text-slate-900"
                >
                    Ver más proyectos →
                </Link>
            </div>
        </Section>
    )
}
