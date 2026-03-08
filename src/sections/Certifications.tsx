import { certifications, type CertificationStatus } from "@/data/certifications"

function statusLabel(status: CertificationStatus) {
    if (status === "completed") return "Completed"
    if (status === "in_progress") return "In progress"
    return "Planned"
}

function statusPillClasses(status: CertificationStatus) {
    if (status === "completed") {
        return "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-200 dark:ring-emerald-900/60"
    }
    if (status === "in_progress") {
        return "bg-amber-100 text-amber-900 ring-1 ring-amber-200 dark:bg-amber-950/45 dark:text-amber-200 dark:ring-amber-900/60"
    }
    return "bg-sky-100 text-sky-900 ring-1 ring-sky-200 dark:bg-sky-950/45 dark:text-sky-200 dark:ring-sky-900/60"
}

export function CertificationsGrid() {
    const hasCerts = certifications.length > 0

    if (!hasCerts) {
        return (
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
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                </svg>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                    Certificaciones próximamente
                </p>
            </div>
        )
    }

    return (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c) => {
                const credentialUrl = c.credentialUrl?.trim() || undefined
                const badgeSrc = c.badgeSrc
                    ? `${import.meta.env.BASE_URL}${c.badgeSrc.replace(/^\//, "")}`
                    : undefined

                const CardTag = credentialUrl ? "a" : "article"
                const linkProps = credentialUrl
                    ? {
                          href: credentialUrl,
                          target: "_blank",
                          rel: "noreferrer",
                      }
                    : {}

                return (
                    <CardTag
                        key={`${c.title}-${c.issuer}-${c.status}`}
                        {...linkProps}
                        className={[
                            "group relative overflow-hidden rounded-2xl border border-slate-200/80",
                            "bg-white/80 shadow-sm backdrop-blur",
                            "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/40",
                            "dark:border-slate-800 dark:bg-slate-900/70 dark:hover:shadow-slate-900/40",
                            credentialUrl ? "cursor-pointer" : "",
                        ].join(" ")}
                    >
                        <div className="absolute right-3 top-3 z-20">
                            <span
                                className={[
                                    "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
                                    statusPillClasses(c.status),
                                ].join(" ")}
                            >
                                {statusLabel(c.status)}
                            </span>
                        </div>

                        <div className="relative flex aspect-[4/3] w-full items-center justify-center p-8">
                            <img
                                src={badgeSrc}
                                alt={c.badgeAlt ?? c.title}
                                className={[
                                    "max-h-full max-w-full object-contain",
                                    "transition-transform duration-300 group-hover:scale-[1.06]",
                                    "group-hover:opacity-60",
                                ].join(" ")}
                                loading="lazy"
                            />
                        </div>

                        <div
                            className={[
                                "absolute inset-0 z-10 flex flex-col justify-end",
                                "bg-gradient-to-t from-slate-950/75 via-slate-950/30 to-transparent",
                                "opacity-100 sm:opacity-0 transition-opacity duration-300 sm:group-hover:opacity-100",
                                "p-5",
                            ].join(" ")}
                        >
                            <div className="translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                                <h3 className="text-base font-bold leading-snug text-white">
                                    {c.title}
                                </h3>
                                <p className="mt-1 text-sm text-slate-200/90">{c.issuer}</p>

                                {c.skills?.length ? (
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {c.skills.slice(0, 8).map((s) => (
                                            <span
                                                key={`${c.title}-skill-${s}`}
                                                className="rounded-md bg-white/10 px-2 py-1 text-[11px] font-medium text-white/90 ring-1 ring-white/15"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                        {c.skills.length > 8 ? (
                                            <span className="rounded-md bg-white/10 px-2 py-1 text-[11px] font-medium text-white/90 ring-1 ring-white/15">
                                                +{c.skills.length - 8}
                                            </span>
                                        ) : null}
                                    </div>
                                ) : null}

                                {credentialUrl ? (
                                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/90">
                                        View credential <span aria-hidden>↗</span>
                                    </div>
                                ) : null}
                            </div>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 z-30 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-400 dark:to-purple-400" />
                    </CardTag>
                )
            })}
        </div>
    )
}

export default function Certifications() {
    return <CertificationsGrid />
}