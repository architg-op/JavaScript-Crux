moviesData();

function moviesData() {
	var movies = [
		{
			title : "SpiderMan",
			rating : 3.5,
			hasSeen : true
		},
		{
			title : "Avengers: End Game",
			rating : 4.0,
			hasSeen : false
		},
		{
			title : "Dangal",
			rating : 4.5,
			hasSeen : true
		},
		{
			title : "Rabb the Radio 2",
			rating : 4.0,
			hasSeen : true
		}
	]

	for (var i = 0; i < movies.length; i++) {
		if (movies[i].hasSeen == true) {
			console.log("You have watched " + "\"" + movies[i].title + "\"" + " - " + movies[i].rating + " stars");
		}
		else {
			console.log("You have not seen " + "\"" + movies[i].title + "\"" + " - " + movies[i].rating + " stars");
		}
	}
}



// "SpiderMan"
// "Dangal"
// "Avengers: End Game"
// "Rabb the Radio 2"