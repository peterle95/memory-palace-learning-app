<!-- BEGIN:nextjs-agent-rules -->
# Memory Palace App Agent Instructions

This is a Next.js 16 memory-palace learning app. It is meant to become useful for personal learning, strong as a portfolio project, and viable as a future public product.

## Required Context Before Coding

Before changing code, read the relevant local Next.js docs:

```txt
node_modules/next/dist/docs/
```

This is **not necessarily the Next.js you know**. Next.js 16 may differ from prior assumptions. In particular, check local docs for routing, App Router conventions, caching, server/client component behavior, metadata, async `params` / `searchParams`, Turbopack, and linting.

Also consult the AI wiki concepts that guide this project:

```txt
C:/Users/molze/iCloudDrive/iCloud~md~obsidian/AI/wiki/topics/software-engineering-moc.md
C:/Users/molze/iCloudDrive/iCloud~md~obsidian/AI/wiki/projects/nextjs-memory-palace-app.md
C:/Users/molze/iCloudDrive/iCloud~md~obsidian/AI/wiki/topics/frontend-testing-strategy.md
C:/Users/molze/iCloudDrive/iCloud~md~obsidian/AI/wiki/topics/typescript-eslint.md
C:/Users/molze/iCloudDrive/iCloud~md~obsidian/AI/wiki/topics/context-engineering-for-llms.md
C:/Users/molze/iCloudDrive/iCloud~md~obsidian/AI/wiki/topics/json-web-tokens.md
```

## Core Engineering Concepts To Apply

### 1. Server-first app structure

Prefer Server Components and server-side data loading unless browser interactivity, local state, effects, or Web APIs are required.

Do not add `"use client"` casually. Keep client components small, intentional, and isolated.

### 2. Stable domain model before UI complexity

The app needs real memory-palace domain behavior before broad visual expansion.

Prioritize clear models for:

- palaces
- rooms
- loci / locations
- learning topics
- memory items
- review sessions
- invite codes
- users / sessions

A polished interface should sit on top of a coherent domain model, not replace it.

### 3. Efficient context and retrieval design

Use the wiki’s context-engineering principle: more context is not automatically better.

For any future LLM, memory, search, or retrieval feature:

- store durable state outside the prompt
- retrieve only relevant material
- preserve provenance
- compress without losing key claims
- avoid mixing unrelated context
- design for fast, searchable, structured memory

The app should make memory easier to retrieve, not just prettier to store.

### 4. Test stable behavior, not fragile UI details

Follow the wiki’s frontend testing strategy.

Do not build a large UI test suite while the domain model is unstable. Once behavior exists, prioritize tests around:

- schema validation
- palace / room / item transformations
- review scheduling logic
- import / export formats
- invite-code validation
- persistence boundaries
- a few critical end-to-end flows

Avoid tests that mostly snapshot fast-changing DOM structure.

### 5. TypeScript and linting should improve correctness

Use `typescript-eslint` through coherent predefined configs where possible.

Prefer TypeScript-aware extension rules over duplicate core ESLint rules. Avoid hand-picking many strict rules unless they support real maintainability.

Typed linting can be useful, but only enable it when the project structure is stable enough to justify the cost.

### 6. Auth and session design must be deliberate

If authentication is added, choose the session model intentionally.

JWTs can be useful for stateless verification, but they trade simplicity for revocation and theft risks. Do not store sensitive data in JWT payloads. Prefer secure, HTTP-only cookies for sensitive session tokens.

Document the tradeoff if JWTs are used.

### 7. Keep the app efficient by default

Before adding complexity:

- reduce unnecessary client JavaScript
- avoid duplicate visual components
- keep WebGL/background effects isolated
- avoid needless global state
- keep data fetching close to route/server boundaries
- prefer simple schemas and explicit data flow
- measure before optimizing speculative bottlenecks

## Current Project Priorities

The next useful product work is:

1. Add real `/palaces/new` and `/palaces/join` routes.
2. Replace temporary selector status messages with real navigation.
3. Design the first create-palace flow.
4. Design the join flow with invite-code validation.
5. Add persistence only after the core schema is clear.
6. Keep the homepage mostly server-rendered.
7. Deduplicate unused visual components.
8. Restore reliable build validation.

## Verification

Use actual scripts from `package.json`.

Because Next.js 16 removed `next lint`, do not assume `npm run lint` works unless the project defines it correctly.

Prefer checks such as:

```sh
npm run build
npm test
node node_modules/eslint/bin/eslint.js .
```

If a check fails because of local environment issues, report the exact blocker.

## Editing Discipline

- Keep changes narrow and product-driven.
- Prefer existing project conventions.
- Do not introduce new libraries unless clearly justified.
- Do not edit `.next/`, `node_modules/`, or generated artifacts.
- Do not refactor unrelated code.
- Update the wiki only if the user asks or if the change represents durable project knowledge.

<!-- END:nextjs-agent-rules -->