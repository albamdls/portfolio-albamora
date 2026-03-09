import { useEffect, useState } from "react"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

type NavItem = { label: string; id: string }

const NAV: NavItem[] = [
    { label: "About", id: "about" },
    { label: "Skills", id: "stack" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
]

function scrollToId(id: string) {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: "smooth", block: "start" })
}

export default function Navbar() {
    const [active, setActive] = useState<string>("")
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[]
        if (!els.length) return

        const obs = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]

                if (visible?.target?.id) {
                    setActive(visible.target.id)
                }
            },
            {
                threshold: [0.2, 0.35, 0.5, 0.65],
                rootMargin: "-90px 0px -45% 0px",
            }
        )

        els.forEach((el) => obs.observe(el))
        return () => obs.disconnect()
    }, [])

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false)
        }

        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [])

    return (
        <header className="fixed inset-x-0 top-3 z-50">
            <div className="mx-auto max-w-6xl px-3 sm:px-6">
                <div className="p-2">
                    {/* MOBILE */}
                    <div className="rounded-2xl border border-white/30 bg-white/45 p-2 shadow-lg shadow-slate-900/10 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/35 dark:shadow-black/30 md:hidden">
                        <div className="flex items-center justify-between">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button
                                        type="button"
                                        aria-label="Cambiar tema"
                                        className="grid h-11 w-11 place-items-center rounded-full border border-white/35 bg-white/40 shadow-md shadow-slate-900/10 backdrop-blur-xl transition hover:bg-white/55 focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:ring-offset-2 focus:ring-offset-transparent dark:border-white/10 dark:bg-white/10 dark:shadow-black/30 dark:hover:bg-white/15"
                                    >
                                        <AnimatedThemeToggler />
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent side="bottom" sideOffset={10} className="rounded-xl px-4 py-2 text-sm">
                                    <p>Tema</p>
                                </TooltipContent>
                            </Tooltip>

                            <button
                                type="button"
                                aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
                                aria-expanded={mobileOpen}
                                onClick={() => setMobileOpen((prev) => !prev)}
                                className="grid h-11 w-11 place-items-center rounded-full border border-white/35 bg-white/40 text-slate-900 shadow-md shadow-slate-900/10 backdrop-blur-xl transition hover:bg-white/55 focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:ring-offset-2 focus:ring-offset-transparent dark:border-white/10 dark:bg-white/10 dark:text-white dark:shadow-black/30 dark:hover:bg-white/15"
                            >
                                {mobileOpen ? (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M6 6L18 18M18 6L6 18"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M4 7H20M4 12H20M4 17H20"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                )}
                            </button>

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button
                                        type="button"
                                        aria-label="Contactar"
                                        onClick={() => scrollToId("contact")}
                                        className="grid h-11 w-11 place-items-center rounded-full border border-white/35 bg-white/40 text-slate-900 shadow-md shadow-slate-900/10 backdrop-blur-xl transition hover:bg-white/55 focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:ring-offset-2 focus:ring-offset-transparent dark:border-white/10 dark:bg-white/10 dark:text-white dark:shadow-black/30 dark:hover:bg-white/15"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M21 8V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18 0a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2m18 0-9 6-9-6"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent side="bottom" sideOffset={10} className="rounded-xl px-4 py-2 text-sm">
                                    <p>Contact me</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>

                        {mobileOpen && (
                            <div className="mt-3 border-t border-white/20 pt-3 dark:border-white/10">
                                <nav className="flex flex-col gap-2">
                                    {NAV.map((item) => {
                                        const isActive = active === item.id

                                        return (
                                            <button
                                                key={item.id}
                                                type="button"
                                                onClick={() => {
                                                    setActive(item.id)
                                                    scrollToId(item.id)
                                                    setMobileOpen(false)
                                                }}
                                                className={[
                                                    "w-full rounded-xl border px-4 py-3 text-left text-sm font-semibold backdrop-blur-xl transition",
                                                    "focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:ring-offset-2 focus:ring-offset-transparent",
                                                    isActive
                                                        ? "border-white/30 bg-white/45 text-slate-900 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white"
                                                        : "border-transparent text-slate-700 hover:border-white/20 hover:bg-white/25 dark:text-slate-200 dark:hover:bg-white/8",
                                                ].join(" ")}
                                            >
                                                {item.label}
                                            </button>
                                        )
                                    })}
                                </nav>
                            </div>
                        )}
                    </div>

                    {/* DESKTOP */}
                    <div className="hidden md:flex md:items-center md:justify-between md:gap-3">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    type="button"
                                    aria-label="Cambiar tema"
                                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/30 bg-white/45 shadow-lg shadow-slate-900/10 backdrop-blur-2xl transition hover:bg-white/55 focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:ring-offset-2 focus:ring-offset-transparent dark:border-white/10 dark:bg-slate-900/35 dark:shadow-black/30 dark:hover:bg-white/10"
                                >
                                    <AnimatedThemeToggler />
                                </button>
                            </TooltipTrigger>
                            <TooltipContent side="bottom" sideOffset={10} className="rounded-xl px-4 py-2 text-sm">
                                <p>Tema</p>
                            </TooltipContent>
                        </Tooltip>

                        <nav className="flex flex-1 items-center justify-center gap-1 rounded-full border border-white/30 bg-white/45 p-1.5 shadow-lg shadow-slate-900/10 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/35 dark:shadow-black/30">
                            {NAV.map((item) => {
                                const isActive = active === item.id

                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => {
                                            setActive(item.id)
                                            scrollToId(item.id)
                                        }}
                                        className={[
                                            "rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-xl transition",
                                            "focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:ring-offset-2 focus:ring-offset-transparent",
                                            isActive
                                                ? "border-white/35 bg-white/55 text-slate-900 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white"
                                                : "border-transparent text-slate-700 hover:border-white/20 hover:bg-white/25 dark:text-slate-200 dark:hover:bg-white/8",
                                        ].join(" ")}
                                    >
                                        {item.label}
                                    </button>
                                )
                            })}
                        </nav>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    type="button"
                                    aria-label="Contactar"
                                    onClick={() => scrollToId("contact")}
                                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/30 bg-white/45 text-slate-900 shadow-lg shadow-slate-900/10 backdrop-blur-2xl transition hover:bg-white/55 focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:ring-offset-2 focus:ring-offset-transparent dark:border-white/10 dark:bg-slate-900/35 dark:text-white dark:shadow-black/30 dark:hover:bg-white/10"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M21 8V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18 0a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2m18 0-9 6-9-6"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </TooltipTrigger>
                            <TooltipContent side="bottom" sideOffset={10} className="rounded-xl px-4 py-2 text-sm">
                                <p>Contact me</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </header>
    )
}