const init = () => {
    lenis = new Lenis({
        lerp: 0.04,
        smoothWheel: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }


    requestAnimationFrame(raf);
};

init();

const startQuizButton = document.getElementById("startQuiz");
const mainContent = document.getElementById("mainContent");
const quizContent = document.getElementById("quizContent");


startQuizButton.addEventListener("click", () => {
    mainContent.style.display = "none";
    quizContent.style.display = "block";
    displayQuestion();
})




let currentQuestion = 0;
let score = 0;
const questions = [
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        answers: [
            { text: "<a>", correct: true },
            { text: "<link>", correct: false },
            { text: "<href>", correct: false },
            { text: "<url>", correct: false },
        ]
    },
    {
        question: "What does the 'display' property in CSS control?",
        answers: [
            { text: "How an element is displayed on the page", correct: true },
            { text: "The size of the element", correct: false },
            { text: "The color of the element", correct: false },
            { text: "The margin of the element", correct: false },
        ]
    },
    {
        question: "Which HTML tag is used to embed an image?",
        answers: [
            { text: "<img>", correct: true },
            { text: "<image>", correct: false },
            { text: "<src>", correct: false },
            { text: "<picture>", correct: false },
        ]
    },
    {
        question: "How do you add a comment in JavaScript?",
        answers: [
            { text: "// This is a comment", correct: true },
            { text: "/# This is a comment #/", correct: false },
            { text: "# This is a comment", correct: false },
            { text: "<!-- This is a comment -->", correct: false },
        ]
    },
    {
        question: "Which CSS property is used to change the font size of text?",
        answers: [
            { text: "font-size", correct: true },
            { text: "text-size", correct: false },
            { text: "font", correct: false },
            { text: "size", correct: false },
        ]
    },
    {
        question: "What is the purpose of the 'z-index' property in CSS?",
        answers: [
            { text: "Controls the stacking order of elements", correct: true },
            { text: "Defines the width of an element", correct: false },
            { text: "Sets the font weight of text", correct: false },
            { text: "Controls the background color", correct: false },
        ]
    },
    {
        question: "Which method is used to add a new element to an array in JavaScript?",
        answers: [
            { text: "push()", correct: true },
            { text: "add()", correct: false },
            { text: "append()", correct: false },
            { text: "insert()", correct: false },
        ]
    },
    {
        question: "What is the default display value of a <div> element in HTML?",
        answers: [
            { text: "block", correct: true },
            { text: "inline", correct: false },
            { text: "flex", correct: false },
            { text: "none", correct: false },
        ]
    },
    {
        question: "Which of the following is the correct way to write an if statement in JavaScript?",
        answers: [
            { text: "if (condition) {}", correct: true },
            { text: "if condition {}", correct: false },
            { text: "if {condition}", correct: false },
            { text: "if: condition {}", correct: false },
        ]
    },
    {
        question: "How can you make a list item inside an unordered list bold in HTML?",
        answers: [
            { text: "<li><strong>Item</strong></li>", correct: true },
            { text: "<ul><b>Item</b></ul>", correct: false },
            { text: "<li><b>Item</b></li>", correct: false },
            { text: "<item><strong>Item</strong></item>", correct: false },
        ]
    },
    {
        question: "Which property in CSS is used to align text to the center?",
        answers: [
            { text: "text-align: center;", correct: true },
            { text: "align: center;", correct: false },
            { text: "center-align: true;", correct: false },
            { text: "align-text: center;", correct: false },
        ]
    },
    {
        question: "Which JavaScript method is used to remove the last item from an array?",
        answers: [
            { text: "pop()", correct: true },
            { text: "shift()", correct: false },
            { text: "remove()", correct: false },
            { text: "delete()", correct: false },
        ]
    },
    {
        question: "Which of the following is the correct syntax to access an element with the ID 'myElement' in JavaScript?",
        answers: [
            { text: "document.getElementById('myElement')", correct: true },
            { text: "document.getElement('myElement')", correct: false },
            { text: "getElementById('myElement')", correct: false },
            { text: "document.querySelector('#myElement')", correct: false },
        ]
    },

    {
        question: "Which HTML tag is used to create an ordered list?",
        answers: [
            { text: "<ul>", correct: false },
            { text: "<ol>", correct: true },
            { text: "<li>", correct: false },
            { text: "<dl>", correct: false },
        ]
    },

    {
        question: "What is the correct way to write a comment in CSS?",
        answers: [
            { text: "/* This is a comment */", correct: true },
            { text: "// This is a comment", correct: false },
            { text: "<!-- This is a comment -->", correct: false },
            { text: "# This is a comment", correct: false },
        ]
    }
];


const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");
const timerElement = document.getElementById("timer");
const questionCounterElement = document.getElementById("question-counter");


function startTimer() {
    const progressBar = document.getElementById("progress-bar");
    const totalTime = 10;
    const updateInterval = 10;
    let timeLeft = 10;

    progressBar.style.width = "100%";

    const soundEffect = new Audio('../../sounds/lastseconds.mp3');
    soundEffect.volume = 0.1;
    timer = setInterval(() => {
        timeLeft -= updateInterval / 1000;
        progressBar.style.width = `${Math.max(0, (timeLeft / totalTime) * 100)}%`;

        if (timeLeft <= 3 && timeLeft > 0) {
            document.getElementById("progress-bar").style.backgroundColor = "#a61f32";
            soundEffect.play();
        }

        if (timeLeft <= 0) {
            clearInterval(timer);
            disableAnswers();
            nextButton.disabled = false;
        }

    }, updateInterval);
}


function disableAnswers() {
    const answers = document.querySelectorAll(".answer");
    answers.forEach((answer) => {
        answer.disabled = true;
        answer.classList.add("disabled");
        answer.style.cursor = "not-allowed";
    });
}



function displayQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    answersElement.innerHTML = "";

    current.answers.forEach((answer) => {
        const answerDiv = document.createElement("button");
        answerDiv.classList.add("answer");
        answerDiv.textContent = answer.text;
        answerDiv.addEventListener("click", function () {
            handleAnswer(answer, answerDiv);
        });
        answersElement.appendChild(answerDiv);
    });

    nextButton.disabled = true;
    timeLeft = 15;
    startTimer();
}

function handleAnswer(selectedAnswer, answerElement) {
    clearInterval(timer);
    disableAnswers();
    const answers = document.querySelectorAll('.answer');

    answers.forEach(answer => {
        answer.disabled = true;
    });

    answerElement.classList.add('correct');

    if (selectedAnswer.correct) {
        score++;
    }

    nextButton.disabled = false;
}


nextButton.addEventListener("click", function () {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
        document.getElementById("progress-bar").style.backgroundColor = "#21211f";
    } else {
        endQuiz();
        if (score !== questions.length) {
            score = Math.min(score, questions.length);
        }
    }
});

restartButton.addEventListener("click", function () {
    currentQuestion = 0;
    score = 0;
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("quiz-results").style.display = "none";
    displayQuestion();
});

function endQuiz() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("quiz-results").style.display = "block";
    document.getElementById("final-score").textContent = score;
    resultText = document.getElementById("quiz-result");
    const percentage = Math.floor((score / questions.length) * 100);

    if (score == 15) {
        resultText.textContent = "You Won ! Good Job"
        const duration = 15 * 1000,
            animationEnd = Date.now() + duration,
            defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            confetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                })
            );
            confetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                })
            );
        }, 250);
    }else{
        resultText.textContent = "You lost 😞 Maybe Next time !"
    }
}


document.getElementById("home-button").addEventListener("click", () => {
    gsap.timeline({})
        .to("main", {
            opacity: 0,
            duration: 1.5,
            y: -200,
            ease: "power2.inOut",
        })
        .to("nav", {
            opacity: 0,
            duration: 1.5,
            y: -200,
            ease: "power2.inOut",
        })
        .call(() => {
            window.location.href = "../../index.html";
        });
})

