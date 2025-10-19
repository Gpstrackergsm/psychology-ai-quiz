import { motion } from 'framer-motion';

const features = [
  {
    title: 'Personalized insights',
    description:
      'Answer just a handful of questions and we will highlight the emotional focus that deserves your attention right now.'
  },
  {
    title: 'Actionable next steps',
    description:
      'Receive a workbook recommendation crafted to help you translate your quiz results into meaningful daily practices.'
  },
  {
    title: 'Built with empathy',
    description:
      'Our assessment is written by mental health advocates who value compassion, clarity, and practical guidance.'
  }
];

const steps = [
  'Set aside three mindful minutes to focus on how you have been feeling lately.',
  'Work through twelve thoughtful questions covering mood, habits, and relationships.',
  'Review your focus area and download the workbook that best fits your current season.'
];

function LandingPage({ containerVariants, onStart }) {
  return (
    <motion.section
      key="landing"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-16"
    >
      <section className="grid gap-10 rounded-3xl bg-gradient-to-br from-white via-slate-50 to-slate-100 p-10 shadow-sm md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">MindMatch</p>
          <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Discover the workbook that matches your current mindset
          </h1>
          <p className="text-base text-slate-600 md:text-lg">
            The MindMatch Focus Finder is our single, lovingly crafted self-assessment. In just twelve questions we pinpoint the
            emotional focus you would benefit from exploring and pair it with a practical resource you can dive into today.
          </p>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStart}
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark"
          >
            Take the MindMatch Quiz
          </motion.button>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 text-sm text-slate-600 shadow-inner">
          <h2 className="text-base font-semibold text-slate-900">What to expect</h2>
          <ul className="space-y-3">
            {steps.map((step) => (
              <li key={step} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-500">No advertisements, no distractions—just one guided experience to help you move forward.</p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm transition hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
            <p className="text-sm leading-relaxed">{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-dashed border-primary/40 bg-primary/5 p-8 text-center">
        <h2 className="font-display text-2xl font-semibold text-slate-900 md:text-3xl">Ready to begin?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
          MindMatch exists to reduce decision fatigue. There is only one assessment here—and it already works. Start the quiz to
          see which workbook will support your growth today.
        </p>
        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStart}
          className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-10 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark"
        >
          Start the Focus Finder
        </motion.button>
      </section>
    </motion.section>
  );
}

export default LandingPage;
