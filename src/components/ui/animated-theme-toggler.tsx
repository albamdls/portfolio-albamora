import { forwardRef, useCallback, useEffect, useRef, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"

import { cn } from "@/lib/utils"

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number
}

type ViewTransitionDocument = Document & {
  startViewTransition?: (updateCallback: () => void) => { ready: Promise<void> }
}

export const AnimatedThemeToggler = forwardRef<HTMLButtonElement, AnimatedThemeTogglerProps>(
  ({ className, duration = 400, onClick, ...props }, forwardedRef) => {
    const [isDark, setIsDark] = useState(false)
    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
      const updateTheme = () => {
        setIsDark(document.documentElement.classList.contains("dark"))
      }

      updateTheme()

      const observer = new MutationObserver(updateTheme)
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      })

      return () => observer.disconnect()
    }, [])

    const setButtonRef = useCallback(
      (node: HTMLButtonElement | null) => {
        buttonRef.current = node

        if (typeof forwardedRef === "function") {
          forwardedRef(node)
          return
        }

        if (forwardedRef) {
          forwardedRef.current = node
        }
      },
      [forwardedRef]
    )

    const toggleTheme = useCallback(async (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(event)

      if (event.defaultPrevented || !buttonRef.current) return

      const applyThemeChange = () => {
        const newTheme = !isDark
        setIsDark(newTheme)
        document.documentElement.classList.toggle("dark", newTheme)
        localStorage.setItem("theme", newTheme ? "dark" : "light")
      }

      const transitionApi = (document as ViewTransitionDocument).startViewTransition

      if (!transitionApi) {
        applyThemeChange()
        return
      }

      const transition = transitionApi(() => {
        flushSync(applyThemeChange)
      })

      await transition.ready

      if (!buttonRef.current) return

      const { top, left, width, height } =
        buttonRef.current.getBoundingClientRect()
      const x = left + width / 2
      const y = top + height / 2
      const maxRadius = Math.hypot(
        Math.max(left, window.innerWidth - left),
        Math.max(top, window.innerHeight - top)
      )

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      )
    }, [duration, isDark, onClick])

    return (
      <button
        ref={setButtonRef}
        onClick={toggleTheme}
        type="button"
        className={cn(
          "appearance-none bg-transparent border-0 justify-center text-inherit outline-none focus:outline-none",
          "[&_svg]:h-5 [&_svg]:w-5",
          className
        )}
        {...props}
      >
        {isDark ? <Sun /> : <Moon />}
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }
)

AnimatedThemeToggler.displayName = "AnimatedThemeToggler"
