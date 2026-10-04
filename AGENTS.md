# Portfolio personal (Angular)

## Entorno
- Windows, PowerShell 5.1. Proyecto en C:\proyectos\portfolio\web.
- Angular 22, componentes standalone, signals, TypeScript estricto.
- Tailwind CSS 4 y GSAP. NO uses PrimeNG ni instales paquetes sin preguntar.
- Compilar: `npx ng build`.

## Reglas
- Haz SOLO lo que se pide. No adelantes trabajo ni inventes archivos.
- Usa solo archivos y módulos que existan. Si necesitas uno nuevo, créalo en esa misma tarea.
- Escribe archivos con la herramienta de edición, nunca con Set-Content ni Out-File (corrompen los acentos).
- No rebusques en node_modules. Si un build falla, muestra el error completo.
- Al acabar, ejecuta `npx ng build` y `git status` y enseña la salida real.
- Nunca digas que hiciste algo sin haberlo hecho con las herramientas.

## Estructura
- src/app/core/layout: header y footer
- src/app/pages/<ruta>/<ruta>.ts: una página por ruta, con `export default class` (lazy loading)
- src/app/data/site.ts: todo el contenido personal, con placeholders [TU ...]
- src/content/projects/*.json: un archivo por proyecto

## Diseño
- Estética: minimalismo técnico. Sin gradientes morados, sin hero con foto redonda, sin tarjetas idénticas en cuadrícula.
- Colores SOLO con estas clases: bg-bg, text-fg, text-muted, border-line, text-accent. No inventes colores.
- font-mono para detalles técnicos. Titulares grandes, espaciado generoso.
- Modo oscuro: clase `app-dark` en <html>.
- Animaciones de 150-300 ms con ease-out. Respeta prefers-reduced-motion.
- HTML semántico, foco visible.