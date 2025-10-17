import express from 'express';
import cors from 'cors';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, 'data', 'books.json');

app.use(cors());
app.use(express.json());

const loadBooks = async () => {
  const raw = await readFile(dataPath, 'utf-8');
  return JSON.parse(raw);
};

app.get('/api/books', async (req, res) => {
  try {
    const { category } = req.query;
    const books = await loadBooks();

    if (category) {
      const match = books.find(
        (book) => book.category.toLowerCase() === category.toLowerCase()
      );
      if (!match) {
        return res.status(404).json({
          error: `No book recommendation found for category: ${category}`
        });
      }
      return res.json(match);
    }

    res.json(books);
  } catch (error) {
    console.error('Failed to load books data', error);
    res.status(500).json({ error: 'Unable to load book recommendations.' });
  }
});

app.listen(PORT, () => {
  console.log(`MindMatch backend listening on port ${PORT}`);
});
