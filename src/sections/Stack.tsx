import { useMemo } from "react"
import type React from "react"
import Section from "@/components/layout/Section"
import { AuroraText } from "@/components/ui/aurora-text"
import { stack } from "../data/stack"
import type { Group, StackItem } from "../data/stack"

const groupOrder: Group[] = [
    "Languages",
    "Frameworks",
    "Databases",
    "AI & Data Science",
    "Cloud & DevOps",
    "Software & Tools",
]

const groupLabel: Record<Group, string> = {
    Languages: "Languages",
    Frameworks: "Frameworks",
    Databases: "Databases",
    "AI & Data Science": "Artificial Intelligence & Data Science",
    "Cloud & DevOps": "Cloud & DevOps",
    "Software & Tools": "Software & Tools",
}

/**
 * Icono con glow “real” detrás (no círculo, no badge).
 * - Glow solo en dark
 * - Más glow en hover
 */
function TechIcon({ src, name }: { src: string; name: string }) {
    return (
        <span className="relative inline-flex h-4 w-4 shrink-0 items-center justify-center">
            {/* Glow detrás del icono (dark only) */}
            <span
                aria-hidden="true"
                className={[
                    "pointer-events-none absolute inset-[-10px] opacity-0 blur-xl",
                    "transition-opacity duration-300 ease-out",
                    // encendido base en dark
                    "dark:opacity-90",
                    // más intenso al hover
                    "group-hover:dark:opacity-100",
                    // “neon mix” (violet + blue)
                    "bg-[radial-gradient(circle,rgba(168,85,247,0.95)_0%,rgba(59,130,246,0.55)_45%,transparent_70%)]",
                ].join(" ")}
            />
            {/* Imagen */}
            <img
                src={src}
                alt={name}
                loading="lazy"
                className={[
                    "relative h-4 w-4 object-contain",
                    "opacity-95 transition-transform duration-300 ease-out",
                    "group-hover:scale-110",
                    // extra punch para iconos oscuros en dark
                    "dark:brightness-110 dark:contrast-110",
                ].join(" ")}
            />
        </span>
    )
}

function StackPill({ item }: { item: StackItem }) {
    return (
        <button
            type="button"
            className={[
                "group inline-flex items-center gap-2",
                "rounded-full border",
                // Light mode
                "border-slate-200/70 bg-white/70 text-slate-700 hover:bg-white",
                // Dark mode
                "dark:border-white/10 dark:bg-white/[0.06] dark:text-white/80 dark:hover:bg-white/[0.10] dark:hover:text-white",
                "px-4 py-2",
                "text-sm font-medium",
                "shadow-sm backdrop-blur-md",
                "transition-all duration-200",
                "hover:-translate-y-0.5",
                "focus:outline-none focus:ring-2 focus:ring-violet-500/30",
            ].join(" ")}
            aria-label={item.name}
        >
            <TechIcon src={item.iconUrl} name={item.name} />
            <span className="whitespace-nowrap">{item.name}</span>
        </button>
    )
}

function SeparatorTitle({ title }: { title: string }) {
    return (
        <div className="flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-slate-200/70 dark:bg-white/10" />
            <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-500 dark:text-white/55">
                {title.toUpperCase()}
            </p>
            <div className="h-px w-10 bg-slate-200/70 dark:bg-white/10" />
        </div>
    )
}

function GroupBlock({ group, items }: { group: Group; items: StackItem[] }) {
    if (!items.length) return null
    return (
        <div className="space-y-3">
            <SeparatorTitle title={groupLabel[group]} />
            <div className="flex flex-wrap justify-center gap-3">
                {items.map((item) => (
                    <StackPill key={`${item.group}-${item.name}`} item={item} />
                ))}
            </div>
        </div>
    )
}

export default function Stack() {
    const grouped = useMemo(() => {
        const g = stack.reduce<Record<Group, StackItem[]>>((acc, item) => {
            const key = item.group
            if (!acc[key]) acc[key] = []
            acc[key].push(item)
            return acc
        }, {} as Record<Group, StackItem[]>)

        return g
    }, [])

    return (
        <Section id="stack" title="" subtitle="">
            {/* Header */}
            <div className="mx-auto max-w-4xl text-center">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-500 dark:text-white/55">
                    MY SKILLSET
                </p>

                <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                    <span className="text-slate-900 dark:text-white">The Magic </span>
                    <AuroraText className="inline-block font-serif italic">Behind</AuroraText>
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 dark:text-white/60">
                    Tecnologías y herramientas que uso en mi día a día.
                </p>
            </div>

            {/* Bloques */}
            <div className="mx-auto mt-10 max-w-5xl space-y-8">
                {groupOrder.map((group) => (
                    <GroupBlock key={group} group={group} items={grouped[group] ?? []} />
                ))}
            </div>
        </Section>
    )
}