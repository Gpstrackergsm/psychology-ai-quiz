import { useMemo } from 'react';
import { motion } from 'framer-motion';
import BookSuggestion from './BookSuggestion.jsx';
import fallbackCatalog from '../data/bookCatalogFallback.js';

function ResultPage({ containerVariants, scores, category, onRetake, onBackHome }) {
  // ✅ Find recommended book
  const recommendedBook = useMemo(() => {
    if (!category) {
      return fallbackCatalog[0] ?? null;
    }

    const normalizedCategory = category.toLowerCase();
    const directMatch = fallbackCatalog.find(
      (entry) => entry.category.toLowerCase() === normalizedCategory
    );

    return directMatch ?? fallbackCatalog[0] ?? null;
  }, [category]);

  // ✅ Sort scores descending for display
  const sortedScoreEntries = useMemo(() => {
    const entries = Object.entries(scores);
    if (entries.length === 0) return [];
    return entries.sort((a, b) => b[1] - a[1]);
  }, [scores]);

  // ✅ Share text
  const shareMessage = category
    ? encodeURIComponent(
        `MindMatch highlighted ${category} as my focus area. Explore tailored support at Psychology.com.co.`
      )
    : encodeURIComponent(
        `Discover your personalized emotional wellness roadmap with MindMatch at Psychology.com.co.`
      );

  const shareUrl = `https://twitter.com/intent/tweet?text=${shareMessage}`;

  return (
    <motion.section
      key="result"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-10 rounded-3xl bg-white/90 p-10 shadow-xl backdrop-blur md:p-14"
    >
      <div className="text-center space-y-4">
        <h1 className="font-display text-4xl font-bold text-slate-900 md:text-5xl">
          Your MindMatch Results
        </h1>
        {category ? (
          <p className="text-lg text-slate-700">
            Your primary growth area is{' '}
            <span className="font-semibold text-primary">{category}</span>.
          </p>
        ) : (
          <p className="text-lg text-slate-700">
            We couldn’t determine a dominant category, but you can still explore recommendations below.
          </p>
        )}
      </div>

      {/* Score Breakdown */}
      {sortedScoreEntries.length > 0 && (
        <div className="mx-auto max-w-md space-y-2">
          {sortedScoreEntries.map(([key, value]) => (
            <div key={key} className="flex justify-between rounded-lg bg-slate-100 p-3 text-sm text-slate-700">
              <span className="capitalize">{key}</span>
              <span className="font-semibold">{value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Book Suggestion */}
      {recommendedBook && (
        <div className="mt-10">
          <BookSuggestion book={recommendedBook} />
        </div>
      )}

      {/* Actions */}
      <div className="mt-10 flex flex-col items-center gap-3 md:flex-row md:justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={onRetake}
          className="rounded-full bg-primary px-8 py-3 font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark"
        >
          Retake Quiz
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={onBackHome}
          className="rounded-full bg-slate-100 px-8 py-3 font-semibold text-slate-700 shadow-sm transition hover:bg-slate-200"
        >
          Back to Home
        </motion.button>

        <a
          href={shareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary underline underline-offset-2 hover:text-primary-dark"
        >
          Share your results
        </a>
      </div>
    </motion.section>
  );
}

export default ResultPage;
