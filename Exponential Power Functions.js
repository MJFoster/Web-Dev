// Given 2 integers, calculate the value of x to the power of y.
// Below we use the 'Math.pow' method in our function.
//
function getPower(x,y) {
	return Math.pow(x,y);
};




// Below we do not use the Math.pow' method, instead generate our own code in our function.
// 
function getExponValue(x,y) {
	result = x;
	for(var i=1; i<y; i++) {
		result *= x;
	};
	return result;
};

console.log(getPower(2,3));
console.log(getExponValue(2,3));

