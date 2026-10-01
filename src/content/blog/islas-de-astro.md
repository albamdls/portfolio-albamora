---
title: "Islas de Astro: por qué mi portfolio es una sola isla"
description: "Qué es una isla, por qué no comparten contexto y cómo eso condicionó la migración del portfolio."
date: 2026-09-30
tags: ["astro", "react", "arquitectura"]
---

Astro genera HTML y **no envía JavaScript al navegador** salvo que se lo pidas. Cuando una parte de la página necesita interactividad, la marcas como *isla*.

## Qué es una isla

Un componente de React (o de otro framework) con una directiva `client:*`:

```astro
<Portfolio client:only="react" />
```

- `client:load`: se hidrata nada más cargar la página.
- `client:visible`: solo cuando entra en pantalla.
- `client:only="react"`: no se renderiza en el servidor, solo en el navegador.

## Las islas no comparten contexto

Cada isla es un árbol de React independiente. Un `ThemeProvider` de una isla **no** llega a las demás. Por eso mi portfolio completo es una única isla que lleva dentro sus providers, y el selector de tema del blog es otra con su propio provider.

El tema se mantiene entre ambas porque las dos leen y escriben la misma clave de `localStorage`.

## Por qué `client:only` para el portfolio

El portfolio usa `window`, canvas, un globo 3D y un mapa. Renderizarlo en el servidor obligaría a proteger cada uno de esos accesos. Con `client:only` el código sigue funcionando exactamente igual que cuando era una SPA.

El coste es que el contenido de la home no está en el HTML inicial. Para el blog sí lo está, que es lo que importa para el SEO.
