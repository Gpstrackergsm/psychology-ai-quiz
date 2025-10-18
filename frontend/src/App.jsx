import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage.jsx';
import QuizPage from './components/QuizPage.jsx';
import ResultPage from './components/ResultPage.jsx';
import SiteShell from './components/SiteShell.jsx';
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

  const shellPropsByStage = {
    [stages.landing]: {
      breadcrumbs: ['Self Tests', 'Mental Health and Personality Tests']
    },
    [stages.quiz]: {
      breadcrumbs: ['Self Tests', 'MindMatch Focus Finder']
    },
    [stages.result]: {
      breadcrumbs: ['Self Tests', 'MindMatch Focus Finder', 'Your Results']
    }
  };

  const shellProps = shellPropsByStage[stage] ?? { breadcrumbs: [] };

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <AnimatePresence mode="wait">
          <SiteShell key={stage} {...shellProps}>
            {stage === stages.landing && (
              <LandingPage containerVariants={containerVariants} onStart={handleQuizStart} />
            )}

            {stage === stages.quiz && (
              <QuizPage
                containerVariants={containerVariants}
                questions={quizData}
                onComplete={handleQuizComplete}
                onExit={() => setStage(stages.landing)}
              />
            )}

            {stage === stages.result && (
              <ResultPage
                containerVariants={containerVariants}
                scores={scores}
                category={currentCategory}
                onRetake={handleRetake}
                onBackHome={() => setStage(stages.landing)}
              />
            )}
          </SiteShell>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
