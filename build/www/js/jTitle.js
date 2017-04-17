$(document).ready(function () {
	titleVideo();
   swiper = new Swiper('.swiper-container'); 
});	  




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
