import App from "@/App"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ThemeProvider } from "@/components/theme-provider"

// Astro monta cada isla como un árbol React independiente, así que los
// providers (tema, tooltips) viven aquí, dentro de la propia isla.
export default function Portfolio() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </ThemeProvider>
  )
}
