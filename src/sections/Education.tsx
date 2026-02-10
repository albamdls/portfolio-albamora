import { education } from "../data/education"
import Section from "@/components/layout/Section"

export default function Education() {
    const hasEducation = education.length > 0

    return (
        <Section
            id="education"
            title="Educación"
            subtitle="Formación académica y estudios relevantes"
        >
            {/* Timeline / contenido */}
            {hasEducation ? (
                <div className="relative mt-12">
                    {/* Línea de tiempo continua (alineada con el punto) */}
                    <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-blue-200 via-purple-200 to-transparent dark:from-blue-900 dark:via-purple-900 md:block" />

                    <div className="space-y-8">
                        {education.map((item) => (
                            <div
                                key={`${item.title}-${item.institution}-${item.startDate}-${item.endDate}`}
                                className="group relative"
                            >
                                {/* Punto de la línea de tiempo */}
                                <div className="absolute left-4 top-8 hidden -translate-x-1/2 md:block">
                                    <div className="relative flex h-4 w-4 items-center justify-center">
                                        {/* Anillo externo animado */}
                                        <div className="absolute h-4 w-4 rounded-full bg-blue-200 transition-all duration-300 group-hover:scale-150 group-hover:bg-blue-300 dark:bg-blue-900 dark:group-hover:bg-blue-800" />
                                        {/* Punto central */}
                                        <div className="relative h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                                    </div>
                                </div>

                                {/* Tarjeta de educación */}
                                <article className="ml-0 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-slate-900/50 md:ml-10">
                                    {/* Header */}
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                                                {item.title}
                                            </h3>

                                            <div className="mt-2 flex items-center gap-2 text-slate-600 dark:text-slate-400">
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
                                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                                    />
                                                </svg>

                                                <p className="font-medium">{item.institution}</p>
                                            </div>
                                        </div>

                                        {/* Badge de fecha */}
                                        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
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
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                />
                                            </svg>

                                            <span className="whitespace-nowrap">
                                                {item.startDate} — {item.endDate}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Descripción */}
                                    {item.description?.length ? (
                                        <div className="mt-5 space-y-3">
                                            {item.description.map((desc, descIndex) => (
                                                <div
                                                    key={`${item.title}-${item.institution}-desc-${descIndex}`}
                                                    className="flex gap-3"
                                                >
                                                    <div className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 dark:bg-slate-600" />
                                                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                                        {desc}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    ) : null}

                                    {/* Skills/Tags opcionales */}
                                    {item.skills?.length ? (
                                        <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                                            {item.skills.map((skill) => (
                                                <span
                                                    key={`${item.title}-${item.institution}-skill-${skill}`}
                                                    className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    ) : null}

                                    {/* Indicador de hover */}
                                    <div className="absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-400 dark:to-purple-400" />
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                /* Empty state si no hay educación */
                <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 py-16 dark:border-slate-800">
                    <svg
                        className="h-12 w-12 text-slate-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                    </svg>

                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                        Información de formación próximamente
                    </p>
                </div>
            )}

            {/* Sección adicional: Certificaciones (se muestra siempre) */}
            <div className="mt-16 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 dark:border-slate-800 dark:from-slate-900 dark:to-slate-900/50">
                <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                        <svg
                            className="h-6 w-6 text-blue-600 dark:text-blue-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            />
                        </svg>
                    </div>

                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                            Aprendizaje continuo
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                            Además de mi formación académica, me mantengo actualizada
                            constantemente a través de cursos online, certificaciones y
                            participación en la comunidad de desarrolladores.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    )
}
