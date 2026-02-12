export type Category =
    | "Data Science"
    | "Artificial Intelligence"
    | "Frontend"
    | "Backend"
    | "Databases"
    | "Cloud & DevOps"
    | "Software & Tools"

export type StackItem = {
    name: string
    iconUrl: string
    category: Category
    experienceYears: number
}

export const stack: StackItem[] = [
    // =========================
    // 🎨 Frontend
    // =========================
    {
        name: "HTML5",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        category: "Frontend",
        experienceYears: 3,
    },
    {
        name: "CSS3",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        category: "Frontend",
        experienceYears: 3,
    },
    {
        name: "JavaScript",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        category: "Frontend",
        experienceYears: 3,
    },
    {
        name: "TypeScript",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        category: "Frontend",
        experienceYears: 2,
    },
    {
        name: "Angular",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        category: "Frontend",
        experienceYears: 2,
    },
    {
        name: "Next.js",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        category: "Frontend",
        experienceYears: 1,
    },

    // =========================
    // ⚙️ Backend
    // =========================
    {
        name: "Java",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        category: "Backend",
        experienceYears: 3,
    },
    {
        name: "Spring Boot",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        category: "Backend",
        experienceYears: 2,
    },
    {
        name: "Django",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        category: "Backend",
        experienceYears: 1,
    },
    {
        name: "Flask",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
        category: "Backend",
        experienceYears: 1,
    },
    {
        name: "Streamlit",
        iconUrl: "https://streamlit.io/images/brand/streamlit-mark-color.svg",
        category: "Backend",
        experienceYears: 1,
    },

    // =========================
    // 🗄️ Databases
    // =========================
    {
        name: "PostgreSQL",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        category: "Databases",
        experienceYears: 2,
    },
    {
        name: "MySQL",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        category: "Databases",
        experienceYears: 2,
    },
    {
        name: "MongoDB",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        category: "Databases",
        experienceYears: 2,
    },
    {
        name: "DBeaver",
        iconUrl: "https://dbeaver.io/wp-content/uploads/2015/09/beaver-head.png",
        category: "Databases",
        experienceYears: 1,
    },
    // =========================
    // 📊 Data Science
    // =========================
    {
        name: "Pandas",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
        category: "Data Science",
        experienceYears: 1,
    },
    {
        name: "NumPy",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
        category: "Data Science",
        experienceYears: 1,
    },
    {
        name: "Matplotlib",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
        category: "Data Science",
        experienceYears: 1,
    },
    {
        name: "Jupyter",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
        category: "Data Science",
        experienceYears: 2,
    },

    // =========================
    // 🤖 Artificial Intelligence
    // =========================
    {
        name: "Python",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        category: "Artificial Intelligence",
        experienceYears: 2,
    },
    {
        name: "Scikit-Learn",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
        category: "Artificial Intelligence",
        experienceYears: 1,
    },
    {
        name: "LangChain",
        iconUrl: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langchain.png",
        category: "Artificial Intelligence",
        experienceYears: 1,
    },
    {
        name: "Hugging Face",
        iconUrl: "https://huggingface.co/front/assets/huggingface_logo.svg",
        category: "Artificial Intelligence",
        experienceYears: 1,
    },

    // =========================
    // ☁️ Cloud & DevOps
    // =========================
    {
        name: "AWS",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        category: "Cloud & DevOps",
        experienceYears: 1,
    },
    {
        name: "Docker",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        category: "Cloud & DevOps",
        experienceYears: 1,
    },
    {
        name: "Kubernetes",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        category: "Cloud & DevOps",
        experienceYears: 1,
    },
    {
        name: "Rancher",
        iconUrl: "https://rancher.com/img/logos/logo-rancher.svg",
        category: "Cloud & DevOps",
        experienceYears: 1,
    },
    {
        name: "n8n",
        iconUrl: "https://avatars.githubusercontent.com/u/45487711?s=200&v=4",
        category: "Cloud & DevOps",
        experienceYears: 1,
    },
    {
        name: "GitLab CI/CD",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
        category: "Cloud & DevOps",
        experienceYears: 1,
    },
    {
        name: "npm",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
        category: "Cloud & DevOps",
        experienceYears: 3,
    },

    // =========================
    // 🧰 Software & Tools
    // =========================
    {
        name: "Git",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        category: "Software & Tools",
        experienceYears: 3,
    },
    {
        name: "GitHub",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        category: "Software & Tools",
        experienceYears: 3,
    },
    {
        name: "GitLab",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
        category: "Software & Tools",
        experienceYears: 2,
    },
    {
        name: "VS Code",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        category: "Software & Tools",
        experienceYears: 3,
    },
    {
        name: "IntelliJ IDEA",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
        category: "Software & Tools",
        experienceYears: 2,
    },
    {
        name: "PyCharm",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg",
        category: "Software & Tools",
        experienceYears: 2,
    },
    {
        name: "Jira",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
        category: "Software & Tools",
        experienceYears: 2,
    },
    {
        name: "Confluence",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg",
        category: "Software & Tools",
        experienceYears: 1,
    },
    {
        name: "Notion",
        iconUrl: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
        category: "Software & Tools",
        experienceYears: 2,
    },
    {
        name: "Figma",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        category: "Software & Tools",
        experienceYears: 2,
    },
    {
        name: "Canva",
        iconUrl: "https://cdn.worldvectorlogo.com/logos/canva-1.svg",
        category: "Software & Tools",
        experienceYears: 3,
    },
    {
        name: "Chrome DevTools",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
        category: "Software & Tools",
        experienceYears: 3,
    },
    {
        name: "Bruno",
        iconUrl: "https://raw.githubusercontent.com/usebruno/bruno/main/assets/logo.png",
        category: "Software & Tools",
        experienceYears: 1,
    },
]
