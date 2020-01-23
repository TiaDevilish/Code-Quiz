var storedScores = JSON.parse(localStorage.getItem("userData"));
var highScoreArea = document.getElementById("highScoresList");
var clearBtn = document.getElementById("clearScores");

function displayTheScores(){
    if (storedScores !== null) {
        var scoreList = document.createElement("ol");
        scoreList.className = "scoreListClass";
        for (var i = 0; i< storedScores.length; i++){
            var initials = storedScores[i].inits;
            var scores = storedScores[i].userScore
            var scoreEntry = document.createElement("li");
            scoreEntry.innerHTML = initials+ "-"+ scores;
            scoreList.appendChild(scoreEntry);
        }
    }highScoreArea.appendChild(scoreList);
};

displayTheScores();

clearBtn.addEventListener("click", function(){
    highScoreArea.innerHTML = "";
    window.localStorage.clear();
});