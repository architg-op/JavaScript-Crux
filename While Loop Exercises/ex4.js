var start = 5;
var end = 50;

while (start < end) {
	if (start % 3 == 0 && start % 5 == 0) {
		console.log(start);
	}
	start++;
}