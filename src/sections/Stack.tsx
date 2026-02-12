import { useMemo } from "react"
import { stack } from "../data/stack"
import Section from "@/components/layout/Section"
import { AuroraText } from "@/components/ui/aurora-text"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import Marquee from "@/components/ui/marquee" // <-- ajusta si tu ruta es distinta

type StackItem = (typeof stack)[number] & {
    experienceYears?: number
    since?: string
}

type CategoryKey =
    | "Frontend"
    | "Backend"
    | "Database"
    | "Tools"
    | "DevOps"
    | "Testing"
    | "Design"

const categoryIcons: Record<CategoryKey, React.ReactNode> = {
    Frontend: (
        <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
        </svg>
    ),
    Backend: (
        <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
            />
        </svg>
    ),
    Database: (
        <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
            />
        </svg>
    ),
    Tools: (
        <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
        </svg>
    ),
    DevOps: (
        <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
        </svg>
    ),
    Testing: (
        <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    ),
    Design: (
        <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
        </svg>
    ),
}

const categoryOrder: CategoryKey[] = [
    "Frontend",
    "Backend",
    "Database",
    "DevOps",
    "Tools",
    "Testing",
    "Design",
]

function isCategoryKey(value: string): value is CategoryKey {
    return categoryOrder.includes(value as CategoryKey)
}

function monthsBetween(from: Date, to: Date) {
    const years = to.getFullYear() - from.getFullYear()
    const months = to.getMonth() - from.getMonth()
    return years * 12 + months
}

function formatExperience(item: StackItem): string {
    if (typeof item.experienceYears === "number") {
        if (item.experienceYears < 1) return "< 1 año"
        return item.experienceYears === 1 ? "1 año" : `${item.experienceYears} años`
    }
    if (item.since) {
        const parsed =
            item.since.length === 7 ? new Date(`${item.since}-01`) : new Date(item.since)
        if (!Number.isNaN(parsed.getTime())) {
            const now = new Date()
            const m = Math.max(0, monthsBetween(parsed, now))
            const y = Math.floor(m / 12)
            const rem = m % 12

            if (y <= 0) return rem <= 1 ? "1 mes" : `${rem} meses`
            if (rem === 0) return y === 1 ? "1 año" : `${y} años`
            return `${y}a ${rem}m`
        }
    }
    return "N/A"
}

function TechRow({ items }: { items: StackItem[] }) {
    const shouldMarquee = items.length > 5

    if (!shouldMarquee) {
        return (
            <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                    <TechPill key={`${item.category}-${item.name}`} item={item} />
                ))}
            </div>
        )
    }

    return (
        <div className="relative w-full min-w-0 overflow-hidden rounded-2xl">
            {/* fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white/70 to-transparent dark:from-slate-950/70 z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white/70 to-transparent dark:from-slate-950/70 z-10" />

            <Marquee pauseOnHover className="[--duration:20s]">
                {items.map((item) => (
                    <div key={`m-${item.category}-${item.name}`} className="mx-2 shrink-0">
                        <TechPill item={item} />
                    </div>
                ))}
            </Marquee>
        </div>
    )
}

function TechPill({ item }: { item: StackItem }) {
    const exp = formatExperience(item)

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <button
                    type="button"
                    className="
            inline-flex items-center gap-2 rounded-full
            border border-slate-200/80 bg-white/70
            px-4 py-2 text-sm font-medium text-slate-700
            shadow-sm backdrop-blur transition
            hover:-translate-y-0.5 hover:shadow-md
            dark:border-white/10 dark:bg-slate-900/20 dark:text-slate-200
          "
                >
                    <img
                        src={item.iconUrl}
                        alt={item.name}
                        className="h-5 w-5 object-contain"
                        loading="lazy"
                    />
                    <span>{item.name}</span>
                </button>
            </TooltipTrigger>

            <TooltipContent
                side="top"
                className="border-slate-200 bg-white text-slate-900 dark:border-white/10 dark:bg-slate-900 dark:text-slate-100"
            >
                <div className="text-xs">
                    <span className="font-semibold">{item.name}</span>
                    <span className="mx-2 opacity-50">•</span>
                    <span>{exp} de experiencia</span>
                </div>
            </TooltipContent>
        </Tooltip>
    )
}

/** Card “rectángulo redondeado” SIN relleno (solo borde) */
function RoundedRowFrame({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div
            className="
rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all hover:bg-white/10      "
        >
            <div className="px-6 py-5">{children}</div>
        </div>
    )
}

export default function Stack() {
    const grouped = useMemo(() => {
        const g = stack.reduce<Record<string, StackItem[]>>((acc, item) => {
            const key = item.category
            if (!acc[key]) acc[key] = []
            acc[key].push(item)
            return acc
        }, {})

        Object.keys(g).forEach((k) => g[k].sort((a, b) => a.name.localeCompare(b.name)))
        return g
    }, [])

    const orderedCategories = [
        ...categoryOrder.filter((c) => grouped[c]?.length),
        ...Object.keys(grouped).filter((c) => !isCategoryKey(c)),
    ]

    return (
        <Section id="stack" title="" subtitle="">
            {/* Header centrado */}
            <div className="mx-auto max-w-6xl text-center">
                <p className="text-xs font-semibold tracking-[0.25em] text-slate-500 dark:text-slate-400">
                    MY SKILLSET
                </p>

                <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                    <span className="text-slate-900 dark:text-white">The Magic </span>
                    <AuroraText className="inline-block">Behind</AuroraText>
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
                    Pasa el cursor por encima para ver mi experiencia con cada tecnología.
                </p>
            </div>

            {/* Filas por categoría */}
            <div className="mx-auto mt-10 max-w-6xl space-y-5">
                <TooltipProvider>
                    {orderedCategories.map((category) => {
                        const items = grouped[category] ?? []
                        if (!items.length) return null

                        const icon =
                            isCategoryKey(category) ? categoryIcons[category] : null

                        return (
                            <RoundedRowFrame key={category}>
                                <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-2">
                                    {/* Left: categoría + icon */}
                                    <div className="flex shrink-0 items-start gap-3 md:w-56">
                                        {icon && (
                                            <div
                                                className="
                                                    mt-0.5 flex h-10 w-10 items-center justify-center
                                                    rounded-2xl border border-slate-200/70
                                                    text-slate-700
                                                    dark:border-white/10 dark:text-slate-200
                                                "
                                            >
                                                {icon}
                                            </div>
                                        )}

                                        <div className="text-left">
                                            <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                                {category}
                                            </p>
                                            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                                {items.length}{" "}
                                                {items.length === 1 ? "tecnología" : "tecnologías"}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right: tech pills */}
                                    <TechRow items={items} />
                                </div>
                            </RoundedRowFrame>
                        )
                    })}
                </TooltipProvider>
            </div>
        </Section>
    )
}
