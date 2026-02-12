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
        title: "Estudiante en prácticas | Software Developer",
        company: "Siemens EDA (Siemens Digital Industries Software)",
        startDate: "Sep 2025",
        endDate: "Present",
        description: [
            "Desarrollo de software en un entorno profesional dentro del área de Siemens EDA.",
            "Participación en tareas de desarrollo y mantenimiento de aplicaciones.",
            "Colaboración con el equipo técnico siguiendo metodologías y buenas prácticas de ingeniería de software.",
            "Trabajo presencial en un entorno corporativo internacional."
        ],
        skills: ["Desarrollo de software", "Trabajo en equipo", "Buenas prácticas", "Inglés"]
    },
    {
        title: "Estudiante en prácticas | Software Developer",
        company: "Siemens Digital Industries Software",
        startDate: "Mar 2025",
        endDate: "Jun 2025",
        description: [
            "Apoyo en tareas de desarrollo de software con enfoque en front-end.",
            "Diseño e implementación de componentes de interfaz de usuario.",
            "Colaboración en un entorno híbrido con equipos multidisciplinares.",
            "Introducción al trabajo en proyectos reales dentro de un entorno empresarial."
        ],
        skills: ["Front-end", "Desarrollo de software", "UI", "Trabajo en equipo"]
    }
]
