let toDoList = ["Hello", "there", "I", "programme", "lololo"];
let cmd = prompt("What would you like to do?");

    
while (cmd !== "quit") {
    if (cmd === "new") {
        
        let newTask = prompt("What task would you like to add?");
        toDoList.push(newTask);
        alert(`${newTask} is added to List`);
        
    } else if (cmd === "list") {
        
        console.log("********************");
        for (let task in toDoList) {
            console.log(`${task}: ${toDoList[task]}`);
        }
        console.log("********************");
        
    } else if (cmd === "delete") {
        
        let del = parseInt(prompt("Which index you would like to delete?"));
        if (del >= 0 && del < toDoList.length) {
            alert(toDoList.splice(del, 1) + " was deleted from List");
        } else {
            alert("I dont understand");
        }
        
    } else {
        alert("I don't understand your command.")
    }
    cmd = prompt("What would you like to do? new/list/delete/quit");
    
}

alert("You quit the programme");