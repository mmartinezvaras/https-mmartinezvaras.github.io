\# Portfolio personal (Angular)



\## Entorno

\- Windows, PowerShell 5.1. Carpeta del proyecto: C:\\proyectos\\portfolio\\web

\- El proyecto ya está creado con `ng new` (Angular 22). Usa `npx ng build` para compilar.

\- Angular (última estable), standalone components, signals, TypeScript estricto.

\- PrimeNG con tema propio (@primeuix/themes), Tailwind CSS con tailwindcss-primeui, GSAP.

\- Los paquetes ya están instalados. Antes de usar APIs de Angular, PrimeNG, Tailwind o GSAP, consulta Context7. No te fíes de tu memoria: las versiones han cambiado.



\## Reglas de trabajo

\- Haz SOLO la fase que se te pide. No adelantes trabajo.

\- Al terminar cada fase ejecuta `npx ng build` y muestra el resultado. Si falla, corrige antes de dar nada por hecho.

\- Nunca digas que has creado o ejecutado algo sin haberlo hecho con las herramientas.

\- No instales paquetes nuevos sin preguntar.

\- Escribe archivos solo con la herramienta de edición, nunca con Set-Content ni Out-File de PowerShell (corrompen los acentos).


\## Estructura

\- src/app/core: layout, servicios, tema

\- src/app/pages: una carpeta por ruta (lazy loading)

\- src/app/shared: componentes reutilizables

\- src/app/data/site.ts: TODO el contenido personal, con placeholders tipo \[TU NOMBRE]

\- src/content/projects/\*.json: un archivo por proyecto (título, resumen, tags, fecha, repo, imágenes, caso de estudio)



\## Diseño

\- Estética: minimalismo técnico con acentos de color. Sin gradientes morados, sin hero con foto redonda, sin tarjetas idénticas en cuadrícula.

\- Paleta limitada: 1 color de fondo, 1 de texto, 1 acento. Modo oscuro y claro.

\- Tipografía: titulares muy grandes y una fuente monoespaciada para detalles técnicos. Jerarquía clara, espaciado generoso.

\- Animaciones: 150-300 ms, easing de salida suave (ease-out), nada que bloquee la interacción. Respeta prefers-reduced-motion.

\- Accesibilidad: HTML semántico, foco visible, contraste suficiente.

