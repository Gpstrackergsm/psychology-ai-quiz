const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_PATH = path.join(__dirname, 'data', 'books.json');

app.use(cors());
app.use(express.json());

let cachedBooks = null;

function loadBooks() {
  if (cachedBooks) {
    return cachedBooks;
  }

  const raw = fs.readFileSync(DATA_PATH, 'utf-8');
  cachedBooks = JSON.parse(raw);
  return cachedBooks;
}

function normalizeCategory(category) {
  return typeof category === 'string' ? category.trim().toLowerCase() : '';
}

app.get('/api/books', (req, res) => {
  try {
    const books = loadBooks();
    const { category } = req.query;

    const normalizedCategory = normalizeCategory(category);
    const filtered = normalizedCategory
      ? books.filter((book) => normalizeCategory(book.category) === normalizedCategory)
      : books;

    const recommendations = filtered.length > 0 ? filtered.slice(0, 3) : books.slice(0, 3);

    res.json({
      category: category ?? null,
      count: recommendations.length,
      books: recommendations
    });
  } catch (error) {
    console.error('Failed to load books', error);
    res.status(500).json({ message: 'Failed to load books data.' });
  }
});

app.get('/api/recommendations/:category', (req, res) => {
  try {
    const { category } = req.params;
    const books = loadBooks();
    const recommendation = books.find(
      (book) => normalizeCategory(book.category) === normalizeCategory(category)
    );

    if (!recommendation) {
      return res.status(404).json({ message: 'No recommendation found for that category.' });
    }

    res.json(recommendation);
  } catch (error) {
    console.error('Failed to load recommendation', error);
    res.status(500).json({ message: 'Failed to load recommendation.' });
  }
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`MindMatch backend listening on port ${PORT}`);
  });
}

module.exports = app;
