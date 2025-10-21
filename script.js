const quizQuestions = [
  {
    prompt:
      'Which branch of psychology focuses on how people learn by observing others and imitating their actions?',
    options: [
      'Humanistic psychology',
      'Behaviorism',
      'Social learning theory',
      'Cognitive psychology',
    ],
    answerIndex: 2,
    explanation:
      'Social learning theory, pioneered by Albert Bandura, explains learning through observation, imitation, and modeling.',
  },
  {
    prompt:
      'In AI-driven sentiment analysis of therapy sessions, which type of machine learning is commonly used to label emotional tone?',
    options: ['Supervised learning', 'Unsupervised learning', 'Reinforcement learning', 'Transfer learning'],
    answerIndex: 0,
    explanation:
      'Supervised learning trains models on labeled examples so they can classify new statements as positive, neutral, or negative.',
  },
  {
    prompt:
      'What is the term for the brain’s ability to reorganize itself by forming new neural connections?',
    options: ['Homeostasis', 'Neuroplasticity', 'Synaptic pruning', 'Neurogenesis'],
    answerIndex: 1,
    explanation:
      'Neuroplasticity refers to the brain’s lifelong capacity to adapt by creating new connections in response to learning or injury.',
  },
  {
    prompt:
      'AI-powered chatbots that provide mental health support must prioritize which ethical principle to maintain trust?',
    options: ['Gamification', 'Confidentiality', 'Monetization', 'Brand recognition'],
    answerIndex: 1,
    explanation:
      'Protecting user data and maintaining confidentiality is essential when delivering mental health support through AI systems.',
  },
  {
    prompt:
      'Which psychological perspective studies mental processes such as problem solving, memory, and decision-making?',
    options: [
      'Evolutionary perspective',
      'Psychodynamic perspective',
      'Cognitive perspective',
      'Biological perspective',
    ],
    answerIndex: 2,
    explanation:
      'The cognitive perspective focuses on mental processes involved in how people think, learn, remember, and solve problems.',
  },
  {
    prompt:
      'Large language models can help researchers analyze open-ended survey responses by detecting recurring themes. This task is an example of:',
    options: ['Thematic analysis', 'Classical conditioning', 'Operant conditioning', 'Attachment theory'],
    answerIndex: 0,
    explanation:
      'Thematic analysis is a qualitative method for identifying patterns or themes within textual data, which AI can help scale.',
  },
  {
    prompt:
      'Which neurotransmitter is most commonly associated with feelings of reward and motivation?',
    options: ['Serotonin', 'Dopamine', 'GABA', 'Acetylcholine'],
    answerIndex: 1,
    explanation:
      'Dopamine plays a central role in the brain’s reward system, influencing motivation and reinforcement learning.',
  },
  {
    prompt:
      'When an AI model is trained on therapy transcripts from a single demographic group and performs poorly for others, this is an example of:',
    options: [
      'Sampling bias',
      'Observer-expectancy effect',
      'Cognitive dissonance',
      'Placebo effect',
    ],
    answerIndex: 0,
    explanation:
      'Sampling bias occurs when a dataset is not representative of the population, leading to skewed or unfair model performance.',
  },
];

const questionText = document.querySelector('#question-text');
const choicesList = document.querySelector('#choices');
const nextButton = document.querySelector('#next-btn');
const progressBar = document.querySelector('#progress-bar');
const progressLabel = document.querySelector('#progress-label');
const resultsSection = document.querySelector('#results');
const scoreSummary = document.querySelector('#score-summary');
const feedbackParagraph = document.querySelector('#feedback');
const restartButton = document.querySelector('#restart-btn');
const explanationText = document.querySelector('#explanation');

let currentQuestionIndex = 0;
let score = 0;
let hasSelected = false;

function renderQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  questionText.textContent = currentQuestion.prompt;
  choicesList.innerHTML = '';
  explanationText.textContent = '';
  hasSelected = false;
  nextButton.disabled = true;

  currentQuestion.options.forEach((option, index) => {
    const choice = document.createElement('button');
    choice.type = 'button';
    choice.className = 'choice';
    choice.textContent = option;
    choice.setAttribute('role', 'listitem');
    choice.setAttribute('aria-pressed', 'false');
    choice.addEventListener('click', () => handleChoiceSelection(choice, index));
    choice.addEventListener('keyup', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        handleChoiceSelection(choice, index);
      }
    });
    choicesList.appendChild(choice);
  });

  updateProgress();
}

function updateProgress() {
  const totalQuestions = quizQuestions.length;
  const progressPercentage = ((currentQuestionIndex) / totalQuestions) * 100;
  progressBar.style.width = `${progressPercentage}%`;
  progressLabel.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
}

function handleChoiceSelection(choiceElement, selectedIndex) {
  if (hasSelected) {
    return;
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const choices = Array.from(choicesList.children);
  hasSelected = true;
  nextButton.disabled = false;

  choices.forEach((button) => button.setAttribute('aria-pressed', 'false'));
  choiceElement.setAttribute('aria-pressed', 'true');

  choices.forEach((button, index) => {
    const isCorrect = index === currentQuestion.answerIndex;
    if (isCorrect) {
      button.classList.add('correct');
    }
    if (index === selectedIndex && !isCorrect) {
      button.classList.add('incorrect');
    }
    button.disabled = true;
  });

  if (selectedIndex === currentQuestion.answerIndex) {
    score += 1;
  }

  explanationText.textContent = currentQuestion.explanation;
}

function showResults() {
  const totalQuestions = quizQuestions.length;
  const percentage = Math.round((score / totalQuestions) * 100);
  scoreSummary.textContent = `You answered ${score} out of ${totalQuestions} questions correctly (${percentage}%).`;

  let feedback = '';
  if (percentage === 100) {
    feedback = 'Perfect score! Your knowledge of psychology and AI collaboration is stellar.';
  } else if (percentage >= 75) {
    feedback = 'Great job! You have a strong grasp on key concepts with just a few gaps to review.';
  } else if (percentage >= 50) {
    feedback = 'Good effort! Keep exploring the fascinating intersection of psychology and technology.';
  } else {
    feedback = 'No worries—every expert starts somewhere. Revisit the questions and keep learning!';
  }

  feedbackParagraph.textContent = feedback;
  resultsSection.hidden = false;
  document.querySelector('.quiz').hidden = true;
}

function handleNextQuestion() {
  if (!hasSelected) {
    return;
  }

  currentQuestionIndex += 1;

  if (currentQuestionIndex >= quizQuestions.length) {
    showResults();
    progressBar.style.width = '100%';
    progressLabel.textContent = 'Quiz complete';
    nextButton.disabled = true;
    return;
  }

  renderQuestion();
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultsSection.hidden = true;
  document.querySelector('.quiz').hidden = false;
  renderQuestion();
}

nextButton.addEventListener('click', handleNextQuestion);
restartButton.addEventListener('click', restartQuiz);

renderQuestion();
