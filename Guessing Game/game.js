var secretNumber = 5;
var number = Number(prompt("Guess any number"));
if (number === secretNumber ) {
	alert("You've Guessed it right");
}
else if (number < secretNumber ) {
	alert("Too Low! Try Again");
}
else if (number > secretNumber){
	alert("Too High! Try Again");
}
else {
	alert("You've not entered a number");
}