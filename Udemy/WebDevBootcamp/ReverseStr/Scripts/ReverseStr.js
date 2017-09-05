var debug = false;

var temp = '';
var str = "";
var newStr = "";

while (str == "") {
    str = prompt("E}nter string to reverse: ");
}
if (debug) console.log("String entered: " + str);

var end = str.length - 1;
var strArray = str.split('');
if (debug) console.log("String Array: " + strArray);

for (var i = 0; i < end; i++) {
    tmp = strArray[i];
    strArray[i] = strArray[end];
    strArray[end--] = tmp;
}

for (var i = 0; i < str.length; i++) {
    newStr += strArray[i];
}

console.log("Original String: " + str);
console.log("Reversed String: " + newStr);