var questionContainer = document.getElementById("question-container");
var startBtn = document.getElementById("startBtn");
var titleitem = document.getElementById("title-item");
var nextQuestions;
var questionAnswers = document.getElementById("question-answers");
var currentQuestionIndex = 0;
var alert = document.getElementById("alert");
var quizInfo = document.getElementById("inforquiz");
var allScores = [];
var storedScores = JSON.parse(localStorage.getItem("userData"))
var myScore = document.getElementById("score")
var scoreBtn = document.getElementById("btnScore");
var score = 0;
var count = 75;
var timer = document.getElementById("timer");
var timeInterval = 0;

var questions = [
    {title:"A very useful tool used during development and debugging for printing content to the debugger is:---",
    choices:["A. JavaScript","B. terminal/bash","C. alerts","D. console.log"],
    answer:"D. console.log"
    },
    {title:"What are variables used for in JavaScript Programs?",
    choices:["A. Storing numbers, dates, or other values","B. Varying Randomly","C. Causing high-school algebra flashbacks","D. None of the above"],
    answer:"A. Storing numbers, dates, or other values"
    },
    {title:"Arrays in JavaScript can be used to store:",
    choices:["A. Numbers and strings","B. Other arrays","C. Booleans","D. All of the above"],
    answer:"D. All of the above"
    },
    {title:"A very useful tool used during development and debugging for printing content to the debugger is:---",
    choices:["A. JavaScript","B. terminal/bash","C. alerts","D. console.log"],
    answer:"D. console.log"
    },
    {title:"Arrays in JavaScript can be used to store:",
    choices:["A. Numbers and strings","B. Other arrays","C. Booleans","D. All of the above"],
    answer:"D. All of the above"
    },
]

startBtn.addEventListener("click", startGame);

function startGame() {
    if(storedScores !==null){
        allScores = storedScores;
    }
    startBtn.classList.add("hide")
    quizInfo.classList.add("hide")
    questionContainer.classList.remove("hide")
    nextQuestions= questions[currentQuestionIndex];
    displayQuestion(nextQuestions)
    gametime()
}

scoreBtn.addEventListener("click", function(){
    let name = document.getElementById("inputScore").value
    scorePage(name, count)
});

function gametime(){
        timeInterval = setInterval(function(){
        timer.innerText = count
        count
    },1000)
}

function scorePage(a, b) {
    var userData = {
        inits: a,
        userScore: b
    };
    allScores.push(userData);
    localStorage.setItem("userData", JSON.stringify(allScores));
    location.href = "highscores.html";
}

function displayQuestion(question){
    titleitem.innerText = question.title
    question.choices.forEach(element => {
    var button = document.createElement("button")   
    button.classList.add("btn")
    button.innerText = element
    questionAnswers.appendChild(button)
    button.addEventListener("click", displayNextQuestion)
    });
}

function displayNextQuestion(e){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        correction(e.target.innerText == nextQuestions.answer)
        questionAnswers.innerHTML = ""
        if(currentQuestionIndex < questions.length){
            nextQuestions = questions[currentQuestionIndex]
            displayQuestion(nextQuestions)
        }else{
            currentQuestionIndex = 0
            displayQuestion(nextQuestions)
        }
    }else{
        endgame()
    }
}

function correction(response){
    if(response){
        alert.innerText = "Correct"
        console.log("correct")
    }else{
        alert.innerText = "Wrong"
        count = count -15
        timer.innerHTML = count
        console.log("wrong")
    }
    setTimeout(function(){
        alert.innerText=""
    },1000);
}

function endgame(){
    myScore.innerText = count
    questionContainer.classList.add("hide")
    
}