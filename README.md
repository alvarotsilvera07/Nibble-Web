# Frontend Web Portfolio Architecture

## Technology Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Directory Structure Strategy (Hybrid Architecture)

To maintain a scalable, clean, and developer-friendly (DX) codebase, we use a hybrid approach that blends **Atomic Design** with **Feature-Sliced Design**.

- `src/components/ui`: Agnostic, highly reusable components (Buttons, Inputs, Modals). This is where your Atomic Design lives.
- `src/components/layout`: Shared layout components (Navbar, Footer, Sidebar).
- `src/features`: Grouped by domain. E.g., all logic, types, and specific components for "Projects" live under `src/features/projects`. This ensures high cohesion and prevents a giant `components` folder.
- `src/utils`: Pure utility functions like `cn.ts` (for combining Tailwind classes safely using `clsx` and `tailwind-merge`).

## Pre-configured DX
1. **Absolute Imports**: You can import anything from `src` using `@/`. Example: `import Button from '@/components/ui/Button'`.
2. **Tailwind Configured**: `globals.css` overrides the base layer to establish theme variables (like `--background` and `--foreground`).
3. **Prettier & ESLint**: Ensure your code remains readable and strictly typed.
4. **Framer Motion Setup ready**: Create wrappers like `<FadeIn>` in `src/components/animations`.

## Getting Started
\`\`\`bash
npm install
npm run dev
\`\`\`
