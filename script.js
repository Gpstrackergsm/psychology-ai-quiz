const questions = [
  {
    prompt: 'Which branch of psychology most directly informs the design of human-centered AI interfaces?',
    options: [
      'Behavioral neuroscience',
      'Human factors and ergonomics',
      'Psychoanalytic therapy',
      'Sports psychology'
    ],
    answer: 1
  },
  {
    prompt: 'What is a primary benefit of using AI-powered sentiment analysis in clinical psychology?',
    options: [
      'It replaces the need for licensed therapists',
      'It can flag emotional changes across large volumes of session notes',
      'It automatically prescribes medication',
      'It ensures clients never need in-person therapy'
    ],
    answer: 1
  },
  {
    prompt: 'In ethical AI practice, which principle helps prevent algorithmic bias against specific groups?',
    options: [
      'Explainability',
      'Beneficence',
      'Justice and fairness',
      'Non-maleficence'
    ],
    answer: 2
  },
  {
    prompt: 'How can virtual reality therapy enhanced with AI support exposure-based treatments?',
    options: [
      'By randomly generating unrelated scenarios',
      'By adapting difficulty levels based on real-time biometric feedback',
      'By removing therapists from the treatment process',
      'By guaranteeing instant treatment success'
    ],
    answer: 1
  },
  {
    prompt: 'What is a potential risk when using generative AI chatbots for mental health support?',
    options: [
      'Over-personalization of evidence-based therapies',
      'Ensuring 24/7 availability for clients',
      'Inaccurate or unsafe advice without proper oversight',
      'Improved access for under-served populations'
    ],
    answer: 2
  }
];

const quizQuestionsList = document.getElementById('quiz-questions');
const quizForm = document.getElementById('quiz-form');
const resultSection = document.getElementById('quiz-result');
const resetButton = document.getElementById('reset-btn');

function renderQuestions() {
  const fragment = document.createDocumentFragment();

  questions.forEach((question, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'quiz__question';

    const prompt = document.createElement('h2');
    prompt.className = 'quiz__prompt';
    prompt.textContent = question.prompt;

    const optionsList = document.createElement('ul');
    optionsList.className = 'quiz__options';

    question.options.forEach((optionText, optionIndex) => {
      const optionItem = document.createElement('li');
      optionItem.className = 'quiz__option';

      const label = document.createElement('label');

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `question-${index}`;
      input.value = optionIndex;
      input.required = true;
      input.setAttribute('aria-label', `${optionText}`);

      const text = document.createElement('span');
      text.textContent = optionText;

      label.append(input, text);
      optionItem.appendChild(label);
      optionsList.appendChild(optionItem);
    });

    listItem.append(prompt, optionsList);
    fragment.appendChild(listItem);
  });

  quizQuestionsList.appendChild(fragment);
}

function resetFeedback() {
  const optionItems = quizQuestionsList.querySelectorAll('.quiz__option');
  optionItems.forEach((option) => {
    option.classList.remove('quiz__option--correct', 'quiz__option--incorrect');
  });
  resultSection.textContent = '';
}

quizForm.addEventListener('submit', (event) => {
  event.preventDefault();
  resetFeedback();

  const formData = new FormData(quizForm);
  let score = 0;

  questions.forEach((question, index) => {
    const options = quizQuestionsList.children[index].querySelectorAll('.quiz__option');

    options.forEach((option, optionIndex) => {
      if (optionIndex === question.answer) {
        option.classList.add('quiz__option--correct');
      }

      const input = option.querySelector('input[type="radio"]');
      if (input && input.checked) {
        if (optionIndex === question.answer) {
          score += 1;
        } else {
          option.classList.add('quiz__option--incorrect');
        }
      }
    });
  });

  const percentage = Math.round((score / questions.length) * 100);

  let feedbackMessage;
  if (percentage === 100) {
    feedbackMessage = 'Perfect score! You have a deep understanding of AI psychology.';
  } else if (percentage >= 80) {
    feedbackMessage = 'Great job! You have a strong grasp of the concepts.';
  } else if (percentage >= 60) {
    feedbackMessage = 'Nice effort! Review the highlighted answers to boost your score.';
  } else {
    feedbackMessage = 'Keep exploring—review the material and try again.';
  }

  resultSection.textContent = `You scored ${score} / ${questions.length} (${percentage}%). ${feedbackMessage}`;
});

resetButton.addEventListener('click', () => {
  quizForm.reset();
  resetFeedback();
});

renderQuestions();
