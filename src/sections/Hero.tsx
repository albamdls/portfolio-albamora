import { useEffect, useMemo, useRef, useState } from "react"
import { profile } from "../data/profile"
import { TypingAnimation } from "@/components/ui/typing-animation"

type Role = "user" | "assistant"
type Msg = { id: string; role: Role; text: string }

function uid() {
    return Math.random().toString(36).slice(2) + Date.now().toString(36)
}

function scrollToId(id: string) {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: "smooth", block: "start" })
}

function mockReply(input: string) {
    const t = input.toLowerCase()
    if (t.includes("proyecto") || t.includes("work") || t.includes("projects")) {
        return "En Projects puedes ver una selección de proyectos con el stack y el objetivo de cada uno. ¿Quieres que te recomiende el más parecido a tu idea?"
    }
    if (t.includes("skill") || t.includes("stack") || t.includes("tecnolog")) {
        return "Trabajo principalmente con React/TypeScript y herramientas modernas para frontend, e integro backend/APIs cuando el proyecto lo necesita. ¿Te interesa más frontend, backend o fullstack?"
    }
    if (t.includes("contact") || t.includes("contrat") || t.includes("hablemos")) {
        return "Perfecto — baja a Contact y cuéntame qué necesitas. Si me das 2 detalles (tipo de web + plazo), te digo un enfoque y próximos pasos."
    }
    if (t.includes("sobre") || t.includes("about")) {
        return "En About cuento mi enfoque y cómo trabajo. Si me dices tu objetivo, puedo guiarte sobre cómo lo haríamos."
    }
    return "¡Genial! Aún es una demo visual (sin backend), pero puedo orientarte. ¿Qué quieres construir o mejorar?"
}

const pills = [
    { label: "Work", id: "projects" },
    { label: "About me", id: "about" },
    { label: "Skills", id: "stack" },
    { label: "Contact", id: "contact" },
]

export default function Hero() {
    return (
        <section
            className={[
                "relative overflow-hidden px-6",
                // Deja sitio para navbar fija (ajusta si tu navbar es más alta)
                "pt-24 sm:pt-28",
                // Altura real del viewport (svh) menos el padding superior
                // Esto ayuda a que el contenido se centre sin pasarse.
                "min-h-[calc(100svh-6rem)]",
            ].join(" ")}
        >
            <div className="mx-auto w-full max-w-5xl">
                <div className="flex flex-col items-center text-center">
                    {/* Avatar */}
                    <img
                        src="./alba-hero.gif"
                        alt="Foto de perfil"
                        className="h-28 w-28 sm:h-36 sm:w-36 lg:h-40 lg:w-40 rounded-[2.25rem] object-contain"
                    />

                    {/* H1 MÁS PEQUEÑO (como pides) */}
                    <h1 className="mt-4 text-xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-2xl lg:text-3xl">
                        <span className="text-slate-900 dark:text-white">Hi, I&apos;m </span>
                        <TypingAnimation
                            className="inline font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
                            duration={45}
                            startOnView
                            showCursor
                            blinkCursor
                            cursorStyle="line"
                        >
                            {profile.name}
                        </TypingAnimation>
                    </h1>

                    {/* Download CV pill (sustituye al texto) */}
                    <div className="mt-3">
                        <a
                            href={profile.cvUrl}
                            download
                            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 text-xs font-semibold text-white shadow-xl shadow-blue-600/30 transition hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-600/40"
                        >
                            {/* Shine */}
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            <span className="relative z-10 text-white">
                                Download CV
                            </span>

                            <svg
                                className="relative z-10 h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3 3m0 0l-3-3m3 3V8"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Chat (altura controlada para que SIEMPRE quepa) */}
                <div className="mt-6 pb-8">
                    <HeroChatCard />
                </div>
            </div>
        </section>
    )
}

/* ---------- Chat card (estilo captura, pero responsive para que quepa) ---------- */

function HeroChatCard() {
    const [input, setInput] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const [messages, setMessages] = useState<Msg[]>([]) // vacío como la captura

    const viewportRef = useRef<HTMLDivElement | null>(null)
    const canSend = useMemo(() => input.trim().length > 0 && !isTyping, [input, isTyping])

    useEffect(() => {
        if (!viewportRef.current) return
        viewportRef.current.scrollTop = viewportRef.current.scrollHeight
    }, [messages, isTyping])

    function send(text: string) {
        const q = text.trim()
        if (!q) return
        setMessages((prev) => [...prev, { id: uid(), role: "user", text: q }])
        setInput("")
        setIsTyping(true)

        window.setTimeout(() => {
            setMessages((prev) => [...prev, { id: uid(), role: "assistant", text: mockReply(q) }])
            setIsTyping(false)
        }, 550)
    }

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!canSend) return
        send(input)
    }

    const isEmpty = messages.length === 0 && !isTyping

    return (
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.25rem] border border-slate-200/70 bg-white/60 shadow-2xl shadow-slate-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/50 dark:shadow-black/30">
            {/* Área grande */}
            <div className="relative px-5 py-6 sm:px-8 sm:py-8">
                {/* fondo suave */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 dark:from-blue-400/10 dark:via-purple-400/5 dark:to-pink-400/10" />

                <div className="relative">
                    {/* Placeholder centrado (como en la captura) */}
                    {isEmpty && (
                        <div className="grid h-44 place-items-center sm:h-52 lg:h-56">
                            <p className="text-center text-sm font-medium text-slate-500 dark:text-slate-300">
                                Ask anything about me…
                            </p>
                        </div>
                    )}

                    {/* Conversación */}
                    {!isEmpty && (
                        <div ref={viewportRef} className="h-44 overflow-y-auto rounded-2xl px-1 sm:h-52 lg:h-56">
                            <div className="space-y-3">
                                {messages.map((m) => (
                                    <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                                        <div
                                            className={[
                                                "max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-relaxed sm:text-[15px]",
                                                m.role === "user"
                                                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/15 dark:bg-white dark:text-slate-900 dark:shadow-white/10"
                                                    : "bg-white/70 text-slate-800 ring-1 ring-slate-900/5 dark:bg-white/10 dark:text-slate-100 dark:ring-white/10",
                                            ].join(" ")}
                                        >
                                            {m.text}
                                        </div>
                                    </div>
                                ))}

                                {isTyping && (
                                    <div className="flex justify-start">
                                        <div className="rounded-3xl bg-white/70 px-4 py-3 text-sm text-slate-800 ring-1 ring-slate-900/5 dark:bg-white/10 dark:text-slate-100 dark:ring-white/10">
                                            <TypingDots />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Pills */}
                    <div className="mt-4 flex justify-center">
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            {pills.map((p) => (
                                <button
                                    key={p.id}
                                    type="button"
                                    onClick={() => scrollToId(p.id)}
                                    className="rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                                >
                                    {p.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Input */}
            <div className="border-t border-slate-200/70 bg-white/50 px-5 py-4 dark:border-white/10 dark:bg-slate-950/40 sm:px-8">
                <form onSubmit={onSubmit} className="flex items-center gap-3">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask anything about me…"
                        className="h-11 flex-1 rounded-2xl border border-slate-200 bg-white/80 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-white/20"
                    />
                    <button
                        type="submit"
                        disabled={!canSend}
                        className={[
                            "h-11 rounded-2xl px-6 text-sm font-semibold transition",
                            canSend
                                ? "bg-slate-900 text-white shadow-lg shadow-slate-900/15 hover:scale-[1.02] dark:bg-white dark:text-slate-900 dark:shadow-white/10"
                                : "bg-slate-200 text-slate-500 dark:bg-white/10 dark:text-slate-400",
                        ].join(" ")}
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}

function TypingDots() {
    return (
        <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.2s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.1s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current" />
        </div>
    )
}