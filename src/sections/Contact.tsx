import { useMemo, useState } from "react"
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
    purple: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    green: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
}

export default function Contact() {
    const apiUrl = useMemo(() => {
        const raw = import.meta.env.VITE_API_URL?.trim()
        if (raw) return raw.replace(/\/+$/, "")
        if (import.meta.env.DEV) return "http://localhost:8000"
        return "https://portfolio-albamora-api.onrender.com"
    }, [])

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [submitted, setSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState<string | null>(null)

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
        setSubmitError(null)

        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all fields")
            return
        }

        setIsSubmitting(true)
        try {
            const response = await fetch(`${apiUrl}/api/contact`, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json().catch(() => null)
            if (!response.ok) {
                throw new Error(data?.message || "Failed to send the message.")
            }

            setSubmitted(true)
            setFormData({
                name: "",
                email: "",
                message: "",
            })
            setTimeout(() => setSubmitted(false), 5000)
        } catch (error) {
            setSubmitError(
                error instanceof Error
                    ? error.message
                    : "There was a problem sending your message. Please try again."
            )
        } finally {
            setIsSubmitting(false)
        }
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
            value: "albamora.dev@gmail.com",
            href: "mailto:albamora.dev@gmail.com",
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
            value: "@albamdls",
            href: "https://github.com/albamdls",
            color: "green",
        },
    ]

    return (
        <Section id="contact" title="" subtitle="">
            {/* Centered header (more compact) */}
            <div className="mx-auto max-w-5xl text-center">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-500 dark:text-slate-400">
                    CONTACT ME
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                    <span className="text-slate-900 dark:text-white">Project In Mind? </span>
                    <AuroraText className="inline-block">Let's talk</AuroraText>
                </h2>
            </div>

            {/* Layout (less margin, less gap) */}
            <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-10">
                {/* Contact information */}
                <div className="space-y-6">

                    {/* Availability (more compact) */}
                    <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/50">
                        <div className="flex items-start gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                                <div className="relative flex h-3 w-3">
                                    <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                                </div>
                            </div>

                            <div className="min-w-0">
                                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                                    Available for projects
                                </p>
                                <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">
                                    Open to new opportunities and collaborations
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                            Contact methods
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            You can contact me through any of these channels. I'll respond as soon as possible.
                        </p>
                    </div>

                    {/* Contact methods (thinner cards) */}
                    <div className="space-y-3">
                        {contactMethods.map((method) => {
                            const isExternal = method.href.startsWith("http")
                            return (
                                <a
                                    key={method.title}
                                    href={method.href}
                                    target={isExternal ? "_blank" : undefined}
                                    rel={isExternal ? "noopener noreferrer" : undefined}
                                    className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                                    aria-label={`Open ${method.title}`}
                                >
                                    <div
                                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-105 ${colorClasses[method.color]}`}
                                    >
                                        {method.icon}
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                                            {method.title}
                                        </p>
                                        <p className="mt-0.5 truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
                                            {method.value}
                                        </p>
                                    </div>

                                    <svg
                                        className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1 dark:text-slate-600"
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

                    {/* Availability (more compact) */}
                    {/* <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/50">
                        <div className="flex items-start gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                                <div className="relative flex h-3 w-3">
                                    <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                                </div>
                            </div>

                            <div className="min-w-0">
                                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                                    Available for projects
                                </p>
                                <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">
                                    Open to new opportunities and collaborations
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>

                {/* Contact form (more compact) */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-6">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                        Send me a message
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
                        Fill out the form and I'll get back to you as soon as possible
                    </p>

                    <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                        {/* Name field */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your full name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-blue-400"
                                required
                                autoComplete="name"
                            />
                        </div>

                        {/* Email field */}
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
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-blue-400"
                                required
                                autoComplete="email"
                            />
                        </div>

                        {/* Message field */}
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="Tell me about your project or inquiry..."
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-2 w-full resize-none rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-blue-400"
                                required
                            />
                        </div>

                        {/* Submit button (shorter, no big scaling) */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group relative w-full overflow-hidden rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all hover:bg-slate-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-100 dark:text-slate-900 dark:shadow-slate-100/10 dark:hover:bg-slate-200"
                        >
                            <span className="relative flex items-center justify-center gap-2">
                                {isSubmitting ? (
                                    <>
                                        <svg
                                            className="h-4 w-4 animate-spin"
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
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send message
                                        <svg
                                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
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

                        {/* Success message */}
                        {submitted && (
                            <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-900/20">
                                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
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
                                    Message sent successfully! I'll get back to you soon.
                                </p>
                            </div>
                        )}

                        {submitError && (
                            <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
                                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50">
                                    <svg
                                        className="h-4 w-4 text-red-600 dark:text-red-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </div>
                                <p className="text-sm font-medium text-red-800 dark:text-red-300">
                                    {submitError}
                                </p>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </Section>
    )
}
