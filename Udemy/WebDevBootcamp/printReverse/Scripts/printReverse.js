// Print given string array to the console in REVERSE order.
// Place old and new strings on page.

var debug = 1;
var str = prompt("Enter String here ... ");
var tmp;
var j = str.length - 1;

if (debug) {
    console.log("Original String: " + str);
}

for(var i = 0; i < j; i++) {
    tmp = str[i];
    str[i] = str[j];
    str[j--] = tmp;
}

if (debug) {
    console.log("New String" + str);
}

