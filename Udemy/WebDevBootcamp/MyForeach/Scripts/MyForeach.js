// Simulate the JS 'foreach' function taking a function NAME as it's only arguement.
// This foreach needs to modify the prototype foreach so that it is applied to an object.
// Basic functionality is to have the function passed in be executed on each item of the iterable object.
var myFamily = ["Jillian", "Will", "Natalie", "Evie", "Woody", "Dwight", "Carmel", "Steve"];

Array.prototype.myForeach = function(func) {
    for (var i = 0; i < this.length; i++) {
        func(this[i]);
    }
};

// myFamily.forEach(alert);
myFamily.myForeach(console.log);