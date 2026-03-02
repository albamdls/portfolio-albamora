import React, { useEffect, useMemo, useRef, useState } from "react"

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
    if (t.includes("proyecto") || t.includes("work")) {
        return "En Work puedes ver una selección de proyectos con el stack y el objetivo de cada uno. ¿Quieres que te recomiende el más parecido a tu idea?"
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

type Props = {
    name: string
    avatarSrc: string
    headline?: string
    placeholder?: string
}

export default function HeroChatCard({
    name,
    avatarSrc,
    headline = "Ask me anything about Alba…",
    placeholder = "Ask anything about Alba…",
}: Props) {
    const [input, setInput] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const [messages, setMessages] = useState<Msg[]>([
        { id: uid(), role: "assistant", text: "Hey 👋 Soy el asistente del portfolio. Pregúntame lo que quieras." },
    ])

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

    return (
        <div className="mx-auto w-full max-w-4xl">
            {/* Avatar + title */}
            <div className="flex flex-col items-center text-center">
                <img
                    src={avatarSrc}
                    alt="Avatar"
                    className="h-28 w-28 rounded-[2rem] object-cover shadow-xl shadow-slate-900/10 dark:shadow-black/30"
                    loading="eager"
                />

                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                    Hi, I&apos;m{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                        {name}
                    </span>
                </h2>
            </div>

            {/* Card */}
            <div className="mt-7 overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/60 shadow-2xl shadow-slate-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/50 dark:shadow-black/30">
                {/* Big “chat area” */}
                <div className="relative px-5 py-6 sm:px-8 sm:py-7">
                    {/* Soft gradient tint (like screenshot) */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 dark:from-blue-400/10 dark:via-purple-400/5 dark:to-pink-400/10" />

                    <div className="relative">
                        {/* Placeholder headline centered */}
                        {messages.length <= 1 && (
                            <p className="mb-4 text-center text-sm font-medium text-slate-500 dark:text-slate-300 sm:text-base">
                                {headline}
                            </p>
                        )}

                        {/* Messages viewport */}
                        <div
                            ref={viewportRef}
                            className="h-52 overflow-y-auto rounded-2xl px-1 sm:h-56"
                        >
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

                        {/* Pills */}
                        <div className="mt-5 flex justify-center">
                            <div className="flex flex-wrap items-center justify-center gap-2">
                                <Pill onClick={() => scrollToId("work")}>Work</Pill>
                                <Pill onClick={() => scrollToId("about")}>About me</Pill>
                                <Pill onClick={() => scrollToId("skills")}>Skills</Pill>
                                <Pill onClick={() => scrollToId("contact")}>Contact</Pill>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom input */}
                <div className="border-t border-slate-200/70 bg-white/50 px-4 py-4 dark:border-white/10 dark:bg-slate-950/40 sm:px-6">
                    <form onSubmit={onSubmit} className="flex items-center gap-3">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={placeholder}
                            className="h-12 flex-1 rounded-2xl border border-slate-200 bg-white/80 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-white/20"
                        />
                        <button
                            type="submit"
                            disabled={!canSend}
                            className={[
                                "h-12 rounded-2xl px-5 text-sm font-semibold transition",
                                canSend
                                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/15 hover:scale-[1.02] dark:bg-white dark:text-slate-900 dark:shadow-white/10"
                                    : "bg-slate-200 text-slate-500 dark:bg-white/10 dark:text-slate-400",
                            ].join(" ")}
                        >
                            Send
                        </button>
                    </form>

                    <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400">
                        Demo visual (sin backend). Luego lo conectamos a tu modelo.
                    </p>
                </div>
            </div>
        </div>
    )
}

function Pill({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
        >
            {children}
        </button>
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