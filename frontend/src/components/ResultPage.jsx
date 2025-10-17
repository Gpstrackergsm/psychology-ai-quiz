import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import BookSuggestion from './BookSuggestion.jsx';
import { fetchBookByCategory } from '../utils/bookApi.js';

const ResultPage = ({ scores, topCategory, completedAt, onRetake, onBackToLanding }) => {
  const [book, setBook] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sortedScores = useMemo(() => {
    return Object.entries(scores)
      .map(([category, value]) => ({ category, value }))
      .sort((a, b) => b.value - a.value);
  }, [scores]);

  useEffect(() => {
    const fetchBook = async () => {
      setIsLoading(true);
      setError('');
      try {
        const data = await fetchBookByCategory(topCategory);
        setBook(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBook();
  }, [topCategory]);

  return (
    <div className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-10 space-y-6"
      >
        <div className="space-y-3 text-slate-800">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
            Your MindMatch Result
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            You might be dealing with <span className="text-primary">{topCategory}</span>
          </h2>
          <p className="text-slate-600 max-w-2xl">
            Here’s a book that can help you understand what you're feeling and move toward meaningful change.
          </p>
          {completedAt && (
            <p className="text-xs text-slate-400">Completed on {new Date(completedAt).toLocaleString()}</p>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-5 text-sm text-slate-600">
          {sortedScores.map(({ category, value }) => (
            <div
              key={category}
              className={`rounded-2xl border p-4 flex flex-col items-center justify-center gap-1 ${
                category === topCategory
                  ? 'border-primary/60 bg-primary/5 text-primary font-semibold'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <span>{category}</span>
              <span className="text-2xl font-bold">{value}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={onRetake}
            className="px-6 py-3 rounded-full bg-primary text-white font-semibold shadow-md hover:bg-primary/90 transition"
          >
            Retake Quiz
          </button>
          <button
            onClick={onBackToLanding}
            className="px-6 py-3 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100 transition"
          >
            Back to Landing
          </button>
        </div>
      </motion.div>

      {isLoading && (
        <p className="text-center text-slate-500">Fetching your personalized book...</p>
      )}
      {error && (
        <p className="text-center text-red-500">{error}</p>
      )}

      <BookSuggestion book={book} category={topCategory} />
    </div>
  );
};

ResultPage.propTypes = {
  scores: PropTypes.object.isRequired,
  topCategory: PropTypes.string.isRequired,
  completedAt: PropTypes.string,
  onRetake: PropTypes.func.isRequired,
  onBackToLanding: PropTypes.func.isRequired
};

export default ResultPage;
