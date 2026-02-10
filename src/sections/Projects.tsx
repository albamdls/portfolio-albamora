import { projects } from "../data/projects"
import Section from "@/components/layout/Section"

export default function Projects() {
    return (
        <Section
            id="projects"
            title="Proyectos"
            subtitle="Una selección de proyectos personales y profesionales."
        >
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
                {projects.map((project, index) => (
                    <article
                        key={project.title}
                        className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-slate-900/50"
                    >
                        {/* Imagen con overlay */}
                        {project.imageUrl && (
                            <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                {/* Overlay gradiente */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                
                                {/* Badge número de proyecto */}
                                <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-slate-900 backdrop-blur-sm dark:bg-slate-900/90 dark:text-slate-100">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                            </div>
                        )}

                        {/* Contenido */}
                        <div className="flex flex-1 flex-col p-6">
                            {/* Header */}
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400">
                                    {project.title}
                                </h3>

                                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                    {project.description}
                                </p>

                                {/* Tags de categoría */}
                                {project.tags && project.tags.length > 0 && (
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Tecnologías */}
                                {project.technologies && project.technologies.length > 0 && (
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Footer con links */}
                            <div className="mt-6 flex gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                                    >
                                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                        Código
                                    </a>
                                )}

                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all hover:scale-105 hover:bg-slate-800 hover:shadow-xl dark:bg-slate-100 dark:text-slate-900 dark:shadow-slate-100/10 dark:hover:bg-slate-200"
                                    >
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Ver Demo
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Indicador de hover */}
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-400 dark:to-purple-400" />
                    </article>
                ))}
            </div>

            {/* Empty state si no hay proyectos */}
            {projects.length === 0 && (
                <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 py-16 dark:border-slate-800">
                    <svg className="h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                        Próximamente se añadirán proyectos
                    </p>
                </div>
            )}
        </Section>
    )
}