/* Specifications:
     * Boolean return that reflects if given array has all identical elements.
     * Prompt user for csv array of data.
     * Trim off extra spaces after ',' so that only delimiter is ','
     * Empty array ... true
     * Render the whole array and boolean result reflecting if array is uniform or not.
*/
var debug = 1;
var elements = [];
var allSame = true;

elements = prompt("Enter array elements, separated by ',' (ENTER when done): ")
            .replace(/, */g, ",")    // trim out extra spaces from delimiter
            .split(",");

if (debug) {
    elements.forEach(function(element, i) {
        console.log("(" + i + "): " + elements[i]);
    })
}

for (var i = 0; i < elements.length-1 && allSame === true; i++) {
    if (elements[i] !== elements[i+1]) {
        allSame = false;
    }
}

if (debug) {
    console.log("   Uniform? " + allSame);
}

document.querySelector("#elements").textContent = elements.toString();
document.querySelector("#isUniform").textContent = allSame;