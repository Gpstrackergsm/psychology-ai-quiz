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
        className="relative grid gap-12 overflow-hidden rounded-3xl border border-white/10 bg-mist/60 p-10 shadow-2xl shadow-primary/15 md:grid-cols-2 md:items-center"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-mist/90 via-midnight/95 to-[#050a1b]" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />

        <div className="relative space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-200">
            MindMatch
            <span className="hidden text-slate-400 md:inline">Focus Finder</span>
          </span>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Discover the workbook that matches your current mindset
          </h1>
          <p className="text-base leading-relaxed text-slate-300 md:text-lg">
            MindMatch is a single, intentionally crafted self-assessment. In just twelve questions we pinpoint the emotional focus
            you would benefit from exploring and pair it with a practical resource you can dive into today.
          </p>
          <div className="flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-light" aria-hidden="true" />Evidence-informed prompts
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-light" aria-hidden="true" />No account required
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-light" aria-hidden="true" />Ready in minutes
            </span>
          </div>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStart}
            className="inline-flex items-center justify-center rounded-full bg-primary-light px-8 py-3 text-sm font-semibold text-mist shadow-lg shadow-primary/30 transition hover:bg-primary"
          >
            Take the MindMatch Quiz
          </motion.button>
        </div>

        <div className="relative space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 shadow-inner shadow-black/20 backdrop-blur">
          <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200">
            <h2 className="text-base font-semibold text-white">What to expect</h2>
            <ul className="space-y-3">
              {steps.map((step) => (
                <li key={step.title} className="flex gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-primary-light" aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-semibold text-white">{step.title}</span>
                    <span className="mt-1 block text-sm text-slate-300">{step.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <dl className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-center shadow-sm md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <dt className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">{stat.label}</dt>
                <dd className="text-2xl font-semibold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <div className="space-y-2 text-xs text-slate-400">
            <p className="font-semibold uppercase tracking-[0.4em] text-slate-500">Trusted by teams supporting</p>
            <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.35em] text-slate-500">
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
            <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">Why professionals choose MindMatch</h2>
            <p className="max-w-2xl text-sm text-slate-300 md:text-base">
              Each prompt is written with a coaching mindset, helping you move from awareness to action without overwhelming you with
              choices or jargon.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
            No filler content
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-primary/20"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/20 blur-3xl transition group-hover:bg-primary/30" aria-hidden="true" />
              <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 font-semibold text-primary-light">
                {feature.title[0]}
              </div>
              <div className="relative space-y-2">
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="process"
        className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/20 backdrop-blur md:grid-cols-[0.8fr,1.2fr]"
      >
        <div className="space-y-3">
          <h2 className="font-display text-2xl font-semibold text-white">How it works</h2>
          <p className="text-sm text-slate-300 md:text-base">
            We streamlined the experience so you can stay present with your answers. There are no ads, no surprise upsells, and no
            confusing detours—just a guided path toward your next step.
          </p>
        </div>
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner shadow-black/20 transition hover:border-primary/40"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/30 text-sm font-semibold text-white">
                {index + 1}
              </span>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-slate-300">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="start"
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary-dark via-midnight to-[#050a1b] p-8 text-center text-slate-100 shadow-2xl shadow-primary/20 md:p-10"
      >
        <div className="pointer-events-none absolute -left-20 top-10 h-40 w-40 rounded-full bg-primary-light/40 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-52 w-52 rounded-full bg-accent/30 blur-3xl" aria-hidden="true" />
        <div className="relative">
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
            className="mt-6 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-10 py-3 text-sm font-semibold text-white transition hover:border-transparent hover:bg-white hover:text-midnight"
          >
            Start the Focus Finder
          </motion.button>
        </div>
      </section>
    </motion.section>
  );
}

export default LandingPage;
