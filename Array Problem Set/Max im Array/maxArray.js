maxArray([88, 9, 4, 55, 33]);

function maxArray(arr) {
	var max = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	console.log("Maximum in Array is " + max);
}