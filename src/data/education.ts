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
        title: "Higher Technician in Data and Process Analysis",
        institution: "German Chamber of Commerce for Spain (AHK Spanien)",
        startDate: "Sep 2025",
        endDate: "May 2026",
        description: [
            "Currently enrolled in the BigData+ program, a specialization training delivered under the German dual education system.",
            "Focused on data analysis, process optimization, and information processing.",
            "Training oriented toward practical application in real business environments."
        ],
        skills: ["English", "Data Analysis", "Big Data", "Process Optimization"]
    },
    {
        title: "Higher Technician in Web Application Development",
        institution: "IES Virgen de la Paz",
        startDate: "Sep 2023",
        endDate: "Jun 2025",
        description: [
            "Specialized training in web application development.",
            "Development and maintenance of websites, web applications, and digital projects.",
            "Use of standard web technologies and development best practices."
        ],
        skills: ["HTML", "CSS", "JavaScript", "XML", "English"]
    },
    {
        title: "Higher Technician in Business Administration and Finance",
        institution: "European University",
        startDate: "2018",
        endDate: "2020",
        description: [
            "Training in administrative management, accounting, and corporate finance.",
            "Participation in extracurricular activities such as the Communication Club.",
            "Strong foundation in business organization and resource management."
        ],
        skills: ["Microsoft Access", "English", "Administration", "Finance"]
    }
]
