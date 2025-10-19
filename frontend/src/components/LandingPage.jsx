import { motion } from 'framer-motion';
import {
  categoryFilters,
  featuredTests,
  mostPopularTests,
  moreFreeTests,
  allTestsCatalog
} from '../data/testDirectoryData.js';

const heroDescription =
  '“Know thyself” is a great rule of thumb. If you’d like to explore your personality traits, assess possible symptoms of a mental health condition, evaluate your conflict style, romantic impulses or more, we’re here to help. Each quiz contains 20 questions and takes about 3 minutes to complete.';

function LandingPage({ containerVariants, onStart }) {
  return (
    <motion.section
      key="landing"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-14"
    >
      <section className="space-y-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Self Tests &gt; Directory</p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Mental Health and Personality Tests
            </h1>
            <p className="max-w-3xl text-base text-slate-600 md:text-lg">{heroDescription}</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white/70 p-5 text-sm text-slate-600 shadow-sm"
          >
            <h2 className="text-base font-semibold text-slate-900">MindMatch Focus Finder</h2>
            <p>
              Start our in-house assessment inspired by Psychology Today’s testing suite. Answer 12 questions, discover your
              focus area, and receive an actionable workbook recommendation in minutes.
            </p>
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onStart}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white shadow-sm shadow-primary/40 transition hover:bg-primary-dark"
            >
              Take the MindMatch Quiz
            </motion.button>
          </motion.div>
        </div>
        <div className="flex flex-wrap gap-2">
          {categoryFilters.map((filter) => (
            <span
              key={filter}
              className={`rounded-full px-4 py-1 text-sm font-semibold ${
                filter === 'All' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600'
              }`}
            >
              {filter}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-xl font-semibold text-slate-900">Most Popular Tests</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {mostPopularTests.map((test) => (
            <article key={test.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm">
              <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-slate-100 text-xs font-semibold text-slate-500">
                {test.credit}
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-slate-900">{test.title}</h3>
                <p className="text-sm text-slate-600">{test.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-xl font-semibold text-slate-900">Featured Tests</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredTests.map((test) => (
            <article key={test.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm">
              <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-slate-100 text-xs font-semibold text-slate-500">
                {test.credit}
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-slate-900">{test.title}</h3>
                <p className="text-sm text-slate-600">{test.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-slate-900">More Free Tests</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {moreFreeTests.map((test) => (
            <span key={test} className="text-sm text-slate-600">
              {test}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <header className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
            <span>All Tests</span>
            {categoryFilters.map((filter) => (
              <span key={`all-${filter}`} className="rounded-full border border-slate-200 px-3 py-1 text-[11px] text-slate-500">
                {filter}
              </span>
            ))}
          </div>
        </header>
        <div className="grid gap-4 md:grid-cols-3">
          {allTestsCatalog.map((test) => (
            <span key={test} className="text-sm text-slate-600">
              {test}
            </span>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-primary/10 p-6 text-center">
        <h2 className="font-display text-2xl font-semibold text-slate-900 md:text-3xl">Ready to start your own assessment?</h2>
        <p className="mt-3 text-sm text-slate-600 md:text-base">
          Explore the MindMatch quiz for a guided experience tailored to your current emotional landscape. In just a few minutes,
          you will unlock a personalized recommendation and workbook suggestion.
        </p>
        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStart}
          className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark"
        >
          Take the MindMatch Quiz
        </motion.button>
      </section>
    </motion.section>
  );
}

export default LandingPage;
