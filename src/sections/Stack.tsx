import { useMemo } from "react"
import { stack } from "../data/stack"
import Section from "@/components/layout/Section"

type StackItem = (typeof stack)[number] & {
    level?: number
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

const categoryBadgeClasses: Record<CategoryKey, string> = {
    Frontend: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    Backend:
        "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    Database:
        "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    Tools:
        "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
    DevOps: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    Testing: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
    Design:
        "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
}

const categoryHoverBarClasses: Record<CategoryKey, string> = {
    Frontend: "from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300",
    Backend:
        "from-purple-600 to-purple-400 dark:from-purple-400 dark:to-purple-300",
    Database: "from-green-600 to-green-400 dark:from-green-400 dark:to-green-300",
    Tools:
        "from-orange-600 to-orange-400 dark:from-orange-400 dark:to-orange-300",
    DevOps: "from-red-600 to-red-400 dark:from-red-400 dark:to-red-300",
    Testing: "from-pink-600 to-pink-400 dark:from-pink-400 dark:to-pink-300",
    Design:
        "from-indigo-600 to-indigo-400 dark:from-indigo-400 dark:to-indigo-300",
}

function isCategoryKey(value: string): value is CategoryKey {
    return (
        value === "Frontend" ||
        value === "Backend" ||
        value === "Database" ||
        value === "Tools" ||
        value === "DevOps" ||
        value === "Testing" ||
        value === "Design"
    )
}

export default function Stack() {
    const grouped = useMemo(() => {
        return stack.reduce<Record<string, StackItem[]>>((acc, item) => {
            const key = item.category
            if (!acc[key]) acc[key] = []
            acc[key].push(item)
            return acc
        }, {})
    }, [])

    const totalYears = new Date().getFullYear() - 2021

    return (
        <Section
            id="stack"
            title="Stack tecnológico"
            subtitle="Tecnologías con las que he trabajado en proyectos reales"
        >
            <div className="mt-12 space-y-8">
                {Object.entries(grouped).map(([category, items]) => {
                    const catKey: CategoryKey | null = isCategoryKey(category)
                        ? category
                        : null

                    const icon = catKey ? categoryIcons[catKey] : null
                    const badgeClass = catKey
                        ? categoryBadgeClasses[catKey]
                        : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    const hoverBar = catKey
                        ? categoryHoverBarClasses[catKey]
                        : "from-slate-600 to-slate-400 dark:from-slate-400 dark:to-slate-300"

                    return (
                        <div
                            key={category}
                            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-slate-900/50"
                        >
                            {/* Header de categoría */}
                            <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-slate-900/50">
                                <div
                                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${badgeClass}`}
                                >
                                    {icon}
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                                        {category}
                                    </h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        {items.length}{" "}
                                        {items.length === 1 ? "tecnología" : "tecnologías"}
                                    </p>
                                </div>
                            </div>

                            {/* Grid de tecnologías */}
                            <div className="grid grid-cols-2 gap-4 p-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                                {items.map((item) => (
                                    <div
                                        key={`${item.category}-${item.name}`}
                                        className="group/item relative flex flex-col items-center gap-3 rounded-xl border border-transparent bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-slate-200 hover:bg-white hover:shadow-lg dark:bg-slate-800/50 dark:hover:border-slate-700 dark:hover:bg-slate-800"
                                    >
                                        {/* Icono de la tecnología */}
                                        <div className="relative">
                                            <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 blur transition-opacity duration-300 group-hover/item:opacity-20 dark:from-blue-400 dark:to-purple-400" />
                                            <img
                                                src={item.iconUrl}
                                                alt={item.name}
                                                className="relative h-14 w-14 object-contain transition-transform duration-300 group-hover/item:scale-110"
                                                loading="lazy"
                                            />
                                        </div>

                                        {/* Nombre de la tecnología */}
                                        <p className="text-center text-sm font-semibold text-slate-700 dark:text-slate-300">
                                            {item.name}
                                        </p>

                                        {/* Nivel de experiencia */}
                                        {item.level ? (
                                            <div className="absolute right-2 top-2">
                                                <div className="flex gap-0.5">
                                                    {[1, 2, 3].map((star) => (
                                                        <svg
                                                            key={star}
                                                            className={`h-3 w-3 ${star <= (item.level ?? 0)
                                                                    ? "text-yellow-400"
                                                                    : "text-slate-300 dark:text-slate-600"
                                                                }`}
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                        >
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : null}
                                    </div>
                                ))}
                            </div>

                            {/* Indicador de hover */}
                            <div
                                className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${hoverBar} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                            />
                        </div>
                    )
                })}
            </div>

            {/* Estadísticas totales */}
            <div className="mt-12 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900/50">
                <div className="grid gap-6 sm:grid-cols-3">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                            {stack.length}
                        </div>
                        <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                            Tecnologías en total
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                            {Object.keys(grouped).length}
                        </div>
                        <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                            Categorías
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                            {totalYears}+
                        </div>
                        <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                            Años de experiencia
                        </div>
                    </div>
                </div>
            </div>

            {/* Nota adicional */}
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
                <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <p className="text-sm text-blue-900 dark:text-blue-300">
                    Siempre estoy aprendiendo nuevas tecnologías y mejorando mis
                    habilidades. Este stack se actualiza constantemente.
                </p>
            </div>
        </Section>
    )
}
