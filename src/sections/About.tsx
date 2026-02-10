import Section from "../components/layout/Section"

const interests = ["Open Source", "IA", "Web3", "UX", "DevOps", "Mentoring"]

export default function About() {
    return (
        <Section
            id="about"
            title="Sobre mí"
            subtitle="Conoce un poco más sobre mi trayectoria y pasiones"
        >
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
                {/* Contenido principal */}
                <div className="space-y-6 lg:col-span-2">
                    {/* Introducción */}
                    <div className="space-y-4">
                        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                            👋 Me llamo{" "}
                            <span className="font-semibold text-slate-900 dark:text-slate-100">
                                Alba
                            </span>{" "}
                            y soy desarrolladora web full-stack apasionada por crear productos
                            digitales que marquen la diferencia.
                        </p>

                        <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                            Mi enfoque se centra en desarrollar soluciones web modernas,
                            escalables y centradas en el usuario. Me encanta el proceso
                            completo de desarrollo, desde el diseño de interfaces intuitivas
                            hasta la implementación de arquitecturas backend robustas.
                        </p>

                        <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                            Cuando no estoy programando, me encontrarás explorando nuevas
                            tecnologías, contribuyendo a proyectos de código abierto, o
                            compartiendo conocimiento con la comunidad de desarrolladores.
                        </p>
                    </div>

                    {/* Lo que hago */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                            ¿Qué hago?
                        </h3>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {/* Card 1 */}
                            <div className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
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
                                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                                        Desarrollo Frontend
                                    </h4>
                                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                                        Interfaces modernas con React, Next.js y Tailwind CSS
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
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
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                                        Desarrollo Backend
                                    </h4>
                                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                                        APIs RESTful y bases de datos escalables
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
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
                                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a1 1 0 010 2.828l-8.486 8.485M7 17h.01"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                                        UI/UX Design
                                    </h4>
                                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                                        Diseño centrado en la experiencia del usuario
                                    </p>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
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
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                                        Optimización
                                    </h4>
                                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                                        Rendimiento, SEO y mejores prácticas
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
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

                    {/* CTA */}
                    <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-6 text-center dark:border-slate-800 dark:bg-slate-900/50">
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

            {/* Stats opcionales */}
            <div className="mt-12 grid gap-6 sm:grid-cols-3 lg:mt-16">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-900">
                    <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                        15+
                    </div>
                    <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        Proyectos completados
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-900">
                    <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                        10+
                    </div>
                    <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        Tecnologías dominadas
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-900">
                    <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                        100%
                    </div>
                    <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        Compromiso con el código
                    </div>
                </div>
            </div>
        </Section>
    )
}
