# Contributing Guidelines

Thanks for contributing!  
This document defines **how we work together** to keep the codebase clean, stable, and easy to review.

---

## 1. Repository Workflow

- The `main` branch is **protected**
- **Direct pushes to `main` are not allowed**
- All changes must go through a **Pull Request (PR)**

### Branch Naming

Create branches from `main` using one of the following patterns:

- `feat/<short-description>`
- `fix/<short-description>`
- `chore/<short-description>`
- `refactor/<short-description>`

**Example:**

```bash
feat/add-user-auth
```

---

## 2. Making Changes

1. **Sync with `main`**

    ```bash
    git checkout main
    git pull origin main
    ```

2. **Create a new branch**

    ```bash
    git checkout -b feat/example
    ```

3. **Make small, focused changes**

4. **Commit regularly with meaningful messages**

---

## 3. Commit Guidelines

- Keep commits small and logical
- One concern per commit
- Avoid committing:
    - commented-out code
    - unnecessary console logs
    - unrelated formatting changes

**Example commit message:**

```
feat: add login form validation
```

---

## 4. Code Quality Requirements

Before opening a PR, ensure:

- ESLint passes
- TypeScript typecheck passes
- Tests are added or updated if behavior changes

**Run locally:**

```bash
npm run lint
npm run typecheck
npm run test
```

> **Note:** Commits that fail CI will not be merged.

---

## 5. Pull Requests

- Open PRs against `main`
- Fill out the PR template completely
- Keep PRs small and focused
- Link related issues if applicable

### Review Process

- At least one approval is required
- The code owner must approve
- CI must be green before merging

---

## 6. Tests

- Tests live under `src/tests`
- Test behavior, not implementation details
- New features should include tests where reasonable

---

## 7. Style & Tooling

- Code formatting is enforced by **Prettier**
- Linting rules are enforced by **ESLint**
- Do not disable rules without discussion

> Tooling exists to reduce review friction — trust it.

---

## 8. Communication

- Use GitHub Issues for bugs and feature requests
- Avoid large changes without prior discussion
- Ask early if unsure — assumptions cause rework

---

## 9. Final Rule

**If it's not reviewed, it doesn't ship.**

---

Thanks for helping keep the codebase clean and maintainable! 🎉
