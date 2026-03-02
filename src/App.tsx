import Hero from "./sections/Hero"
import About from "./sections/About"
import Stack from "./sections/Stack"
// import Experience from "./sections/Experience"
// import Education from "./sections/Education"
import Career from "./sections/Career"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Footer from "@/components/layout/Footer"

import Navbar from "@/components/Navbar"
import DotGrid from "@/components/ui/DotGrid"
import SmoothCursor from "./components/ui/smooth-cursor"

import SmokeyCursor from "@/components/lightswind/smokey-cursor"

export default function App() {
  return (
    <div className="relative isolate min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <SmoothCursor />
      {/* GLOBAL BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900" />

        {/* DOTS — LIGHT */}
        <div className="absolute inset-0 dark:hidden">
          <DotGrid
            dotSize={2.5}
            gap={20}
            baseColor="#64748B"
            activeColor="#4F46E5"
            proximity={160}
            shockRadius={220}
            shockStrength={3.5}
            resistance={850}
            returnDuration={1.2}
            className="opacity-55"
          />
        </div>

        {/* DOTS — DARK */}
        <div className="absolute inset-0 hidden dark:block">
          <DotGrid
            dotSize={2.5}
            gap={20}
            baseColor="#94A3B8"
            activeColor="#60A5FA"
            proximity={160}
            shockRadius={220}
            shockStrength={3.5}
            resistance={850}
            returnDuration={1.2}
            className="opacity-50"
          />
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_65%,rgba(2,6,23,0.03)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_65%,rgba(0,0,0,0.35)_100%)]" />
      </div>

      {/* SMOKEY CURSOR: capa intermedia (DETRÁS de la UI) */}
      <div className="smokey-layer pointer-events-none fixed inset-0">
        <SmokeyCursor />
      </div>

      {/* UI encima del fondo */}
      <div className="relative z-10">
        <Navbar />
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

          <section id="projects">
            <Projects />
          </section>

          <section id="experience">
            <Career />
          </section>

          {/* <section id="experience">
            <Experience />
          </section>

          <section id="education">
            <Education />
          </section> */}



          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />

      </div>
    </div>
  )
}
