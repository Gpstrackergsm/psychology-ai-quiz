import { motion } from 'framer-motion';

const features = [
  {
    title: 'Personalized insights',
    description:
      'Answer a focused set of questions and receive a curated summary of the emotional themes that matter most right now.'
  },
  {
    title: 'Actionable next steps',
    description:
      'Receive a workbook recommendation crafted to help you translate your quiz results into meaningful daily practices.'
  },
  {
    title: 'Clinically informed voice',
    description:
      'Our assessment is written with input from therapists and peer supporters who value compassion, clarity, and practical guidance.'
  }
];

const steps = [
  {
    title: 'Pause with intention',
    description: 'Take a mindful moment and reflect on how you have been feeling over the last few weeks.'
  },
  {
    title: 'Work through twelve prompts',
    description: 'Explore mood, habits, and relationships with questions designed to surface helpful patterns.'
  },
  {
    title: 'Review your tailored focus',
    description: 'Unlock a workbook that matches your results and offers immediate, empathetic next steps.'
  }
];

const stats = [
  { value: '12', label: 'Guided questions' },
  { value: '5 min', label: 'Average completion time' },
  { value: '1', label: 'Personalized workbook' }
];

function LandingPage({ containerVariants, onStart }) {
  return (
    <motion.section
      key="landing"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-20 md:space-y-24"
    >
      <section
        id="overview"
        className="grid gap-12 rounded-3xl bg-gradient-to-br from-white via-slate-50 to-slate-100 p-10 shadow-sm md:grid-cols-2 md:items-center"
      >
        <div className="space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
            MindMatch
            <span className="hidden text-primary/70 md:inline">Focus Finder</span>
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Discover the workbook that matches your current mindset
          </h1>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            MindMatch is a single, intentionally crafted self-assessment. In just twelve questions we pinpoint the emotional focus
            you would benefit from exploring and pair it with a practical resource you can dive into today.
          </p>
          <div className="flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />Evidence-informed prompts
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />No account required
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />Ready in minutes
            </span>
          </div>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStart}
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark"
          >
            Take the MindMatch Quiz
          </motion.button>
        </div>

        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-6 text-sm text-slate-600 shadow-inner">
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 text-slate-600">
            <h2 className="text-base font-semibold text-slate-900">What to expect</h2>
            <ul className="space-y-3">
              {steps.map((step) => (
                <li key={step.title} className="flex gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-semibold text-slate-900">{step.title}</span>
                    <span className="mt-1 block text-sm text-slate-600">{step.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <dl className="grid gap-4 rounded-2xl bg-white/70 p-4 text-center shadow-sm md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <dt className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">{stat.label}</dt>
                <dd className="text-2xl font-semibold text-slate-900">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <div className="space-y-2 text-xs text-slate-500">
            <p className="font-semibold uppercase tracking-[0.4em] text-slate-400">Trusted by teams supporting</p>
            <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.35em] text-slate-400">
              <span>Employee well-being</span>
              <span>University counseling</span>
              <span>Peer support networks</span>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-slate-900 md:text-3xl">Why professionals choose MindMatch</h2>
            <p className="max-w-2xl text-sm text-slate-600 md:text-base">
              Each prompt is written with a coaching mindset, helping you move from awareness to action without overwhelming you with
              choices or jargon.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
            No filler content
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group space-y-4 rounded-2xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                {feature.title[0]}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="process"
        className="grid gap-8 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm md:grid-cols-[0.8fr,1.2fr]"
      >
        <div className="space-y-3">
          <h2 className="font-display text-2xl font-semibold text-slate-900">How it works</h2>
          <p className="text-sm text-slate-600 md:text-base">
            We streamlined the experience so you can stay present with your answers. There are no ads, no surprise upsells, and no
            confusing detours—just a guided path toward your next step.
          </p>
        </div>
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm transition hover:border-primary/40"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                {index + 1}
              </span>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="start"
        className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center text-slate-100 shadow-lg md:p-10"
      >
        <h2 className="font-display text-2xl font-semibold md:text-3xl">Ready to begin?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
          MindMatch exists to reduce decision fatigue. There is only one assessment here—and it already works. Start the quiz to
          see which workbook will support your growth today.
        </p>
        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStart}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-10 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
        >
          Start the Focus Finder
        </motion.button>
      </section>
    </motion.section>
  );
}

export default LandingPage;
