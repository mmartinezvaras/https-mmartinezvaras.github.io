# Portfolio · Marcos María Martínez Varas

Portfolio personal hecho con Angular 22 y Tailwind CSS 4. Se publica en GitHub Pages con el workflow de `.github/workflows/deploy.yml`.

## Arrancar en local

```bash
npm install
npm start          # http://localhost:4200
npm run build      # genera dist/web
npm test           # tests con Vitest
```

Para probarlo en el móvil, arranca con `npx ng serve --host 0.0.0.0` y abre `http://<IP-de-tu-PC>:4200` desde el teléfono, conectado a la misma red wifi.

## Dónde está cada cosa

| Qué | Archivo |
| --- | --- |
| Datos personales, formación, experiencia, skills | `src/app/data/site.ts` |
| Proyectos | `src/app/data/projects.ts` |
| Notas del Lab | `src/app/data/notes.ts` |
| Colores, tipografía, botones, tarjetas, animaciones | `src/styles.css` |
| Cabecera, barra de pestañas (móvil) y pie | `src/app/core/layout/` |
| Páginas | `src/app/pages/` |
| CV descargable | `public/Marcos_Maria_Martinez_Varas_BigData_IA.pdf` (si cambias el nombre, actualiza `cv` en `site.ts`) |

## Añadir un proyecto

No hay que tocar ningún componente:

1. Abre `src/app/data/projects.ts`.
2. Copia un bloque `{ ... }` de la lista `projects` y pégalo donde quieras que aparezca (el orden de la lista es el orden en la web).
3. Cambia sus datos:
   - `slug`: identificador para la URL (`/proyectos/mi-proyecto`), en minúsculas y con guiones.
   - `headline`: titular corto y potente, de 3 a 5 palabras.
   - `value`: una frase que explique qué aporta.
   - `metric`: el resultado más llamativo. `value` es corto ("51 %", "3 capas") y `label` lo explica.
   - `area`: una de `IA generativa`, `Big Data`, `IA y ML` o `Desarrollo` (es el filtro de la página).
   - `stack`, `repo` y, si tienes, `demo`.
   - `problem`, `data`, `approach`, `result` y `learnings`: el caso de estudio de la página de detalle.
4. Solo un proyecto lleva `featured: true`: es el que sale en grande.
5. `npm run build` para comprobar que no hay errores.

Lo marcado con `[COMPLETAR]` es información que falta por rellenar.
