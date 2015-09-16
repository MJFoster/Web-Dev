// Create a function for "strings" that simulates the 'forEach()' method for arrays.
// MUST use an "S" on this prototype definition.
// The string 'prototype' needs to have this new method applied to it in order to make this
// function now available to all 'strings'
// 
// NOTE:  Use the 'this' keyword here!  To define it ... 'this' = whatever is immediately LEFT of the '.' at call time.

String.prototype.forEach = function(callBackName) {
    for(var i = 0; i<this.length; i++) {
        callBackName(this[i]);
    }
}

// Now call the NEW 'forEach' STRING "method" below ... AT THE SAME TIME define the function itself, INLINE, that will be passed INTO the 'forEach' method now 
// attached to the string prototype.

console.log("something cool here".forEach(function(argument1){
    console.log(argument1);
}));
