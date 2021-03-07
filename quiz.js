
 const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "What is 2+2?",
    choice1: "4",
    choice2: "2",
    choice3: "0",
    choice4: "8",
    answer: 1
  },
  {
    question:
     "Where is BRAC Univeristy",
    choice1: "Banani",
    choice2: "Gulshan",
    choice3: "Mohakhali",
    choice4: "Bashundhora",
    answer: 3
  },
  {
    question: "What is the capital of bangladesh",
    choice1: "Tokyo",
    choice2: "New york",
    choice3: "Vancouver",
    choice4: "Dhaka",
    answer: 4
  }
  ,
  {
    question: "What is the capital of france?",
    choice1: "Milan",
    choice2: "New york",
    choice3: "Vancouver",
    choice4: "Paris",
    answer: 4
  }
  ,
  {
    question: "Whats 4*4?",
    choice1: "16",
    choice2: "18",
    choice3: "4",
    choice4: "12",
    answer: 1
  }
];


const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {

  }
  questionCounter++;
  questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();