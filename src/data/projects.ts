export type ProjectItem = {
    title: string
    description: string
    tags: string[]
    technologies: string[]
    label?: string
    githubUrl?: string
    liveUrl?: string
    imageUrl?: string
}

export const projects: ProjectItem[] = [
    {
        title: "DocuMind AI",
        description:
            "An AI document assistant that lets users upload PDFs or text files, search semantically, and chat with their documents through a RAG pipeline designed to extract relevant context and return grounded answers quickly.",
        tags: ["AI", "RAG", "Document Intelligence", "API"],
        technologies: ["Python", "FastAPI", "LangChain", "OpenAI API", "ChromaDB", "React", "TypeScript", "Docker"],
        label: "DESKTOP APP & AI",
        githubUrl: "https://github.com/albamdls/documind-ai",
        liveUrl: "",
        imageUrl: "/projects/documind-ai.png",
    },
    {
        title: "Personal Portfolio Website",
        description:
            "A responsive portfolio website built with React and Tailwind that now includes an AI chat widget and a FastAPI backend, allowing visitors to ask questions about Alba and get contextual answers from structured portfolio data.",
        tags: ["Web Development", "React", "AI", "UI/UX"],
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "FastAPI", "AI Chat API"],
        label: "DESKTOP APP & AI",
        githubUrl: "https://github.com/albamdls/portfolio-albamora",
        liveUrl: "https://albamdls.github.io/portfolio-albamora/",
        imageUrl: "/projects/portfolio.png",
    },
    {
        title: "AWS Quiz Tracker",
        description:
            "A web application to practice AWS certification questions with exam and study modes, category filters, progress tracking, and local persistence, making it easier to prepare consistently and review weak areas over time.",
        tags: ["Web Development", "AWS", "Quiz", "React"],
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "LocalStorage"],
        label: "DESKTOP APP",
        githubUrl: "https://github.com/albamdls/aws-quiz-tracker",
        liveUrl: "https://albamdls.github.io/aws-quiz-tracker/",
        imageUrl: "/projects/aws-quiz-tracker.png",
    },
]
