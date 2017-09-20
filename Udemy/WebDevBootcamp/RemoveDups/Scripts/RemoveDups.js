var debug = 0;
// if (debug) console.log("");

var str = "";
while (str == "") {
    str = prompt("Enter your string here: ");
}

if (debug) console.log("Original String: " + str);

var newStr = "";
var found = false;

for (var i = 0; i < str.length; i++) {
    // for (var j = i+1; j < str.length && !found; j++) {
    for (var j = 0; j < i && !found; j++) {
        if (str.charAt(i) === str.charAt(j)) {
            found = true;
            if (debug) console.log("i: " + i + ", str(i): " + str.charAt(i) + ", j: " + j + ", str(j): " + str.charAt(j));
        }
    }
    if (!found) {
        newStr += str.charAt(i);
        if (debug) console.log(newStr);
    }
    else {
        found = false;
    }
}

if (debug) {
    console.log("Original String:\t" + str);
    console.log("New string:\t" + newStr);
}

alert("Original String: " + str + "\nNew String: " + newStr);