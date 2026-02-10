import { profile } from "../data/profile"

import { CoolMode } from "@/components/ui/cool-mode"

export default function Hero() {
    return (
        <section className="relative overflow-hidden px-6 py-20 sm:py-28 lg:py-32">
            {/* Fondo decorativo mejorado */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950" />
                {/* Círculos decorativos */}
                <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-20 blur-3xl dark:from-blue-900 dark:to-purple-900 dark:opacity-10" />
                <div className="absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-100 to-blue-100 opacity-20 blur-3xl dark:from-cyan-900 dark:to-blue-900 dark:opacity-10" />
            </div>

            {/* Contenedor principal */}
            <div className="mx-auto max-w-5xl">
                <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
                    {/* Texto */}
                    <div className="flex-1 space-y-6">
                        {/* Badge opcional */}
                        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                            </span>
                            Disponible para proyectos
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-6xl">
                                Hola, soy{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                                    {profile.name}
                                </span>
                            </h1>

                            <h2 className="text-xl font-medium text-slate-600 dark:text-slate-400 sm:text-2xl">
                                {profile.headline}
                            </h2>
                        </div>

                        {profile.summary && (
                            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
                                {profile.summary}
                            </p>
                        )}

                        {/* CTA mejorados */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            <CoolMode>
                                <a
                                    href={profile.cvUrl}
                                    download
                                    className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all hover:scale-105 hover:bg-slate-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:bg-slate-100 dark:text-slate-900 dark:shadow-slate-100/10 dark:hover:bg-slate-200"
                                >
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Descargar CV
                                </a>
                            </CoolMode>

                            <a
                                href={profile.links.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                            >
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                LinkedIn
                            </a>

                            <a
                                href={profile.links.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                            >
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                                GitHub
                            </a>
                        </div>
                    </div>

                    {/* Foto mejorada */}
                    {profile.photoUrl && (
                        <div className="flex flex-1 justify-center md:justify-end">
                            <div className="relative">
                                {/* Anillo decorativo animado */}
                                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 blur-lg dark:from-blue-400 dark:to-purple-400"></div>
                                {/* Imagen */}
                                <img
                                    src={profile.photoUrl}
                                    alt={`Foto de ${profile.name}`}
                                    className="relative h-48 w-48 rounded-full object-cover shadow-2xl ring-4 ring-white dark:ring-slate-900 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}