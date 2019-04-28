sumArray([4, 7, 9, 3]);

function sumArray(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	console.log("Sum is " + sum);
}