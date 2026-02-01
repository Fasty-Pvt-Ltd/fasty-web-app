# Architecture

This document describes **how the system is structured**, **how different parts interact**, and **the rules that govern those interactions**.

The goal is to enable **fast development** while preventing **architectural chaos** as the product evolves.

---

## Architectural Style

### Modular Full-Stack Monolith

The application is designed as a **modular full-stack monolith**.

This means:

- A **single codebase**
- Clear internal boundaries between concerns
- No premature microservices
- Modules can evolve independently without deployment complexity

This approach optimizes for:

- Speed of iteration
- Simpler debugging
- Lower operational overhead

---

## High-Level Flow

1. **User**
    - Interacts with the application through the browser

2. **Client Components (UI)**
    - Responsible only for presentation and user interaction
    - No business logic
    - Communicate with the server layer

3. **Server Components / API Routes**
    - Handle requests from the client
    - Perform authentication and authorization checks
    - Delegate business logic to services

4. **Services**
    - Contain business logic and orchestration
    - Act as the single source of truth for application behavior
    - Coordinate between different subsystems

5. **Supabase**
    - Provides authentication
    - Stores application data
    - Enforces access control via Row Level Security (RLS)

---

## Directory Structure

```
public/
src/
├─ docs/                # Engineering source of truth
├─ app/                 # Routes, pages, server components, API routes
├─ components/          # UI components (dumb & reusable)
│  ├─ ui/               # shadcn/ui components
│  └─ shared/           # App-level UI components
├─ hooks/               # Custom React hooks
├─ services/            # Business logic & orchestration
├─ stores/              # Client-side state (e.g., cart)
├─ lib/                 # Infrastructure & setup (Supabase, config, clients)
├─ types/               # Shared data contracts and types
├─ utils/               # Pure helper functions
├─ styles/              # Global styles (kept minimal)
└─ tests/               # All tests
```

---

## Architectural Rules

These rules are intentional and enforced by convention:

- UI components do not contain business logic
- Business logic lives only in `services/`
- Server components and API routes delegate, they do not decide
- Database access is never performed directly from UI components
- Shared types live in `types/`
- Helpers in `utils/` must remain pure

> **Breaking these rules introduces coupling and slows development.**

---

## Guiding Principle

**Structure the codebase so that features grow, not complexity.**

This architecture favors clarity and discipline over premature abstraction.
