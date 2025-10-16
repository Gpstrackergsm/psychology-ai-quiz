const quizData = [
  {
    question:
      "How often do you feel physically tense or experience racing thoughts during the day?",
    category: "stress",
    options: [
      {
        value: 1,
        label: "Almost never",
        description: "I can usually stay calm and centered.",
      },
      {
        value: 2,
        label: "Occasionally",
        description: "It shows up every now and then but I recover quickly.",
      },
      {
        value: 3,
        label: "Sometimes",
        description: "I notice tension on busy days but manage through it.",
      },
      {
        value: 4,
        label: "Frequently",
        description: "Stress is a familiar companion most weeks.",
      },
      {
        value: 5,
        label: "Nearly always",
        description: "It feels like my default state lately.",
      },
    ],
  },
  {
    question:
      "How easy is it for you to redirect your attention back to the present moment when your mind wanders?",
    category: "mindfulness",
    options: [
      {
        value: 1,
        label: "Very easy",
        description: "I can bring myself back quickly and kindly.",
      },
      {
        value: 2,
        label: "Pretty easy",
        description: "With a gentle reminder I refocus well.",
      },
      {
        value: 3,
        label: "Neutral",
        description: "Sometimes I can, other times I drift for a while.",
      },
      {
        value: 4,
        label: "Challenging",
        description: "It takes a lot of effort to be present.",
      },
      {
        value: 5,
        label: "Very challenging",
        description: "My mind feels scattered most of the day.",
      },
    ],
  },
  {
    question:
      "When facing a setback, how often do you interpret it as a personal failure rather than a learning opportunity?",
    category: "selfWorth",
    options: [
      {
        value: 1,
        label: "Hardly ever",
        description: "I tend to give myself grace.",
      },
      {
        value: 2,
        label: "Occasionally",
        description: "I may cringe but move on quickly.",
      },
      {
        value: 3,
        label: "Sometimes",
        description: "I can ruminate a bit before regrouping.",
      },
      {
        value: 4,
        label: "Often",
        description: "It feels like a reflection of my worth.",
      },
      {
        value: 5,
        label: "Almost always",
        description: "I internalize it deeply and it lingers.",
      },
    ],
  },
  {
    question:
      "How satisfied are you with the depth and openness of your closest relationships?",
    category: "relationships",
    options: [
      {
        value: 1,
        label: "Very satisfied",
        description: "We communicate honestly and often.",
      },
      {
        value: 2,
        label: "Mostly satisfied",
        description: "We connect well with occasional rough patches.",
      },
      {
        value: 3,
        label: "Somewhat satisfied",
        description: "There is room for more closeness.",
      },
      {
        value: 4,
        label: "Rarely satisfied",
        description: "Conversations feel surface level or strained.",
      },
      {
        value: 5,
        label: "Unsatisfied",
        description: "I often feel misunderstood or distant.",
      },
    ],
  },
  {
    question:
      "When a new worry pops into your mind, how long does it typically stay before easing up?",
    category: "stress",
    options: [
      {
        value: 1,
        label: "Moments",
        description: "I acknowledge it and let it go quickly.",
      },
      {
        value: 2,
        label: "Under an hour",
        description: "I might mull it over but it fades soon.",
      },
      {
        value: 3,
        label: "A few hours",
        description: "It lingers in the background for part of the day.",
      },
      {
        value: 4,
        label: "Most of the day",
        description: "It sticks with me until something big distracts me.",
      },
      {
        value: 5,
        label: "Multiple days",
        description: "The worry loops repeatedly and is hard to shake.",
      },
    ],
  },
  {
    question:
      "How often do you notice judgmental self-talk running through your mind?",
    category: "selfWorth",
    options: [
      {
        value: 1,
        label: "Rarely",
        description: "I treat myself with compassion.",
      },
      {
        value: 2,
        label: "Sometimes",
        description: "It shows up on tough days.",
      },
      {
        value: 3,
        label: "Fairly often",
        description: "I can be critical without realizing it.",
      },
      {
        value: 4,
        label: "Very often",
        description: "My inner critic has the loudest voice.",
      },
      {
        value: 5,
        label: "Almost constantly",
        description: "It colors most of my decisions.",
      },
    ],
  },
  {
    question:
      "How confident are you in spotting thinking traps (like all-or-nothing thinking) when they appear?",
    category: "cognition",
    options: [
      {
        value: 1,
        label: "Very confident",
        description: "I catch them in the moment and reframe quickly.",
      },
      {
        value: 2,
        label: "Mostly confident",
        description: "I notice them soon after they show up.",
      },
      {
        value: 3,
        label: "Somewhat confident",
        description: "I recognize some patterns but miss others.",
      },
      {
        value: 4,
        label: "Rarely confident",
        description: "They usually pass as facts in my mind.",
      },
      {
        value: 5,
        label: "Not at all",
        description: "I struggle to spot distorted thinking.",
      },
    ],
  },
  {
    question:
      "How connected do you feel to your body through breathing, movement, or other grounding practices?",
    category: "mindfulness",
    options: [
      {
        value: 1,
        label: "Very connected",
        description: "I have a regular practice that anchors me.",
      },
      {
        value: 2,
        label: "Somewhat connected",
        description: "I make time for it a few times a week.",
      },
      {
        value: 3,
        label: "Neutral",
        description: "I remember occasionally but not consistently.",
      },
      {
        value: 4,
        label: "Not very connected",
        description: "It is hard to carve out intentional time.",
      },
      {
        value: 5,
        label: "Disconnected",
        description: "I rarely tune into my body intentionally.",
      },
    ],
  },
  {
    question:
      "How comfortable are you setting boundaries or saying no when you need to protect your energy?",
    category: "relationships",
    options: [
      {
        value: 1,
        label: "Very comfortable",
        description: "I advocate for myself with clarity and care.",
      },
      {
        value: 2,
        label: "Mostly comfortable",
        description: "I can do it, even if it feels a little awkward.",
      },
      {
        value: 3,
        label: "Somewhat comfortable",
        description: "I weigh the pros and cons before speaking up.",
      },
      {
        value: 4,
        label: "Uncomfortable",
        description: "I usually say yes to avoid conflict.",
      },
      {
        value: 5,
        label: "Very uncomfortable",
        description: "I fear how others might respond.",
      },
    ],
  },
  {
    question:
      "When plans change unexpectedly, how do you typically respond internally?",
    category: "cognition",
    options: [
      {
        value: 1,
        label: "Adapt with ease",
        description: "I adjust quickly and stay solution-focused.",
      },
      {
        value: 2,
        label: "Need a moment",
        description: "I recalibrate after a brief pause.",
      },
      {
        value: 3,
        label: "Feel uneasy",
        description: "It disrupts my flow more than I would like.",
      },
      {
        value: 4,
        label: "Feel stressed",
        description: "I get stuck in what should have happened.",
      },
      {
        value: 5,
        label: "Feel overwhelmed",
        description: "I spiral and struggle to regain control.",
      },
    ],
  },
  {
    question:
      "How supported do you feel by the people you confide in when you're struggling?",
    category: "relationships",
    options: [
      {
        value: 1,
        label: "Very supported",
        description: "They listen deeply and show up consistently.",
      },
      {
        value: 2,
        label: "Mostly supported",
        description: "They are there, even if we miss each other sometimes.",
      },
      {
        value: 3,
        label: "Somewhat supported",
        description: "I get some support but crave more understanding.",
      },
      {
        value: 4,
        label: "Rarely supported",
        description: "I feel like I am carrying most things alone.",
      },
      {
        value: 5,
        label: "Unsupported",
        description: "I often hesitate to reach out at all.",
      },
    ],
  },
  {
    question:
      "How often do you make time for slow, reflective activities like journaling or mindful walks?",
    category: "mindfulness",
    options: [
      {
        value: 1,
        label: "Daily",
        description: "It's part of my routine.",
      },
      {
        value: 2,
        label: "A few times a week",
        description: "I prioritize it when I can.",
      },
      {
        value: 3,
        label: "A few times a month",
        description: "I fit it in sporadically.",
      },
      {
        value: 4,
        label: "Rarely",
        description: "It often falls to the bottom of the list.",
      },
      {
        value: 5,
        label: "Almost never",
        description: "I struggle to slow down at all.",
      },
    ],
  },
  {
    question:
      "How balanced is your inner narrative between recognizing strengths and dwelling on perceived flaws?",
    category: "selfWorth",
    options: [
      {
        value: 1,
        label: "Well balanced",
        description: "I acknowledge wins alongside growth areas.",
      },
      {
        value: 2,
        label: "Mostly balanced",
        description: "I celebrate myself, even if it feels a bit awkward.",
      },
      {
        value: 3,
        label: "Leans negative",
        description: "I see my strengths but focus more on flaws.",
      },
      {
        value: 4,
        label: "Very negative",
        description: "Self-criticism outweighs self-appreciation.",
      },
      {
        value: 5,
        label: "Extremely negative",
        description: "I rarely notice anything I'm proud of.",
      },
    ],
  },
  {
    question:
      "How clear are you about the values guiding your big decisions right now?",
    category: "cognition",
    options: [
      {
        value: 1,
        label: "Crystal clear",
        description: "I can name them and align with them daily.",
      },
      {
        value: 2,
        label: "Mostly clear",
        description: "I have a sense of them even if they shift slightly.",
      },
      {
        value: 3,
        label: "Somewhat clear",
        description: "I am exploring what matters most.",
      },
      {
        value: 4,
        label: "Unclear",
        description: "I feel unsure of my guiding compass.",
      },
      {
        value: 5,
        label: "Very unclear",
        description: "I'm moving through life on autopilot.",
      },
    ],
  },
  {
    question:
      "How energised do you feel after social interactions with friends or colleagues?",
    category: "relationships",
    options: [
      {
        value: 1,
        label: "Very energised",
        description: "I leave feeling uplifted and connected.",
      },
      {
        value: 2,
        label: "Somewhat energised",
        description: "I enjoy the time, even if I need a little recharge later.",
      },
      {
        value: 3,
        label: "Neutral",
        description: "It depends on the person or situation.",
      },
      {
        value: 4,
        label: "Somewhat drained",
        description: "I often feel depleted afterward.",
      },
      {
        value: 5,
        label: "Very drained",
        description: "I feel like I need a lot of recovery time.",
      },
    ],
  },
  {
    question:
      "How quickly do you bounce back emotionally after a disappointment or criticism?",
    category: "stress",
    options: [
      {
        value: 1,
        label: "Very quickly",
        description: "I process it and move forward with resilience.",
      },
      {
        value: 2,
        label: "Fairly quickly",
        description: "I feel it, then re-center within a day.",
      },
      {
        value: 3,
        label: "Eventually",
        description: "It takes a couple of days to bounce back.",
      },
      {
        value: 4,
        label: "Slowly",
        description: "I replay it repeatedly before I can let it go.",
      },
      {
        value: 5,
        label: "Very slowly",
        description: "It lingers for a long time and affects my mood.",
      },
    ],
  },
];

const bookRecommendations = {
  stress: {
    title: "Burnout: The Secret to Unlocking the Stress Cycle",
    author: "Emily Nagoski & Amelia Nagoski",
    takeaway:
      "Learn science-backed rituals that help your body complete the stress cycle and restore balance.",
  },
  mindfulness: {
    title: "Wherever You Go, There You Are",
    author: "Jon Kabat-Zinn",
    takeaway:
      "Build a compassionate mindfulness routine with bite-sized practices for everyday life.",
  },
  relationships: {
    title: "Set Boundaries, Find Peace",
    author: "Nedra Glover Tawwab",
    takeaway:
      "Discover practical scripts and strategies to communicate your needs and cultivate thriving connections.",
  },
  cognition: {
    title: "Feeling Good: The New Mood Therapy",
    author: "Dr. David D. Burns",
    takeaway:
      "Reframe unhelpful thinking patterns with approachable cognitive behavioral tools.",
  },
  selfWorth: {
    title: "The Gifts of Imperfection",
    author: "Dr. Brené Brown",
    takeaway:
      "Embrace wholehearted living by trading self-judgment for courage, compassion, and connection.",
  },
};

function initializeQuiz() {
  const startButton = document.getElementById("startQuiz");
  const quizSection = document.getElementById("quiz");
  const resultsSection = document.getElementById("results");
  const questionTitle = document.getElementById("questionTitle");
  const questionText = document.getElementById("questionText");
  const optionsForm = document.getElementById("options");
  const progress = document.getElementById("progress");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const scoreSummary = document.getElementById("scoreSummary");
  const recommendation = document.getElementById("recommendation");
  const restartBtn = document.getElementById("restartBtn");
  const yearElement = document.getElementById("year");

  const requiredElements = [
    startButton,
    quizSection,
    resultsSection,
    questionTitle,
    questionText,
    optionsForm,
    progress,
    nextBtn,
    prevBtn,
    scoreSummary,
    recommendation,
    restartBtn,
    yearElement,
  ];

  if (requiredElements.some((el) => !el)) {
    console.error("Quiz interface is missing required elements.");
    return;
  }

  const categoryLabels = {
    stress: "Stress Resilience",
    mindfulness: "Mindfulness & Presence",
    relationships: "Relationships & Connection",
    cognition: "Cognitive Clarity",
    selfWorth: "Self-worth & Compassion",
  };

  let currentQuestionIndex = 0;
  let answers = new Array(quizData.length).fill(null);

  function updateYear() {
    yearElement.textContent = new Date().getFullYear();
  }

  function updateNavigationState() {
    const selected = answers[currentQuestionIndex];
    nextBtn.disabled = selected === null;
  }

  function renderQuestion(index) {
    const question = quizData[index];
    questionTitle.textContent = `Question ${index + 1}`;
    questionText.textContent = question.question;
    progress.textContent = `${index + 1} / ${quizData.length}`;

    optionsForm.innerHTML = "";

    question.options.forEach((option, optionIndex) => {
      const optionId = `q${index}_option${optionIndex}`;
      const optionWrapper = document.createElement("label");
      optionWrapper.className = "option";
      optionWrapper.setAttribute("for", optionId);

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question-${index}`;
      input.id = optionId;
      input.value = option.value;
      input.required = true;
      input.checked = answers[index] === option.value;

      input.addEventListener("change", () => {
        answers[index] = option.value;
        updateNavigationState();
      });

      const labelContainer = document.createElement("span");
      labelContainer.className = "option__label";

      const labelText = document.createElement("span");
      labelText.textContent = option.label;

      const descriptionText = document.createElement("span");
      descriptionText.className = "option__description";
      descriptionText.textContent = option.description;

      labelContainer.append(labelText, descriptionText);
      optionWrapper.append(labelContainer, input);
      optionsForm.appendChild(optionWrapper);
    });

    prevBtn.disabled = index === 0;
    nextBtn.textContent = index === quizData.length - 1 ? "See results" : "Next";
    updateNavigationState();

    requestAnimationFrame(() => {
      const selectedInput = optionsForm.querySelector("input[type='radio']:checked");
      const inputToFocus = selectedInput || optionsForm.querySelector("input[type='radio']");
      if (inputToFocus) {
        inputToFocus.focus();
      }
    });
  }

  function revealQuiz(scrollToSection = true) {
    quizSection.hidden = false;
    quizSection.removeAttribute("hidden");
    resultsSection.hidden = true;
    resultsSection.setAttribute("hidden", "");

    if (scrollToSection) {
      requestAnimationFrame(() => {
        quizSection.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  function showResults() {
    const totals = quizData.reduce((acc, question, index) => {
      const category = question.category;
      const value = answers[index] ?? 0;
      acc[category] = (acc[category] || 0) + Number(value);
      return acc;
    }, {});

    const summaryFragments = Object.entries(totals)
      .sort(([, a], [, b]) => b - a)
      .map(([category, score]) => {
        const container = document.createElement("div");
        container.innerHTML = `<span>${categoryLabels[category]}</span><span>${score}</span>`;
        return container;
      });

    scoreSummary.innerHTML = "";
    summaryFragments.forEach((fragment) => scoreSummary.appendChild(fragment));

    const [topCategory] = Object.entries(totals).sort(([, a], [, b]) => b - a)[0];
    const { title, author, takeaway } = bookRecommendations[topCategory];

    recommendation.innerHTML = `
      <h3>${title}</h3>
      <p><strong>By:</strong> ${author}</p>
      <p>${takeaway}</p>
    `;

    quizSection.hidden = true;
    quizSection.setAttribute("hidden", "");
    resultsSection.hidden = false;
    resultsSection.removeAttribute("hidden");
    resultsSection.scrollIntoView({ behavior: "smooth" });
  }

  function resetQuiz(scrollToSection = true) {
    currentQuestionIndex = 0;
    answers = new Array(quizData.length).fill(null);
    renderQuestion(currentQuestionIndex);
    revealQuiz(scrollToSection);
  }

  startButton.addEventListener("click", (event) => {
    event.preventDefault();
    resetQuiz();
  });

  nextBtn.addEventListener("click", () => {
    if (answers[currentQuestionIndex] === null) {
      updateNavigationState();
      return;
    }

    if (currentQuestionIndex === quizData.length - 1) {
      showResults();
    } else {
      currentQuestionIndex += 1;
      renderQuestion(currentQuestionIndex);
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex -= 1;
      renderQuestion(currentQuestionIndex);
    }
  });

  restartBtn.addEventListener("click", () => resetQuiz());

  updateYear();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeQuiz);
} else {
  initializeQuiz();
}
