export type ExperienceItem = {
    title: string
    company: string
    startDate: string
    endDate: string
    description: string[]
    skills: string[]
}

export const experience: ExperienceItem[] = [
    {
        title: "Software Developer Intern",
        company: "Siemens Mobility S.L.U.",
        startDate: "Sep 2025",
        endDate: "Present",
        description: [
            "Software development within the Siemens EDA engineering environment.",
            "Contributing to the development and maintenance of internal applications.",
            "Collaborating with technical teams following modern software engineering practices and methodologies.",
            "Working in an international corporate environment."
        ],
        skills: ["Software Development", "Teamwork", "Software Engineering Practices", "English"]
    },
    {
        title: "Software Developer Intern",
        company: "Siemens Mobility S.L.U.",
        startDate: "Mar 2025",
        endDate: "Jun 2025",
        description: [
            "Supported software development tasks with a focus on front-end technologies.",
            "Designed and implemented user interface components.",
            "Collaborated with multidisciplinary teams in a hybrid working environment.",
            "Gained experience working on real-world software projects within a corporate setting."
        ],
        skills: ["Front-End Development", "Software Development", "UI Development", "Teamwork"]
    }
]