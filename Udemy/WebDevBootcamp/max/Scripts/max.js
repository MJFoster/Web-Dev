var debug = 1;
var numbers = [];
var response = 'N';
var returnString = "Array Of Numbers: ";

while (response.toUpperCase() != 'Q') {
    response = prompt("Enter next number for list, or 'Q' to Quit: ").toUpperCase();
    if (response !== "Q" && !Number.isNaN(Number(response))) {  // Only push actual numbers to the numbers array
        numbers.push(Number(response));
        if (debug) {
            console.log("numbers: " + numbers);
        }
    }
}

returnString += numbers.toString() + "\n";

returnString += "Maximum Value: " + Math.max.apply(null,numbers);

if (numbers.length != 0) {
    document.getElementById("output").innerText = returnString;
} else {
    document.getElementById("output").innerText = "No numbers added ...";
}