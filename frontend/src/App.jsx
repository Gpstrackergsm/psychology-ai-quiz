import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import QuizPage from './components/QuizPage.jsx';
import ResultPage from './components/ResultPage.jsx';
import quizQuestions from './data/quizData.js';

const initialScores = {
  Anxiety: 0,
  Depression: 0,
  Trauma: 0,
  Motivation: 0,
  Relationships: 0
};

const stageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

function App() {
  const [stage, setStage] = useState('landing');
  const [scores, setScores] = useState(initialScores);
  const [completedAt, setCompletedAt] = useState(null);

  const topCategory = useMemo(() => {
    return Object.entries(scores).reduce(
      (top, [category, value]) => (value > top.value ? { category, value } : top),
      { category: 'Anxiety', value: 0 }
    );
  }, [scores]);

  const handleStart = () => {
    setScores(initialScores);
    setCompletedAt(null);
    setStage('quiz');
  };

  const handleQuizComplete = (resultScores) => {
    setScores(resultScores);
    setCompletedAt(new Date().toISOString());
    setStage('result');
  };

  const handleRetake = () => {
    setScores(initialScores);
    setStage('quiz');
    setCompletedAt(null);
  };

  return (
    <div className="min-h-screen gradient-bg">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          {stage === 'landing' && (
            <motion.section
              key="landing"
              variants={stageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="bg-white/80 backdrop-blur rounded-3xl shadow-xl p-12 flex flex-col gap-10"
            >
              <div className="space-y-6 text-slate-800">
                <p className="uppercase tracking-[0.3em] text-sm text-primary font-semibold">
                  MindMatch
                </p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Find the Right Psychology Book for You
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl">
                  Answer a few simple questions and discover the book that matches
                  your current need — anxiety, trauma, grief, motivation, or
                  relationships.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleStart}
                  className="px-8 py-3 rounded-full bg-primary text-white font-semibold shadow-lg shadow-primary/30 hover:bg-primary/90 transition"
                >
                  Start the Quiz
                </button>
                <a
                  href="#books"
                  className="px-8 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary/10 transition"
                >
                  Explore Books
                </a>
              </div>
            </motion.section>
          )}

          {stage === 'quiz' && (
            <motion.section
              key="quiz"
              variants={stageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <QuizPage
                questions={quizQuestions}
                onComplete={handleQuizComplete}
                onExit={() => setStage('landing')}
              />
            </motion.section>
          )}

          {stage === 'result' && (
            <motion.section
              key="result"
              variants={stageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <ResultPage
                scores={scores}
                topCategory={topCategory.category}
                completedAt={completedAt}
                onRetake={handleRetake}
                onBackToLanding={() => setStage('landing')}
              />
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
