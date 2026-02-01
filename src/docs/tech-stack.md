# Tech Stack

The primary goals of this tech stack are **speed**, **clarity**, and **low operational complexity**.
Every tool is chosen to minimize friction during development while keeping the system easy to reason about and maintain.

---

## Core Language

### TypeScript

Used across the entire codebase to:

- Catch errors early
- Improve code readability
- Enable confident refactoring
- Provide strong editor support

Type safety is treated as a first-class feature, not an afterthought.

---

## Framework

### Next.js (App Router)

Used as a **full-stack framework**:

- Server-side rendering and routing
- API routes / server actions
- Optimized builds and deployments
- Tight integration with Vercel

The App Router is used for a clear separation between server and client concerns.

---

## UI & Styling

### Tailwind CSS

- Utility-first styling
- Fast iteration
- Consistent design without custom CSS bloat

### shadcn/ui

- Accessible, composable UI components
- Full control over styling (no black-box components)
- Fits naturally with Tailwind

### Framer Motion

- Declarative animations
- Used selectively for micro-interactions and UX polish

---

## Backend & Auth

### Supabase

Used for:

- Database
- Authentication
- Authorization (via Row Level Security)

Chosen to reduce backend operational overhead while still allowing fine-grained control over data access.

---

## Validation

### Zod

Used for:

- Runtime data validation
- Schema definitions shared between client and server
- Ensuring external data matches expected types

Zod complements TypeScript by validating data at runtime.

---

## Testing

### Vitest

- Fast test runner
- Native TypeScript support
- Vite-compatible ecosystem

### React Testing Library

- Tests components from the user’s perspective
- Avoids testing implementation details

Tests live under `src/tests`.

---

## Code Quality

### ESLint

- Enforces code correctness and best practices
- Catches bugs early

### Prettier

- Enforces consistent code formatting
- Eliminates formatting discussions during reviews

Tooling is enforced via CI and pre-commit hooks.

---

## Guiding Principle

> Prefer tools that disappear into the background and let the team focus on building product features.

This stack is intentionally conservative, proven, and optimized for developer productivity.
