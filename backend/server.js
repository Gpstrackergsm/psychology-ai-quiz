const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_PATH = path.join(__dirname, 'data', 'books.json');

app.use(cors());
app.use(express.json());

function loadBooks() {
  const raw = fs.readFileSync(DATA_PATH, 'utf-8');
  return JSON.parse(raw);
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
