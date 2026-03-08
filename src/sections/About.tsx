import Section from "../components/layout/Section"
import { Globe } from "@/components/ui/globe"
import { AuroraText } from "@/components/ui/aurora-text"
import { IconCloud } from "@/components/ui/icon-cloud"
import { HyperText } from "@/components/ui/hyper-text"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"

const interests = [
    "Cybersecurity",
    "Full-Stack",
    "Artificial Intelligence",
    "Cloud & DevOps",
]

const techImages = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    "https://streamlit.io/images/brand/streamlit-mark-color.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "https://dbeaver.io/wp-content/uploads/2015/09/beaver-head.png",
    "https://images.seeklogo.com/logo-png/61/2/langchain-icon-logo-png_seeklogo-611655.png",
    "https://huggingface.co/front/assets/huggingface_logo.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
    "https://cdn.iconscout.com/icon/free/png-256/free-amazon-aws-icon-svg-download-png-2944772.png?f=webp",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    "https://avatars.githubusercontent.com/u/45487711?s=200&v=4",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
]

export default function About() {
    return (
        <Section id="about" title="" subtitle="">
            <div className="mx-auto max-w-5xl text-center">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-500 dark:text-slate-400">
                    ABOUT ME
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                    <span className="text-slate-900 dark:text-white">Designing and Building </span>
                    <AuroraText className="inline-block">Thoughtful Digital Products</AuroraText>
                </h2>

                <p className="mt-2 text-sm text-slate-600 dark:text-white/60">
                    A more personal look at who I am, how I work, and what drives me as a developer.
                </p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-12 lg:grid-rows-[108px_285px_215px]">
                {/* TOP LEFT: TEXT */}
                <article className="relative z-10 overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/85 lg:col-start-1 lg:col-span-5 lg:row-start-1 lg:row-span-2">
                    <div className="flex h-full min-w-0 flex-col justify-center overflow-hidden">
                        <div className="inline-flex w-fit max-w-full items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-blue-700 shadow-sm ring-1 ring-blue-100 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-400/10">
                            AVAILABLE FOR NEW OPPORTUNITIES
                        </div>

                        <h3 className="mt-4 text-[1.9rem] font-bold leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-[2.1rem]">
                            Hi, I’m <span className="aurora-text">Alba Mora.</span>
                        </h3>

                        <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-600 dark:text-white/70">
                            <p>
                                Full-stack developer passionate about building clean, modern,
                                and user-centered digital products.
                            </p>

                            <p>
                                I enjoy connecting intuitive frontend experiences with robust
                                backend systems and thoughtful product design.
                            </p>

                            <p>
                                I’m especially interested in technology, usability, and building
                                solutions that feel polished and meaningful.
                            </p>
                        </div>
                    </div>
                </article>

                {/* CENTER: PHOTO */}
                <article className="relative z-10 overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/85 lg:col-start-6 lg:col-span-2 lg:row-start-1 lg:row-span-2">
                    <img
                        src="/me.png"
                        alt="Photo of Alba"
                        className="h-full w-full object-cover"
                    />
                </article>

                {/* TOP RIGHT: SOFTWARE */}
                <article className="relative z-10 overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 px-6 py-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/85 lg:col-start-8 lg:col-span-5 lg:row-start-1">
                    <div className="flex h-full flex-col items-center justify-center text-center">
                        <span className="text-xl font-bold uppercase tracking-[0.16em] text-slate-900 dark:text-white sm:text-[1.65rem]">
                            <HyperText>Software Developer</HyperText>
                        </span>

                        <div className="mt-0 flex max-w-full flex-wrap justify-center gap-2">
                            {interests.map((interest) => (
                                <span
                                    key={interest}
                                    className="rounded-full bg-slate-900/5 px-3 py-1 text-[10px] font-semibold text-slate-700 ring-1 ring-slate-900/10 dark:bg-white/10 dark:text-white/75 dark:ring-white/10"
                                >
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>
                </article>

                {/* MIDDLE RIGHT: TWO HORIZONTAL CARDS */}
                <div className="relative z-10 grid gap-5 lg:col-start-8 lg:col-span-5 lg:row-start-2 lg:grid-cols-[1.05fr_0.95fr]">
                    {/* TECHNOLOGIES */}
                    <article className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/85">
                        <div className="flex h-full min-h-0 flex-col items-center text-center">
                            <p className="shrink-0 text-[10px] font-semibold tracking-[0.22em] text-slate-500 dark:text-white/50">
                                TECHNOLOGIES
                            </p>

                            <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden py-1">
                                <div className="flex h-full w-full items-center justify-center overflow-hidden">
                                    <div className="origin-center scale-[0.62] sm:scale-[0.72]">
                                        <IconCloud images={techImages} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* CURRENT FOCUS + QUICK LINKS */}
                    <article className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/85">
                        <div className="flex h-full flex-col">
                            <div className="flex items-center justify-between gap-3">
                                <p className="text-[10px] font-semibold tracking-[0.22em] text-slate-500 dark:text-white/50">
                                    CURRENT FOCUS
                                </p>

                                <span className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-[10px] font-semibold text-violet-700 dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-300">
                                    Active
                                </span>
                            </div>

                            <h3 className="mt-2 text-sm font-bold tracking-tight text-slate-900 dark:text-white sm:text-[15px]">
                                Secure, intelligent, and scalable systems
                            </h3>

                            <p className="mt-3 text-[12px] leading-relaxed text-slate-600 dark:text-white/70">
                                Exploring AI, cybersecurity, modern full-stack development, and cloud-native workflows.
                            </p>

                            <div className="mt-4 grid grid-cols-2 gap-2">
                                <a
                                    href="https://github.com/albamdls"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-[11px] font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/15"
                                >
                                    <span className="flex items-center gap-2">
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="h-3.5 w-3.5"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path d="M12 .5C5.73.5.75 5.6.75 12c0 5.18 3.32 9.58 7.93 11.13.58.11.79-.26.79-.57v-2.1c-3.23.72-3.91-1.6-3.91-1.6-.53-1.38-1.29-1.75-1.29-1.75-1.05-.74.08-.73.08-.73 1.16.08 1.77 1.23 1.77 1.23 1.03 1.8 2.7 1.28 3.36.98.1-.77.4-1.28.73-1.58-2.58-.3-5.29-1.32-5.29-5.86 0-1.29.45-2.35 1.19-3.18-.12-.3-.52-1.5.11-3.12 0 0 .97-.32 3.18 1.21.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.53 3.18-1.21 3.18-1.21.63 1.62.23 2.82.11 3.12.74.83 1.19 1.89 1.19 3.18 0 4.55-2.72 5.56-5.31 5.86.41.37.78 1.09.78 2.2v3.26c0 .31.21.68.79.57C19.93 21.58 23.25 17.18 23.25 12 23.25 5.6 18.27.5 12 .5z" />
                                        </svg>
                                        <span>GitHub</span>
                                    </span>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/alba-mora-de-la-sen/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-[11px] font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/15"
                                >
                                    <span className="flex items-center gap-2">
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="h-3.5 w-3.5"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zM7 20H4V9h3v11zM5.5 7.73A1.73 1.73 0 1 1 5.5 4.27a1.73 1.73 0 0 1 0 3.46zM20 20h-3v-5.6c0-3.37-4-3.11-4 0V20h-3V9h3v1.77c1.4-2.59 7-2.78 7 2.48V20z" />
                                        </svg>
                                        <span>LinkedIn</span>
                                    </span>
                                </a>

                                <button
                                    type="button"
                                    onClick={() => scrollToId("projects")}
                                    className="col-span-2 flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-3 py-2 text-[11px] font-semibold text-white shadow-sm ring-1 ring-white/20 transition hover:brightness-110 active:brightness-95 dark:from-fuchsia-500 dark:to-indigo-500"
                                >
                                    Current Projects
                                </button>
                            </div>
                        </div>
                    </article>
                </div>

                {/* BOTTOM LEFT: CURRENT BASE */}
                <article className="relative z-10 overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/85 lg:col-start-1 lg:col-span-7 lg:row-start-3">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute inset-0 opacity-[0.650] dark:opacity-[0.50]">
                            <Globe />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-r from-white/35 via-white/10 to-white/35 dark:from-slate-900/20 dark:via-transparent dark:to-slate-900/20" />
                    </div>

                    <div className="relative flex h-full flex-col justify-center overflow-hidden">
                        <p className="text-[10px] font-semibold tracking-[0.22em] text-slate-500 dark:text-white/50">
                            CURRENT BASE
                        </p>

                        <div className="mt-2 inline-flex max-w-full items-center">
                            <span className="aurora-text text-2xl font-bold">
                                Madrid, Spain
                            </span>
                        </div>

                        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-700 dark:text-white/70">
                            Building digital products with a strong focus on clarity,
                            performance, usability, and modern architecture.
                        </p>

                        <div className="mt-4 inline-flex w-fit max-w-full items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm ring-1 ring-emerald-100 dark:border-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-400/10">
                            Open to remote opportunities
                        </div>
                    </div>
                </article>

                {/* BOTTOM RIGHT: CONTACT */}
                <article className="relative z-10 overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 p-6 text-slate-900 shadow-sm backdrop-blur dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800 dark:text-white lg:col-start-8 lg:col-span-5 lg:row-start-3">
                    <div className="flex h-full min-h-0 flex-col justify-between overflow-hidden">
                        <div className="min-w-0">
                            <p className="text-[10px] font-semibold tracking-[0.22em] text-slate-500 dark:text-white/50">
                                LET’S BUILD SOMETHING
                            </p>

                            <h3 className="mt-3 text-[1.3rem] font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-[1.45rem]">
                                Have a project in mind?
                            </h3>

                            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-white/70">
                                I’m always happy to connect, discuss ideas, and collaborate on
                                meaningful products.
                            </p>
                        </div>
                        <div className="mt-2 flex max-w-full shrink-0">
                            <InteractiveHoverButton
                                type="button"
                                onClick={() => scrollToId("contact")}
                                className="!text-slate-900 dark:!text-slate-900"
                            >
                                Get in Touch
                            </InteractiveHoverButton>
                        </div>
                    </div>
                </article>
            </div>
        </Section>
    )
}

function scrollToId(id: string) {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: "smooth", block: "start" })
}