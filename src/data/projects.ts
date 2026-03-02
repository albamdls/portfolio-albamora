export type ProjectItem = {
    title: string
    description: string
    tags: string[]
    technologies: string[]
    githubUrl?: string
    liveUrl?: string
    imageUrl?: string
}

export const projects: ProjectItem[] = [
    {
        title: "Personal Portfolio Website",
        description:
            "A responsive portfolio website built with React + Tailwind, featuring animated sections, interactive UI components, and a clean tech aesthetic.",
        tags: ["Web Development", "React", "Tailwind CSS", "UI/UX"],
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "React Router"],
        githubUrl: "https://github.com/albamdls/portfolio", // cámbialo si no es
        liveUrl: "https://albamdls.github.io/portfolio/", // cámbialo si no es
        imageUrl: "/projects/portfolio.png",
    },
    {
        title: "AWS Quiz Tracker",
        description:
            "A web application to practice AWS certification questions with exam/study modes, category filters, progress stats and local persistence.",
        tags: ["Web Development", "AWS", "Quiz", "React"],
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "LocalStorage"],
        githubUrl: "https://github.com/albamdls/aws-quiz-tracker",
        liveUrl: "https://albamdls.github.io/aws-quiz-tracker/",
        imageUrl: "/projects/aws-quiz-tracker.png",
    },
    {
        title: "AI Knowledge Assistant",
        description:
            "An AI assistant that answers questions from your own documents using RAG (embeddings + vector search), with sources and chat history.",
        tags: ["AI", "RAG", "Backend", "API"],
        technologies: ["Python", "FastAPI", "LangChain", "ChromaDB", "OpenAI", "Docker"],
        githubUrl: "https://github.com/albamdls/ai-knowledge-assistant", // placeholder
        liveUrl: "", // si no tienes demo, déjalo vacío
        imageUrl: "/projects/ai-knowledge-assistant.png",
    },
    {
        title: "TurnoMaster",
        description:
            "A shift management web app with role-based access (admin/employee), scheduling, and deployment using Docker. Backend + frontend separated.",
        tags: ["Fullstack", "Backend", "Web App", "Docker"],
        technologies: ["Django", "Python", "Angular", "TypeScript", "MySQL", "Docker"],
        githubUrl: "https://github.com/albamdls/turno-master", // placeholder
        liveUrl: "",
        imageUrl: "/projects/turnomaster.png",
    },

    // --- Extras para testear el grid + load more (puedes borrar luego) ---
    {
        title: "AWS Notes (MkDocs)",
        description:
            "A documentation site for AWS Cloud Practitioner modules with structured notes, diagrams and deployment via GitHub Pages.",
        tags: ["Documentation", "AWS", "Static Site"],
        technologies: ["MkDocs", "Material for MkDocs", "GitHub Pages"],
        githubUrl: "https://github.com/albamdls/aws-notes", // placeholder
        liveUrl: "",
        imageUrl: "/projects/aws-notes.png",
    },
    {
        title: "WaterTrack Microservices Demo",
        description:
            "A microservices demo focused on clean architecture and containerized deployment, showing service communication and observability basics.",
        tags: ["DevOps", "Docker", "Backend", "API"],
        technologies: ["Docker Compose", "Node.js", "REST", "PostgreSQL"],
        githubUrl: "https://github.com/albamdls/watertrack", // placeholder
        liveUrl: "",
        imageUrl: "/projects/watertrack.png",
    },
    {
        title: "Pomodoro Pokémon",
        description:
            "A playful productivity app concept using Pokémon-themed rewards, designed as a cloud-native microservices lab on AWS.",
        tags: ["Cloud", "AWS", "Microservices"],
        technologies: ["AWS ECS", "ECR", "API Gateway", "Lambda", "DynamoDB"],
        githubUrl: "https://github.com/albamdls/pomodoro-pokemon", // placeholder
        liveUrl: "",
        imageUrl: "/projects/pomodoro-pokemon.png",
    },
    {
        title: "Smart Search for Websites",
        description:
            "An experimental search bar that understands a website by reading its structure and content, improving discoverability and UX.",
        tags: ["AI", "Search", "Web Development"],
        technologies: ["Python", "BeautifulSoup", "Embeddings", "Vector Search"],
        githubUrl: "https://github.com/albamdls/smart-web-search", // placeholder
        liveUrl: "",
        imageUrl: "/projects/smart-search.png",
    },
]