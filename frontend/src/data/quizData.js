const quizQuestions = [
  {
    id: 'q1',
    prompt: 'How would you describe your energy levels lately?',
    description: 'Consider how energized and motivated you feel during a typical day.',
    options: [
      {
        label: 'I feel wired and on edge most of the time',
        helper: 'Your mind races, and relaxation feels impossible.',
        category: 'Anxiety'
      },
      {
        label: 'It takes a lot of effort to get moving',
        helper: 'Everything feels heavy and slow.',
        category: 'Depression'
      },
      {
        label: 'I experience sudden drops in energy after reminders of past events',
        helper: 'Memories or triggers drain your stamina.',
        category: 'Trauma'
      },
      {
        label: 'I struggle to build momentum or stick with goals',
        helper: 'You want change but habits won’t stick.',
        category: 'Motivation'
      },
      {
        label: 'My energy depends on how things are going with loved ones',
        helper: 'Relationship ups and downs define your spark.',
        category: 'Relationships'
      }
    ]
  },
  {
    id: 'q2',
    prompt: 'What’s weighing on your mind right now?',
    description: 'Think about the primary issue that keeps resurfacing in your thoughts.',
    options: [
      {
        label: 'Constant worry about the future',
        helper: 'You imagine worst-case scenarios.',
        category: 'Anxiety'
      },
      {
        label: 'Persistent sadness or numbness',
        helper: 'You feel disconnected from joy.',
        category: 'Depression'
      },
      {
        label: 'Memories of painful experiences',
        helper: 'Flashbacks or nightmares interrupt your day.',
        category: 'Trauma'
      },
      {
        label: 'Lack of excitement about goals',
        helper: 'Your drive fades quickly.',
        category: 'Motivation'
      },
      {
        label: 'Navigating a complicated relationship',
        helper: 'Communication or trust feels fragile.',
        category: 'Relationships'
      }
    ]
  },
  {
    id: 'q3',
    prompt: 'How do you usually respond to stress?',
    description: 'Notice your first instinct when stress hits.',
    options: [
      {
        label: 'My thoughts race and I can’t calm down',
        helper: 'Your body stays in a fight-or-flight mode.',
        category: 'Anxiety'
      },
      {
        label: 'I withdraw from people and activities',
        helper: 'You shut down or isolate yourself.',
        category: 'Depression'
      },
      {
        label: 'I feel frozen or relive past trauma',
        helper: 'Stress reopens old wounds.',
        category: 'Trauma'
      },
      {
        label: 'I procrastinate and avoid tasks',
        helper: 'Stress kills your momentum.',
        category: 'Motivation'
      },
      {
        label: 'I become irritable with loved ones',
        helper: 'Conflicts escalate quickly.',
        category: 'Relationships'
      }
    ]
  },
  {
    id: 'q4',
    prompt: 'How are your sleep patterns?',
    description: 'Reflect on how easy it is to fall and stay asleep.',
    options: [
      {
        label: 'I have trouble falling asleep because my mind races',
        helper: 'Nighttime is filled with what-ifs.',
        category: 'Anxiety'
      },
      {
        label: 'I sleep too much or too little and never feel rested',
        helper: 'Your body craves more energy.',
        category: 'Depression'
      },
      {
        label: 'I wake up from nightmares or night sweats',
        helper: 'Sleep is disrupted by past events.',
        category: 'Trauma'
      },
      {
        label: 'My sleep is inconsistent because of poor routines',
        helper: 'Bedtime habits feel hard to maintain.',
        category: 'Motivation'
      },
      {
        label: 'Arguments or tension keep me up',
        helper: 'Relationship stress steals your rest.',
        category: 'Relationships'
      }
    ]
  },
  {
    id: 'q5',
    prompt: 'How connected do you feel to the people around you?',
    description: 'Consider your most important relationships.',
    options: [
      {
        label: 'I often worry people will leave or be disappointed',
        helper: 'You seek reassurance constantly.',
        category: 'Anxiety'
      },
      {
        label: 'I feel distant from everyone',
        helper: 'It’s hard to connect or trust.',
        category: 'Depression'
      },
      {
        label: 'Certain situations make me shut down or dissociate',
        helper: 'Old wounds make closeness risky.',
        category: 'Trauma'
      },
      {
        label: 'I avoid making plans because I might not follow through',
        helper: 'Consistency feels elusive.',
        category: 'Motivation'
      },
      {
        label: 'I’m navigating conflict with someone important',
        helper: 'Tension is affecting your well-being.',
        category: 'Relationships'
      }
    ]
  },
  {
    id: 'q6',
    prompt: 'What kind of support are you craving most?',
    description: 'Imagine the advice or help that would feel most useful right now.',
    options: [
      {
        label: 'Tools to calm worry and ground myself',
        helper: 'You want practical calming techniques.',
        category: 'Anxiety'
      },
      {
        label: 'Ways to lift my mood and spark joy',
        helper: 'You need hope and small wins.',
        category: 'Depression'
      },
      {
        label: 'Guidance on processing painful memories',
        helper: 'You’re ready to heal deeply.',
        category: 'Trauma'
      },
      {
        label: 'A plan to build momentum and habits',
        helper: 'Structure would keep you going.',
        category: 'Motivation'
      },
      {
        label: 'Strategies for better communication and trust',
        helper: 'You want healthier bonds.',
        category: 'Relationships'
      }
    ]
  },
  {
    id: 'q7',
    prompt: 'When you think about your future, what do you notice?',
    description: 'Focus on the emotions that arise when you imagine the road ahead.',
    options: [
      {
        label: 'Unease and a constant sense that something could go wrong',
        helper: 'You brace for impact.',
        category: 'Anxiety'
      },
      {
        label: 'It feels grey or blank, like nothing will change',
        helper: 'Motivation is hard to find.',
        category: 'Depression'
      },
      {
        label: 'I fear past events will repeat themselves',
        helper: 'Safety feels fragile.',
        category: 'Trauma'
      },
      {
        label: 'I have ideas but struggle to take the first step',
        helper: 'Momentum stalls out.',
        category: 'Motivation'
      },
      {
        label: 'I wonder if I’ll find healthier relationships',
        helper: 'You crave secure attachment.',
        category: 'Relationships'
      }
    ]
  },
  {
    id: 'q8',
    prompt: 'How do you typically manage difficult emotions?',
    description: 'Think about your go-to coping strategies.',
    options: [
      {
        label: 'I overthink and replay scenarios in my head',
        helper: 'You get stuck in loops.',
        category: 'Anxiety'
      },
      {
        label: 'I numb out with sleep, food, or screens',
        helper: 'Anything to avoid feeling.',
        category: 'Depression'
      },
      {
        label: 'I become hyper-alert to triggers',
        helper: 'You prepare for the worst.',
        category: 'Trauma'
      },
      {
        label: 'I make plans but don’t execute them',
        helper: 'Follow-through is tough.',
        category: 'Motivation'
      },
      {
        label: 'I seek validation from others constantly',
        helper: 'External approval eases discomfort.',
        category: 'Relationships'
      }
    ]
  },
  {
    id: 'q9',
    prompt: 'What best describes your current routine?',
    description: 'Consider how consistent your habits feel.',
    options: [
      {
        label: 'I keep busy to avoid anxious thoughts',
        helper: 'Downtime feels unsafe.',
        category: 'Anxiety'
      },
      {
        label: 'I lack the energy to maintain routines',
        helper: 'Consistency takes too much effort.',
        category: 'Depression'
      },
      {
        label: 'I avoid places or people connected to past hurt',
        helper: 'You organize your life around safety.',
        category: 'Trauma'
      },
      {
        label: 'I start routines but abandon them quickly',
        helper: 'Habits don’t stick.',
        category: 'Motivation'
      },
      {
        label: 'My routines revolve around someone else’s needs',
        helper: 'Boundaries feel blurry.',
        category: 'Relationships'
      }
    ]
  },
  {
    id: 'q10',
    prompt: 'What would feeling better look like for you?',
    description: 'Imagine a realistic win in the next few weeks.',
    options: [
      {
        label: 'Being able to relax and trust my decisions',
        helper: 'Peace of mind would be huge.',
        category: 'Anxiety'
      },
      {
        label: 'Rediscovering joy in small moments',
        helper: 'You want spark and satisfaction.',
        category: 'Depression'
      },
      {
        label: 'Feeling safe when reminders pop up',
        helper: 'You crave stability and grounding.',
        category: 'Trauma'
      },
      {
        label: 'Following through on routines that support me',
        helper: 'Small wins build confidence.',
        category: 'Motivation'
      },
      {
        label: 'Feeling seen and supported in my relationships',
        helper: 'Trust and empathy would help.',
        category: 'Relationships'
      }
    ]
  },
  {
    id: 'q11',
    prompt: 'How often do you experience physical symptoms related to your emotions?',
    description: 'Notice any body sensations tied to your mood.',
    options: [
      {
        label: 'Frequent tension headaches or racing heart',
        helper: 'Your body mirrors anxiety.',
        category: 'Anxiety'
      },
      {
        label: 'Heaviness, fatigue, or aches with no clear cause',
        helper: 'Your body feels weighed down.',
        category: 'Depression'
      },
      {
        label: 'Startle responses or feeling jumpy',
        helper: 'Hypervigilance is high.',
        category: 'Trauma'
      },
      {
        label: 'Restlessness that turns into stalled action',
        helper: 'Energy without direction.',
        category: 'Motivation'
      },
      {
        label: 'Stomach knots or tension during conversations',
        helper: 'Relationships bring physical stress.',
        category: 'Relationships'
      }
    ]
  },
  {
    id: 'q12',
    prompt: 'Which statement feels most true today?',
    description: 'Choose the sentence that resonates right now.',
    options: [
      {
        label: '“If I stop worrying, something bad will happen.”',
        helper: 'Worry feels protective.',
        category: 'Anxiety'
      },
      {
        label: '“Nothing excites me the way it used to.”',
        helper: 'Joy feels distant.',
        category: 'Depression'
      },
      {
        label: '“I want to move on but feel stuck in the past.”',
        helper: 'Healing feels incomplete.',
        category: 'Trauma'
      },
      {
        label: '“I know what to do but can’t get started.”',
        helper: 'Action feels hard to initiate.',
        category: 'Motivation'
      },
      {
        label: '“I’m unsure how to repair a key relationship.”',
        helper: 'Connection needs attention.',
        category: 'Relationships'
      }
    ]
  }
];

export default quizQuestions;
