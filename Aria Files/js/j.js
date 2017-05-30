$(document).ready(function () {
  // swiper = new Swiper('.swiper-container'); 


var map;
var markers = [];

  var mapCanvas = document.getElementById("map");
  var myCenter=new google.maps.LatLng(51.508742,-0.120850);
  var mapOptions = {center: myCenter, zoom: 5};
  var map = new google.maps.Map(mapCanvas, mapOptions);
 
  var artistLat = $(".swiper-slide-active #lat").text();
  var artistLong = $('.swiper-slide-active #long').text();
  var artistLoc =new google.maps.LatLng(artistLat,artistLong);

   $("#saveIcon").click(function(){
   	var aN = $(".swiper-slide-active .contentBox #nameText").text();
   	var aT = $(".swiper-slide-active #at").text();
   	var aD = $(".swiper-slide-active #ad").text();
   	var aP = $(".swiper-slide-active #pictureSec #pP").attr("src");

   	var data = {artistName:aN, artistType:aT, artistDesc: aD, picLink : aP};

   	if(localStorage.getItem('artistData') == null){
   	var artistData = {artists:[] };
   	localStorage.setItem('artistData',JSON.stringify(artistData));
	} else {
		if(localStorage.getItem('artists') == null){
			a = [];
		} else {
	a = JSON.parse(localStorage.getItem('artists'));
	}
	a.push(data);
	localStorage.setItem('artists', JSON.stringify(a));

	} 

   });

  $("#mapIcon").click(function(){
   		clearMarkers();
   		artistLat = $(".swiper-slide-active #lat").text();
		artistLong = $('.swiper-slide-active #long').text();
		artistLoc =new google.maps.LatLng(artistLat,artistLong);
   		placeMarker(map, artistLoc);
   });



function placeMarker(map, location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
  markers.push(marker);
  var infowindow = new google.maps.InfoWindow({
    content: 'Latitude: ' + location.lat() + '<br>Longitude: ' + location.lng()
  });
  infowindow.open(map,marker);
}

     function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }

      // Deletes all markers in the array by removing references to them.
 function deleteMarkers() {
        clearMarkers();
        markers = [];
      }




 function clearMarkers() {
        setMapOnAll(null);
      }


});

// http://samcroft.co.uk/2013/using-localstorage-to-store-json/




