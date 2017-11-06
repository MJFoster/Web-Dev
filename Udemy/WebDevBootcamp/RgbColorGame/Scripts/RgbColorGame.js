var debug = true;

var colors = [
    "RGB(255, 0, 0)", 
    "RGB(0, 255, 0)",
    "RGB(0, 0, 255)",
    "RGB(255, 255, 0)",
    "RGB(0, 255, 255)",
    "RGB(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
if (debug) {
    console.log("Squares elements: " + squares);
}

// Temporarily hard code the goalColor.
// TODO:  Randomize goalColor with 'r', 'g', 'b' values from 0-255.
var goalColor = colors[3];

displayGoalColor(goalColor);
fillSquares();

// Add a click event listener to each square.
squares.forEach(function(square) {
    square.addEventListener("click", function() {
        if(this.style.backgroundColor === goalColor) {
            /* Update colors[] */
            colors.forEach(function(color, index) {

            });
            fillSquares();
            /* update banner backgroundColor */
            /* Add 'Try Again' or 'Correct' message on menu bar */
            /* Add text 'New Colors' / 'Play Again?' to menu bar */
        } else {
            /* addClass 'dark-background' to clicked square. */
            /* Show 'Try Again' centered between 'NEW COLORS' and 'EASY' */
        }
    })
});


/* Fill all squares with colors currently in colors[] */
function fillSquares() {
    squares.forEach(function(square, index) {
        square.style.backgroundColor = colors[index];
    });
}

/* Update the "RGB" text in bannaer.  */
function displayGoalColor (color) {
    document.querySelector("#rgb-color").innerHTML = color;
}