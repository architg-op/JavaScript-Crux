pR([1, 2, 3, 4, 5]);
pR([9, 8, 7, 6, 5]);

function pR(arr) {
	for (var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}