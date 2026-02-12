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
        title: "Técnico en Análisis de Datos y Procesos",
        institution: "Cámara de Comercio Alemana para España (AHK Spanien)",
        startDate: "Sep 2025",
        endDate: "May 2026",
        description: [
            "Actualmente cursando el programa BigData+, una formación de especialización impartida bajo el sistema dual alemán.",
            "Enfoque en análisis de datos, optimización de procesos y tratamiento de información.",
            "Formación orientada a la aplicación práctica en entornos empresariales reales."
        ],
        skills: ["Inglés", "Análisis de datos", "Big Data", "Procesos"]
    },
    {
        title: "Ciclo Formativo de Grado Superior en Web/Multimedia Management y Webmaster",
        institution: "IES Virgen de la Paz",
        startDate: "Sep 2023",
        endDate: "Jun 2025",
        description: [
            "Formación especializada en desarrollo web y gestión de contenidos digitales.",
            "Creación y mantenimiento de sitios web, aplicaciones multimedia y proyectos digitales.",
            "Uso de tecnologías web estándar y buenas prácticas de desarrollo."
        ],
        skills: ["HTML", "CSS", "JavaScript", "XML", "Inglés"]
    },
    {
        title: "Ciclo Formativo de Grado Superior en Administración y Finanzas",
        institution: "Universidad Europea",
        startDate: "2018",
        endDate: "2020",
        description: [
            "Formación en gestión administrativa, contabilidad y finanzas empresariales.",
            "Participación en actividades extracurriculares como el Club de Comunicación.",
            "Base sólida en organización empresarial y gestión de recursos."
        ],
        skills: ["Microsoft Access", "Inglés", "Administración", "Finanzas"]
    }
]
