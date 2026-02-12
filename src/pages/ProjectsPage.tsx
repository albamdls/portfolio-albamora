import { useMemo, useState } from "react"
import { projects } from "@/data/projects"
import { Safari } from "@/components/ui/safari"
import NavbarDock from "@/components/NavbarDock"

function pad2(n: number) {
    return String(n).padStart(2, "0")
}

function guessTypeFromTags(tags?: string[]) {
    const t = (tags ?? []).join(" ").toLowerCase()
    if (t.includes("mobile") || t.includes("react native")) return "MOBILE APP"
    if (t.includes("api") || t.includes("backend")) return "BACKEND"
    return "DESKTOP APP"
}

export default function ProjectsPage() {
    const [q, setQ] = useState("")
    const [tag, setTag] = useState<string>("all")

    const allTags = useMemo(() => {
        const s = new Set<string>()
        projects.forEach((p) => (p.tags ?? []).forEach((t) => s.add(t)))
        return ["all", ...Array.from(s).sort((a, b) => a.localeCompare(b))]
    }, [])

    const filtered = useMemo(() => {
        const query = q.trim().toLowerCase()
        return projects.filter((p) => {
            const matchesQuery =
                !query ||
                p.title.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query) ||
                (p.technologies ?? []).join(" ").toLowerCase().includes(query) ||
                (p.tags ?? []).join(" ").toLowerCase().includes(query)

            const matchesTag = tag === "all" || (p.tags ?? []).includes(tag)
            return matchesQuery && matchesTag
        })
    }, [q, tag])

    return (
        <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
            {/* si quieres el mismo dock arriba */}
            <NavbarDock />

            <main className="px-6 py-20 sm:py-24">
                <div className="mx-auto max-w-6xl">
                    {/* Header */}
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Proyectos
                            </h1>
                            <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
                                Aquí tienes una lista completa de mis proyectos. Puedes buscar y
                                filtrar por tags.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            {/* Search */}
                            <div className="relative">
                                <input
                                    value={q}
                                    onChange={(e) => setQ(e.target.value)}
                                    placeholder="Buscar por nombre, tech o tag…"
                                    className="w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition focus:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white/20 sm:w-[320px]"
                                />
                            </div>

                            {/* Tag filter */}
                            <select
                                value={tag}
                                onChange={(e) => setTag(e.target.value)}
                                className="rounded-xl border border-slate-200 bg-white/70 px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white/20"
                            >
                                {allTags.map((t) => (
                                    <option key={t} value={t}>
                                        {t === "all" ? "Todos" : t}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Result count */}
                    <div className="mt-8 text-sm text-slate-500 dark:text-white/50">
                        Mostrando <span className="font-semibold">{filtered.length}</span>{" "}
                        proyectos
                    </div>

                    {/* Grid */}
                    <div className="mt-8 grid gap-10 lg:grid-cols-2">
                        {filtered.map((project, index) => {
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
                                    key={`${project.title}-${index}`}
                                    className="group relative rounded-[28px] border border-slate-200/70 bg-white/40 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
                                >
                                    {/* Meta */}
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="text-xs font-semibold tracking-[0.25em] text-slate-500 dark:text-white/50">
                                            {number} <span className="mx-2 opacity-60">—</span> {type}
                                        </div>

                                        {project.tags?.length ? (
                                            <div className="hidden gap-2 sm:flex">
                                                {project.tags.slice(0, 2).map((t) => (
                                                    <span
                                                        key={t}
                                                        className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10 dark:bg-white/5 dark:text-white/70 dark:ring-white/10"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        ) : null}
                                    </div>

                                    {/* Title + desc */}
                                    <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                                        {project.title}
                                    </h3>
                                    <p className="mt-3 max-w-[54ch] text-sm leading-relaxed text-slate-600 dark:text-white/60">
                                        {project.description}
                                    </p>

                                    {/* Panel + Safari */}
                                    {project.imageUrl ? (
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
                                    ) : null}

                                    {/* Tech chips */}
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

                                    {/* Buttons */}
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

                    {/* Empty state */}
                    {filtered.length === 0 && (
                        <div className="mt-12 rounded-2xl border border-slate-200 bg-white/50 p-10 text-center dark:border-white/10 dark:bg-white/5">
                            <p className="text-sm text-slate-600 dark:text-white/60">
                                No hay resultados con esos filtros.
                            </p>
                            <button
                                onClick={() => {
                                    setQ("")
                                    setTag("all")
                                }}
                                className="mt-4 rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                            >
                                Limpiar filtros
                            </button>
                        </div>
                    )}

                    {/* Back */}
                    <div className="mt-16 flex justify-center">
                        <a
                            href="/"
                            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                        >
                            ← Volver al inicio
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}
