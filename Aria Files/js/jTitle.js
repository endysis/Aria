$(document).ready(function () {
	titleVideo();
   swiper = new Swiper('.swiper-container'); 

if(document.title == "loginFinal"){
 	getLocation();

    var aN = document.getElementById("artName");
    var aT = document.getElementById("artType");
    var aG = document.getElementById("artGen");
    var aS = document.getElementById("artSum");
    var aD = document.getElementById("artDesc");
    
    aN.value = sessionStorage.artistName;
    aT.value = sessionStorage.artistType;
    aG.value = sessionStorage.artistGenre;
    aS.value = sessionStorage.artistSum;
    aD.value = sessionStorage.artistDesc;
}

 $( "#contC" ).click(function() {
 	if(document.title == "loginName"){
        sessionStorage.setItem("artistName",inputText.value);
    } else if(document.title == "loginType"){
        sessionStorage.setItem("artistType",inputText.value);
	} else if(document.title == "loginGenre") {
        sessionStorage.setItem("artistGenre",inputText.value);
        localStorage.setItem("genre",inputText.value);
    } else if(document.title == "loginSum"){
        sessionStorage.setItem("artistSum",inputText.value);
    } else if(document.title == "loginDesc"){
        sessionStorage.setItem("artistDesc",inputText.value);
    }
    });
});
  


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
	 var x = document.getElementById("latInput");
     var y = document.getElementById("longInput");
    x.value = position.coords.latitude;
    y.value = position.coords.longitude;
}


function titleVideo () {
var vid = document.getElementById("bgvid");
if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}
function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 

}



