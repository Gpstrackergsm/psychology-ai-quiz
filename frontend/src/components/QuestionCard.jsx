import { motion } from 'framer-motion';

function QuestionCard({ question, onSelect }) {
  return (
    <div className="space-y-6">
      <motion.h2
        key={question.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-2xl font-semibold text-white md:text-3xl"
      >
        {question.prompt}
      </motion.h2>
      <div className="space-y-3">
        {question.options.map((option) => (
          <motion.button
            key={option.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(option)}
            className="group flex w-full items-start gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-left text-slate-200 shadow-lg shadow-black/20 transition hover:border-primary/50 hover:bg-white/20 hover:text-white"
          >
            <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 font-semibold text-white">
              {option.label}
            </span>
            <span className="text-base font-medium text-white">{option.text}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
