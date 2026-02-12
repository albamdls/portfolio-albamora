import { Dock, DockIcon } from "@/components/ui/dock"
import { Separator } from "@/components/ui/separator"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"

// Si usas lucide-react (muy común con shadcn)
import { Home, BookOpen, Github, Linkedin } from "lucide-react"

type NavItem = {
    label: string
    href: string
    icon: React.ReactNode
    external?: boolean
}

const NAV: NavItem[] = [
    { label: "Inicio", href: "#hero", icon: <Home className="h-5 w-5" /> },
]

const SOCIAL: NavItem[] = [
    { label: "GitHub", href: "https://github.com/albamdls", icon: <Github className="h-5 w-5" />, external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/alba-mora-de-la-sen/", icon: <Linkedin className="h-5 w-5" />, external: true },
    { label: "Blog", href: "https://tu-blog.com", icon: <BookOpen className="h-5 w-5" />, external: true },
]

function DockLink({ item }: { item: NavItem }) {
    const isExternal = item.external ?? item.href.startsWith("http")

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <a
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="focus:outline-none"
                >
                    <DockIcon className="bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted border border-border transition-colors">
                        {item.icon}
                    </DockIcon>
                </a>
            </TooltipTrigger>

            <TooltipContent side="top" sideOffset={8} className="rounded-xl px-4 py-2 text-sm">
                <p>{item.label}</p>
            </TooltipContent>
        </Tooltip>
    )
}

export default function NavbarDock() {
    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50">
            <Dock className="pointer-events-auto mx-auto h-14 w-fit gap-2 border bg-card/90 p-2 shadow-sm backdrop-blur-3xl">
                {NAV.map((item) => (
                    <DockLink key={item.href} item={item} />
                ))}

                <Separator orientation="vertical" className="mx-1 h-2/3 w-px" />

                {SOCIAL.map((item) => (
                    <DockLink key={item.href} item={item} />
                ))}

                <Separator orientation="vertical" className="mx-1 h-2/3 w-px" />

                <Tooltip>
                    <TooltipTrigger asChild>
                        <DockIcon
                            className="bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted border border-border transition-colors"
                        >
                            <AnimatedThemeToggler />
                        </DockIcon>
                    </TooltipTrigger>

                    <TooltipContent side="top" sideOffset={8} className="rounded-xl px-4 py-2 text-sm">
                        <p>Tema</p>
                    </TooltipContent>
                </Tooltip>
            </Dock>
        </div>
    )
}
