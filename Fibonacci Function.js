// Fibonacci function that returns the 'num'th number in this series.  Each number is the sum of it's two predecessors.
//

var fibonacci = function(num) {
   var prev = 0;
   var current = 1;
   var next;
   for(var i = 1; i < num; i++) {
       console.log(prev);
       next = prev + current;
       prev = current;
       current = next;
   };
   console.log(prev);
   return prev;
};

var seqNum = 10;
console.log("Sequence number " + seqNum + " is " + fibonacci(seqNum));
