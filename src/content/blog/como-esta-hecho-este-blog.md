---
title: "Cómo está hecho este blog"
description: "Astro, colecciones de contenido y Markdown: las piezas que hacen que cada artículo tenga su propia URL."
date: 2026-10-01
tags: ["astro", "blog", "web"]
---

Este blog vive dentro de mi portfolio, pero está construido de otra forma. El portfolio es una *single page app* de React; el blog, en cambio, genera **un archivo HTML por artículo** durante el build.

## Por qué importa

Un buscador (o AdSense) necesita una URL propia por contenido, y esa página debe traer ya el texto. En una SPA con `HashRouter` las URLs serían `/#/blog/mi-post`, y todo lo que va tras el `#` se ignora a efectos de indexación.

## Las tres piezas

1. **Una colección** (`src/content.config.ts`) que describe qué campos tiene un artículo.
2. **Archivos Markdown** en `src/content/blog/`, uno por artículo.
3. **Una ruta dinámica** (`src/pages/blog/[...slug].astro`) que genera una página por cada archivo.

El esquema se escribe una vez:

```ts
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
})
```

Si olvido el título de un artículo, el build falla con un error claro en lugar de publicar una página rota.

## Escribir un artículo nuevo

Basta con crear un `.md` en `src/content/blog/` con este encabezado:

```md
---
title: "Mi título"
description: "Una frase de menos de 160 caracteres."
date: 2026-10-01
tags: ["ejemplo"]
---
```

y escribir debajo. El artículo aparece solo en el listado.
