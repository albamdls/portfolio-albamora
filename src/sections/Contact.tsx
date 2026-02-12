import { useState } from "react"
import Section from "@/components/layout/Section"
import { AuroraText } from "@/components/ui/aurora-text"

type ContactMethod = {
    icon: React.ReactNode
    title: string
    value: string
    href: string
    color: "blue" | "purple" | "green"
}

const colorClasses: Record<ContactMethod["color"], string> = {
    blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    purple:
        "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    green: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
}

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [submitted, setSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.message) {
            alert("Por favor, rellena todos los campos")
            return
        }

        setIsSubmitting(true)

        // Simular envío
        await new Promise((resolve) => setTimeout(resolve, 1000))

        console.log("Formulario enviado:", formData)
        setSubmitted(true)
        setIsSubmitting(false)

        setFormData({
            name: "",
            email: "",
            message: "",
        })

        // Ocultar mensaje de éxito después de 5 segundos
        setTimeout(() => setSubmitted(false), 5000)
    }

    const contactMethods: ContactMethod[] = [
        {
            icon: (
                <svg
                    className="h-6 w-6"
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
            ),
            title: "Email",
            value: "jalbamora@gmail.com",
            href: "mailto:jalbamora@gmail.com",
            color: "blue",
        },
        {
            icon: (
                <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
            title: "LinkedIn",
            value: "Alba Mora de la Sen",
            href: "https://www.linkedin.com/in/alba-mora-de-la-sen/",
            color: "purple",
        },
        {
            icon: (
                <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
            title: "GitHub",
            value: "@albamora",
            href: "https://github.com/albamora",
            color: "green",
        },
    ]

    return (
        <Section id="contact" title="Contacto" subtitle="¿Tienes un proyecto en mente? Hablemos">
            {/* Header centrado */}
            <div className="mx-auto max-w-6xl text-center">
                <p className="text-xs font-semibold tracking-[0.25em] text-slate-500 dark:text-slate-400">
                    CONTACT ME
                </p>

                <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                    <span className="text-slate-900 dark:text-white">Project In Mind? </span>
                    <AuroraText className="inline-block">Let's talk</AuroraText>
                </h2>
            </div>
            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Información de contacto */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                            Formas de contacto
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                            Puedes contactarme a través de cualquiera de estos canales. Respondo lo antes posible.
                        </p>
                    </div>

                    {/* Métodos de contacto */}
                    <div className="space-y-4">
                        {contactMethods.map((method) => {
                            const isExternal = method.href.startsWith("http")
                            return (
                                <a
                                    key={method.title}
                                    href={method.href}
                                    target={isExternal ? "_blank" : undefined}
                                    rel={isExternal ? "noopener noreferrer" : undefined}
                                    className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                                    aria-label={`Abrir ${method.title}`}
                                >
                                    <div
                                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 ${colorClasses[method.color]}`}
                                    >
                                        {method.icon}
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                            {method.title}
                                        </p>
                                        <p className="mt-1 truncate font-semibold text-slate-900 dark:text-slate-100">
                                            {method.value}
                                        </p>
                                    </div>

                                    <svg
                                        className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 dark:text-slate-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </a>
                            )
                        })}
                    </div>

                    {/* Disponibilidad */}
                    <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
                        <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                                {/* Hacemos el contenedor relative para que el ping (absolute) se posicione bien */}
                                <div className="relative flex h-3 w-3">
                                    <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900 dark:text-slate-100">
                                    Disponible para proyectos
                                </p>
                                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                                    Actualmente abierta a nuevas oportunidades y colaboraciones
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Formulario de contacto */}
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                        Envíame un mensaje
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                        Rellena el formulario y te responderé lo antes posible
                    </p>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        {/* Campo nombre */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                            >
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Tu nombre completo"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-blue-400"
                                required
                                autoComplete="name"
                            />
                        </div>

                        {/* Campo email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="tu@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-blue-400"
                                required
                                autoComplete="email"
                            />
                        </div>

                        {/* Campo mensaje */}
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                            >
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Cuéntame sobre tu proyecto o consulta..."
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-2 w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-blue-400"
                                required
                            />
                        </div>

                        {/* Botón enviar */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group relative w-full overflow-hidden rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white shadow-lg shadow-slate-900/10 transition-all hover:scale-105 hover:bg-slate-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 dark:bg-slate-100 dark:text-slate-900 dark:shadow-slate-100/10 dark:hover:bg-slate-200"
                        >
                            <span className="relative flex items-center justify-center gap-2">
                                {isSubmitting ? (
                                    <>
                                        <svg
                                            className="h-5 w-5 animate-spin"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                        </svg>
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        Enviar mensaje
                                        <svg
                                            className="h-5 w-5 transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </>
                                )}
                            </span>
                        </button>

                        {/* Mensaje de éxito */}
                        {submitted && (
                            <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
                                    <svg
                                        className="h-4 w-4 text-green-600 dark:text-green-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <p className="text-sm font-medium text-green-800 dark:text-green-300">
                                    ¡Mensaje enviado correctamente! Te responderé pronto.
                                </p>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </Section>
    )
}
