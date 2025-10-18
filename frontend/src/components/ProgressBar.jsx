import { motion } from 'framer-motion';

function ProgressBar({ current, total }) {
  const progress = Math.round(((current + 1) / total) * 100);
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm font-medium text-slate-600">
        <span>
          Question {current + 1} of {total}
        </span>
        <span>{progress}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200">
        <motion.div
          className="h-2 rounded-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: 'easeInOut', duration: 0.4 }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
