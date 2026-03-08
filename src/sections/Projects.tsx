import { useMemo } from "react"
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
    const VISIBLE_PROJECTS = 3
    const visibleProjects = useMemo(() => projects.slice(0, VISIBLE_PROJECTS), [])

    const GITHUB_PROFILE_URL = "https://github.com/albamdls"

    return (
        <Section id="projects" title="" subtitle="">
            <div className="mx-auto max-w-5xl text-center">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-500 dark:text-slate-400">
                    MY MOST RECENT PROJECTS
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                    <span className="text-slate-900 dark:text-white">
                        Always Thinking About{" "}
                    </span>
                    <AuroraText className="inline-block">New Projects</AuroraText>
                </h2>

                <p className="mt-3 text-sm text-slate-600 dark:text-white/60">
                    Showing <span className="font-semibold">{visibleProjects.length}</span>{" "}
                    of <span className="font-semibold">{projects.length}</span>
                </p>
            </div>

            <div className="mt-8 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {visibleProjects.map((project, index) => {
                    const number = pad2(index + 1)
                    const type = guessTypeFromTags(project.tags)

                    const url =
                        project.liveUrl?.trim() ||
                        project.githubUrl ||
                        "https://example.com"

                    const imageSrc = project.imageUrl
                        ? `${import.meta.env.BASE_URL}${project.imageUrl.replace(/^\//, "")}`
                        : undefined

                    return (
                        <article
                            key={project.title}
                            className="relative flex h-full min-h-[590px] flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/85"
                        >
                            <div className="flex items-center justify-between gap-3">
                                <div className="text-[11px] font-semibold tracking-[0.22em] text-slate-500 dark:text-white/45">
                                    {number} <span className="mx-2 opacity-60">—</span> {type}
                                </div>
                            </div>

                            <h3 className="mt-3 min-h-[56px] text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                                {project.title}
                            </h3>

                            <p className="mt-1 min-h-[84px] line-clamp-3 text-sm leading-6 text-slate-600 dark:text-white/65">
                                {project.description}
                            </p>

                            {project.technologies?.length ? (
                                <div className="mt-2 min-h-[56px]">
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {project.technologies.slice(0, 4).map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[11px] font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}

                                        {project.technologies.length > 4 && (
                                            <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[11px] font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-200">
                                                +{project.technologies.length - 4}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="mt-4 min-h-[72px]" />
                            )}

                            <div className="mt-0">
                                <div className="relative h-[220px] overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-gradient-to-br from-blue-50 via-indigo-50/60 to-fuchsia-50 p-3 dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
                                    <div className="pointer-events-none absolute inset-0 z-0 bg-white/55 dark:bg-slate-950/45" />

                                    <div className="pointer-events-none absolute inset-0 z-0">
                                        <div className="absolute left-1/2 top-10 h-24 w-44 -translate-x-1/2 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-500/20" />
                                        <div className="absolute right-10 bottom-6 h-20 w-20 rounded-full bg-fuchsia-400/15 blur-2xl dark:bg-fuchsia-500/20" />
                                    </div>

                                    <div className="absolute inset-x-0 top-0 z-10 translate-y-12 px-5">
                                        <div className="transition-transform duration-300 hover:scale-[1.05]">
                                            <Safari
                                                url={url}
                                                imageSrc={imageSrc}
                                                className="w-full rounded-2xl shadow-[0_20px_50px_rgba(59,130,246,0.18)] dark:shadow-[0_20px_60px_rgba(96,165,250,0.16)]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-white px-3.5 py-2 text-[12px] font-semibold text-slate-800 no-underline transition hover:border-fuchsia-300 hover:bg-fuchsia-50 dark:border-fuchsia-500/20 dark:bg-white/[0.04] dark:text-white dark:hover:bg-fuchsia-500/10"
                                        aria-label={`Open GitHub repo: ${project.title}`}
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="h-4 w-4"
                                            aria-hidden="true"
                                            fill="currentColor"
                                        >
                                            <path d="M12 .5C5.73.5.75 5.6.75 12c0 5.18 3.32 9.58 7.93 11.13.58.11.79-.26.79-.57v-2.1c-3.23.72-3.91-1.6-3.91-1.6-.53-1.38-1.29-1.75-1.29-1.75-1.05-.74.08-.73.08-.73 1.16.08 1.77 1.23 1.77 1.23 1.03 1.8 2.7 1.28 3.36.98.1-.77.4-1.28.73-1.58-2.58-.3-5.29-1.32-5.29-5.86 0-1.29.45-2.35 1.19-3.18-.12-.3-.52-1.5.11-3.12 0 0 .97-.32 3.18 1.21.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.53 3.18-1.21 3.18-1.21.63 1.62.23 2.82.11 3.12.74.83 1.19 1.89 1.19 3.18 0 4.55-2.72 5.56-5.31 5.86.41.37.78 1.09.78 2.2v3.26c0 .31.21.68.79.57C19.93 21.58 23.25 17.18 23.25 12 23.25 5.6 18.27.5 12 .5z" />
                                        </svg>
                                        GitHub
                                    </a>
                                )}

                                {project.liveUrl?.trim() && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-3.5 py-2 text-[12px] font-semibold !text-white no-underline shadow-sm ring-1 ring-white/20 transition hover:brightness-110 active:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
                                    >
                                        <span className="!text-white">Live demo</span>
                                        <svg
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-4 w-4 !text-white"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </article>
                    )
                })}
            </div>

            <div className="mt-10 flex justify-center">
                <a
                    href={GITHUB_PROFILE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold !text-white no-underline shadow-sm ring-1 ring-white/20 transition hover:brightness-110 active:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
                >
                    <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 !text-white"
                        aria-hidden="true"
                        fill="currentColor"
                    >
                        <path d="M12 .5C5.73.5.75 5.6.75 12c0 5.18 3.32 9.58 7.93 11.13.58.11.79-.26.79-.57v-2.1c-3.23.72-3.91-1.6-3.91-1.6-.53-1.38-1.29-1.75-1.29-1.75-1.05-.74.08-.73.08-.73 1.16.08 1.77 1.23 1.77 1.23 1.03 1.8 2.7 1.28 3.36.98.1-.77.4-1.28.73-1.58-2.58-.3-5.29-1.32-5.29-5.86 0-1.29.45-2.35 1.19-3.18-.12-.3-.52-1.5.11-3.12 0 0 .97-.32 3.18 1.21.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.53 3.18-1.21 3.18-1.21.63 1.62.23 2.82.11 3.12.74.83 1.19 1.89 1.19 3.18 0 4.55-2.72 5.56-5.31 5.86.41.37.78 1.09.78 2.2v3.26c0 .31.21.68.79.57C19.93 21.58 23.25 17.18 23.25 12 23.25 5.6 18.27.5 12 .5z" />
                    </svg>
                    <span className="!text-white">Explore all projects on GitHub</span>
                </a>
            </div>
        </Section>
    )
}