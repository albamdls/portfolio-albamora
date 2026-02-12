import { experience } from "../data/experience"
import Section from "@/components/layout/Section"
import { AuroraText } from "@/components/ui/aurora-text"

export default function Experience() {
    const hasExperience = experience.length > 0

    return (
        <Section
            id="experience"
            title=""
            subtitle=""
        >
            {/* Header centrado */}
            <div className="mx-auto max-w-6xl text-center">
                <p className="text-xs font-semibold tracking-[0.25em] text-slate-500 dark:text-slate-400">
                    PROFESSIONAL EXPERIENCE
                </p>

                <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                    <span className="text-slate-900 dark:text-white">Roles and responsibilities </span>
                    <AuroraText className="inline-block">I have worked in</AuroraText>
                    {/* <span className="text-slate-900 dark:text-white">I have worked in</span> */}
                </h2>
            </div>
            {hasExperience ? (
                <div className="relative mt-12">
                    {/* Línea de tiempo */}
                    <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-blue-200 via-purple-200 to-transparent dark:from-blue-900 dark:via-purple-900 md:block" />

                    <div className="space-y-8">
                        {experience.map((item) => (
                            <div
                                key={`${item.title}-${item.company}-${item.startDate}-${item.endDate}`}
                                className="group relative"
                            >
                                {/* Punto timeline */}
                                <div className="absolute left-4 top-8 hidden -translate-x-1/2 md:block">
                                    <div className="relative flex h-4 w-4 items-center justify-center">
                                        <div className="absolute h-4 w-4 rounded-full bg-blue-200 transition-all duration-300 group-hover:scale-150 group-hover:bg-blue-300 dark:bg-blue-900 dark:group-hover:bg-blue-800" />
                                        <div className="relative h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                                    </div>
                                </div>

                                {/* Card */}
                                <article className="relative ml-0 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-slate-900/50 md:ml-10">
                                    {/* Header */}
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                                                {item.title}
                                            </h3>

                                            <div className="mt-2 flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                                <svg
                                                    className="h-4 w-4"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m-3 6h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2z"
                                                    />
                                                </svg>

                                                <p className="font-medium">{item.company}</p>
                                            </div>
                                        </div>

                                        {/* Badge fechas */}
                                        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                                            <svg
                                                className="h-4 w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                />
                                            </svg>

                                            <span className="whitespace-nowrap">
                                                {item.startDate} — {item.endDate}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Descripción */}
                                    {item.description?.length ? (
                                        <div className="mt-5 space-y-3">
                                            {item.description.map((desc, idx) => (
                                                <div
                                                    key={`${item.title}-${item.company}-desc-${idx}`}
                                                    className="flex gap-3"
                                                >
                                                    <div className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 dark:bg-slate-600" />
                                                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                                        {desc}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    ) : null}

                                    {/* Skills */}
                                    {item.skills?.length ? (
                                        <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                                            {item.skills.map((skill) => (
                                                <span
                                                    key={`${item.title}-${item.company}-skill-${skill}`}
                                                    className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    ) : null}

                                    {/* Hover bar */}
                                    <div className="absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-400 dark:to-purple-400" />
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                /* Empty state */
                <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 py-16 dark:border-slate-800">
                    <svg
                        className="h-12 w-12 text-slate-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m-3 6h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2z"
                        />
                    </svg>
                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                        Información de experiencia próximamente
                    </p>
                </div>
            )}
        </Section>
    )
}
