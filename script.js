var startBtn = document.getElementById("startBtn");
var quizInfo = document.getElementById("inforquiz");
var questionContainer = document.getElementById("question-container");
let mixedQuestions, currentQuestionIndex
var questionElement = document.getElementById("questions");
var answerBtnsElement = document.getElementById("answers");
var alert = document.getElementById("alert");

startBtn.addEventListener("click", startGame)


function startGame() {
startBtn.classList.add("hide")
mixedQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
quizInfo.classList.add("hide")
questionContainer.classList.remove("hide")
setNextQuestion()
}

function setNextQuestion(){
    resetToDefault()
    showQuestion(mixedQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerHTML = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", setNextQuestion)
        answerBtnsElement.appendChild(button)
    })
}

function resetToDefault(){
    while (answerBtnsElement.firstChild){
        answerBtnsElement.removeChild(answerBtnsElement.firstChild)
    }
}

function selectAnswer(e){
    var selectedBtn = e.target
    var correct = selectedBtn.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtnsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}
//ALERT IF CORRECT


function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

var questions = [
    {
        question:"What are variables used for in JavaScript Programs?",
        answers:[
            {text:"A. Storing numbers, dates, or other values", correct: true },
            {text:"B. Varying Randomly", correct: false},
            {text:"C. Causing high-school algebra flashbacks", correct: false },
            {text:"D. None of the above", correct: false}
        ]
    },
    {
        question:"Arrays in JavaScript can be used to store:",
        answers:[
            {text:"A. Numbers and strings", correct: false},
            {text:"B. Other arrays", correct: false},
            {text:"C. Booleans", correct: false },
            {text:"D. All of the above", correct: true}
        ]
    },
    {
        question:"A very useful tool used during development and debugging for printing content to the debugger is:---",
        answers:[
            {text:"A. JavaScript", correct: false },
            {text:"B. terminal/bash", correct: false},
            {text:"C. alerts", correct: false},
            {text:"D. console.log", correct: true}
        ]
    },
    {
        question:"Which of the following is not considered as an error in JavaScript?",
        answers:[
            {text:"A. Syntax error", correct: false },
            {text:"B. Missing of semicolons", correct: false},
            {text:"C. Division by zero", correct: true },
            {text:"D. All of the mentioned", correct: false}
        ]
    },
    {
        question:"Which built-in method removes the last element from an array and returns that element?",
        answers:[
            {text:"A. last()", correct: false },
            {text:"B. get()", correct: false},
            {text:"C. pop()", correct: true},
            {text:"D. None of the above", correct: false}
        ]
    }
]