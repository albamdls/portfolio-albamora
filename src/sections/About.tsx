import Section from "../components/layout/Section"
import { Globe } from "@/components/ui/globe"

const interests = ["Open Source", "IA", "Web3", "UX", "DevOps", "Mentoring"]

export default function About() {
    return (
        <Section
            id="about"
            title="Sobre mí"
            subtitle="Conoce un poco más sobre mi trayectoria y pasiones"
        >
            {/* IMPORTANTE: items-stretch para igualar alturas */}
            <div className="grid gap-8 lg:grid-cols-4 lg:gap-12 lg:items-stretch">
                {/* FOTO (izquierda) */}
                <div className="flex h-full justify-center lg:justify-start">
                    <div className="relative h-full w-64 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                        <img
                            src="/me.png"
                            alt="Foto de Alba"
                            className="h-full w-full object-cover"
                        />

                        {/* Glow sutil (dark mode) */}
                        <div className="pointer-events-none absolute inset-0 hidden dark:block">
                            <div className="absolute -inset-10 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent blur-2xl" />
                        </div>

                        <div className="center absolute bottom-3 left-3 rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs font-medium text-white backdrop-blur dark:bg-slate-950/50">
                            Full-Stack Developer
                        </div>
                    </div>
                </div>

                {/* CONTENIDO PRINCIPAL (centro) */}
                <div className="lg:col-span-2 flex h-full flex-col">
                    {/* Introducción */}
                    <div className="space-y-4">
                        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                            👋 Me llamo{" "}
                            <span className="aurora-text font-semibold">Alba</span> y soy
                            desarrolladora web full-stack apasionada por crear productos
                            digitales que marquen la diferencia.
                        </p>

                        <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                            Mi enfoque se centra en desarrollar{" "}
                            <span className="aurora-text font-medium">
                                soluciones web modernas, escalables y centradas en el usuario
                            </span>
                            . Me encanta el proceso completo de desarrollo, desde el diseño
                            de interfaces intuitivas hasta la implementación de arquitecturas
                            backend robustas.
                        </p>

                        <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                            Cuando no estoy programando, me encontrarás explorando nuevas
                            tecnologías, contribuyendo a proyectos de código abierto, o
                            compartiendo conocimiento con la comunidad de desarrolladores.
                        </p>
                    </div>

                    {/* CARD GLOBE (abajo alineada) */}
                    <div className="mt-auto pt-6">
                        <div className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                            {/* Fondo decorativo */}
                            <div className="pointer-events-none absolute inset-0">
                                <div className="absolute inset-0 opacity-[0.25] dark:opacity-[0.35]">
                                    <Globe />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white dark:from-slate-950/30 dark:via-slate-950/10 dark:to-slate-900" />
                            </div>

                            {/* Contenido */}
                            <div className="relative flex items-center justify-between gap-6">
                                <div className="space-y-2">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Base
                                    </p>

                                    {/* Glow text: Madrid, Spain */}
                                    <div className="relative inline-flex items-center">
                                        {/* glow */}
                                        <span
                                            aria-hidden="true"
                                            className="absolute -inset-2 blur-xl opacity-60 dark:opacity-70"
                                        >
                                            <span className="aurora-text text-2xl font-bold">
                                                Madrid, Spain
                                            </span>
                                        </span>

                                        {/* texto real */}
                                        <span className="aurora-text relative text-2xl font-bold">
                                            Madrid, Spain
                                        </span>
                                    </div>

                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        Construyendo productos digitales con enfoque en UX,
                                        rendimiento y arquitectura moderna.
                                    </p>
                                </div>

                                {/* Pill */}
                                <div className="hidden shrink-0 sm:flex items-center rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-200">
                                    Available for opportunities
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SIDEBAR (derecha) */}
                <div className="flex h-full flex-col space-y-6">
                    {/* Datos rápidos */}
                    <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 dark:border-slate-800 dark:from-slate-900 dark:to-slate-900/50">
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Datos rápidos
                        </h3>

                        <div className="space-y-4">
                            {/* Ubicación */}
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-800">
                                    <svg
                                        className="h-4 w-4 text-slate-600 dark:text-slate-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                                        Ubicación
                                    </p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        Madrid, España
                                    </p>
                                </div>
                            </div>

                            {/* Experiencia */}
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-800">
                                    <svg
                                        className="h-4 w-4 text-slate-600 dark:text-slate-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                                        Experiencia
                                    </p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        3+ años
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-800">
                                    <svg
                                        className="h-4 w-4 text-slate-600 dark:text-slate-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                                        Email
                                    </p>
                                    <a
                                        href="mailto:hola@alba.dev"
                                        className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                                    >
                                        hola@alba.dev
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Intereses */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Intereses
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {interests.map((interest) => (
                                <span
                                    key={interest}
                                    className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                                >
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CTA (abajo alineado) */}
                    <div className="mt-auto rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-6 text-center dark:border-slate-800 dark:bg-slate-900/50">
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                            ¿Tienes un proyecto en mente?
                        </p>

                        <a
                            href="#contact"
                            className="mt-3 inline-flex items-center justify-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                            aria-label="Ir a la sección de contacto"
                        >
                            Hablemos
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    )
}
