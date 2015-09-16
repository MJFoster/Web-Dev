// Function to be called with a string.  Returns NON-repeating characters, adjacent or non-adjacent.

function uniqueChars (str) {
	uniqueCharsArray = [];
	for(i=0; i<str.length; i++) {
		if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
		    uniqueCharsArray.push(str[i]);
		}
	};
	return uniqueCharsArray; // end of 'for' loop, return array of UNIQUE characters
};

console.log("We FOUND unique characters, and they are ... " + uniqueChars("aabbcdddefffcg"));