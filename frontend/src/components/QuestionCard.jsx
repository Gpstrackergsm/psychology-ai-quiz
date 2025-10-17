import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const optionVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index }
  })
};

const QuestionCard = ({ question, selectedCategory, onSelect }) => {
  return (
    <div className="space-y-6">
      <p className="text-slate-600 text-lg">{question.description}</p>
      <div className="grid gap-4">
        {question.options.map((option, index) => {
          const isActive = selectedCategory === option.category;
          return (
            <motion.button
              key={option.label}
              custom={index}
              variants={optionVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onSelect(option.category)}
              className={`text-left px-6 py-4 rounded-2xl border transition shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                isActive
                  ? 'border-primary bg-primary/10 text-primary font-semibold'
                  : 'border-slate-200 bg-white text-slate-700'
              }`}
            >
              <span className="block text-base md:text-lg">{option.label}</span>
              <span className="mt-2 block text-sm text-slate-500">
                {option.helper}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

QuestionCard.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    prompt: PropTypes.string.isRequired,
    description: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        helper: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired,
  selectedCategory: PropTypes.string,
  onSelect: PropTypes.func.isRequired
};

export default QuestionCard;
