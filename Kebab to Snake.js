function kbs(str) {
	var newstr = str.replace(/-/g, "_");
	return newstr;
}
// var newstr = "";
	// for (var i = 0; i < str.length; i++) {
	// 	if (str.charAt(i) == '-') {
	// 		str.charAt(i) = '_';
	// 	}
	// 	newstr.charAt(i) = str.charAt(i);
	// }
	// return str;