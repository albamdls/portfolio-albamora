import { useEffect, useMemo, useState } from "react"
import Section from "@/components/layout/Section"
import { AuroraText } from "@/components/ui/aurora-text"
import { ExperienceTimeline } from "./Experience"
import { EducationTimeline } from "./Education"
import { CertificationsGrid } from "./Certifications"

type TabKey = "experience" | "education" | "certifications"

const tabs: Array<{ key: TabKey; label: string }> = [
    { key: "experience", label: "Experience" },
    { key: "education", label: "Education" },
    { key: "certifications", label: "Certifications" },
]

export default function Career() {
    const [active, setActive] = useState<TabKey>("experience")

    useEffect(() => {
        const hash = (window.location.hash || "").replace("#", "")
        if (hash === "education" || hash === "experience" || hash === "certifications") {
            setActive(hash as TabKey)
        }
    }, [])

    const header = useMemo(() => {
        if (active === "experience") {
            return {
                kicker: "PROFESSIONAL EXPERIENCE",
                titleA: "Roles and responsibilities ",
                titleB: "I have worked in",
            }
        }
        if (active === "education") {
            return {
                kicker: "EDUCATION & RELEVANT STUDIES",
                titleA: "Academic background ",
                titleB: "& Relevant Studies",
            }
        }
        return {
            kicker: "CERTIFICATIONS",
            titleA: "Badges & skills ",
            titleB: "I have earned / I'm pursuing",
        }
    }, [active])

    return (
        <Section id="experience" title="" subtitle="">
            <div className="mx-auto max-w-6xl text-center">
                <p className="text-[11px] font-semibold tracking-[0.25em] text-slate-500 dark:text-slate-400">
                    {header.kicker}
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                    <span className="text-slate-900 dark:text-white">{header.titleA}</span>
                    <AuroraText className="inline-block">{header.titleB}</AuroraText>
                </h2>

                {/* Tabs */}
                <div className="mt-6 flex items-center justify-center">
                    <div className="inline-flex rounded-full border border-slate-200 bg-white/70 p-1 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
                        {tabs.map((t) => {
                            const isActive = active === t.key
                            return (
                                <button
                                    key={t.key}
                                    type="button"
                                    onClick={() => {
                                        setActive(t.key)
                                        window.history.replaceState(null, "", `#${t.key}`)
                                    }}
                                    className={[
                                        "relative rounded-full px-4 py-2 text-sm font-medium transition",
                                        isActive
                                            ? "text-slate-900 dark:text-white"
                                            : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white",
                                    ].join(" ")}
                                >
                                    {isActive && (
                                        <span className="absolute inset-0 -z-10 rounded-full bg-slate-100 shadow-sm dark:bg-slate-800" />
                                    )}
                                    {t.label}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="mt-8">
                {active === "experience" ? (
                    <ExperienceTimeline />
                ) : active === "education" ? (
                    <EducationTimeline />
                ) : (
                    <CertificationsGrid />
                )}
            </div>
        </Section>
    )
}