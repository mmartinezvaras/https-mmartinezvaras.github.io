# Graph Report - web  (2026-10-10)

## Corpus Check
- Corpus is ~3,780 words - fits in a single context window. You may not need a graph.

## Summary
- 170 nodes · 207 edges · 21 communities (11 shown, 10 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.83)
- Token cost: 45,000 input · 4,782 output

## Community Hubs (Navigation)
- App Shell & Routing
- Angular Build Targets
- Package Manifest
- Layout & Deploy Pipeline
- Angular Workspace Config
- Runtime Dependencies
- Projects Data & Pages
- Dev Tooling
- npm Scripts
- Lab Notes Page
- Header Theme Toggle
- Projects Brief & Case Study
- Contact Page
- Skills Page
- Contact Section Spec
- Studies Section Spec
- Home Section Spec
- Lab Section Spec
- Skills Section Spec
- About Section Spec
- Vitest Runner

## God Nodes (most connected - your core abstractions)
1. `@angular/core` - 14 edges
2. `@angular/router` - 8 edges
3. `site` - 8 edges
4. `web` - 7 edges
5. `development` - 6 edges
6. `scripts` - 6 edges
7. `Header` - 6 edges
8. `build` - 5 edges
9. `options` - 5 edges
10. `production` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Deploy workflow: build job (npm ci, ng build --base-href=/, upload dist/web)` --references--> `ng build (output to dist/)`  [INFERRED]
  .github/workflows/deploy.yml → README.md
- `Base href '/' (root domain)` --shares_data_with--> `index.html host page (app-root, base href /)`  [INFERRED]
  .github/workflows/deploy.yml → src/index.html
- `Google Fonts: Bricolage Grotesque, Inter Tight, JetBrains Mono` --conceptually_related_to--> `Portfolio Brief (Big Data / IA student)`  [INFERRED]
  src/index.html → BRIEF.md
- `Sections as lazy-loaded routes` --conceptually_related_to--> `router-outlet`  [INFERRED]
  BRIEF.md → src/app/app.html
- `index.html host page (app-root, base href /)` --references--> `App root layout (header, main router-outlet, footer)`  [INFERRED]
  src/index.html → src/app/app.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Portfolio route sections** — brief_inicio_section, brief_sobre_mi_section, brief_estudios_section, brief_skills_section, brief_proyectos_section, brief_lab_notas_section, brief_contacto_section, brief_lazy_loaded_routes [EXTRACTED 1.00]
- **GitHub Pages deploy pipeline** — _github_workflows_deploy_build_job, _github_workflows_deploy_deploy_job, _github_workflows_deploy_github_pages, _github_workflows_deploy_base_href_root, readme_ng_build [INFERRED 0.85]

## Communities (21 total, 10 thin omitted)

### Community 0 - "App Shell & Routing"
Cohesion: 0.14
Nodes (12): @angular/core, @angular/platform-browser, @angular/router, App, appConfig, routes, Footer, site (+4 more)

### Community 1 - "Angular Build Targets"
Cohesion: 0.09
Nodes (25): build, serve, test, builder, configurations, defaultConfiguration, options, development (+17 more)

### Community 2 - "Package Manifest"
Cohesion: 0.10
Nodes (20): name, packageManager, private, version, @angular/build, @angular/cli, @angular/common, @angular/compiler (+12 more)

### Community 3 - "Layout & Deploy Pipeline"
Cohesion: 0.14
Nodes (12): Deploy workflow: build job (npm ci, ng build --base-href=/, upload dist/web), Deploy workflow: deploy job (actions/deploy-pages), GitHub Pages hosting, Portfolio Brief (Big Data / IA student), ng build (output to dist/), app-footer, app-header, App root layout (header, main router-outlet, footer) (+4 more)

### Community 4 - "Angular Workspace Config"
Cohesion: 0.14
Nodes (13): cli, analytics, packageManager, newProjectRoot, projects, web, $schema, version (+5 more)

### Community 5 - "Runtime Dependencies"
Cohesion: 0.15
Nodes (13): dependencies, @angular/common, @angular/compiler, @angular/core, @angular/forms, @angular/platform-browser, @angular/router, gsap (+5 more)

### Community 6 - "Projects Data & Pages"
Cohesion: 0.24
Nodes (4): Project, projects, ProyectoDetalle, Proyectos

### Community 7 - "Dev Tooling"
Cohesion: 0.25
Nodes (8): devDependencies, @angular/build, @angular/cli, @angular/compiler-cli, jsdom, prettier, typescript, vitest

### Community 8 - "npm Scripts"
Cohesion: 0.33
Nodes (6): scripts, build, ng, start, test, watch

### Community 9 - "Lab Notes Page"
Cohesion: 0.40
Nodes (3): Note, notes, Lab

### Community 11 - "Projects Brief & Case Study"
Cohesion: 0.50
Nodes (3): Case study format (problema, datos, enfoque, resultado, aprendizajes, repo), Proyectos section (tag filter + case study detail), Angular CLI project (v22.2.1)

## Knowledge Gaps
- **30 isolated node(s):** `@angular/common`, `@angular/compiler`, `@angular/forms`, `@tailwindcss/postcss`, `gsap` (+25 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 102 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `@angular/core` connect `App Shell & Routing` to `Lab Notes Page`, `Package Manifest`, `Projects Data & Pages`?**
  _High betweenness centrality (0.172) - this node is a cross-community bridge._
- **What connects `@angular/common`, `@angular/compiler`, `@angular/forms` to the rest of the system?**
  _30 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App Shell & Routing` be split into smaller, more focused modules?**
  _Cohesion score 0.13793103448275862 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `Runtime Dependencies` to `Package Manifest`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **Should `Angular Build Targets` be split into smaller, more focused modules?**
  _Cohesion score 0.08666666666666667 - nodes in this community are weakly interconnected._
- **Why does `@angular/router` connect `App Shell & Routing` to `Package Manifest`, `Projects Data & Pages`?**
  _High betweenness centrality (0.056) - this node is a cross-community bridge._
- **Should `Package Manifest` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._