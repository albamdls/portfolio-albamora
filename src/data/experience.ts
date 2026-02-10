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
        title: "Software Engineer",
        company: "Tech Company A",
        startDate: "Jan 2020",
        endDate: "Present",
        description: [
            "Developed and maintained web applications using React and Node.js.",
            "Collaborated with cross-functional teams to design and implement new features.",
            "Optimized application performance, resulting in a 20% reduction in load times."
        ],
        skills: ["React", "Node.js", "JavaScript", "TypeScript", "Git"]
    },
    {
        title: "Frontend Developer",
        company: "Tech Company B",
        startDate: "Jun 2018",
        endDate: "Dec 2019",
        description: [
            "Implemented responsive UI components using React and Redux.",
            "Worked closely with designers to ensure a seamless user experience.",
            "Participated in code reviews and contributed to improving code quality."
        ],
        skills: ["React", "Redux", "JavaScript", "CSS", "HTML"]
    },
]