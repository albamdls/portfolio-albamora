import { useEffect, useState } from "react"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

type NavItem = { label: string; id: string }

const NAV: NavItem[] = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "stack" },
    { label: "Other", id: "experience" }, // puedes cambiarlo por "Education" o "More"
]

function scrollToId(id: string) {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: "smooth", block: "start" })
}

export default function Navbar() {
    const [active, setActive] = useState<string>("hero")

    // Active por scroll (suave y estable)
    useEffect(() => {
        const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[]
        if (!els.length) return

        const obs = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
                if (visible?.target?.id) setActive(visible.target.id)
            },
            {
                threshold: [0.25, 0.4, 0.55],
                rootMargin: "-90px 0px -55% 0px", // compensa navbar fixed
            }
        )

        els.forEach((el) => obs.observe(el))
        return () => obs.disconnect()
    }, [])

    return (
        <header className="fixed inset-x-0 top-4 z-50">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
                {/* LEFT: Theme circle */}
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="grid h-12 w-12 place-items-center rounded-full border border-slate-200/70 bg-white/70 shadow-lg shadow-slate-900/10 backdrop-blur-xl transition hover:bg-white dark:border-white/10 dark:bg-slate-950/50 dark:shadow-black/30">
                            <AnimatedThemeToggler />
                        </div>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" sideOffset={10} className="rounded-xl px-4 py-2 text-sm">
                        <p>Tema</p>
                    </TooltipContent>
                </Tooltip>

                {/* CENTER: pill nav */}
                <nav className="flex items-center gap-1 rounded-full border border-slate-200/70 bg-white/70 p-1 shadow-lg shadow-slate-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/50 dark:shadow-black/30">
                    {NAV.map((item) => {
                        const isActive = active === item.id
                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => scrollToId(item.id)}
                                className={[
                                    "rounded-full px-4 py-2 text-sm font-semibold transition",
                                    "focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:ring-offset-2 focus:ring-offset-transparent",
                                    isActive
                                        ? "bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900"
                                        : "text-slate-700 hover:bg-slate-900/5 dark:text-slate-200 dark:hover:bg-white/10",
                                ].join(" ")}
                            >
                                {item.label}
                            </button>
                        )
                    })}
                </nav>

                {/* RIGHT: CTA pill */}
                <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-900/10 backdrop-blur-xl transition hover:bg-white dark:border-white/10 dark:bg-slate-950/50 dark:text-white dark:shadow-black/30 dark:hover:bg-white/10"
                >
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-900/5 dark:bg-white/10">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M21 8V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18 0a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2m18 0-9 6-9-6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                    Contact me
                </a>
            </div>
        </header>
    )
}