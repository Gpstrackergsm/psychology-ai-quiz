import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import QuestionCard from './QuestionCard.jsx';

const cardVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 }
};

const QuizPage = ({ questions, onComplete, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState(() =>
    questions.reduce((acc, question) => {
      question.options.forEach((option) => {
        acc[option.category] = 0;
      });
      return acc;
    }, {})
  );
  const [selections, setSelections] = useState({});

  const progress = useMemo(
    () => ((currentIndex + 1) / questions.length) * 100,
    [currentIndex, questions.length]
  );

  const handleSelect = (category) => {
    const question = questions[currentIndex];
    const previousSelection = selections[question.id];

    const updatedScores = { ...scores };
    if (previousSelection) {
      updatedScores[previousSelection] = Math.max(
        0,
        (updatedScores[previousSelection] || 0) - 1
      );
    }
    updatedScores[category] = (updatedScores[category] || 0) + 1;

    setScores(updatedScores);
    setSelections((prev) => ({ ...prev, [question.id]: category }));

    const isLastQuestion = currentIndex === questions.length - 1;
    if (isLastQuestion) {
      onComplete(updatedScores);
      return;
    }

    setTimeout(() => {
      setCurrentIndex((index) => index + 1);
    }, 250);
  };

  const handleBack = () => {
    setCurrentIndex((index) => Math.max(index - 1, 0));
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-8 md:p-12 space-y-10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
            Step {currentIndex + 1} of {questions.length}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            {currentQuestion.prompt}
          </h2>
        </div>
        <button
          onClick={onExit}
          className="text-sm text-slate-500 hover:text-primary transition"
        >
          Exit
        </button>
      </div>

      <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        <AnimateQuestion key={currentQuestion.id}>
          <QuestionCard
            question={currentQuestion}
            selectedCategory={selections[currentQuestion.id]}
            onSelect={handleSelect}
          />
        </AnimateQuestion>
      </AnimatePresence>

      <div className="flex justify-between text-sm text-slate-600">
        <button
          onClick={handleBack}
          disabled={currentIndex === 0}
          className="px-4 py-2 rounded-full border border-slate-200 hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-slate-200"
        >
          Previous
        </button>
        <p>
          {currentIndex + 1} / {questions.length}
        </p>
      </div>
    </div>
  );
};

const AnimateQuestion = ({ children }) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    transition={{ duration: 0.3 }}
    className="space-y-6"
  >
    {children}
  </motion.div>
);

QuizPage.propTypes = {
  questions: PropTypes.array.isRequired,
  onComplete: PropTypes.func.isRequired,
  onExit: PropTypes.func.isRequired
};

AnimateQuestion.propTypes = {
  children: PropTypes.node.isRequired
};

export default QuizPage;
