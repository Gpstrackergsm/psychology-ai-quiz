import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import QuestionCard from './QuestionCard.jsx';
import ProgressBar from './ProgressBar.jsx';

function QuizPage({ questions, onComplete, onExit }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState(() => ({}));

  const totalQuestions = questions.length;

  const categories = useMemo(() => {
    const categorySet = new Set();
    questions.forEach((question) => {
      question.options.forEach((option) => {
        categorySet.add(option.category);
      });
    });
    return Array.from(categorySet);
  }, [questions]);

  const handleAnswer = (option) => {
    setScores((prevScores) => {
      const updatedScores = { ...prevScores };
      updatedScores[option.category] = (updatedScores[option.category] || 0) + option.value;

      if (currentIndex === totalQuestions - 1) {
        onComplete(updatedScores);
      } else {
        setCurrentIndex((index) => index + 1);
      }

      return updatedScores;
    });
  };

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold text-slate-900 md:text-4xl">MindMatch Quiz</h1>
          <p className="text-slate-600">Tune into how you feel today so we can suggest the most supportive read.</p>
        </div>
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onExit}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
        >
          Exit Quiz
        </motion.button>
      </div>

      <ProgressBar current={currentIndex} total={totalQuestions} />

      <QuestionCard question={questions[currentIndex]} onSelect={handleAnswer} />

      <div className="rounded-2xl bg-primary/5 p-4 text-sm text-slate-600">
        <p className="font-semibold text-primary-dark">How results are matched</p>
        <p>
          Each answer boosts one of the focus areas — anxiety, depression, trauma, motivation, or relationships. The area with
          the highest score unlocks your tailored book.
        </p>
      </div>

      <div className="hidden">
        {categories.join(', ')}
      </div>
    </div>
  );
}

export default QuizPage;
