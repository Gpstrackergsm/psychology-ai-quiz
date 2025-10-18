import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LandingPage from './components/LandingPage.jsx';
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
  const [stage, setStage] = useState(stages.landing);
  const [scores, setScores] = useState({});
  const [currentCategory, setCurrentCategory] = useState(null);
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
            <LandingPage containerVariants={containerVariants} onStart={handleQuizStart} />
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
