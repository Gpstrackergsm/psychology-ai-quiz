import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LandingPage from './components/LandingPage.jsx';
import QuizPage from './components/QuizPage.jsx';
import ResultPage from './components/ResultPage.jsx';
import SiteShell from './components/SiteShell.jsx';
import quizData from './data/quizData.js';
import { defaultShellProps, stageShellProps } from './data/siteChrome.js';

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

  const resetProgress = () => {
    setCurrentCategory(null);
    setScores({});
  };

  const handleQuizStart = () => {
    resetProgress();
    setStage(stages.quiz);
  };

  const handleQuizComplete = (finalScores) => {
    setScores(finalScores);
    const [topCategory] = Object.entries(finalScores).sort((a, b) => b[1] - a[1])[0] ?? [];
    setCurrentCategory(topCategory ?? null);
    setStage(stages.result);
  };

  const handleRetake = () => {
    resetProgress();
    setStage(stages.quiz);
  };

  const handleBackHome = () => {
    resetProgress();
    setStage(stages.landing);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [stage]);

  const shellProps = stageShellProps[stage] ?? defaultShellProps;

  return (
    <div className="min-h-screen bg-transparent py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SiteShell {...shellProps}>
          <AnimatePresence mode="wait">
            <motion.div
              key={stage}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {stage === stages.landing && (
                <LandingPage containerVariants={containerVariants} onStart={handleQuizStart} />
              )}

              {stage === stages.quiz && (
                <QuizPage
                  containerVariants={containerVariants}
                  questions={quizData}
                  onComplete={handleQuizComplete}
                  onExit={handleBackHome}
                />
              )}

              {stage === stages.result && (
                <ResultPage
                  containerVariants={containerVariants}
                  scores={scores}
                  category={currentCategory}
                  onRetake={handleRetake}
                  onBackHome={handleBackHome}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </SiteShell>
      </div>
    </div>
  );
}

export default App;
