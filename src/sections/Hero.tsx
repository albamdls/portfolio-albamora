import { profile } from "../data/profile"
import { TypingAnimation } from "@/components/ui/typing-animation"
import HeroChatCard from "@/components/chat/ChatWidget"

export default function Hero() {
    return (
        <section
            className={[
                "relative overflow-hidden px-6",
                "pt-24 sm:pt-28",
                "min-h-[calc(100svh-6rem)]",
            ].join(" ")}
        >
            <div className="mx-auto w-full max-w-5xl">
                <div className="flex flex-col items-center text-center">

                    {/* Imagen: más pequeña en mobile, igual que el original en sm+ */}
                    <img
                        src="./alba-hero.gif"
                        alt="Foto de perfil"
                        className="h-20 w-20 rounded-[1.25rem] object-contain sm:h-36 sm:w-36 sm:rounded-[2.25rem] lg:h-40 lg:w-40"
                    />

                    {/* text-xl sm:text-2xl lg:text-3xl en el h1 = idéntico al original en desktop */}
                    <h1 className="mt-3 text-xl font-semibold tracking-tight text-slate-900 dark:text-white sm:mt-4 sm:text-2xl lg:text-3xl">

                        {/* ── MOBILE: dos líneas ──────────────────────────── */}
                        <span className="block sm:hidden sm:text-xs">
                            Hi, I&apos;m
                        </span>
                        <span className="block sm:hidden">
                            <TypingAnimation
                                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-3xl font-bold text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-pink-400"
                                duration={45}
                                startOnView
                                showCursor
                                blinkCursor
                                cursorStyle="line"
                            >
                                {profile.name}
                            </TypingAnimation>
                        </span>

                        {/* ── DESKTOP: una línea, hereda tamaño del h1 ────── */}
                        <span className="hidden sm:inline text-slate-900 dark:text-white">
                            Hi, I&apos;m{" "}
                        </span>
                        <TypingAnimation
                            className="hidden sm:inline bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text font-bold text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-pink-400"
                            duration={45}
                            startOnView
                            showCursor
                            blinkCursor
                            cursorStyle="line"
                        >
                            {profile.name}
                        </TypingAnimation>

                    </h1>

                    <div className="mt-3">
                        <a
                            href={profile.cvUrl}
                            download
                            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 text-xs font-semibold text-white shadow-xl shadow-blue-600/30 transition hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-600/40"
                        >
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

                <div className="mt-6 pb-8">
                    <HeroChatCard />
                </div>
            </div>
        </section>
    )
}