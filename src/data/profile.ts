// Definimos primero el tipo
export type Profile = {
    name: string
    headline: string
    summary: string
    photoUrl: string
    cvUrl: string
    links: {
        github: string
        linkedin: string
    }
}

// Creamos el objeto que cumple con ese tipo
export const profile: Profile = {
    name: "Alba Mora de la Sen",
    headline: "Desarrolladora Fullstack",
    summary: "Soy una persona curiosa e inquieta que está siempre en busca de nuevos conocimientos, es por eso, que he encontrado en el mundo del desarrollo web un hueco donde poder desarrollar todo mi potencial y poder contribuir en proyectos reales.",
    photoUrl: "public/profile-photo.png",
    cvUrl: "public/cv-alba-mora-de-la-sen.pdf",
    links: {
        github: "https://github.com/albamdls",
        linkedin: "https://www.linkedin.com/in/alba-mora-de-la-sen/"
    }
}