import { motion } from 'framer-motion';

const featureHighlights = [
  {
    title: 'Evidence-informed guidance',
    description:
      'Each question in MindMatch is curated by psychologists and coaches who specialize in anxiety, trauma, grief, motivation, and relationships.'
  },
  {
    title: 'Personalized to your pace',
    description:
      'We synthesize your responses into an intuitive profile that highlights your dominant growth area and provides gentle next steps you can take today.'
  },
  {
    title: 'Ready for deeper support',
    description:
      'Your results point you toward a Psychology.com.co workbook so you can keep learning with practical exercises and professional insights.'
  }
];

const methodologyPillars = [
  {
    heading: 'Holistic emotional check-in',
    body:
      'We blend cognitive-behavioral prompts with reflective questions to capture how you think, feel, and behave in key life situations.'
  },
  {
    heading: 'Strengths-forward analysis',
    body:
      'Instead of pathologizing, MindMatch celebrates existing strengths and pinpoints the exact coaching focus that would amplify your momentum.'
  },
  {
    heading: 'Actionable recommendations',
    body:
      'You leave with a clear takeaway, tailored language to discuss your needs, and a professional workbook chosen to reinforce the breakthrough.'
  }
];

const clientTestimonials = [
  {
    quote:
      'MindMatch translated the jumble of emotions I had into a focused plan. The recommended workbook was like it was written for me.',
    name: 'Claudia, Bogotá'
  },
  {
    quote:
      'As a team lead, I needed clarity on burnout. The quiz was fast, compassionate, and gave me immediate tools to support my staff.',
    name: 'Mateo, Medellín'
  }
];

function LandingPage({ containerVariants, onStart }) {
  return (
    <motion.section
      key="landing"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-20 rounded-3xl bg-white/90 p-10 shadow-xl backdrop-blur md:p-14"
    >
      <div className="space-y-6 text-center md:space-y-8">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary-dark">
          Meet MindMatch
        </span>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Discover Your Personalized Mental Wellness Roadmap
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-600 md:text-xl">
          MindMatch is an adaptive self-discovery experience designed to translate how you are feeling into a clear plan of action. Take 5 thoughtful minutes to reflect, and we will connect you with the emotional growth area—and Psychology.com.co resource—that will serve you best right now.
        </p>
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center">
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStart}
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark"
          >
            Start the Quiz
          </motion.button>
          <span className="text-sm text-slate-500">
            No email required • Science-backed reflections • Takes under 7 minutes
          </span>
        </div>
      </div>

      <div className="space-y-10">
        <div className="grid gap-6 md:grid-cols-3">
          {featureHighlights.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white/70 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="font-semibold text-slate-900">{feature.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-primary/10 via-white to-primary/10 p-8 text-left shadow-inner md:p-10">
          <h2 className="font-display text-2xl font-bold text-slate-900 md:text-3xl">
            How the MindMatch methodology works
          </h2>
          <p className="mt-4 max-w-3xl text-base text-slate-600">
            We combine clinical expertise with coaching best practices to illuminate the next best step for your emotional wellbeing. Every result is grounded in modern psychology and delivered with warmth, clarity, and respect for your lived experience.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {methodologyPillars.map((pillar) => (
              <div key={pillar.heading} className="rounded-2xl bg-white/80 p-6 shadow">
                <h3 className="text-lg font-semibold text-slate-900">{pillar.heading}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.5fr,1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-8">
            <h2 className="font-display text-2xl font-bold text-slate-900 md:text-3xl">What you will walk away with</h2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600">
              <li className="flex gap-3">
                <span className="mt-1 text-lg" aria-hidden="true">
                  ✅
                </span>
                A prioritized emotional focus area—whether anxiety resilience, trauma healing, grief integration, motivation, or relationship harmony.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-lg" aria-hidden="true">
                  ✅
                </span>
                Language you can share with therapists, coaches, or trusted friends to describe what you are navigating and what support feels right.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-lg" aria-hidden="true">
                  ✅
                </span>
                A curated workbook recommendation from Psychology.com.co to help you deepen insights with guided exercises and professional wisdom.
              </li>
            </ul>
          </div>

          <div className="flex h-full flex-col justify-between gap-6 rounded-3xl bg-slate-900/90 p-8 text-white">
            <div>
              <h2 className="font-display text-2xl font-semibold">Trusted by reflective professionals</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                Leaders, parents, founders, and students across Colombia lean on MindMatch for quick clarity between therapy sessions or before starting a new support relationship.
              </p>
            </div>
            <div className="space-y-4">
              {clientTestimonials.map((testimonial) => (
                <figure key={testimonial.name} className="rounded-2xl bg-white/10 p-4">
                  <blockquote className="text-sm italic text-slate-100">“{testimonial.quote}”</blockquote>
                  <figcaption className="mt-3 text-xs uppercase tracking-wide text-primary-100">
                    {testimonial.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-primary/10 p-8 text-center shadow-inner md:p-12">
          <h2 className="font-display text-3xl font-bold text-slate-900 md:text-4xl">Invest a few minutes in your emotional clarity today</h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            Your answers remain private, and your insights are immediately actionable. Take the quiz now and explore a workbook that can support your next chapter.
          </p>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStart}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 font-semibold text-white shadow-lg shadow-primary/40 transition hover:bg-primary-dark"
          >
            Begin Your MindMatch Assessment
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}

export default LandingPage;
