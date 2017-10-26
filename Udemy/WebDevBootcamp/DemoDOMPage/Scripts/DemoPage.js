var h1 = document.querySelector("h1");

h1.addEventListener("click", function() {
    h1.classList.toggle("red-text");
});

var lis = document.querySelectorAll("li");

for (i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        this.classList.toggle("blue-text");
    });
}

var button = document.querySelector("button");
button.addEventListener("click", function() {
    document.body.classList.toggle("purple-background");
});




