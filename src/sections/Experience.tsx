import { experience } from "../data/experience"
import Section from "@/components/layout/Section"
import { AuroraText } from "@/components/ui/aurora-text"

export function ExperienceTimeline() {
    const hasExperience = experience.length > 0

    return hasExperience ? (
        <div className="relative md:mt-2">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-blue-200/70 via-purple-200/70 to-transparent dark:from-blue-900/60 dark:via-purple-900/60 md:block" />

            <div className="space-y-5 md:space-y-6">
                {experience.map((item) => (
                    <div
                        key={`${item.title}-${item.company}-${item.startDate}-${item.endDate}`}
                        className="group relative"
                    >
                        <div className="absolute left-4 top-7 hidden -translate-x-1/2 md:block">
                            <div className="relative flex h-3.5 w-3.5 items-center justify-center">
                                <div className="absolute h-3.5 w-3.5 rounded-full bg-blue-200 transition-all duration-300 group-hover:scale-150 group-hover:bg-blue-300 dark:bg-blue-900 dark:group-hover:bg-blue-800" />
                                <div className="relative h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                            </div>
                        </div>

                        <article className="relative ml-0 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-slate-900/40 md:ml-10 md:p-5">
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                <div className="min-w-0 flex-1">
                                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                                        {item.title}
                                    </h3>

                                    <div className="mt-1.5 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <svg
                                            className="h-4 w-4 shrink-0"
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

                                        <p className="truncate font-medium">{item.company}</p>
                                    </div>
                                </div>

                                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                                    <svg
                                        className="h-3.5 w-3.5"
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

                            {item.description?.length ? (
                                <div className="mt-3 space-y-2">
                                    {item.description.map((desc, idx) => (
                                        <div
                                            key={`${item.title}-${item.company}-desc-${idx}`}
                                            className="flex gap-2.5"
                                        >
                                            <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400/80 dark:bg-slate-600" />
                                            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                                {desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ) : null}

                            {item.skills?.length ? (
                                <div className="mt-3 flex flex-wrap gap-1.5 border-t border-slate-100 pt-3 dark:border-slate-800">
                                    {item.skills.map((skill) => (
                                        <span
                                            key={`${item.title}-${item.company}-skill-${skill}`}
                                            className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            ) : null}

                            <div className="absolute inset-x-0 bottom-0 h-0.5 rounded-b-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-400 dark:to-purple-400" />
                        </article>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 py-10 dark:border-slate-800">
            <svg
                className="h-10 w-10 text-slate-400"
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
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                Información de experiencia próximamente
            </p>
        </div>
    )
}

export default function Experience() {
    return (
        <Section id="experience" title="" subtitle="">
            <div className="mx-auto max-w-5xl text-center">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-500 dark:text-slate-400">
                    PROFESSIONAL EXPERIENCE
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                    <span className="text-slate-900 dark:text-white">Roles and responsibilities </span>
                    <AuroraText className="inline-block">I have worked in</AuroraText>
                </h2>
            </div>

            <div className="mt-8 md:mt-10">
                <ExperienceTimeline />
            </div>
        </Section>
    )
}