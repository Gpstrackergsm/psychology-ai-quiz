const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const allowedProductUrls = require('../shared/allowedProductUrls.json');

const app = express();
const PORT = process.env.PORT || 4000;
const DATA_PATH = path.join(__dirname, 'data', 'books.json');
const allowedUrlSet = new Set(
  Array.isArray(allowedProductUrls)
    ? allowedProductUrls
        .map((url) => (typeof url === 'string' ? url.trim() : ''))
        .filter((url) => url.startsWith('https://www.psychology.com.co/product-page/'))
    : []
);

app.use(cors());
app.use(express.json());

function sanitizeBook(book) {
  if (!book || typeof book !== 'object') {
    return null;
  }

  const sanitized = { ...book };
  const rawLink = typeof sanitized.purchaseLink === 'string' ? sanitized.purchaseLink.trim() : '';

  sanitized.purchaseLink = allowedUrlSet.has(rawLink) ? rawLink : null;

  return sanitized.purchaseLink ? sanitized : null;
}

function loadBooks() {
  const raw = fs.readFileSync(DATA_PATH, 'utf-8');
  const data = JSON.parse(raw);

  if (!Array.isArray(data)) {
    return [];
  }

  return data.map((book) => sanitizeBook(book)).filter(Boolean);
}

app.get('/api/books', (req, res) => {
  try {
    const books = loadBooks();
    res.json(books);
  } catch (error) {
    console.error('Failed to load books', error);
    res.status(500).json({ message: 'Failed to load books data.' });
  }
});

app.get('/api/recommendations/:category', (req, res) => {
  try {
    const { category } = req.params;
    const books = loadBooks();
    const recommendation = books.find((book) => book.category.toLowerCase() === category.toLowerCase());

    if (!recommendation) {
      return res.status(404).json({ message: 'No recommendation found for that category.' });
    }

    res.json(recommendation);
  } catch (error) {
    console.error('Failed to load recommendation', error);
    res.status(500).json({ message: 'Failed to load recommendation.' });
  }
});

app.listen(PORT, () => {
  console.log(`MindMatch backend listening on port ${PORT}`);
});
