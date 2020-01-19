var startBtn = document.getElementById("startBtn");
var quizInfo = document.getElementById("inforquiz");
var questionContainer = document.getElementById("question-container");
let mixedQuestions, currentQuestionIndex
var questionElement = document.getElementById("questions");
var answerBtnsElement = document.getElementById("answers");

startBtn.addEventListener("click", startGame)


function startGame() {
startBtn.classList.add("hide")
mixedQuestions = quiestions.sort(() => Math.random() - .5)
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
    questionElement.innerHTML = question.quiestion
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerBtnsElement.appendChild(button)
    })
}

function resetToDefault(){
    while (answerBtnsElement.firstChild){
        answerBtnsElement.removeChild(answerBtnsElement.firstChild)
    }
}

function selectAnswer(e){

}

var quiestions = [
    {
        quiestion:"1. What are variables used for in JavaScript Programs?",
        answers:[
            {text: "A. Storing numbers, dates, or other values", correct: true },
            {text:"B. Varying Randomly", correct: false },
            {text:"C. Causing high-school algebra flashbacks", correct: false },
            {text:"D. None of the above", correct: false}
        ]
    }
]