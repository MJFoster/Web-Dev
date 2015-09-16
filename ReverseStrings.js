// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// FUNCTION to reverse a text string ... "reverseStr"
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

var textStr = "My Message";
console.log(textStr);

function reverseStr(str) {
    var newText = "";
    for(var i=str.length-1; i>=0; i--) {    // JS allows you to take 'i' out of index here! 
    newText += str[i];
}
return newText;
}

console.log(reverseStr(textStr));

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Here's how to add this function to the 'String' prototype ...
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

String.prototype.reverseStr = function reverseStr(str) {
    var newText = "";
    for(var i=this.length-1; i>=0; i--) {    // JS allows you to take 'i' out of index here! 
    newText += this[i];
}
return newText;
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Now test the new prototype!
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

var junk = "12345";

console.log(junk.reverseStr(junk));
