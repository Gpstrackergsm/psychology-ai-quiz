const questions = [
  {
    text: "Which psychological concept inspired the reward systems used in reinforcement learning?",
    options: [
      "Classical conditioning",
      "Gestalt perceptual grouping",
      "Attachment theory",
      "Cognitive dissonance"
    ],
    answer: 0,
    explanation:
      "Reinforcement learning borrows heavily from B.F. Skinner's classical conditioning experiments with rewards and punishments."
  },
  {
    text: "What is the primary goal of affective computing within AI?",
    options: [
      "To replicate human memory",
      "To recognize and respond to human emotions",
      "To improve logical deduction",
      "To simulate unconscious processing"
    ],
    answer: 1,
    explanation:
      "Affective computing studies how AI systems can detect, interpret, and respond to human emotions."
  },
  {
    text: "Which ethical concept asks whether an AI system might cause psychological harm by eroding user autonomy?",
    options: [
      "Beneficence",
      "Explainability",
      "Manipulation through dark patterns",
      "Data minimization"
    ],
    answer: 2,
    explanation:
      "Designing interfaces that steer users without informed consent is considered a dark pattern and raises autonomy concerns."
  },
  {
    text: "The Stroop effect demonstrates which cognitive process relevant for AI attention mechanisms?",
    options: [
      "Emotional contagion",
      "Selective attention",
      "Implicit memory",
      "Spatial reasoning"
    ],
    answer: 1,
    explanation:
      "The Stroop effect shows how competing information requires selective attention, mirroring how AI allocates focus across inputs."
  },
  {
    text: "Which approach allows AI chatbots to adapt responses based on the Big Five personality traits?",
    options: [
      "Rule-based dialogue trees",
      "Personality-aware user modeling",
      "Generative adversarial networks",
      "Bayesian optimization"
    ],
    answer: 1,
    explanation:
      "Personality-aware user modeling lets AI adapt tone and content to individual differences described by the Big Five traits."
  }
];

const questionText = document.getElementById("question-text");
const choicesWrapper = document.getElementById("choices");
const nextButton = document.getElementById("next");
const restartButton = document.getElementById("restart");
const feedback = document.getElementById("feedback");
const summary = document.getElementById("summary");
const summaryText = document.getElementById("summary-text");
const scoreDisplay = document.getElementById("score");
const questionNumberDisplay = document.getElementById("question-number");
const progressBar = document.getElementById("progress");

let quizOrder = [];
let current = 0;
let score = 0;
let hasAnswered = false;

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function setProgress(index) {
  const value = Math.round((index / questions.length) * 100);
  progressBar.value = value;
}

function renderQuestion() {
  hasAnswered = false;
  const question = quizOrder[current];
  questionText.textContent = question.text;
  questionNumberDisplay.textContent = current + 1;
  nextButton.disabled = true;
  feedback.textContent = "";

  choicesWrapper.innerHTML = "";

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.textContent = option;
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => selectOption(button, optionIndex));
    choicesWrapper.appendChild(button);
  });

  setProgress(current);
}

function selectOption(button, selectedIndex) {
  if (hasAnswered) return;
  hasAnswered = true;

  const question = quizOrder[current];
  const buttons = choicesWrapper.querySelectorAll("button.choice");
  buttons.forEach((btn) => {
    btn.disabled = true;
    btn.setAttribute("aria-pressed", btn === button ? "true" : "false");
  });

  const isCorrect = selectedIndex === question.answer;
  if (isCorrect) {
    score += 1;
    scoreDisplay.textContent = score;
  }

  buttons[question.answer].classList.add("correct");

  if (!isCorrect) {
    button.classList.add("incorrect");
  }

  feedback.textContent = isCorrect
    ? "Great job! " + question.explanation
    : "Not quite. " + question.explanation;

  nextButton.disabled = false;
  nextButton.focus();
}

function showSummary() {
  summary.hidden = false;
  summaryText.textContent = `You answered ${score} out of ${questions.length} questions correctly.`;
  summary.scrollIntoView({ behavior: "smooth", block: "center" });
  nextButton.hidden = true;
  choicesWrapper.parentElement.hidden = true;
}

function nextQuestion() {
  current += 1;
  setProgress(current);
  if (current >= questions.length) {
    showSummary();
    return;
  }
  renderQuestion();
}

function resetState() {
  current = 0;
  score = 0;
  hasAnswered = false;
  scoreDisplay.textContent = score;
  questionNumberDisplay.textContent = 1;
  nextButton.hidden = false;
  nextButton.disabled = true;
  const card = choicesWrapper.parentElement;
  card.hidden = false;
  summary.hidden = true;
  feedback.textContent = "";
  setProgress(0);
}

function startQuiz() {
  quizOrder = shuffle(questions);
  resetState();
  renderQuestion();
}

function restartQuiz() {
  startQuiz();
}

nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);

document.addEventListener("DOMContentLoaded", () => {
  startQuiz();
});
