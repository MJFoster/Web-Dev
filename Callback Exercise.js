// CALLBACK functions explained.
// A 'callback' function is simply a subroutine!
// In the example below, the function 'logger' is the 'callback' function (or subroutine)


var cats = ['Tom', 'Sylvester', 'Morris'];
var mice = ['Peter', 'Paul', 'Mary'];

function myForEach (inArray,callBackName) {  // input arguments are an array + a function!
    for(i=0; i<inArray.length; i++) {
        callBackName(inArray[i]);
    }
}

// This is the 'callback' function itself
function logger(thingToLog) {
    console.log(thingToLog);
}

myForEach(cats,logger);  / logs names in cats array
myForEach(mice, logger);  / logs names in mice array
