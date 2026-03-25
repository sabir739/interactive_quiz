// Quiz Data
const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "None of these"
        ],
        answer: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "CSS", "Python", "C++"],
        answer: 1
    },
    {
        question: "Which language is used for web interactivity?",
        options: ["Java", "C", "JavaScript", "Python"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

// Elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

const resultSection = document.getElementById("result");
const quizSection = document.getElementById("quiz");
const scoreEl = document.getElementById("score");
const messageEl = document.getElementById("message");
const restartBtn = document.getElementById("restartBtn");

// Load Question
function loadQuestion() {
    const current = quizData[currentQuestion];
    questionEl.textContent = current.question;
    optionsEl.innerHTML = "";

    current.options.forEach((option, index) => {
        const btn = document.createElement("div");
        btn.classList.add("option");
        btn.textContent = option;
        btn.onclick = () => selectAnswer(index);
        optionsEl.appendChild(btn);
    });
}

// Select Answer
function selectAnswer(index) {
    if (index === quizData[currentQuestion].answer) {
        score++;
    }
    nextQuestion();
}

// Next Question
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Show Result
function showResult() {
    quizSection.classList.add("hidden");
    resultSection.classList.remove("hidden");

    scoreEl.textContent = `${score} / ${quizData.length}`;

    if (score === quizData.length) {
        messageEl.textContent = "Excellent!";
    } else if (score >= 2) {
        messageEl.textContent = "Good Job!";
    } else {
        messageEl.textContent = "Try Again!";
    }
}

// Restart Quiz
restartBtn.onclick = () => {
    currentQuestion = 0;
    score = 0;

    resultSection.classList.add("hidden");
    quizSection.classList.remove("hidden");

    loadQuestion();
};

// Initial Load
loadQuestion();