var todoList = [];
var todo = "";
var todoIndex = -1;

var userResponse = prompt("Please select an action ...").toUpperCase();

while (userResponse != "QUIT") {
    if (userResponse === "NEW") {
        todo = prompt("What would you like to add to your list? ");
        todoList.push(todo);
        console.log(todo + " added.");
    } else if (userResponse === "LIST") {
        listTodos();
    } else if (userResponse === "DELETE") {
        deleteTodo();
    } else if (userResponse === "DELETE ALL") {
        deleteTodo(1);
    } else {
        console.log(userResponse + " - Invalid response entered.");
    }
    userResponse = prompt("Please select an action ...").toUpperCase();
}
alert("Thanks For Playing, TodoList Is Now Closed."); 

function listTodos() {
    var outputString = "";

    outputString += "**********\n";
    if (todoList.length === 0) {
        outputString += "Todo List is empty ...\n";
    } else {
        todoList.forEach(function(todo,i) {
            outputString += "(" + i + "): " + todo + "\n";
        });        
    }
    outputString += "**********\n";
    alert(outputString);
}

function deleteTodo(deleteWholeList = 0) {
    if(todoList.length === 0) {
        alert("There are no items to delete, please add one first.");
    } else {
        if(deleteWholeList != 0) {
            todoList.splice(0,todoList.length);
        } else {
            listTodos();
            todoIndex = prompt("Item # to delete OR \"Main\" to skip deleting.");
            if (todoIndex.toUpperCase() === "MAIN") {
                return;
            }
            while(isNaN(todoIndex)  ||  todoIndex < 0 || todoIndex >= todoList.length) {
                alert("Invalid item index: " + todoIndex);
                listTodos();
                todoIndex = prompt("Item # to delete OR \"Main\" to skip deleting.");
                if (todoIndex.toUpperCase() === "MAIN") {
                    return;
                }
            };
            todo = todoList[todoIndex];
            todoList.splice(todoIndex, 1);
            console.log("(" + todoIndex + "): " + todo + " deleted");
        }
    };
    listTodos();
}