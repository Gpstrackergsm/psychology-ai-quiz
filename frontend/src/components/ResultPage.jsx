import { useMemo } from 'react';
import { motion } from 'framer-motion';
import BookRecommendation from './BookRecommendation.jsx';

const relatedQuizzes = [
  {
    id: 'attachment-style',
    title: 'Attachment Style Reset',
    subtitle: 'Discover your bonding blueprint',
    image:
      'https://images.pexels.com/photos/4021813/pexels-photo-4021813.jpeg?auto=compress&cs=tinysrgb&h=320&w=320',
    href: '#attachment-style-reset'
  },
  {
    id: 'burnout-scan',
    title: 'Burnout Recovery Scan',
    subtitle: 'Gauge your current energy reserves',
    image:
      'https://images.pexels.com/photos/4021814/pexels-photo-4021814.jpeg?auto=compress&cs=tinysrgb&h=320&w=320',
    href: '#burnout-recovery-scan'
  },
  {
    id: 'self-compassion',
    title: 'Self-Compassion Snapshot',
    subtitle: 'See how kind you are to yourself',
    image:
      'https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&h=320&w=320',
    href: '#self-compassion-snapshot'
  }
];

function ResultPage({ containerVariants, scores, category, onRetake, onBackHome }) {
  const sortedScoreEntries = useMemo(() => {
    const entries = Object.entries(scores ?? {});

    if (entries.length === 0) {
      return [];
    }

    return entries.sort((a, b) => b[1] - a[1]);
  }, [scores]);

  const shareMessage = category
    ? encodeURIComponent(
        `MindMatch highlighted ${category} as my focus area. Explore tailored support at Psychology.com.co.`
      )
    : encodeURIComponent('Discover insights about your emotional focus area with MindMatch.');

  const shareUrl = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.href : 'https://mindmatch.local'
  );

  return (
    <motion.section
      key="result"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-12"
    >
      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[2fr_1fr] lg:items-start">
        <div className="space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-3">
              <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                MindMatch Focus Finder Results
              </h1>
              <p className="max-w-2xl text-base text-slate-600 md:text-lg">
                Here’s a snapshot of where your energy is concentrated today. Use this insight to guide a conversation with a
                therapist, explore new self-help resources, or simply acknowledge how you’re feeling.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onRetake}
                className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-white px-5 py-2 text-sm font-semibold text-primary shadow-sm transition hover:bg-primary/5"
              >
                Retake quiz
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onBackHome}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-primary hover:text-primary-dark"
              >
                Back to tests
              </motion.button>
            </div>
          </div>

          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-dark">Your spotlight</p>
              <h2 className="font-display text-3xl font-bold text-slate-900">
                {category ? `Your responses highlight ${category.toLowerCase()}.` : 'We need a little more information.'}
              </h2>
              <p className="text-sm text-slate-600 md:text-base">
                {category
                  ? `The elevated ${category.toLowerCase()} score suggests this is the area to prioritize. Below you’ll find a score breakdown and a handpicked resource to help you take the next step.`
                  : 'Retake the quiz to receive a clearer read on which emotional focus deserves your attention today.'}
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">Category scores</h3>
              {sortedScoreEntries.length > 0 ? (
                <ul className="grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                  {sortedScoreEntries.map(([key, value]) => (
                    <li
                      key={key}
                      className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-2"
                    >
                      <span className="font-medium text-slate-700">{key}</span>
                      <span className="font-semibold text-primary">{value}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="rounded-2xl border border-dashed border-slate-200 bg-white/60 px-4 py-3 text-sm text-slate-500">
                  Scores will appear here once you complete the assessment.
                </p>
              )}
            </div>
          </div>

          <BookRecommendation category={category} />
        </div>

        <aside className="space-y-6 rounded-3xl bg-slate-50 p-6 text-sm text-slate-600">
          <div className="space-y-3">
            <h2 className="text-base font-semibold uppercase tracking-widest text-slate-500">Share your results</h2>
            <div className="flex flex-wrap gap-3">
              <motion.a
                href={`https://twitter.com/intent/tweet?text=${shareMessage}&url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-600 transition hover:border-primary hover:text-primary-dark"
              >
                Share on X
              </motion.a>
              <motion.a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-600 transition hover:border-primary hover:text-primary-dark"
              >
                Share on Facebook
              </motion.a>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-700">What to do next</h3>
            <ul className="space-y-2 text-slate-600">
              <li>• Bookmark this snapshot and revisit in a few weeks to compare progress.</li>
              <li>• Bring your focus area into therapy or journaling for deeper exploration.</li>
              <li>• Explore additional Psychology Today self-tests to expand your self-awareness.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-4 text-slate-600 shadow-sm">
            <p className="font-semibold text-slate-700">Need a professional partner?</p>
            <p>
              Visit the “Find a Therapist” directory for licensed experts who can help you move from insight to action.
            </p>
          </div>
        </aside>
      </div>

      <section className="space-y-5">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-dark">Keep exploring</p>
          <h2 className="font-display text-2xl font-bold text-slate-900 md:text-3xl">Related self-tests</h2>
          <p className="max-w-2xl text-sm text-slate-600 md:text-base">
            Continue your MindMatch journey with companion quizzes that explore resilience, relationships, and self-kindness.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {relatedQuizzes.map((quiz) => (
            <a
              key={quiz.id}
              href={quiz.href}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={quiz.image}
                  alt={quiz.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2 p-5">
                <h3 className="font-display text-lg font-semibold text-slate-900">{quiz.title}</h3>
                <p className="text-sm text-slate-600">{quiz.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </motion.section>
  );
}

export default ResultPage;
