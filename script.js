var startBtn = document.getElementById("startBtn");
var quizInfo = document.getElementById("inforquiz");
var questionContainer = document.getElementById("question-container");
let mixedQuestions, currentQuestionIndex
var questionElement = document.getElementById("questions");
var answerBtnsElement = document.getElementById("answers");
var alert = document.getElementById("alert");


//event listeners for startbtn and answerbtn 
startBtn.addEventListener("click", startGame)
answerBtnsElement.addEventListener("click", (event) => {
    currentQuestionIndex++
    selectAnswer(event)
    //if data- correct att is true display this alert, else display the other alert
    //set timer to display the message for 1 second
    setNextQuestion()
})
//this will start the game and give a random question, hide the start btn and add the question list display
function startGame() {
startBtn.classList.add("hide")
mixedQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
quizInfo.classList.add("hide")
questionContainer.classList.remove("hide")
setNextQuestion()
}
//next question is shown, old one is hidden
function setNextQuestion(){
    resetToDefault()
    showQuestion(mixedQuestions[currentQuestionIndex])
}
//showing the questions in a button
function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
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
//this is to show which element was clicked on
function selectAnswer(e){
    var selectedBtn = e.target
    console.log(e)
    var correct = selectedBtn.dataset.correct
    setStatusClass(selectedBtn.e, correct)
    Array.from(answerBtnsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}


//ALERT IF CORRECT
function setStatusClass(element, correct){
    
    console.log(element)
    console.log(correct)
   
    if(correct){
        alert.innerText = "correct!"
        setTimeout(function(){ alert.innerText = ""}, 1000)
    }else {
        alert.innerText = "wrong!"
        setTimeout(function(){ alert.innerText = ""}, 1000)
    }
}



var questions = [
    {//always wrong
        question:"What are variables used for in JavaScript Programs?",
        answers:[
            {text:"A. Storing numbers, dates, or other values", correct: true},
            {text:"B. Varying Randomly", correct: false},
            {text:"C. Causing high-school algebra flashbacks", correct: false},
            {text:"D. None of the above", correct: false},
        ]
    },
    {//always correct
        question:"Arrays in JavaScript can be used to store:",
        answers:[
            {text:"A. Numbers and strings", correct: false},
            {text:"B. Other arrays", correct: false},
            {text:"C. Booleans", correct: false },
            {text:"D. All of the above", correct: true},
        ]
    },
    {//always correct
        question:"A very useful tool used during development and debugging for printing content to the debugger is:---",
        answers:[
            {text:"A. JavaScript", correct: false},
            {text:"B. terminal/bash", correct: false},
            {text:"C. alerts", correct: false},
            {text:"D. console.log", correct: true},
        ]
    },
    {//always wrong
        question:"Which of the following is not considered as an error in JavaScript?",
        answers:[
            {text:"A. Syntax error", correct: false},
            {text:"B. Missing of semicolons", correct: false},
            {text:"C. Division by zero", correct: true},
            {text:"D. All of the mentioned", correct: false},
        ]
    },
    {//always wrong
        question:"Which built-in method removes the last element from an array and returns that element?",
        answers:[
            {text:"A. last()", correct: false},
            {text:"B. get()", correct: false},
            {text:"C. pop()", correct: true},
            {text:"D. None of the above", correct: false},
        ]
    }
]