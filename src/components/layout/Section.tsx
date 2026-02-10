import Container from "./Container"

type SectionProps = {
    id: string
    title: string
    subtitle?: string
    children: React.ReactNode
    className?: string
}

export default function Section({
    id,
    title,
    subtitle,
    children,
    className = "",
}: SectionProps) {
    return (
        <section id={id} className={`py-20 ${className}`}>
            <Container>
                <header className="max-w-2xl">
                    <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
                    {subtitle && (
                        <p className="mt-3 text-slate-600 dark:text-slate-300">
                            {subtitle}
                        </p>
                    )}
                </header>

                <div className="mt-8">{children}</div>
            </Container>
        </section>
    )
}
