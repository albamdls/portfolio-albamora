import { useEffect } from "react"
import { useLocation } from "react-router-dom"

declare global {
    interface Window {
        dataLayer: unknown[]
        gtag?: (...args: unknown[]) => void
    }
}

const GA_SRC_PREFIX = "https://www.googletagmanager.com/gtag/js?id="

function ensureGtag(measurementId: string) {
    if (typeof window === "undefined" || typeof document === "undefined") return

    const scriptId = "google-analytics-gtag"
    if (!document.getElementById(scriptId)) {
        const script = document.createElement("script")
        script.id = scriptId
        script.async = true
        script.src = `${GA_SRC_PREFIX}${measurementId}`
        document.head.appendChild(script)
    }

    window.dataLayer = window.dataLayer || []
    window.gtag =
        window.gtag ||
        function gtag(...args: unknown[]) {
            window.dataLayer.push(args)
        }

    window.gtag("js", new Date())
    window.gtag("config", measurementId, {
        send_page_view: false,
        anonymize_ip: true,
    })
}

export default function GoogleAnalytics() {
    const location = useLocation()
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim()

    useEffect(() => {
        if (!measurementId) return
        ensureGtag(measurementId)
    }, [measurementId])

    useEffect(() => {
        if (!measurementId || typeof window === "undefined" || !window.gtag) return

        const pagePath = `${location.pathname}${location.search}${location.hash}`
        window.gtag("event", "page_view", {
            page_title: document.title,
            page_location: window.location.href,
            page_path: pagePath,
        })
    }, [location.hash, location.pathname, location.search, measurementId])

    return null
}
