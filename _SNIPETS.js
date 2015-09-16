///////////////  Code uses the 'mod' function.  It determines if a number is divisible by 3 or by 5
for (i=1; i<=100; i++) {
        var modResult3 = i % 3;
        var modResult5 = i % 5;

        if(modResult3 === 0 && modResult5 === 0) {
            console.log(i + " is divisible by BOTH 3 & 5!");
        } else if(modResult3 === 0) {
            console.log(i + " is divisible by 3.");
        } else if(modResult5 === 0) {
            console.log(i + " is divisible by 5.");
        }
}

var food = ["Pizza", "Burrito", "Fries", "Chips", "Salad"];

for(i=0; i < food.length; i++) {
    if(food[i] === "Fries") {
        console.log("We found Fries at index " + i);
        break;
    };
    console.log("Still checking at element ... " + i);
}

///////////////  Use the 'for' loop

var food = ["Pizza", "Burrito", "Fries", "Chips", "Salad", "Fries", "Pizza"];

for(i=0; i < food.length; i++) {
    if(food[i] === "Fries") {
        console.log("We found Fries at index " + i);
    };
    console.log("Still checking at index ... " + i);
}

///////////////  Use CALL BACKS here.

var food = ["Pizza", "Burrito", "Fries", "Chips", "Salad", "Fries", "Pizza"];

food.forEach(function(valueToFind, index_num) { //////// Parameters are INTERNAL to this INTERNAL function
        if(valueToFind === "Fries") {
            console.log("We found " + valueToFind + " at index " + index_num);
    };
});