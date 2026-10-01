import { ThemeProvider } from "@/components/theme-provider"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"

// Isla independiente: lleva su propio ThemeProvider porque no comparte contexto
// con la isla del portfolio. Ambos usan la clave "theme" de localStorage, así
// que el tema elegido se mantiene al saltar entre el portfolio y el blog.
export default function ThemeToggle() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AnimatedThemeToggler
        aria-label="Cambiar tema"
        className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/70! text-slate-900 shadow-sm backdrop-blur transition hover:bg-white! dark:border-white/10 dark:bg-white/10! dark:text-white dark:hover:bg-white/15!"
      />
    </ThemeProvider>
  )
}
