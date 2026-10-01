import { getCollection, type CollectionEntry } from "astro:content"

export type Post = CollectionEntry<"blog">

/** Artículos publicados, del más reciente al más antiguo. Los borradores solo se ven en `dev`. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("blog", ({ data }) => import.meta.env.DEV || !data.draft)
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })
}

/** Minutos de lectura aproximados (~200 palabras por minuto). */
export function readingTime(body: string | undefined): number {
  const words = (body ?? "").split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}
