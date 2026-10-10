# Graph Report - web  (2026-10-10)

## Corpus Check
- 31 files · ~7,565 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 3, .css 2, .ico 1)

## Summary
- 188 nodes · 278 edges · 13 communities (11 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.92)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8fec57c2`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- @angular/core
- development
- package.json
- App root layout (header, main router-outlet, footer)
- web
- dependencies
- proyectos.ts
- devDependencies
- header.ts
- TabBar
- @angular/router
- Portfolio · Marcos María Martínez Varas

## God Nodes (most connected - your core abstractions)
1. `@angular/core` - 18 edges
2. `Reveal` - 12 edges
3. `@angular/router` - 11 edges
4. `TabBar` - 10 edges
5. `site` - 9 edges
6. `web` - 7 edges
7. `development` - 6 edges
8. `scripts` - 6 edges
9. `Theme` - 6 edges
10. `build` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Base href '/' (root domain)` --shares_data_with--> `index.html host page (app-root, base href /)`  [INFERRED]
  .github/workflows/deploy.yml → src/index.html
- `index.html host page (app-root, base href /)` --references--> `App root layout (header, main router-outlet, footer)`  [INFERRED]
  src/index.html → src/app/app.html

## Import Cycles
- None detected.

## Communities (13 total, 2 thin omitted)

### Community 0 - "@angular/core"
Cohesion: 0.12
Nodes (12): @angular/core, Reveal, shared(), Note, notes, site, Estudios, Inicio (+4 more)

### Community 1 - "development"
Cohesion: 0.09
Nodes (25): build, serve, test, builder, configurations, defaultConfiguration, options, development (+17 more)

### Community 2 - "package.json"
Cohesion: 0.08
Nodes (24): name, packageManager, private, scripts, build, ng, start, test (+16 more)

### Community 3 - "App root layout (header, main router-outlet, footer)"
Cohesion: 0.18
Nodes (10): Deploy workflow: build job (npm ci, ng build --base-href=/, upload dist/web), Deploy workflow: deploy job (actions/deploy-pages), GitHub Pages hosting, app-footer, app-header, App root layout (header, main router-outlet, footer), router-outlet, Skip-to-content link (Saltar al contenido) (+2 more)

### Community 4 - "web"
Cohesion: 0.14
Nodes (13): cli, analytics, packageManager, newProjectRoot, projects, web, $schema, version (+5 more)

### Community 5 - "dependencies"
Cohesion: 0.17
Nodes (12): dependencies, @angular/common, @angular/compiler, @angular/core, @angular/forms, @angular/platform-browser, @angular/router, postcss (+4 more)

### Community 6 - "proyectos.ts"
Cohesion: 0.24
Nodes (6): ProjectCard, Area, areas, Project, projects, Proyectos

### Community 7 - "devDependencies"
Cohesion: 0.25
Nodes (8): devDependencies, @angular/build, @angular/cli, @angular/compiler-cli, jsdom, prettier, typescript, vitest

### Community 8 - "header.ts"
Cohesion: 0.21
Nodes (6): rxjs, allLinks, NavLink, primaryLinks, secondaryLinks, Theme

### Community 10 - "@angular/router"
Cohesion: 0.20
Nodes (7): @angular/platform-browser, @angular/router, App, appConfig, routes, Footer, Header

### Community 12 - "Portfolio · Marcos María Martínez Varas"
Cohesion: 0.22
Nodes (5): Arrancar en local, Añadir un proyecto, Dónde está cada cosa, Portfolio · Marcos María Martínez Varas, Contacto

## Knowledge Gaps
- **20 isolated node(s):** `@angular/common`, `@angular/compiler`, `@angular/forms`, `@tailwindcss/postcss`, `postcss` (+15 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 101 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `@angular/core` connect `@angular/core` to `header.ts`, `package.json`, `@angular/router`, `proyectos.ts`?**
  _High betweenness centrality (0.236) - this node is a cross-community bridge._
- **What connects `@angular/common`, `@angular/compiler`, `@angular/forms` to the rest of the system?**
  _20 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `@angular/core` be split into smaller, more focused modules?**
  _Cohesion score 0.12310606060606061 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **Should `development` be split into smaller, more focused modules?**
  _Cohesion score 0.08666666666666667 - nodes in this community are weakly interconnected._
- **Why does `@angular/router` connect `@angular/router` to `@angular/core`, `header.ts`, `package.json`, `proyectos.ts`?**
  _High betweenness centrality (0.073) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._