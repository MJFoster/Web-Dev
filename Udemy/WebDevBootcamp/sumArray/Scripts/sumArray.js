// returns the SUM of given numbers array
var debug = 1;
var numbersArray = [1, 2, 3];
var numString = "";

if (debug) {
    console.log("numbersArray = " + numbersArray);
}

var sum = 0;

numbersArray.forEach(function(number, i) {
    sum += number;
    numString += number.toString();
    if(i !== numbersArray.length -1 ) {
        numString += ", ";
    }
    if (debug) {
        console.log("Sum = " + sum);
        console.log("numString: " + numString);
    }
});

// Add sum to page
document.querySelector("#numbers").textContent = numString;
document.querySelector("#sum").textContent = String(sum);