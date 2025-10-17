# MindMatch: Find Your Book

MindMatch is a psychology-focused quiz application that helps visitors uncover the emotional or mental health challenge that resonates most with them and discover a tailored book recommendation to explore next. The project is built with a modern JavaScript stack — React, Tailwind CSS, Framer Motion, and an Express API that serves configurable book data.

## Project Structure

```
psychology-ai-quiz/
├── frontend/           # React + Vite + Tailwind client
│   ├── src/
│   │   ├── components/ # QuizPage, ResultPage, QuestionCard, BookSuggestion
│   │   ├── data/       # Quiz question catalog
│   │   ├── utils/      # API helpers
│   │   └── styles/     # Global Tailwind entry point
│   └── ...
├── backend/            # Express server exposing book endpoints
│   ├── data/books.json # Category-to-book mapping (easy to extend)
│   └── index.js
└── README.md
```

## Prerequisites

- Node.js 18+
- npm 9+

## Getting Started

### 1. Install dependencies

```bash
cd backend
npm install
cd ../frontend
npm install
```

### 2. Start the backend API

```bash
cd backend
npm run dev
```

The Express server runs on [http://localhost:4000](http://localhost:4000) and exposes a single endpoint:

- `GET /api/books` – returns all available book recommendations. Optionally pass `?category=Anxiety` (or another category) to receive a single book.

The data lives in `backend/data/books.json`; update or add entries to expand the catalogue.

### 3. Start the React frontend

In a new terminal:

```bash
cd frontend
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to launch MindMatch.

The Vite dev server proxies API requests to the Express backend, so both services must be running for recommendations to display.

## Available Scripts

Within the **frontend** directory:

- `npm run dev` – start Vite in development mode.
- `npm run build` – generate a production build in `frontend/dist`.
- `npm run preview` – preview the production build locally.

Within the **backend** directory:

- `npm run dev` – start the Express API with hot reload via nodemon.
- `npm run start` – start the API without file watching.

## Customization & Admin Config

- **Quiz content**: Edit `frontend/src/data/quizData.js` to update questions, answer choices, or categories. Each option maps to a category that contributes to the scoring algorithm.
- **Book catalogue**: Modify `backend/data/books.json` to add, remove, or update book recommendations. Each entry should specify `category`, `title`, `author`, `description`, `coverUrl`, and `purchaseUrl`.
- **Styling**: Tailwind CSS powers the design. Update theme tokens in `frontend/tailwind.config.js` or extend component styles directly with utility classes.

## Features

- Interactive, 12-question quiz with smooth transitions using Framer Motion.
- Dynamic scoring across five categories (Anxiety, Depression, Trauma, Motivation, Relationships).
- Responsive layout with Tailwind CSS and accessible controls.
- Personalized result view with progress overview, book suggestion, and social sharing options.
- “Retake Quiz” button to immediately restart the experience.

## License

This project is provided as-is for educational purposes.
