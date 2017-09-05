var debug = 1;
if (debug)
    console.log("Debug is ON");
else
    console.log("Debug is OFF");

var number = 2;
var found = false;

while(!found) {
    var guess = Number(prompt("What's your guess? "));

    if (debug) console.log("Number entered: " + guess);

    if (guess < number) {
        alert("Too low, try higher ...");
    } else if (guess > number) {
        alert("Too high, try lower ...");
    } else if (guess === number) {
        alert("You Got It Right!!!");
        found = true;
    }
}