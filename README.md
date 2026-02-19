# Junsoft Solutions – Company Website

A React company website (raw React with Webpack, no Vite) with two pages: **Home** and **About Us**, structured using an **MVC** pattern.

## Structure (MVC)

- **Models** (`src/models/`) – Data and business structure (e.g. `companyModel.js`).
- **Views** (`src/views/`) – Presentational components (e.g. `HomeView.jsx`, `AboutView.jsx`).
- **Controllers** (`src/controllers/`) – Connect models to views (e.g. `HomeController.jsx`, `AboutController.jsx`).
- **Components** (`src/components/`) – Shared UI (e.g. `Layout.jsx` with header and nav).

## Scripts

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm start

# Production build (output in dist/)
npm run build
```

## Tech stack

- React 18
- React Router 6
- Webpack 5 + Babel (no Vite)
