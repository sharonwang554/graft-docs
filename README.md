# Graft Documentation Portal

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

This repository contains a community documentation portal for **[Trail-code](https://github.com/trailhq/Trail-Code)** (previously Graft) — the self-learning context layer for coding agents. Content is organized from the upstream README.

The site is built with [Astro Starlight](https://starlight.astro.build/) and structured using the [Diataxis](https://diataxis.fr/) framework, organizing content into Tutorials, How-To Guides, Reference, and Explanation.

## 🚀 Quick Start

Use [Node.js](https://nodejs.org/) 22.23.4 or newer (`nvm use` picks the version in `.nvmrc`), then run:

```bash
# Install dependencies
npm install

# Start the local development server
npm run dev
```
The site will be available at `http://localhost:4321`.

## 📁 Repository Structure

All documentation content lives in `src/content/docs/`. The structure follows Diataxis:

```text
src/content/docs/
├── index.mdx                       # Landing page
├── tutorials/                      # Learning-oriented: step-by-step guides
│   ├── quick-start.mdx
│   ├── your-first-graph.mdx
│   └── your-first-learning.mdx
├── how-to/                         # Task-oriented: solving specific problems
│   ├── migrate-from-graft.mdx
│   ├── integrate-claude-code.mdx
│   ├── save-and-check-learnings.mdx
│   └── ...
├── reference/                      # Information-oriented: technical descriptions
│   ├── cli.mdx
│   ├── learning-file-format.mdx
│   └── ...
└── explanation/                    # Understanding-oriented: concepts and background
    ├── why-trail-code-exists.mdx
    ├── learnings.mdx
    └── ...
```

Content is organized from the upstream README. The source commit and pull date shown in the site banner live in `src/data/source.ts`; update them, and each page's `lastUpdated` frontmatter, when re-syncing.

`/llms.txt` (page index) and `/llms-full.txt` (full text) are generated from the docs at build time by `src/pages/llms.txt.ts` and `src/pages/llms-full.txt.ts`.

## 🛠️ Development & Testing

This project uses [Vitest](https://vitest.dev/) to ensure the documentation structure remains intact.

```bash
# Run the test suite
npm run test:run

# Build the site for production
npm run build

# Preview the production build locally
npm run preview
```

## 🌐 Deployment

This site is configured for static deployment on **Vercel** via the `@astrojs/vercel` adapter. 

Any pushes to the `main` branch will automatically build and deploy using the `npm run build` command. The Vercel configuration is defined in `vercel.json` and `astro.config.mjs`.
