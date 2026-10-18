# Trail-code Documentation Portal

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

This repository contains an unofficial community documentation portal for **[Trail-code](https://github.com/trailhq/Trail-Code)** (previously Graft) — the self-learning context layer for coding agents.

The site is built with [Astro Starlight](https://starlight.astro.build/) and structured using the [Diataxis](https://diataxis.fr/) framework, organizing content into Tutorials, How-To Guides, Reference, and Explanation. All page content is taken verbatim from the source repo's README; a site-wide banner records the source commit and sync time.

## 🚀 Quick Start

Ensure you have [Node.js](https://nodejs.org/) installed, then run:

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
│   └── quick-start.mdx
├── how-to/                         # Task-oriented: solving specific problems
│   ├── agent-integration.mdx
│   ├── coming-from-graft.mdx
│   └── ...
├── reference/                      # Information-oriented: technical descriptions
│   ├── cli.mdx
│   ├── learning-file.mdx
│   └── ...
└── explanation/                    # Understanding-oriented: concepts and background
    ├── how-it-works.mdx
    ├── learnings.mdx
    └── ...
```

The source commit and sync time shown in the site banner live in `src/data/source.json`.

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
