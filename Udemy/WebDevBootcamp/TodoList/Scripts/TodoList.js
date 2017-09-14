var userResponse = prompt("What would you like to do?").toUpperCase();

while (userResponse != "QUIT") {
    if (userResponse == "NEW") {
        console.log("NEW entered.");
    } else if (userResponse == "LIST") {
        console.log("LIST entered.");
    } else {
        console.log(userResponse + " - Invalid response entered.");
    }
    userResponse = prompt("What would you like to do?").toUpperCase();
}