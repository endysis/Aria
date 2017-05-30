$(document).ready(function () {


var translu = "images/translu.png";
var name = "";
var musicLink = "";
var musicArtW = "";

var genre = localStorage.getItem('genre');
getTracks(genre); // Gets music based on the genre 

//getLink(); // Gets the http link and launches a window



function getTracks(g){
  $.ajax({
   url: 'http://musicovery.com/api/V4/playlist.php?&fct=getfrommood&resultsnumber=11&format=json', // &genreNo=jazz
   data: {genreNo: g
   },
   error: function(e) {
      console.log('error', e)
   },
   success: function(data) {
      localStorage.setItem('trackData',JSON.stringify(data));
      postInfo();
   },
   type: 'GET'
  }); 
}


 function postInfo() {
  var localArray = JSON.parse(localStorage.getItem('trackData'));
  if(localArray == null){
  // Do nothing
  alert("NULL");
  } else {
    for(i = 0; i < 10; i++){
    name = localArray.root.tracks.track[i].title;
   // alert(name);
    getMusic(name);    
  }

  }
}


function getMusic(n){
 var input = n.replace(' ','+');
 var request = 'https://itunes.apple.com/search?term='+input+'&limit=1';
  $.ajax({
   url: request, // &genreNo=jazz
   dataType: "json",
   error: function(e){
      console.log('error', e)
   },
   success: function(data) {
      localStorage.setItem('musicData',JSON.stringify(data));
      getLink(n);
   },
   type: 'GET'
  }); 
  }



 function getLink(n) {
  var localArray = JSON.parse(localStorage.getItem('musicData'));
  if(localArray == null){
  // Do nothing
  } else {
    musicLink = localArray.results[0].previewUrl;
    //alert(musicLink);
    musicArtW = localArray.results[0].artworkUrl100;
    $(".cardWrapper").append('<div class = "artistCard"><a href = "'+musicLink+'"><img class = "cardOverCast" src ="'+translu+'"><img class = "cardImage" src = "'+musicArtW+'"><div class= "aCNContainer"><p class = "artistCardName"><b>'+n+'</b></p></div><div class = "aCTContainer"><p class = "artistCardType"><i></i></p></div></a></div><div class = "emptySpace"></div>');
    //window.location.href = link;
    //var desc = localArray[i].artistDesc; For information page
  }
}

});







/*

$.ajax({
   url: 'http://ariadb.azurewebsites.net/AZgetartists.php',

   error: function(e) {
      console.log('error', e)
   },
   success: function(data) {
      $('.swiper-wrapper').html(data);
   },
   type: 'GET'
  }); 

*/
















