import { experience } from "../data/experience"

export default function Experience() {
    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-5xl">
                <header className="max-w-2xl">
                    <h2 className="text-2xl font-bold tracking-tight">Experiencia</h2>
                    <p className="mt-3">
                        Roles y responsabilidades en los que he trabajado.
                    </p>
                </header>

                <div className="mt-10 space-y-8">
                    {experience.map((item) => (
                        <article key={`${item.title}-${item.company}`} className="rounded-2xl border p-6">
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                                <h3 className="text-base font-semibold">
                                    {item.title} · {item.company}
                                </h3>
                                <p className="text-sm">
                                    {item.startDate} — {item.endDate}
                                </p>
                            </div>

                            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed">
                                {item.description.map((desc, index) => (
                                    <li key={`${item.title}-${index}`}>{desc}</li>
                                ))}
                            </ul>

                            {item.skills.length > 0 && (
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {item.skills.map((skill) => (
                                        <span key={skill} className="rounded-full border px-3 py-1 text-xs font-medium">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
