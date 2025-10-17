const quizData = [
  {
    id: 'q1',
    prompt: 'How often do racing thoughts or worry loops make it hard to focus?',
    options: [
      { id: 'q1a', label: 'A', text: 'Most days — it feels nonstop.', category: 'Anxiety', value: 3 },
      { id: 'q1b', label: 'B', text: 'Sometimes, especially at night.', category: 'Trauma', value: 2 },
      { id: 'q1c', label: 'C', text: 'Rarely, I’m usually calm.', category: 'Motivation', value: 1 }
    ]
  },
  {
    id: 'q2',
    prompt: 'How would you describe your current energy and motivation levels?',
    options: [
      { id: 'q2a', label: 'A', text: 'Getting out of bed feels like a chore.', category: 'Depression', value: 3 },
      { id: 'q2b', label: 'B', text: 'I’m okay but could use a push.', category: 'Motivation', value: 2 },
      { id: 'q2c', label: 'C', text: 'I’m energized yet scattered.', category: 'Anxiety', value: 1 }
    ]
  },
  {
    id: 'q3',
    prompt: 'Which statement best captures your current relationships?',
    options: [
      { id: 'q3a', label: 'A', text: 'We’re stuck in repeating arguments.', category: 'Relationships', value: 3 },
      { id: 'q3b', label: 'B', text: 'I feel distant and disconnected.', category: 'Depression', value: 2 },
      { id: 'q3c', label: 'C', text: 'I avoid people to keep the peace.', category: 'Trauma', value: 2 }
    ]
  },
  {
    id: 'q4',
    prompt: 'What best describes your sleep lately?',
    options: [
      { id: 'q4a', label: 'A', text: 'Broken by nightmares or jolts awake.', category: 'Trauma', value: 3 },
      { id: 'q4b', label: 'B', text: 'Restless and hard to fall asleep.', category: 'Anxiety', value: 2 },
      { id: 'q4c', label: 'C', text: 'I sleep too much and still feel tired.', category: 'Depression', value: 2 }
    ]
  },
  {
    id: 'q5',
    prompt: 'When facing a big goal, what usually happens?',
    options: [
      { id: 'q5a', label: 'A', text: 'I plan but rarely follow through.', category: 'Motivation', value: 3 },
      { id: 'q5b', label: 'B', text: 'I feel anxious and overthink everything.', category: 'Anxiety', value: 2 },
      { id: 'q5c', label: 'C', text: 'I lean on others to take the lead.', category: 'Relationships', value: 2 }
    ]
  },
  {
    id: 'q6',
    prompt: 'How does your body react when you remember a tough moment?',
    options: [
      { id: 'q6a', label: 'A', text: 'My heart races and I feel on high alert.', category: 'Trauma', value: 3 },
      { id: 'q6b', label: 'B', text: 'I go numb or feel detached.', category: 'Depression', value: 2 },
      { id: 'q6c', label: 'C', text: 'I reframe it quickly and move forward.', category: 'Motivation', value: 1 }
    ]
  },
  {
    id: 'q7',
    prompt: 'What’s your current self-talk like?',
    options: [
      { id: 'q7a', label: 'A', text: 'A lot of “what ifs” and worst-case scenarios.', category: 'Anxiety', value: 3 },
      { id: 'q7b', label: 'B', text: 'Critical and heavy, like nothing will improve.', category: 'Depression', value: 3 },
      { id: 'q7c', label: 'C', text: 'Encouraging but I struggle to act.', category: 'Motivation', value: 2 }
    ]
  },
  {
    id: 'q8',
    prompt: 'How secure do you feel in your closest relationships?',
    options: [
      { id: 'q8a', label: 'A', text: 'We’re rebuilding trust after painful moments.', category: 'Trauma', value: 2 },
      { id: 'q8b', label: 'B', text: 'We miscommunicate and feel misunderstood.', category: 'Relationships', value: 3 },
      { id: 'q8c', label: 'C', text: 'We’re solid but busy — I want more spark.', category: 'Motivation', value: 1 }
    ]
  },
  {
    id: 'q9',
    prompt: 'What’s your biggest challenge during stressful weeks?',
    options: [
      { id: 'q9a', label: 'A', text: 'Staying hopeful when setbacks pile up.', category: 'Depression', value: 3 },
      { id: 'q9b', label: 'B', text: 'Physical tension and panic sensations.', category: 'Anxiety', value: 3 },
      { id: 'q9c', label: 'C', text: 'Shutting down and withdrawing from everyone.', category: 'Trauma', value: 2 }
    ]
  },
  {
    id: 'q10',
    prompt: 'When you think about your habits, you…',
    options: [
      { id: 'q10a', label: 'A', text: 'Need a system to build sustainable routines.', category: 'Motivation', value: 3 },
      { id: 'q10b', label: 'B', text: 'Feel like negative habits are hurting loved ones.', category: 'Relationships', value: 2 },
      { id: 'q10c', label: 'C', text: 'Can’t break free from patterns that trigger you.', category: 'Trauma', value: 2 }
    ]
  },
  {
    id: 'q11',
    prompt: 'How well are you expressing emotions lately?',
    options: [
      { id: 'q11a', label: 'A', text: 'I bottle things up to avoid conflict.', category: 'Relationships', value: 3 },
      { id: 'q11b', label: 'B', text: 'My emotions swing fast and feel overwhelming.', category: 'Anxiety', value: 2 },
      { id: 'q11c', label: 'C', text: 'Everything feels muted or distant.', category: 'Depression', value: 2 }
    ]
  },
  {
    id: 'q12',
    prompt: 'What kind of guidance are you craving right now?',
    options: [
      { id: 'q12a', label: 'A', text: 'Grounding tools to calm my nervous system.', category: 'Trauma', value: 3 },
      { id: 'q12b', label: 'B', text: 'Strategies to rebuild joy and purpose.', category: 'Depression', value: 3 },
      { id: 'q12c', label: 'C', text: 'Actionable steps to build momentum.', category: 'Motivation', value: 3 }
    ]
  }
];

export default quizData;
