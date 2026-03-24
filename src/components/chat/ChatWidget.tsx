import React, { useEffect, useMemo, useRef, useState } from "react"

type Role = "user" | "assistant"
type StackGroups = Record<string, string[]>

type Msg = {
    id: string
    role: Role
    text: string
    sectionHint?: string | null
    suggestedCta?: string | null
    structuredData?: {
        type?: string
        groups?: StackGroups
        items?: Array<{
            title?: string
            subtitle?: string
            date_range?: string
            skills?: string[]
        }>
    } | null
}

type ChatApiResponse = {
    answer: string
    sources?: string[]
    session_id?: string | null
    section_hint?: string | null
    suggested_cta?: string | null
    structured_data?: {
        type?: string
        groups?: StackGroups
    } | null
}

function uid() {
    return Math.random().toString(36).slice(2) + Date.now().toString(36)
}

function getChatSessionId() {
    if (typeof window === "undefined") return "portfolio-chat-session"
    const storageKey = "portfolio-chat-session-id"
    const existing = window.localStorage.getItem(storageKey)
    if (existing) return existing
    const created = typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : uid()
    window.localStorage.setItem(storageKey, created)
    return created
}

/** Reactively tracks Tailwind's dark-mode class on <html> */
function useDarkMode() {
    const [dark, setDark] = useState(() =>
        typeof document !== "undefined"
            ? document.documentElement.classList.contains("dark")
            : false
    )
    useEffect(() => {
        const observer = new MutationObserver(() => {
            setDark(document.documentElement.classList.contains("dark"))
        })
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
        return () => observer.disconnect()
    }, [])
    return dark
}

type Props = {
    headline?: string
    placeholder?: string
}

export default function HeroChatCard({
    headline = "",
    placeholder = "Ask anything about me…",
}: Props) {
    const apiUrl = useMemo(() => {
        const raw = import.meta.env.VITE_API_URL?.trim()
        if (raw) return raw.replace(/\/+$/, "")
        if (import.meta.env.DEV) return "http://localhost:8000"
        return "https://portfolio-albamora-api.onrender.com"
    }, [])

    const dark = useDarkMode()
    const [input, setInput] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const [messages, setMessages] = useState<Msg[]>([
        {
            id: uid(),
            role: "assistant",
            text: "Hi 👋 I'm the portfolio assistant. Ask me anything.",
        },
    ])

    const viewportRef = useRef<HTMLDivElement | null>(null)
    const sessionIdRef = useRef(getChatSessionId())
    const canSend = useMemo(() => input.trim().length > 0 && !isTyping, [input, isTyping])

    useEffect(() => {
        if (!viewportRef.current) return
        viewportRef.current.scrollTop = viewportRef.current.scrollHeight
    }, [messages, isTyping])

    async function fetchBackendReply(message: string): Promise<ChatApiResponse> {
        const endpoint = `${apiUrl}/api/chat`
        const res = await fetch(endpoint, {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message, session_id: sessionIdRef.current }),
        })
        if (!res.ok) throw new Error(`Backend error ${res.status}: ${await res.text()}`)
        return await res.json()
    }

    async function send(text: string) {
        const q = text.trim()
        if (!q) return
        setMessages((prev) => [...prev, { id: uid(), role: "user", text: q }])
        setInput("")
        setIsTyping(true)
        try {
            const reply = await fetchBackendReply(q)
            setMessages((prev) => [
                ...prev,
                {
                    id: uid(),
                    role: "assistant",
                    text: reply.answer,
                    sectionHint: reply.section_hint ?? null,
                    suggestedCta: reply.suggested_cta ?? null,
                    structuredData: reply.structured_data ?? null,
                },
            ])
        } catch (error) {
            console.error(error)
            setMessages((prev) => [
                ...prev,
                { id: uid(), role: "assistant", text: "⚠️ Error connecting to the backend." },
            ])
        } finally {
            setIsTyping(false)
        }
    }

    function sendPresetPrompt(prompt: string) {
        if (isTyping) return
        send(prompt)
    }

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!canSend) return
        send(input)
    }

    function scrollToSection(sectionId: string) {
        const el = document.getElementById(sectionId)
        if (!el) return
        el.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    const t = dark ? DARK : LIGHT

    return (
        <>
            <style>{GLOBAL_STYLES}</style>

            {/*
             * z-index: 40  →  above SmokeyCursor (z-[1]) and inside the UI
             * wrapper (z-30). Any pointer event on the card will never be
             * swallowed by the cursor canvas.
             */}
            <div
                className="mx-auto w-full max-w-4xl"
                style={{ position: "relative", zIndex: 40 }}
            >
                {/* ── Outer glass card ──────────────────────────────────────── */}
                <div style={{
                    background: t.cardBg,
                    backdropFilter: "blur(28px)",
                    WebkitBackdropFilter: "blur(28px)",
                    border: `1px solid ${t.cardBorder}`,
                    borderRadius: "2rem",
                    boxShadow: t.cardShadow,
                    overflow: "hidden",
                    position: "relative",
                    // Fixed height: messages flex-grow fills the space,
                    // pills + input bar are fixed-size — card never shifts.
                    display: "flex",
                    flexDirection: "column",
                    height: "28rem",
                }}>

                    {/* Ambient gradient orbs */}
                    <div style={{
                        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
                        background: dark
                            ? "radial-gradient(ellipse 80% 60% at 20% 0%, rgba(99,102,241,0.14) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 85% 100%, rgba(168,85,247,0.10) 0%, transparent 70%)"
                            : "radial-gradient(ellipse 80% 60% at 20% 0%, rgba(99,102,241,0.07) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 85% 100%, rgba(168,85,247,0.05) 0%, transparent 70%)",
                    }} />

                    {/* ── Messages ──────────────────────────────────────────── */}
                    <div style={{
                        position: "relative", zIndex: 1,
                        padding: "1.75rem 1.5rem 1rem",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        minHeight: 0, // allows flex child to shrink below content size
                    }}>

                        {/* Headline — reserve space always so layout stays stable */}
                        <p style={{
                            textAlign: "center",
                            marginBottom: "0.75rem",
                            fontSize: "0.85rem",
                            fontWeight: 500,
                            color: t.headlineColor,
                            letterSpacing: "0.01em",
                            opacity: messages.length <= 1 ? 1 : 0,
                            transition: "opacity 0.3s ease",
                            pointerEvents: "none",
                            flexShrink: 0,
                        }}>
                            {headline}
                        </p>

                        <div
                            ref={viewportRef}
                            style={{ flex: 1, overflowY: "auto", paddingRight: "4px", scrollbarWidth: "none", minHeight: 0 }}
                        >
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                                {messages.map((m) => (
                                    <MessageBubble
                                        key={m.id}
                                        m={m}
                                        dark={dark}
                                        onScrollToSection={scrollToSection}
                                    />
                                ))}
                                {isTyping && <ThinkingBubble dark={dark} />}
                            </div>
                        </div>

                        {/* ── Preset pills ──────────────────────────────────── */}
                        <div style={{ marginTop: "1.25rem", display: "flex", justifyContent: "center" }}>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
                                {PRESETS.map(({ label, prompt }) => (
                                    <button
                                        key={label}
                                        type="button"
                                        onClick={() => sendPresetPrompt(prompt)}
                                        disabled={isTyping}
                                        className="hcc-pill"
                                        style={{
                                            padding: "0.45rem 1rem",
                                            borderRadius: "9999px",
                                            fontSize: "0.78rem",
                                            fontWeight: 500,
                                            background: t.pillBg,
                                            border: `1px solid ${t.pillBorder}`,
                                            color: t.pillColor,
                                            cursor: isTyping ? "default" : "pointer",
                                            backdropFilter: "blur(8px)",
                                            WebkitBackdropFilter: "blur(8px)",
                                            boxShadow: t.pillShadow,
                                            opacity: isTyping ? 0.5 : 1,
                                        }}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Input bar ─────────────────────────────────────────── */}
                    <div style={{
                        position: "relative", zIndex: 1,
                        borderTop: `1px solid ${t.inputBarBorder}`,
                        background: t.inputBarBg,
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        padding: "0.9rem 1.25rem",
                    }}>
                        <form onSubmit={onSubmit} style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder={placeholder}
                                className="hcc-input"
                                style={{
                                    flex: 1,
                                    height: "2.85rem",
                                    borderRadius: "9999px",
                                    border: `1px solid ${t.inputBorder}`,
                                    background: t.inputBg,
                                    backdropFilter: "blur(8px)",
                                    WebkitBackdropFilter: "blur(8px)",
                                    padding: "0 1.25rem",
                                    fontSize: "0.875rem",
                                    color: t.inputColor,
                                    boxShadow: t.inputShadow,
                                    transition: "border-color 0.2s, box-shadow 0.2s",
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.style.borderColor = dark
                                        ? "rgba(255,255,255,0.35)"
                                        : "rgba(99,102,241,0.50)"
                                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.14)"
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = t.inputBorder
                                    e.currentTarget.style.boxShadow = t.inputShadow
                                }}
                            />
                            <button
                                type="submit"
                                disabled={!canSend}
                                className="hcc-send"
                                style={{
                                    height: "2.85rem",
                                    width: "2.85rem",
                                    borderRadius: "9999px",
                                    border: "none",
                                    cursor: canSend ? "pointer" : "default",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                    background: canSend
                                        ? "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)"
                                        : t.sendDisabledBg,
                                    boxShadow: canSend ? "0 4px 16px rgba(99,102,241,0.38)" : "none",
                                    opacity: canSend ? 1 : 0.45,
                                }}
                            >
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
                                    stroke={canSend ? "#fff" : t.sendDisabledIcon}
                                    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13" />
                                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
// Preset prompts
// ─────────────────────────────────────────────────────────────────────────────

const PRESETS = [
    { label: "💼 Work", prompt: "Tell me about Alba's professional experience." },
    { label: "🙋 About me", prompt: "Tell me about Alba's background and profile." },
    { label: "⚡ Skills", prompt: "What technologies does Alba use?" },
    { label: "✉️ Contact", prompt: "How can I contact Alba?" },
]

// ─────────────────────────────────────────────────────────────────────────────
// Design tokens  (DARK / LIGHT)
// ─────────────────────────────────────────────────────────────────────────────

const DARK = {
    // card
    cardBg: "rgba(15,15,30,0.55)",
    cardBorder: "rgba(255,255,255,0.12)",
    cardShadow: "0 8px 48px rgba(0,0,0,0.35), 0 1px 0 rgba(255,255,255,0.08) inset",
    headlineColor: "rgba(255,255,255,0.48)",
    // pills
    pillBg: "rgba(255,255,255,0.08)",
    pillBorder: "rgba(255,255,255,0.15)",
    pillColor: "rgba(255,255,255,0.78)",
    pillShadow: "0 2px 8px rgba(0,0,0,0.18)",
    // input bar
    inputBarBorder: "rgba(255,255,255,0.08)",
    inputBarBg: "rgba(0,0,0,0.15)",
    inputBg: "rgba(255,255,255,0.07)",
    inputBorder: "rgba(255,255,255,0.14)",
    inputColor: "rgba(255,255,255,0.90)",
    inputShadow: "0 1px 4px rgba(0,0,0,0.18)",
    sendDisabledBg: "rgba(255,255,255,0.50)",
    sendDisabledIcon: "rgba(255,255,255,0.40)",
    // bubbles
    assistantBg: "rgba(255,255,255,0.10)",
    assistantBorder: "rgba(255,255,255,0.14)",
    assistantColor: "rgba(255,255,255,0.88)",
    thinkingBg: "rgba(255,255,255,0.10)",
    thinkingBorder: "rgba(255,255,255,0.14)",
    thinkingDot: "rgba(255,255,255,0.55)",
    tagBg: "rgba(255,255,255,0.10)",
    tagBorder: "rgba(255,255,255,0.18)",
    tagColor: "rgba(255,255,255,0.82)",
    groupLabel: "rgba(255,255,255,0.55)",
    expCardBg: "rgba(255,255,255,0.07)",
    expCardBorder: "rgba(255,255,255,0.12)",
    expTitle: "rgba(255,255,255,0.90)",
    expSubtitle: "rgba(255,255,255,0.60)",
    expDate: "rgba(255,255,255,0.38)",
    ctaBg: "rgba(255,255,255,0.12)",
    ctaBorder: "rgba(255,255,255,0.22)",
    ctaColor: "rgba(255,255,255,0.85)",
}

const LIGHT = {
    // card
    cardBg: "rgba(255,255,255,0.75)",
    cardBorder: "rgba(99,102,241,0.14)",
    cardShadow: "0 8px 48px rgba(99,102,241,0.10), 0 1px 0 rgba(255,255,255,0.95) inset",
    headlineColor: "rgba(30,27,75,0.48)",
    // pills
    pillBg: "rgba(255,255,255,0.88)",
    pillBorder: "rgba(99,102,241,0.22)",
    pillColor: "#4338ca",
    pillShadow: "0 2px 8px rgba(99,102,241,0.08)",
    // input bar
    inputBarBorder: "rgba(99,102,241,0.10)",
    inputBarBg: "rgba(248,247,255,0.85)",
    inputBg: "rgba(255,255,255,0.92)",
    inputBorder: "rgba(99,102,241,0.22)",
    inputColor: "#1e1b4b",
    inputShadow: "0 1px 4px rgba(99,102,241,0.07)",
    sendDisabledBg: "rgba(99,102,241,0.10)",
    sendDisabledIcon: "rgba(99,102,241,0.40)",
    // bubbles
    assistantBg: "rgba(255,255,255,0.92)",
    assistantBorder: "rgba(99,102,241,0.16)",
    assistantColor: "#1e1b4b",
    thinkingBg: "rgba(255,255,255,0.92)",
    thinkingBorder: "rgba(99,102,241,0.16)",
    thinkingDot: "rgba(99,102,241,0.55)",
    tagBg: "rgba(99,102,241,0.07)",
    tagBorder: "rgba(99,102,241,0.18)",
    tagColor: "#4338ca",
    groupLabel: "#6366f1",
    expCardBg: "rgba(99,102,241,0.05)",
    expCardBorder: "rgba(99,102,241,0.14)",
    expTitle: "#1e1b4b",
    expSubtitle: "#4f46e5",
    expDate: "#6b7280",
    ctaBg: "rgba(99,102,241,0.08)",
    ctaBorder: "rgba(99,102,241,0.25)",
    ctaColor: "#4338ca",
}

// ─────────────────────────────────────────────────────────────────────────────
// Global CSS  (namespaced with hcc- to avoid collisions)
// ─────────────────────────────────────────────────────────────────────────────

const GLOBAL_STYLES = `
    @keyframes hcc-messageIn {
        from { opacity: 0; transform: translateY(8px) scale(0.97); }
        to   { opacity: 1; transform: translateY(0)  scale(1); }
    }
    @keyframes hcc-fadeIn {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
    @keyframes hcc-pulseDot {
        0%, 80%, 100% { transform: scale(0.55); opacity: 0.35; }
        40%            { transform: scale(1);    opacity: 1; }
    }
    .hcc-bubble { animation: hcc-messageIn 0.32s cubic-bezier(0.34, 1.56, 0.64, 1) both; }
    .hcc-dot {
        width: 7px; height: 7px; border-radius: 50%;
        animation: hcc-pulseDot 1.3s ease-in-out infinite;
    }
    .hcc-dot:nth-child(1) { animation-delay: 0s; }
    .hcc-dot:nth-child(2) { animation-delay: 0.22s; }
    .hcc-dot:nth-child(3) { animation-delay: 0.44s; }
    .hcc-pill {
        transition: transform 0.2s cubic-bezier(0.34,1.56,0.64,1),
                    background 0.15s ease, box-shadow 0.15s ease;
    }
    .hcc-pill:hover:not(:disabled)  { transform: translateY(-2px) scale(1.05); }
    .hcc-pill:active:not(:disabled) { transform: translateY(0) scale(0.96); }
    .hcc-send {
        transition: transform 0.2s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.15s ease;
    }
    .hcc-send:hover:not(:disabled)  { transform: scale(1.07); }
    .hcc-send:active:not(:disabled) { transform: scale(0.93); }
    .hcc-input { outline: none; }
    .hcc-input::placeholder { color: rgba(100,100,140,0.42); }
`

// ─────────────────────────────────────────────────────────────────────────────
// MessageBubble
// ─────────────────────────────────────────────────────────────────────────────

function MessageBubble({
    m,
    dark,
    onScrollToSection,
}: {
    m: Msg
    dark: boolean
    onScrollToSection: (id: string) => void
}) {
    const isUser = m.role === "user"
    const t = dark ? DARK : LIGHT

    const bubbleStyle: React.CSSProperties = isUser
        ? {
            background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
            color: "#fff",
            borderRadius: "1.4rem 1.4rem 0.35rem 1.4rem",
            boxShadow: "0 4px 18px rgba(99,102,241,0.30)",
        }
        : {
            background: t.assistantBg,
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: `1px solid ${t.assistantBorder}`,
            color: t.assistantColor,
            borderRadius: "1.4rem 1.4rem 1.4rem 0.35rem",
            boxShadow: dark
                ? "0 2px 12px rgba(0,0,0,0.14)"
                : "0 2px 12px rgba(99,102,241,0.07)",
        }

    return (
        <div
            className="hcc-bubble"
            style={{ display: "flex", justifyContent: isUser ? "flex-end" : "flex-start" }}
        >
            <div style={{ maxWidth: "82%", padding: "0.65rem 1rem", fontSize: "0.82rem", lineHeight: 1.6, ...bubbleStyle }}>
                <p style={{ margin: 0 }}>{m.text}</p>

                {/* CTA */}
                {!isUser && m.sectionHint && m.suggestedCta && (
                    <div style={{ marginTop: "0.6rem" }}>
                        <button
                            type="button"
                            onClick={() => onScrollToSection(m.sectionHint!)}
                            style={{
                                padding: "0.35rem 0.85rem",
                                borderRadius: "9999px",
                                border: `1px solid ${t.ctaBorder}`,
                                background: t.ctaBg,
                                color: t.ctaColor,
                                fontSize: "0.75rem",
                                fontWeight: 500,
                                cursor: "pointer",
                            }}
                        >
                            {m.suggestedCta}
                        </button>
                    </div>
                )}

                {/* Stack groups */}
                {!isUser && m.structuredData?.type === "stack_groups" && m.structuredData.groups && (
                    <div style={{ marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                        {Object.entries(m.structuredData.groups).map(([group, items]) => (
                            <div key={group}>
                                <p style={{ margin: "0 0 0.35rem", fontWeight: 600, fontSize: "0.75rem", color: t.groupLabel }}>
                                    {group}
                                </p>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                                    {(items as string[]).map((item) => (
                                        <span key={item} style={{
                                            padding: "0.25rem 0.65rem",
                                            borderRadius: "9999px",
                                            border: `1px solid ${t.tagBorder}`,
                                            background: t.tagBg,
                                            fontSize: "0.72rem",
                                            fontWeight: 500,
                                            color: t.tagColor,
                                        }}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Experience items */}
                {!isUser && m.structuredData?.type === "experience_items" && m.structuredData.items && (
                    <div style={{ marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {m.structuredData.items.map((item, idx) => (
                            <div key={`${item.title}-${idx}`} style={{
                                borderRadius: "1rem",
                                border: `1px solid ${t.expCardBorder}`,
                                background: t.expCardBg,
                                padding: "0.5rem 0.75rem",
                            }}>
                                <p style={{ margin: 0, fontWeight: 600, fontSize: "0.78rem", color: t.expTitle }}>{item.title}</p>
                                <p style={{ margin: 0, fontSize: "0.75rem", color: t.expSubtitle }}>{item.subtitle}</p>
                                {item.date_range && (
                                    <p style={{ margin: 0, fontSize: "0.70rem", color: t.expDate }}>{item.date_range}</p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
// ThinkingBubble
// ─────────────────────────────────────────────────────────────────────────────

function ThinkingBubble({ dark }: { dark: boolean }) {
    const t = dark ? DARK : LIGHT
    return (
        <div className="hcc-bubble" style={{ display: "flex", justifyContent: "flex-start" }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "0.65rem 1rem",
                borderRadius: "1.4rem 1.4rem 1.4rem 0.35rem",
                background: t.thinkingBg,
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: `1px solid ${t.thinkingBorder}`,
                boxShadow: dark ? "0 2px 12px rgba(0,0,0,0.12)" : "0 2px 12px rgba(99,102,241,0.07)",
            }}>
                <span className="hcc-dot" style={{ background: t.thinkingDot }} />
                <span className="hcc-dot" style={{ background: t.thinkingDot }} />
                <span className="hcc-dot" style={{ background: t.thinkingDot }} />
            </div>
        </div>
    )
}
