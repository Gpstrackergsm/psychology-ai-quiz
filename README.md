# MindMatch: Find Your Book

MindMatch is a responsive psychology quiz that helps visitors identify their most pressing emotional focus area and unlock a tailored book recommendation. The project uses a modern React + Tailwind CSS frontend paired with a lightweight Express backend.

## Features

- **Guided landing experience** with a bold headline, soft gradients, and call-to-action.
- **Interactive quiz** with 12 questions spanning anxiety, depression, trauma, motivation, and relationships.
- **Progress tracking** and smooth animations using Framer Motion.
- **Dynamic results page** that highlights the top category, displays category scores, and surfaces a curated book suggestion.
- **Book catalog API** served from Express with JSON storage for easy future expansion.
- **Share and retake actions** so visitors can retake the quiz or post results on social media.

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Framer Motion, Axios
- **Backend:** Node.js, Express, CORS
- **Data:** JSON configuration for book recommendations

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

From the repository root, install dependencies for both frontend and backend:

```bash
cd backend
npm install
cd ../frontend
npm install
```

### Running the App

Start the backend API:

```bash
cd backend
npm run dev
```

Copy the provided frontend environment template and update it if you are running the backend on a custom host or port:

```bash
cd frontend
cp .env.example .env
# edit .env if needed
```

In a new terminal, launch the React development server:

```bash
cd frontend
npm run dev
```

The frontend is available at `http://localhost:5174`. API requests default to `http://localhost:4000`; adjust `VITE_API_BASE_URL` in `frontend/.env` if your backend runs elsewhere.

If the backend is offline, MindMatch will automatically fall back to its bundled recommendation set so you can still explore the experience. Start the backend whenever you are ready to serve the latest catalog from `backend/data/books.json`.

### Building for Production

```bash
cd frontend
npm run build
```

The output will be generated in `frontend/dist`.

## Customizing Books

Book recommendations live in [`backend/data/books.json`](backend/data/books.json). Each entry contains a `category`, `title`, `author`, `summary`, `coverImage`, and `purchaseLink`. Add or edit items to expand MindMatch with new focus areas or titles.

> **Important:** MindMatch only surfaces purchase links that are listed in [`shared/allowedProductUrls.json`](shared/allowedProductUrls.json). Any URL not in that allowlist (or not starting with `https://www.psychology.com.co/product-page/`) is stripped before reaching the UI.

When you add a new title, be sure to:

1. Confirm the product exists on [psychology.com.co](https://www.psychology.com.co/).
2. Append its product page URL to [`shared/allowedProductUrls.json`](shared/allowedProductUrls.json).
3. Reference that exact URL in both the backend catalog and any frontend fallback data so the recommendation can be displayed.

## Quiz Content

Quiz questions are stored in [`frontend/src/data/quizData.js`](frontend/src/data/quizData.js). Update prompts, options, categories, or scoring to match your program’s needs.

## License

MIT
