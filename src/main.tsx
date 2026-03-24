import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"

import GoogleAnalytics from "@/components/analytics/GoogleAnalytics"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ThemeProvider } from "@/components/theme-provider"

import AppRoutes from "@/routes/AppRoutes"
import { HashRouter } from "react-router-dom"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <GoogleAnalytics />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider>
          <AppRoutes />
        </TooltipProvider>
      </ThemeProvider>
    </HashRouter>
  </StrictMode>
)
