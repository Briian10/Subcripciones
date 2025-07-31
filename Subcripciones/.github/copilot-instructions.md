# Copilot Instructions for Subcripciones

## Project Overview
- **Subcripciones** is a React app (bootstrapped with Vite) for tracking subscription services and budgets.
- The UI is component-driven, with state managed via React hooks in each component.
- Main user flow: set a budget, add subscriptions (type/price), and view a summary of all subscriptions and remaining budget.

## Key Architecture & Data Flow
- `App.jsx` is the root, handling budget state and switching between the budget form and the main control panel.
- `MainControl.jsx` manages the core logic: displays balance, handles adding subscriptions, and lists all subscriptions.
- State for subscriptions (`subs`) is kept in `MainControl` and passed to child components.
- Adding a subscription updates the `subs` array, which is rendered by `DisplayItems.jsx` (which in turn renders `SingleItems.jsx` for each item).
- All forms use controlled components (React state for input values).

## Developer Workflows
- **Start dev server:** `npm run dev` (runs Vite with HMR)
- **Build for production:** `npm run build`
- **Preview production build:** `npm run preview`
- **Lint code:** `npm run lint` (uses ESLint with custom config in `eslint.config.js`)

## Project Conventions & Patterns
- All React components are in `src/components/` and use PascalCase filenames.
- CSS is colocated in `src/` and imported at the component or app level.
- Use functional components and React hooks only (no class components).
- All state is local to components; no global state management.
- Use `id: Date.now()` for unique subscription IDs.
- Error handling for forms is done via local state and simple error messages.
- No TypeScript or test setup by default (see README for TS info).

## Integration & Dependencies
- Uses Vite for build/dev, React 19, and ESLint for linting.
- No backend/API integration; all data is in-memory.
- No routing or advanced state management libraries.

## Examples & References
- See `MainControl.jsx` for the main data flow and state management pattern.
- See `FormAddSubs.jsx` for form validation and controlled input pattern.
- See `DisplayItems.jsx` and `SingleItems.jsx` for list rendering.

## Naming & Style
- Use English for code, Spanish for UI labels.
- Class names in JSX follow BEM-like conventions (e.g., `add-subscription`, `single-item`).
- Keep UI simple and minimal; follow the style in `App.css`.

---
For questions about build, lint, or component structure, see `package.json`, `vite.config.js`, and `eslint.config.js`.
