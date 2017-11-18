var debug = true;

var colors = newColors();
// var colors = [
//     "rgb(255, 0, 0)", 
//     "rgb(0, 255, 0)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(255, 0, 255)"
// ];

var squares = document.querySelectorAll(".square");
if (debug) {
    console.log("Squares elements: " + squares);
}

// Set goalColor by randomly choosing from colors[].
var goalColor = colors[Math.floor(Math.random() * colors.length)];


displayRgbGoalColor(goalColor);
InitializeSquares();

/* Color and add event listeners to squares */
function InitializeSquares() {
    squares.forEach(function(square, index) {
        square.style.backgroundColor = colors[index];
        // Add an event listener to each square that updates background color(s) when clicked.
        square.addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === goalColor) {
                /* TODO Update all squares & banner background color to goalColor, update user messages & buttons*/
                matchAllSquares(clickedColor);
                document.querySelector("#banner").style.backgroundColor = clickedColor;
                document.querySelector("#user-message").innerHTML = "Correct!";
                /* TODO Update buttons 'New Colors' / 'Play Again?' to menu bar */
            } else {
                // hide clicked square, and update #user-message.
                this.style.backgroundColor = "#232323";
                document.querySelector("#user-message").innerHTML = "Try Again!";
            }
        });
    });
}

/* Update the "RGB" text in bannaer.  */
function displayRgbGoalColor (color) {
    document.querySelector("#rgb-color").innerHTML = color;
}

/* Match all squares[] to given color */
function matchAllSquares(newColor) {
    squares.forEach(function(square) {
        square.style.backgroundColor = newColor;
    })
}

/* Randomly determine colors */
function newColors() {
// TODO Randomize squares[] with r-g-b values from 0-255 each
    ;
}