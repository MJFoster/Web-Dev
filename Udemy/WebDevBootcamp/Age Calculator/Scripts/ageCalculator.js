/* Exercise to calculste the # days old the user is
   after taking into consideration leap years.
   Simple calculation, only an estimate but very close
*/

var debug = 0;  // Change to 1 to see console logs

var years = prompt("How will you be at the end of this year? ");
var currentYear =  new Date().getFullYear();
var dobYear = currentYear - years;

var yrsUntilLeap = 0;
if (dobYear%4 != 0) {
    yrsUntilLeap = 4 - dobYear%4;
    if (debug) console.log("yrsUntilLeap: " + yrsUntilLeap);
}

var numLeapYrs = 0;
if (years - yrsUntilLeap >= 0)
    numLeapYrs = 1;
numLeapYrs += Math.floor((years - yrsUntilLeap) / 4);
if (debug) console.log("NumLeapYrs: " + numLeapYrs);

var daysOld = 365 * years + numLeapYrs;
alert("At the end of THIS year, you will be " 
+ daysOld + " days old!");

var days = years * 365 + numLeapYrs;