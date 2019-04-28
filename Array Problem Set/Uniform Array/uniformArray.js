// alert("Connected!!!");
console.log(uniformArray(["b", "b", "b"]));

function uniformArray(arr) {
	var ch = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (ch !== arr[i]) {
			return false;
		}
	}
	return true;
}