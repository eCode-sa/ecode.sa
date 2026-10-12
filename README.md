# Arab Sea Unified Enterprise Platform

A frontend-only enterprise prototype for Arab Sea Information Systems. The unified workspace brings together MIYAR legal, governance, risk and compliance workflows; WETHAQ contract lifecycle and obligations; and eGov integration simulations.

## Run locally

```bash
npm install
npm run dev
```

For a production preview:

```bash
npm run build
npm run start
```

## Prototype notes

- All records and government integrations are simulated locally. No live government APIs are called.
- The AI assistant and legal analysis use deterministic mock responses.
- The UI is Arabic-first with RTL/LTR switching, responsive layouts, light/dark themes, drawers, modals, tables, charts and keyboard command palette (`⌘K` / `Ctrl+K`).
- English translation coverage is strongest in navigation, page titles, dashboard overview and common controls. Detailed module copy and sample record content remain Arabic in some areas.
- Tajawal is loaded from Google Fonts in weights 300–800 and is used across the application. No font files are distributed.

## Structure

- `app/`: Next.js App Router entry and global design tokens
- `components/`: application shell, reusable UI and module workspaces
- `data/`: realistic Arabic sample records
- `services/`: mock asynchronous API and AI simulations
- `types/`: shared module identifiers
