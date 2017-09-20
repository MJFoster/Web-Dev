// Print given string array to the console in REVERSE order.
// Place old and new strings on page.

var debug = 0;
var str = prompt("Enter String here ... ");
var strArray = str.split("");
var tmp;
var newStr = "";
var j = strArray.length - 1;

if (debug) {
    console.log("Original String: " + str);
}

for(var i = 0; i < j; i++) {
    tmp = strArray[i];
    strArray[i] = strArray[j];
    strArray[j--] = tmp;
    if (debug) {
        console.log("tmp: " + tmp);
        console.log("String Array now: " + strArray);
    }
}

strArray.forEach(function(ltr) {
    newStr += ltr;
});

if (debug) {
    console.log("New String Array: " + strArray);
    console.log("New String: " + newStr);
}

// Add newStr to the markup
document.getElementById("original").textContent = str;
document.getElementById("reversed").textContent = newStr;
