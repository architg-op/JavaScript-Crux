var todos = [];

var input = prompt("What would you like to do!");

while (input !== "quit") {
	if (input === "list") {
		// for (var i = 0; i < todos.length; i++) {
		// 	console.log(todos[i]);
		// }
		console.log("*****************");
		todos.forEach(function(item, i){
			console.log(i + ": " + item);
		});
		console.log("*****************");
	}
	else if (input === "new") {
		var newTodo = prompt("What would you like to add!");
		todos.push(newTodo);
	}
	else if (input === "delete") {
		var index = prompt("Which Index you want to delete?");
		todos.splice(index, 1);
		console.log("Item at index " + index + " deleted successfully");
	}
	else {
		console.log("Please Enter Right Input");
	}
	input = prompt("What would you like to do!");
}

console.log("You have Quit the App!");