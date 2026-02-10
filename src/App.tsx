import Hero from "./sections/Hero"
import About from "./sections/About"
import Stack from "./sections/Stack"
import Experience from "./sections/Experience"
import Education from "./sections/Education"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

import NavbarDock from "@/components/NavbarDock"
import CornerImage from "@/components/layout/CornerImage"

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">

      <NavbarDock />

      <CornerImage
        src="/profile-photo.png"
        alt="Marca personal"
      />

      <main className="space-y-32">

        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="stack">
          <Stack />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  )
}
