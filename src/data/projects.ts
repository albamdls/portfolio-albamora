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
        description: "A responsive portfolio website built with React and Tailwind CSS to showcase my projects and experience.",
        tags: ["Web Development", "React", "Tailwind CSS"],
        technologies: ["React", "Tailwind CSS", "JavaScript", "TypeScript"],
    },
    {
        title: "AWS Quiz Tracker",
        description: "A web application that allows users to track their progress in AWS certifications and quizzes.",
        tags: ["Web Development", "AWS", "Node.js"],
        technologies: ["Node.js", "Express", "MongoDB", "AWS SDK"],
    }
]