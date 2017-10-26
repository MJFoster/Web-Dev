/*
    Score keeper for any game you wish to track!
    - Change color of winner to GREEN, larger, and bold.
 */

var debug = false;
var endOfGame = 5;
var scoreP1 = 0;
var scoreP2 = 0;

var p1Input = document.querySelector("#p1Input");
var p2Input = document.querySelector("#p2Input");

var btnP1 = document.querySelector("#btn-p1");
var btnP2 = document.querySelector("#btn-p2");
var btnReset = document.querySelector("#btn-reset");

if (debug) {
    console.log("btnP1: " + btnP1);
    console.log("btnP2: " + btnP2);
    console.log("btn-reset" + btnReset);
    console.log("p1 score: " + scoreP1 + ", p2 score: " + scoreP2 + ", endOfGame: " + endOfGame);
    console.log("p1Name: " + p1Name);
    console.log("p2Name: " + p2Name);
}

// Initialize page to reflect player scores and endOfGame goal.
updateView();
document.querySelector("#end-of-game").innerHTML = endOfGame;
document.querySelector("#end-of-game-input").value = endOfGame;

// Add event listeners to all buttons & inputs
p1Input.addEventListener("change", function() {
    thisElement = document.querySelector("#p1Name");
    thisElement.innerHTML = this.value;
    showScores(thisElement);
});
//
p2Input.addEventListener("change", function() {
    thisElement = document.querySelector("#p2Name");
    thisElement.innerHTML = this.value;
    showScores(thisElement);
});
//
document.querySelector("#end-of-game-input").addEventListener("change", function() {
    endOfGame = Number(this.value);
    resetGame();
    if (debug) {
     console.log("End Of Game Updated: " + endOfGame);
    }
});
//
btnP1.addEventListener("click", function() {
    if (scoreP1 < endOfGame && scoreP2 < endOfGame) {
        scoreP1++;
        updateView();
    }
});
//
btnP2.addEventListener("click", function() {
    if (scoreP2 < endOfGame && scoreP1 < endOfGame) {
        scoreP2++;
        updateView();
    }
});
//
btnReset.addEventListener("click", resetGame);


// Reset game scores and view.
function resetGame() {
    scoreP1 = 0;
    scoreP2 = 0;
    updateView();
}

// Reset page VIEW with current scores & end of game goal.
function updateView() {
    var p1ScoreElem = document.querySelector("#p1");
    var p2ScoreElem = document.querySelector("#p2");
    var p1NameElem = document.querySelector("#p1Name");
    var p2NameElem = document.querySelector("#p2Name");
    p1ScoreElem.innerHTML = scoreP1;
    p2ScoreElem.innerHTML = scoreP2;
    document.querySelector("#end-of-game").innerHTML = endOfGame;
    // Make winner obvious in view
    if (scoreP1 >= endOfGame) {
        p1ScoreElem.classList.add("winner");
        p1NameElem.classList.add("winner");
    }
    else {
        p1ScoreElem.classList.remove("winner");
        p1NameElem.classList.remove("winner");
    };
    if (scoreP2 >= endOfGame) {
        p2ScoreElem.classList.add("winner");
        p2NameElem.classList.add("winner");
    } else {
        p2ScoreElem.classList.remove("winner");
        p2NameElem.classList.remove("winner");
    }
}

// Parse the player's id, then show the currently hidden player name and score elements.
function showScores(showElement) {
    var playerName = "#" + showElement.id.substr(0,2) + "Name";
    var playerScore = "#" + showElement.id.substr(0,2);
    if(debug) {
        console.log(playerName + ": " + document.querySelector(playerName));
        console.log(playerScore + ": " + document.querySelector(playerScore));
    }

    document.querySelector(playerName).parentElement.removeAttribute("hidden");
    document.querySelector(playerScore).parentElement.removeAttribute("hidden");
}