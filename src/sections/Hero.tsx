import { profile } from "../data/profile";
import { CoolMode } from "@/components/ui/cool-mode";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { SparklesText } from "@/components/ui/sparkles-text";
import { TextAnimate } from "@/components/ui/text-animate";

export default function Hero() {
    return (
        <section className="relative overflow-hidden px-6 py-20 sm:py-28 lg:py-32">
            <div className="mx-auto max-w-6xl">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                    {/* LEFT - Content */}
                    <div className="space-y-5 lg:order-2">
                        {/* Typing introduction */}
                        <div className="space-y-2">
                            <h2 className="text-lg font-medium text-slate-600 dark:text-slate-400">
                                <TypingAnimation duration={50}>{`Hi! I'm`}</TypingAnimation>
                            </h2>
                            <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
                                <TypingAnimation
                                    className="inline bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
                                    duration={45}
                                    startOnView
                                    showCursor
                                    blinkCursor
                                    cursorStyle="line"
                                >
                                    {`${profile.name}`}
                                </TypingAnimation>
                                <span className="inline-block animate-[wave_1s_ease-in-out_3] origin-[70%_70%] ml-2">
                                    👋🏻
                                </span>
                            </h1>
                        </div>

                        {/* Headline + frase */}
                        <div className="relative space-y-2">
                            <SparklesText
                                className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl lg:text-4xl"
                                sparklesCount={12}
                                colors={{ first: "#60A5FA", second: "#A78BFA" }}
                            >
                                {profile.headline}
                            </SparklesText>
                            <p className="max-w-xl text-base sm:text-lg text-slate-600 dark:text-slate-300">
                                Construyendo soluciones integrales, aprendiendo cada día para crear experiencias mejores.
                            </p>
                        </div>

                        {/* Summary */}
                        {profile.summary && (
                            <TextAnimate
                                as="p"
                                animation="fadeIn"
                                by="word"
                                once
                                delay={180}
                                className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                            >
                                {profile.summary}
                            </TextAnimate>
                        )}

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-3 pt-1">
                            <CoolMode>
                                <a
                                    href={profile.cvUrl}
                                    download
                                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white drop-shadow-sm shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-600/40 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-950"
                                >
                                    <span className="relative z-20 text-white">Descargar CV</span>
                                    <svg
                                        className="relative z-20 w-4 h-4 text-white transition-transform group-hover:translate-x-1"
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
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity group-hover:opacity-100" />
                                </a>
                            </CoolMode>

                            {/* GitHub */}
                            <a
                                href={profile.links.github}
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center gap-2 rounded-2xl bg-white dark:bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white ring-1 ring-slate-900/10 dark:ring-white/10 transition-all hover:shadow-lg hover:scale-[1.02]"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                <span>GitHub</span>
                                <span className="w-4 h-4 inline-flex items-center justify-center">
                                    <svg
                                        className="w-4 h-4 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </span>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href={profile.links.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center gap-2 rounded-2xl bg-white dark:bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white ring-1 ring-slate-900/10 dark:ring-white/10 transition-all hover:shadow-lg hover:scale-[1.02]"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                <span>LinkedIn</span>
                                <span className="w-4 h-4 inline-flex items-center justify-center">
                                    <svg
                                        className="w-4 h-4 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT - Image */}
                    <div className="relative lg:order-1">
                        <div className="relative overflow-hidden rounded-3xl">
                            <img
                                src="./alba-hero.gif"
                                alt="Foto de perfil"
                                className="w-full h-auto transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
