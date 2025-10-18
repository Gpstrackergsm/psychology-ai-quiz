import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import QuizPage from './components/QuizPage.jsx';
import ResultPage from './components/ResultPage.jsx';
import quizData from './data/quizData.js';

const stages = {
  landing: 'landing',
  quiz: 'quiz',
  result: 'result'
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

function App() {
  const apiBaseUrl = useMemo(() => {
    const envUrl = import.meta.env.VITE_API_BASE_URL?.trim();
    if (envUrl) {
      return envUrl.replace(/\/$/, '');
    }

    if (typeof window === 'undefined') {
      return '';
    }

    const { protocol, hostname, port } = window.location;

    if (!port) {
      return `${protocol}//${hostname}`;
    }

    if (port === '5173') {
      return `${protocol}//${hostname}:4000`;
    }

    return `${protocol}//${hostname}:${port}`;
  }, []);

  const [stage, setStage] = useState(stages.landing);
  const [scores, setScores] = useState({});
  const [currentCategory, setCurrentCategory] = useState(null);
  const [books, setBooks] = useState([]);
  const [loadingBooks, setLoadingBooks] = useState(true);
  const [bookError, setBookError] = useState('');

  useEffect(() => {
    async function fetchBooks() {
      try {
        setLoadingBooks(true);
        const endpoint = apiBaseUrl ? `${apiBaseUrl}/api/books` : '/api/books';
        const response = await axios.get(endpoint);
        setBooks(response.data);
      } catch (error) {
        console.error('Failed to fetch books', error);
        setBookError(
          apiBaseUrl
            ? `We could not reach the MindMatch book catalog at ${apiBaseUrl}. Make sure the backend server is running (npm run dev in /backend) or update VITE_API_BASE_URL.`
            : 'We could not reach the MindMatch book catalog. Start the backend server (npm run dev in /backend) and refresh to load recommendations.'
        );
      } finally {
        setLoadingBooks(false);
      }
    }

    fetchBooks();
  }, [apiBaseUrl]);

  const topRecommendation = useMemo(() => {
    if (!currentCategory) return null;
    return books.find((book) => book.category === currentCategory) ?? null;
  }, [books, currentCategory]);

  const handleQuizStart = () => {
    setScores({});
    setStage(stages.quiz);
  };

  const handleQuizComplete = (finalScores) => {
    setScores(finalScores);
    const [topCategory] = Object.entries(finalScores).sort((a, b) => b[1] - a[1])[0] ?? [];
    setCurrentCategory(topCategory ?? null);
    setStage(stages.result);
  };

  const handleRetake = () => {
    setCurrentCategory(null);
    setScores({});
    setStage(stages.quiz);
  };

  return (
    <div className="min-h-screen gradient-bg">
      <div className="mx-auto max-w-5xl px-4 py-12 md:px-8">
        <AnimatePresence mode="wait">
          {stage === stages.landing && (
            <motion.section
              key="landing"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="rounded-3xl bg-white/90 p-10 shadow-xl backdrop-blur"
            >
              <div className="space-y-6 text-center md:space-y-8">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary-dark">
                  Meet MindMatch
                </span>
                <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                  Find the Right Psychology Book for You
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-slate-600 md:text-xl">
                  Answer a few simple questions and discover the book that matches your current need —
                  anxiety, trauma, grief, motivation, or relationships.
                </p>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleQuizStart}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark"
                >
                  Start the Quiz
                </motion.button>
              </div>
            </motion.section>
          )}

          {stage === stages.quiz && (
            <motion.section
              key="quiz"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="rounded-3xl bg-white/95 p-6 shadow-xl backdrop-blur"
            >
              <QuizPage questions={quizData} onComplete={handleQuizComplete} onExit={() => setStage(stages.landing)} />
            </motion.section>
          )}

          {stage === stages.result && (
            <motion.section
              key="result"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="rounded-3xl bg-white/95 p-6 shadow-xl backdrop-blur"
            >
              <ResultPage
                scores={scores}
                category={currentCategory}
                recommendation={topRecommendation}
                loadingBooks={loadingBooks}
                bookError={bookError}
                onRetake={handleRetake}
                onBackHome={() => setStage(stages.landing)}
              />
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
