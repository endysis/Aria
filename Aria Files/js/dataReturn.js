$(document).ready(function () {
$.ajax({
   url: 'http://ariadb.azurewebsites.net/AZgetartistsInLoc.php', //or .. AZgetartists.php

   error: function(e) {
      console.log('error', e)
   },
   success: function(data) {
      $('.swiper-wrapper').html(data);
      swiper = new Swiper('.swiper-container'); 
   },
   type: 'GET'
}); 
});	  




/*

$(document).ready(function () {
$.ajax({
   url: 'http://localhost/getartists.php',
   data: { long: '0.54' // If passing in data
   },
   error: function(e) {
      console.log('error', e)
   },
   success: function(data) {
      $('.swiperwrapper').html(data);
   },
   type: 'GET'
});
		
});	  
*/