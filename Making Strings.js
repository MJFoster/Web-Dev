// Function will be given a mask of '0's and '1's, along with a string.
// The function will return a new string.
// Loop through each character of a string and matching length 'mask'
// For every '1' in the mask, the function will append to the NEW string the
// character found in the same position in the string.
// For every '0' in the mask, the function will append to the NEW string '0'

function maskString (str, mask) {

    var newString = "";
    
    if (str.length != mask.length) {
        console.log("Your mask is the wrong length, try again!");
    } else {
        for (i=0; i<str.length; i++) {
	       if(mask[i] === "1") {
		       newString = newString.concat(str[i]);
	       } else {
		       newString = newString.concat("0");
	       };
        };
    };
    return(newString);
};

console.log(maskString("My Dog Skip", "01000110011"));
console.log(maskString("My Dog Skip", "10111001100"));
console.log(maskString("My Dog Skip", "010001100111"));
