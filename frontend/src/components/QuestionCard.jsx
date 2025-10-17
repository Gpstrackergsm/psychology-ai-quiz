import { motion } from 'framer-motion';

function QuestionCard({ question, onSelect }) {
  return (
    <div className="space-y-6">
      <motion.h2
        key={question.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-2xl font-semibold text-slate-900 md:text-3xl"
      >
        {question.prompt}
      </motion.h2>
      <div className="grid gap-4 md:grid-cols-2">
        {question.options.map((option) => (
          <motion.button
            key={option.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(option)}
            className="group flex items-start gap-3 rounded-2xl border border-transparent bg-slate-50 p-5 text-left text-slate-700 shadow-sm transition hover:border-primary/40 hover:bg-white hover:shadow-lg"
          >
            <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
              {option.label}
            </span>
            <span className="text-base font-medium text-slate-800">{option.text}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
