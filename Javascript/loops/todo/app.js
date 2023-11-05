let input = prompt("Welcome to the todo app, type something");

let todoArray = [];

while (true) {
    if (input.toLowerCase() === "quit") {
        console.log("quitting");
        break;
    }
    else if (input.toLowerCase() === "new") {
        let newTodo = prompt("Enter your new todo");
        todoArray.push(newTodo);
    } else if (input.toLowerCase() === "delete") {
        let todoIndex = prompt("Enter todo index to delete");
        todoArray.splice(todoIndex, 1);
    } else if (input.toLowerCase() === "list") {
        console.log("********");
        for (let i = 0; i < todoArray.length; i++) {
            console.log(i, todoArray[i]);
        }
        console.log("********");
    }
    input = prompt("Please type a command");
}