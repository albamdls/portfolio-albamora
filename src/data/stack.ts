export type Category =
    | "Data Science"
    | "Artificial Intelligence"
    | "Frontend"
    | "Backend"
    | "Databases"
    | "Cloud & DevOps"
    | "Software & Tools"

export type Group =
    | "Languages"
    | "Frameworks"
    | "Databases"
    | "AI & Data Science"
    | "Cloud & DevOps"
    | "Software & Tools"

export type StackItem = {
    name: string
    iconUrl: string
    category: Category
    group: Group
}

export const stack: StackItem[] = [
    // =========================
    // 🗣️ Languages (orden lógico)
    // =========================
    {
        name: "JavaScript",
        iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        category: "Frontend",
        group: "Languages",
    },
    {
        name: "TypeScript",
        iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        category: "Frontend",
        group: "Languages",
    },
    {
        name: "Java",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        category: "Backend",
        group: "Languages",
    },
    {
        name: "Python",
        iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        category: "Artificial Intelligence",
        group: "Languages",
    },

    // =========================
    // 🧩 Frameworks (FE + BE)
    // =========================
    {
        name: "ReactJS",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        category: "Frontend",
        group: "Frameworks",
    },
    {
        name: "Tailwind CSS",
        iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        category: "Frontend",
        group: "Frameworks",
    },
    {
        name: "Angular",
        iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        category: "Frontend",
        group: "Frameworks",
    },
    {
        name: "Next.js",
        iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        category: "Frontend",
        group: "Frameworks",
    },
    {
        name: "Spring Boot",
        iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        category: "Backend",
        group: "Frameworks",
    },
    {
        name: "Django",
        iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        category: "Backend",
        group: "Frameworks",
    },
    {
        name: "Flask",
        iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
        category: "Backend",
        group: "Frameworks",
    },
    {
        name: "Streamlit",
        iconUrl: "https://streamlit.io/images/brand/streamlit-mark-color.svg",
        category: "Backend",
        group: "Frameworks",
    },

    // =========================
    // 🗄️ Databases
    // =========================
    {
        name: "PostgreSQL",
        iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        category: "Databases",
        group: "Databases",
    },
    {
        name: "MySQL",
        iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        category: "Databases",
        group: "Databases",
    },
    {
        name: "MongoDB",
        iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        category: "Databases",
        group: "Databases",
    },
    {
        name: "DBeaver",
        iconUrl: "https://dbeaver.io/wp-content/uploads/2015/09/beaver-head.png",
        category: "Databases",
        group: "Databases",
    },

    // =========================
    // 🤖 AI & Data Science (juntos)
    // =========================
    {
        name: "LangChain",
        iconUrl:
            "https://images.seeklogo.com/logo-png/61/2/langchain-icon-logo-png_seeklogo-611655.png",
        category: "Artificial Intelligence",
        group: "AI & Data Science",
    },
    {
        name: "Hugging Face",
        iconUrl: "https://huggingface.co/front/assets/huggingface_logo.svg",
        category: "Artificial Intelligence",
        group: "AI & Data Science",
    },
    {
        name: "Pandas",
        iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
        category: "Data Science",
        group: "AI & Data Science",
    },
    {
        name: "NumPy",
        iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
        category: "Data Science",
        group: "AI & Data Science",
    },
    {
        name: "Matplotlib",
        iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
        category: "Data Science",
        group: "AI & Data Science",
    },
    {
        name: "Jupyter",
        iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
        category: "Data Science",
        group: "AI & Data Science",
    },
    {
        name: "Scikit-Learn",
        iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
        category: "Artificial Intelligence",
        group: "AI & Data Science",
    },

    // =========================
    // ☁️ Cloud & DevOps
    // =========================
    {
        name: "AWS",
        iconUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-amazon-aws-icon-svg-download-png-2944772.png?f=webp",
        category: "Cloud & DevOps",
        group: "Cloud & DevOps",
    },
    {
        name: "Docker",
        iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        category: "Cloud & DevOps",
        group: "Cloud & DevOps",
    },
    {
        name: "Kubernetes",
        iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        category: "Cloud & DevOps",
        group: "Cloud & DevOps",
    },
    {
        name: "Rancher UI",
        iconUrl: "https://images.seeklogo.com/logo-png/44/2/rancher-logo-png_seeklogo-444853.png",
        category: "Cloud & DevOps",
        group: "Cloud & DevOps",
    },
    {
        name: "GitLab CI/CD",
        iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
        category: "Cloud & DevOps",
        group: "Cloud & DevOps",
    },
    {
        name: "npm",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
        category: "Cloud & DevOps",
        group: "Cloud & DevOps",
    },
    {
        name: "kubectl",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        category: "Cloud & DevOps",
        group: "Cloud & DevOps",
    },
    // {
    //     name: "n8n",
    //     iconUrl: "https://avatars.githubusercontent.com/u/45487711?s=200&v=4",
    //     category: "Cloud & DevOps",
    //     group: "Cloud & DevOps",
    // },

    // =========================
    // 🧰 Software & Tools (selección)
    // =========================
    {
        name: "Git",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        category: "Software & Tools",
        group: "Software & Tools",
    },
    {
        name: "GitHub",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        category: "Software & Tools",
        group: "Software & Tools",
    },
    {
        name: "GitLab",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
        category: "Software & Tools",
        group: "Software & Tools",
    },
    {
        name: "VS Code",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        category: "Software & Tools",
        group: "Software & Tools",
    },
    {
        name: "Jira",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
        category: "Software & Tools",
        group: "Software & Tools",
    },
    {
        name: "Notion",
        iconUrl: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
        category: "Software & Tools",
        group: "Software & Tools",
    },
    {
        name: "Figma",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        category: "Software & Tools",
        group: "Software & Tools",
    },
    {
        name: "Obsidian",
        iconUrl: "https://upload.wikimedia.org/wikipedia/commons/1/10/2023_Obsidian_logo.svg",
        category: "Software & Tools",
        group: "Software & Tools",
    },
]