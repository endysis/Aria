$(document).ready(function () {

var localArray = JSON.parse(localStorage.getItem('artists'));

if(localArray == null){
	// Do nothing
} else {
	var arrayLength = localArray.length;
	for(i = 0; i < arrayLength; i++){
		var name = localArray[i].artistName;
		var type = localArray[i].artistType;
		//var desc = localArray[i].artistDesc; For information page
		var pic = localArray[i].picLink;
		var translu = "images/translu.png"

		//alert(pic);

	$(".cardWrapper").append('<div class = "artistCard"><a href = "informationN.html"><img class = "cardOverCast" src ="'+translu+'"><img class = "cardImage" src = "'+pic+'"><div class= "aCNContainer"><p class = "artistCardName"><b>'+name+'</b></p></div><div class = "aCTContainer"><p class = "artistCardType"><i>'+type+'</i></p></div></a></div><div class = "emptySpace"></div>');
	}
}


$('#xIcon').click(function(event){
	localStorage.removeItem('artists');
});




});


