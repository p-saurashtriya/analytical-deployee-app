# Analytical Deployee App

A fresh MERN-based analytics dashboard with real-time reporting, role-based access, and secure JWT authentication.

## Project layout

- `backend/` — Express API, MongoDB, auth, analytics, sales routes
- `frontend/` — React + Vite dashboard, login, analytics pages

## Quick start

### Backend

```bash
cd backend
npm install
cp .env.example .env
npm run seed
npm run dev
```

### Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

## Notes

- Backend runs on `http://localhost:5000`
- Frontend runs on `http://localhost:5173`
