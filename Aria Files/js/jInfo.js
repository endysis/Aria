$(document).ready(function () {

var localArray = JSON.parse(localStorage.getItem('artists'));

if(localArray == null){
	// Do nothing
} else {
	var arrayLength = localArray.length;
	for(i = 0; i < arrayLength; i++){
		var name = localArray[i].artistName;
		var type = localArray[i].artistType;
		var desc = localArray[i].artistDesc; //For information page
		var pic = localArray[i].picLink;
		var translu = "images/translu.png"
	$(".swiper-wrapper").append('<div class="swiper-slide"><div class = "iFContainer" data-swiper-parallax = "-100"><img class = "imageFlow" src = "'+pic+'"></div><div class="title" data-swiper-parallax="-100">'+name+'</div><div class="subtitle" data-swiper-parallax="-200"><i>'+type+'</i></div><div class="text" data-swiper-parallax="-300"><p>'+desc+'</p></div></div>');
	swiper = new Swiper('.swiper-container'); 
	}
}

});


