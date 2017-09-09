var response = prompt("Are we there yet?").toUpperCase();
while (response.indexOf("YES") === -1 && response.indexOf("YEAH") === -1) {
    response = prompt("Are we there yet?");
};

alert("Yes, we finally made it!");