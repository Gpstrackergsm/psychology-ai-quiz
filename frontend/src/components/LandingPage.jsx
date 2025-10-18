import { motion } from 'framer-motion';
import SiteFooter from './SiteFooter.jsx';
import SiteHeader from './SiteHeader.jsx';

const categoryFilters = ['All', 'Career', 'Health', 'IQ', 'Personality', 'Relationships'];

const mostPopularTests = [
  {
    title: 'Passive Aggression Test',
    subtitle: 'Could you be passive-aggressive?',
    credit: 'Studio Peace/Shutterstock'
  },
  {
    title: 'Self-Esteem Test',
    subtitle: 'Do you have healthy self-esteem?',
    credit: 'Victor Torres / Stocksy'
  },
  {
    title: 'Your Mental Health Today Test',
    subtitle: 'How well do you cope?',
    credit: 'Hugo Felix / Shutterstock'
  },
  {
    title: 'Depression Test',
    subtitle: 'Are you experiencing depression?',
    credit: 'Rommel Canlas / Shutterstock'
  }
];

const featuredTests = [
  {
    title: 'Borderline Personality Disorder Test',
    subtitle: 'Do you know someone with borderline personality disorder?',
    credit: 'Drazen Zigic/Shutterstock'
  },
  {
    title: 'Body Dysmorphia Test',
    subtitle: 'Do you struggle with body dysmorphia?',
    credit: 'Tatyana Dzemileva/Shutterstock'
  },
  {
    title: 'Emotional Availability Test',
    subtitle: 'How emotionally available are you?',
    credit: 'PeopleImages.com - Yuri A/Shutterstock'
  },
  {
    title: 'Sexual Satisfaction Test',
    subtitle: 'How satisfying is your sex life?',
    credit: 'KinoMastersKaya/Shutterstock'
  },
  {
    title: 'Highly Sensitive Person Test',
    subtitle: 'Are you highly sensitive?',
    credit: 'ViDI Studio/Shutterstock'
  },
  {
    title: 'Post-Traumatic Stress Disorder Test',
    subtitle: 'Could you be experiencing PTSD?',
    credit: 'New Africa / Shutterstock'
  },
  {
    title: 'Self-Disclosure Test',
    subtitle: 'Are you sharing too much, or not enough?',
    credit: 'Natalia Kabliuk/Shutterstock'
  },
  {
    title: 'Goal-Setting Test',
    subtitle: 'Can you set goals effectively?',
    credit: 'insta_photos/Shutterstock'
  }
];

const moreFreeTests = [
  'Addiction Test',
  'ADHD in Children Test',
  'ADHD Test',
  'Agreeableness Test',
  'Alcohol Use Test',
  'All-or-Nothing Thinking Test',
  'Ambition Test',
  'Analytical vs. Intuitive Thinking Test',
  'Anger Management Test',
  'Are You a Good First Date?',
  'Are You Being Love Bombed?',
  'Are You Boring?',
  'Assertiveness Test',
  'Attention Span Test',
  'Authoritative Parenting Test',
  'Autism Test',
  'Bipolar Disorder Test',
  'Blood Pressure Quiz',
  'Body Dysmorphia Test',
  'Borderline Personality Disorder Test',
  'Boundaries Test',
  'Brain Fog Test',
  'Brave Heart Test',
  'Buddhist Psychology Test',
  'Burnout Test',
  'Cannabis Use Test',
  'Catastrophizing Test',
  'Celebrity Obsession Test',
  'Charisma Test',
  'Chronotype Test',
  'Climate Anxiety Test',
  'Comfort With Singlehood Test',
  'Complex Post-Traumatic Stress Disorder Test',
  'Conduct Disorder Test',
  'Conflict Avoidance Test',
  'Conscientiousness Test',
  'Creative Problem-Solving Test',
  'Cynicism Test',
  'Dementia Test',
  'Dependent Personality Disorder Test',
  'Depression Test',
  'Discounting the Positives Test',
  'Disgust Tolerance Test',
  'Disordered Eating Test',
  'Divorce Test',
  'Do I Need Therapy?',
  'Does Worrying Affect Your Health?',
  'Emotion Regulation Test',
  'Emotional Abuse Test',
  'Emotional Availability Test',
  'Emotional Eating Test',
  'Emotional Intelligence Test',
  'Emotional Stability Test',
  'Empathy Test',
  'Entrepreneurship Test',
  'Executive Function Test',
  'Exercise Savvy',
  'Family Estrangement Test — Adult Child',
  'Fitness',
  'Flirting Personality Test (Men)',
  'Flirting Personality Test (Women)',
  'Flow Test',
  'Forgiveness Test',
  'Gambling Test',
  'Gaslighting Test',
  'Gender Roles Test — Men',
  'Gender Roles Test — Women',
  'Generalized Anxiety Disorder Test',
  'Goal-Setting Test',
  'Gratitude Test',
  'Grit Test',
  'Growth Mindset Test',
  'Guilt Test',
  'Gullibility Test',
  'Healthy Lifestyle Test',
  'Helicopter Parenting Test',
  'Highly Sensitive Person Test',
  'Histrionic Personality Disorder Test',
  'Hoarding Test',
  'How Controlling Are You?',
  'How Ethical Are You?',
  'How Stressed Are You?',
  'Hypoactive Sexual Desire Disorder Test',
  'Hypochondria Test',
  'Imposter Syndrome Test',
  'Insecurity Test',
  'Interpersonal Communication Skills Test',
  'Introversion / Extroversion Test',
  'Intuition Test',
  'Is Your Adult Child Stuck?',
  'Jealousy Test (Men)',
  'Jealousy Test (Women)',
  'Judgmentalism Test',
  'Kindness Test',
  'Limerence Test',
  'Listening Skills Test',
  'Locus of Control Test',
  'Loneliness Test',
  'Machiavellianism Test',
  'Magical Thinking Test',
  'Materialism Test',
  'Memory Test',
  'Menopause Test',
  'Mental Processing Test',
  'Micromanager Test',
  'Mindfulness Test',
  'Minimizer Thinking Test',
  'Narcissism Test',
  'Narcissistic Partner Test',
  'Negotiation Skills Test',
  'Neuroticism Test',
  'Nutrition (Vitamin) Test',
  'Nutrition Quotient',
  'OCD Test',
  'Online Behavior Test',
  'Online Grooming Risk',
  'Openness to Experience Test',
  'Optimism Test',
  'Osteoporosis Quiz',
  'Overfunctioning Test',
  'Paranoid Personality Disorder Test',
  'Passive Aggression Test',
  'People Pleasing Test',
  'Perfectionism Test',
  'Performance Anxiety Test',
  'Pessimism Test',
  'PMDD Test',
  'Polyamory Test',
  'Positive Aging Test',
  'Post-Traumatic Stress Disorder Test',
  'Postpartum Depression Test',
  'Procrastination Test',
  'Prolonged Grief Test',
  'Psychopath In Your Life Test',
  'Psychopathy Test',
  'Rejection Sensitivity Test',
  'Relationship Attachment Test',
  'Relationship Commitment Test',
  'Relationship Satisfaction Test',
  'Relationship with Food Test',
  'Resilience Test',
  'Romantic Personality Test',
  'Romantic Space',
  'Roommate IQ',
  'Sarcasm Test',
  'Seasonal Affective Disorder Test',
  'Self-Disclosure Test',
  'Self-Esteem Test',
  'Sensation-Seeking Test',
  'Sex Personality Test',
  'Sexual Openness Test',
  'Sexual Satisfaction Test',
  'Shame Test',
  'Should You See a Chiropractor?',
  'Should You See an Acupuncturist?',
  'Sleep Habits Test',
  'Social Anxiety Test',
  'Social Skills Test',
  'Success Likelihood Test',
  'Team Player Test',
  'Therapeutic Alliance Test',
  'Time Management Test',
  'Victim Mindset Test',
  'Video Gaming Test',
  'Visionary Leadership Test',
  'Vulnerability Test',
  'Wisdom Test',
  'Workaholic Test',
  'Your Mental Health Today Test'
];

const allTestsCatalog = [
  'Accident Proneness Test',
  'Addiction Test',
  'ADHD in Children Test',
  'ADHD Test',
  'Adventurousness Test',
  'Agreeableness Test',
  'Alcohol Use Test',
  'All-or-Nothing Thinking Test',
  'Ambition Test',
  'Analytical vs. Intuitive Thinking Test',
  'Anger Management Test',
  'Are You a Good First Date?',
  'Are You Being Love Bombed?',
  'Are You Boring?',
  'Arguing Style',
  'Assertiveness Test',
  'Attention Span Test',
  'Authoritative Parenting Test',
  'Autism Test',
  'Bipolar Disorder Test',
  'Blood Pressure Quiz',
  'Body Dysmorphia Test',
  'Borderline Personality Disorder Test',
  'Boundaries Test',
  'Brain Fog Test',
  'Brave Heart Test',
  'Buddhist Psychology Test',
  'Burnout Test',
  'Cannabis Use Test',
  'Career Advancement',
  'Career Personality & Aptitude Test',
  'Caregiving',
  'Catastrophizing Test',
  'Celebrity Obsession Test',
  'Charisma Test',
  'Chronotype Test',
  'Classical IQ Test',
  'Climate Anxiety Test',
  'Comfort With Singlehood Test',
  'Complex Post-Traumatic Stress Disorder Test',
  'Concentration',
  'Conduct Disorder Test',
  'Conflict Avoidance Test',
  'Conscientiousness Test',
  'Coping Skills',
  'Creative Problem-Solving Test',
  'Criticism',
  'Cynicism Test',
  'Dementia Test',
  'Dependent Personality Disorder Test',
  'Depression Test',
  'Diet & Weight Loss Test',
  'Discounting the Positives Test',
  'Disgust Tolerance Test',
  'Disordered Eating Test',
  'Divorce Test',
  'Do I Need Therapy?',
  'Does Worrying Affect Your Health?',
  'Driving Personality',
  'Egoism vs. Altruism',
  'Emotion Regulation Test',
  'Emotional Abuse Test',
  'Emotional Availability Test',
  'Emotional Eating Test',
  'Emotional Intelligence Test',
  'Emotional Stability Test',
  'Empathy Test',
  'Entrepreneurship Test',
  'Executive Function Test',
  'Exercise Savvy',
  'Family Estrangement Test — Adult Child',
  'Fitness',
  'Flirting Personality Test (Men)',
  'Flirting Personality Test (Women)',
  'Flow Test',
  'Forgiveness Test',
  'Frail or Hardy?',
  'Gambling Test',
  'Gaslighting Test',
  'Gender Roles Test — Men',
  'Gender Roles Test — Women',
  'Generalized Anxiety Disorder Test',
  'Goal-Setting Test',
  'Gratitude Test',
  'Grit Test',
  'Growth Mindset Test',
  'Guilt Test',
  'Gullibility Test',
  'Happiness Quiz',
  'Healthy Lifestyle Test',
  'Helicopter Parenting Test',
  'Highly Sensitive Person Test',
  'Histrionic Personality Disorder Test',
  'Hoarding Test',
  'Hostility',
  'How Controlling Are You?',
  'How Ethical Are You?',
  'How Stressed Are You?',
  'Hypoactive Sexual Desire Disorder Test',
  'Hypochondria Test',
  'Imposter Syndrome Test',
  'Insecurity Test',
  'Integrity and Work Ethics Test',
  'Interpersonal Communication Skills Test',
  'Introversion / Extroversion Test',
  'Intuition Test',
  'Is Your Adult Child Stuck?',
  'Jealousy - Gay Men',
  'Jealousy - Lesbians',
  'Jealousy Test (Men)',
  'Jealousy Test (Women)',
  'Judgmentalism Test',
  'Kindness Test',
  'Limerence Test',
  'Listening Skills Test',
  'Locus of Control Test',
  'Logic IQ Test',
  'Loneliness Test',
  'Love Diagnostics',
  'Machiavellianism Test',
  'Magical Thinking Test',
  'Management Skills and Styles Assessment - Lite',
  'Materialism Test',
  'Memory Test',
  'Menopause Test',
  'Mental Processing Test',
  'Micromanager Test',
  'Mindfulness Test',
  'Minimizer Thinking Test',
  'Motivation & Needs Test',
  'Narcissism Test',
  'Narcissistic Partner Test',
  'Negotiation Skills Test',
  'Neuroticism Test',
  'Non-verbal IQ',
  'Nutrition (Vitamin) Test',
  'Nutrition Quotient',
  'OCD Test',
  'Online Behavior Test',
  'Online Grooming Risk',
  'Openness to Experience Test',
  'Optimism Test',
  'Organization Skills Test (Personal Life Version)',
  'Organization Skills Test (Version For Workers & Students)',
  'Osteoporosis Quiz',
  'Overfunctioning Test',
  'Paranoid Personality Disorder Test',
  'Passive Aggression Test',
  'People Pleasing Test',
  'Perfectionism Test',
  'Performance Anxiety Test',
  'Pessimism Test',
  'PMDD Test',
  'Polyamory Test',
  'Positive Aging Test',
  'Post-Traumatic Stress Disorder Test',
  'Postpartum Depression Test',
  'Procrastination Test',
  'Prolonged Grief Test',
  'Psychopath In Your Life Test',
  'Psychopathy Test',
  'Rejection Sensitivity Test',
  'Relationship Attachment Test',
  'Relationship Commitment Test',
  'Relationship Satisfaction - Couples With Kids',
  'Relationship Satisfaction Test',
  'Relationship with Food Test',
  'Resilience Test',
  'Romantic Personality Test',
  'Romantic Space',
  'Roommate IQ',
  'Sarcasm Test',
  'Seasonal Affective Disorder Test',
  'Self Disclosure - Couples',
  'Self-Care Test',
  'Self-Control and Self-Monitoring Test',
  'Self-Disclosure Test',
  'Self-Esteem Test',
  'Sensation-Seeking Test',
  'Sensuality',
  'Sex Personality Test',
  'Sexual Openness Test',
  'Sexual Satisfaction Test',
  'Shame Test',
  'Should You See a Chiropractor?',
  'Should You See an Acupuncturist?',
  'Sleep Habits Test',
  'Social Anxiety Test',
  'Social Skills Test',
  'Spatial IQ',
  'Success Likelihood Test',
  'Team Player Test',
  'Team Roles Test',
  'Therapeutic Alliance Test',
  'Time Management Test',
  'Type-A Personality',
  'Verbal IQ',
  'Victim Mindset Test',
  'Video Gaming Test',
  'Visionary Leadership Test',
  'Vulnerability Test',
  'What Type of Smart Are You?',
  "What's Your Personality Type?",
  'Wisdom Test',
  'Workaholic Test',
  'Your Mental Health Today Test'
];

function LandingPage({ containerVariants, onStart }) {
  return (
    <motion.section
      key="landing"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-14 rounded-3xl bg-white/95 p-6 shadow-xl backdrop-blur md:p-12"
    >
      <SiteHeader breadcrumbs={['Self Tests', 'Mental Health and Personality Tests']} />

      <section className="space-y-4">
        <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Mental Health and Personality Tests
        </h1>
        <p className="max-w-3xl text-base text-slate-600 md:text-lg">
          “Know thyself” is a great rule of thumb. If you’d like to explore your personality traits, assess possible symptoms of a
 mental health condition, evaluate your conflict style, romantic impulses or more, we’re here to help. Each quiz contains 20
 questions and takes about 3 minutes to complete.
        </p>
        <div className="flex flex-wrap gap-2">
          {categoryFilters.map((filter) => (
            <span
              key={filter}
              className={`rounded-full px-4 py-1 text-sm font-semibold ${filter === 'All' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600'}`}
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
            <article key={test.title} className="flex gap-4 rounded-2xl border border-slate-200 p-5 shadow-sm">
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
            <article key={test.title} className="flex gap-4 rounded-2xl border border-slate-200 p-5 shadow-sm">
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

      <SiteFooter />

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
          className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-w
hite shadow-lg shadow-primary/30 transition hover:bg-primary-dark"
        >
          Take the MindMatch Quiz
        </motion.button>
      </section>
    </motion.section>
  );
}

export default LandingPage;
