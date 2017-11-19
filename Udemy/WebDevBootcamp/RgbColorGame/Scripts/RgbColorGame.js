var debug = true;

// TODO update difficulty based on click event of hard/easy button
var difficulty = "hard";

// Assign brand NEW array of colors with potentially new size also.
var colors = newColors(getNumColors(difficulty));
var squares = document.querySelectorAll(".square");

if (debug) {
    console.log("Squares elements: " + squares);
}

// Set goalColor
var goalColor = setGoalColor();

InitializeSquares();

/* Add event listener to reset button to get and display
   new colors, choose a new goalColor, reset banner background,
   and update user-message & button text. */
document.querySelector("#reset").addEventListener("click", function() {
    colors = newColors(getNumColors(difficulty));
    goalColor = setGoalColor();
    document.querySelector("#reset").innerHTML = "New Colors"; /* Update reset button text */
    document.querySelector("#banner").style.backgroundColor = "blue";
    document.querySelector("#user-message").innerHTML = "";
    squares.forEach(function(square, index) {
        if(index >= colors.length) {
            hideSquare(square);
        } else {
            square.style.backgroundColor = colors[index];
        }
    })
});


//--------------------  FUNCTIONS ---------------------------

/* On squares, set colors and add event listeners */
function InitializeSquares() {
    squares.forEach(function(square, index) {
        if (index >= colors.length) {
            hideSquare(square);
        } else {
            square.style.backgroundColor = colors[index];
        }
        // Add an event listener to each square that updates background color(s) when clicked.
        square.addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === goalColor) {
                /* Update all squares & banner background color to clicked color, update user messages & buttons */
                matchAllSquares(clickedColor);
                document.querySelector("#banner").style.backgroundColor = clickedColor;
                document.querySelector("#user-message").innerHTML = "Correct!";
                document.querySelector("#reset").innerHTML = "Play Again?"; /* Update reset button text */
            } else {
                // hide clicked square, and update #user-message.
                //this.style.backgroundColor = "#232323";
                hideSquare(this);
                document.querySelector("#user-message").innerHTML = "Try Again!";
            }
        });
    });
};


/* Returns number of colors used based on difficulty chosen. */
function getNumColors(currDifficulty) {
    if (currDifficulty === "hard") {
        return 6;
    } else {
        return 3;
    }
}


/* Match all squares[] to given color */
function matchAllSquares(newColor) {
    squares.forEach(function(square, index) {
        if(index >= colors.length) {
            hideSquare(square);
        } else {
            square.style.backgroundColor = newColor;
        }
    });
}


/* Randomly generate new array of colors. */
function newColors(arraySize) {
    var newArray = [];
    var r, g, b; 

    for(var i = 0; i < arraySize; i++) {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        newArray.push("rgb(" + r + ", " + g + ", " + b + ")");
    };

    if(debug) {
        console.log("newArray: " + newArray);
    };
    return newArray;
}


/* Randomly choose color from colors[] array, update rgb text in banner, and return new goal. */
function setGoalColor() {
    var goal = colors[Math.floor(Math.random() * colors.length)];
    /* Update the "RGB" text in bannaer.  */
    document.querySelector("#rgb-color").innerHTML = goal;
    if (debug) {
        console.log("setGoalColor(): goal = " + goal);
    }
    return goal;
}


/* Change background to match app background and simulate hiding */
function hideSquare(square) {
    square.style.backgroundColor = "#232323";
}
