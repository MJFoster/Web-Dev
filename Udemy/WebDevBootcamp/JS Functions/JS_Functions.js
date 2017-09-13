// Return boolean after evaluating whether or not a given input is even or not.
// @param int - integer being tested.
// @return boolean - yes if and only if the parameter is even.

function isEven (num) {
    return num % 2 === 0;
}


/* Calculate the factorial of a given number  n! = 1*2*3* ... n 
   0! = 1! = 1
*/
function factorial(num) {
    retValue = 1;
    if (num === 0 || num === 1) return 1;
    
    for (var i = 2; i <= num; i++) {
        retValue *= i;
    }

    return retValue;
}


/* Converts strings from Kabob case to snake case.
   Ie, replaces all '-' chars with '_' chars. */
   function kabobToSnake(str) {
    return str.replace(/-/g, "_");  /* Use a regular expression to globally locate all dashes, and replace them */
   }


/* Send the lyrics of a song to the screen. */
function sing() {
    console.log("Mary had a little lamb, little lamb, little lamb,");
    console.log("Mary had a little lamb whose fleece was white as snow!");
}

/* Higher Order functions ... functions calling or returning other functions.  */

/* 'setInterval' is a native Higher Order function.  It calls another function every x milliseconds.
   The function called as well as the interval are set from the parameters passed in. */
var retVal = setInterval(sing, 500);  /* Calls sing() every 1/2 second, and returns it's status code to 'retVal' */
clearInterval(retVal);              /* Stops the continuous looping of the interval.  */