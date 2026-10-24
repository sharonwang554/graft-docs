---
title: "Build and trail need Node 24 from .nvmrc, not Node 18"
author: Sharon
date: 2026-10-24
branch: main
cost: { minutes: 1, tokens: 1133 }
id: l-3ab0c76a
scope: repo
status: active
src: agent
touches:
  - ".nvmrc"
  - package.json
  - ".gitignore"
  - AGENTS.md
---

## Decided
- Run `nvm use` (Node 24, per `.nvmrc`) before `npm run build`, `npm run test:run`, or `trail init`. `package.json` engines requires >=22.23.4.
- `AGENTS.md` is tracked and is the source of truth; `CLAUDE.md` only imports it with `@AGENTS.md`.

## Tried and ruled out
- Running on Node 18 (a common shell default): Astro refuses to build ("Node.js v18 is not supported"), so `tests/build.test.ts` fails even on clean main. That's an environment problem, not a code regression.

## Watch out
- Under Node 18, `trail init` fails partway through with "couldn't read your past sessions (process.getBuiltinModule is not a function)" and saves no learnings from past sessions. Re-run it on Node 24.
- `.gitignore` used to list `AGENTS.md` (since the initial commit), which silently kept it out of git. Don't add it back.
