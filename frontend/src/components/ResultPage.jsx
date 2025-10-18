import { useEffect } from 'react';
import { motion } from 'framer-motion';

function ResultPage({ scores, category, onRetake, onBackHome }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = 'https://www.psychology.com.co/';
    }
  }, []);

  const shareMessage = category
    ? encodeURIComponent(`MindMatch highlighted ${category} as my focus area. Explore tailored support at Psychology.com.co.`)
    : encodeURIComponent('Discover insights about your emotional focus area with MindMatch.');
  const shareUrl = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.href : 'https://mindmatch.local'
  );

  return (
    <div className="space-y-6 md:space-y-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold text-slate-900 md:text-4xl">Your MindMatch Result</h1>
          <p className="text-slate-600">Here’s what your responses highlight—we’ll guide you to professional support next.</p>
        </div>
        <div className="flex gap-3">
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onRetake}
            className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-white px-5 py-2 text-sm font-semibold text-primary shadow-sm transition hover:bg-primary/5"
          >
            Retake Quiz
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBackHome}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            Back Home
          </motion.button>
        </div>
      </div>

      <div className="grid gap-6 rounded-3xl bg-primary/10 p-6 text-slate-700 md:grid-cols-2 md:p-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-dark">Your top focus</p>
          <h2 className="font-display text-3xl font-bold text-primary-dark">
            {category ? `You might be dealing with ${category}.` : 'We need a little more info.'}
          </h2>
          <p>
            {category
              ? `We’re redirecting you to resources that can help you navigate ${category.toLowerCase()} with confidence and compassion.`
              : 'Try retaking the quiz to receive clearer insight into your current focus area.'}
          </p>
        </div>
        <div className="space-y-4 rounded-2xl bg-white/70 p-4 shadow-inner">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Category scores</p>
          <ul className="space-y-2 text-sm text-slate-600">
            {Object.entries(scores).map(([key, value]) => (
              <li key={key} className="flex items-center justify-between rounded-xl bg-white/70 px-3 py-2">
                <span className="font-medium text-slate-700">{key}</span>
                <span className="font-semibold text-primary">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-6 text-center text-slate-600 shadow-md">
        Redirecting you to <a href="https://www.psychology.com.co/" className="font-semibold text-primary underline" target="_blank" rel="noopener noreferrer">Psychology.com.co</a>{' '}
        for more tailored guidance.
      </div>

      <div className="flex flex-wrap items-center gap-4 rounded-3xl bg-white/90 p-5 shadow-inner">
        <span className="text-sm font-semibold text-slate-600">Share your result</span>
        <div className="flex flex-wrap gap-3">
          <motion.a
            href={`https://twitter.com/intent/tweet?text=${shareMessage}&url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-full bg-[#1DA1F2]/90 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1DA1F2]"
          >
            Share on Twitter
          </motion.a>
          <motion.a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-full bg-[#1877F2]/90 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1877F2]"
          >
            Share on Facebook
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
