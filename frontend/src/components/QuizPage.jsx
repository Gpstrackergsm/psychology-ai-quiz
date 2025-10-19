import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import ProgressBar from './ProgressBar.jsx';
import QuestionCard from './QuestionCard.jsx';

function QuizPage({ containerVariants, questions, onComplete, onExit }) {
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
    <motion.section
      key="quiz"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-12"
    >

      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[2fr_1fr] lg:items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-3">
                <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  MindMatch Focus Finder
                </h1>
                <p className="max-w-2xl text-base text-slate-600 md:text-lg">
                  “Know thyself” is a great rule of thumb. Spend about three minutes with this guided check-in to surface the
                  emotional focus most present today. Each response helps us align you with Psychology.com.co resources and
                  workbooks that match your needs.
                </p>
              </div>
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onExit}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-primary hover:text-primary-dark"
              >
                Return to directory
              </motion.button>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-slate-500">
              <span>12 Questions</span>
              <span className="text-slate-300">•</span>
              <span>3 Minute self-test</span>
              <span className="text-slate-300">•</span>
              <span>No sign-in required</span>
            </div>
          </div>

          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm">
            <ProgressBar current={currentIndex} total={totalQuestions} />
            <QuestionCard question={questions[currentIndex]} onSelect={handleAnswer} />
          </div>

          <div className="space-y-3 rounded-3xl bg-slate-50 p-6 text-sm text-slate-600">
            <p className="font-semibold uppercase tracking-widest text-slate-500">How your match is determined</p>
            <p>
              Each answer adds points to a core support area. When you submit all responses, the highest score reveals today’s
              focus and unlocks a book recommendation sourced from Psychology.com.co.
            </p>
            <ul className="grid gap-2 text-slate-600 sm:grid-cols-2">
              {categories.map((category) => (
                <li key={category} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-medium text-slate-700">{category}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-6 rounded-3xl bg-slate-50 p-6 text-sm text-slate-600">
          <div className="space-y-3">
            <h2 className="text-base font-semibold uppercase tracking-widest text-slate-500">About this self-test</h2>
            <p>
              This MindMatch assessment mirrors the Psychology Today test experience, offering a compassionate snapshot of your
              current mindset. Use it for insight, not diagnosis, and bring your results to a trusted professional if you’d like
              ongoing support.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-700">What you’ll receive</h3>
            <ul className="space-y-2 text-slate-600">
              <li>• A highlight of today’s most activated emotional focus.</li>
              <li>• Category-by-category scoring to understand your patterns.</li>
              <li>• A Psychology.com.co workbook suggestion tailored to your result.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-4 text-slate-600 shadow-sm">
            <p className="font-semibold text-slate-700">Need additional guidance?</p>
            <p>
              Explore the “Find a Therapist” directory or browse more self-tests to keep learning about your emotional health.
            </p>
          </div>
        </aside>
      </div>

    </motion.section>
  );
}

export default QuizPage;
