import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
            <div className="mx-auto max-w-6xl px-6 py-5">

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">

                    {/* Left - Name + Year */}
                    <div className="text-xs">
                        <span className="font-medium text-slate-700 dark:text-slate-300">
                            Alba Mora de la Sen
                        </span>{" "}
                        © {new Date().getFullYear()}
                    </div>

                    {/* Center - Made with ❤️ using stack */}
                    <div className="flex items-center gap-1 text-xs text-center">
                        <span>Made with</span>

                        <Heart
                            className="w-3.5 h-3.5 text-red-500/90 dark:text-red-400 animate-pulse"
                            aria-label="love"
                        />

                        <span>using</span>

                        <span className="font-medium text-slate-700 dark:text-slate-300">
                            React
                        </span>
                        <span>·</span>
                        <span className="font-medium text-slate-700 dark:text-slate-300">
                            Vite
                        </span>
                        <span>·</span>
                        <span className="font-medium text-slate-700 dark:text-slate-300">
                            Tailwind
                        </span>
                    </div>

                    {/* Right - Social */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/albamdls"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-emerald-500 transition"
                        >
                            <Github size={18} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/alba-mora-de-la-sen/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-emerald-500 transition"
                        >
                            <Linkedin size={18} />
                        </a>

                        <a
                            href="mailto:albamora.dev@gmail.com"
                            className="hover:text-emerald-500 transition"
                        >
                            <Mail size={18} />
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    )
}