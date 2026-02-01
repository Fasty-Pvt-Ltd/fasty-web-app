# Fasty Web App

A local e-commerce web application designed to operate within a hostel environment.  
The focus is on fast iteration, reliability, and a clean developer experience.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** shadcn/ui + Tailwind CSS
- **Backend:** Supabase (Auth + Database)
- **Testing:** Vitest + Testing Library
- **Linting & Formatting:** ESLint + Prettier
- **CI/CD:** GitHub Actions + Vercel

---

## Project Status

🚧 **Early development / MVP phase**

Core infrastructure and developer tooling are set up.  
Product features are under active development.

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## Available Scripts

```bash
npm run dev        # Start development server
npm run lint       # Run ESLint
npm run format     # Format code using Prettier
npm run typecheck  # Run TypeScript type checking
npm run test       # Run tests in watch mode
npm run test:run   # Run tests once (CI)
```

---

## Repository Workflow

- `main` is a protected branch
- Direct pushes to `main` are not allowed
- All changes go through Pull Requests
- CI must pass and code owner approval is required

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for detailed guidelines.

---

## Security

If you discover a security issue, please do not open a public GitHub issue.  
Refer to [`SECURITY.md`](SECURITY.md) for responsible disclosure instructions.

---

## License

This project is licensed under the terms of the [`LICENSE`](LICENSE) file.
