export type EducationItem = {
    title: string
    institution: string
    startDate: string
    endDate: string
    description: string[]
    skills?: string[]
}

export const education: EducationItem[] = [
    {
        title: "Bachelor of Science in Computer Science",
        institution: "University of Technology",
        startDate: "Sep 2015",
        endDate: "Jun 2019",
        description: [
            "Graduated with honors, achieving a GPA of 3.8/4.0.",
            "Completed coursework in algorithms, data structures, software engineering, and machine learning.",
            "Participated in a capstone project developing a web application for local businesses."
        ],
        skills: ["Java", "Python", "React", "SQL"]
    },
    {
        title: "Master of Science in Software Engineering",
        institution: "Tech University",
        startDate: "Sep 2019",
        endDate: "Jun 2021",
        description: [
            "Specialized in software architecture and design patterns.",
            "Conducted research on microservices and published a paper in a peer-reviewed journal.",
            "Completed a thesis project on improving the scalability of cloud-based applications."
        ],
        skills: ["Microservices", "Cloud Computing", "Docker", "Kubernetes"]
    }
]