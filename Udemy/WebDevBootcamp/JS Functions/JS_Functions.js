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
   function kabobToSnake(str() {
    // Use String functions to replace all dashes with underscores
   }