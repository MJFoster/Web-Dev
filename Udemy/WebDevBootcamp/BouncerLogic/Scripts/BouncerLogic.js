var age = 0;
while (age <= 0) {
    var age = prompt("How old are you? ");
    console.log("You've entered an age of " + age);

    if (age <= 0) {
        console.log("Age must be a positive value, try again ...");
    } else {
        if (age == 21) {
            console.log("Happy 21st Birthday!!");
        }
        
        if (age%2 == 1) {
            console.log("Your age is ODD");
        }
        
        var num = Math.floor(Math.sqrt(age));
        if (num * num == age) {
            console.log("Your age of " + age + " is a perfect square!");
        };
    }
}