




$(document).ready(function () {
    console.log('ready');



	
	

$("#selColour").change(function(){
    	alert("The text has been changed.");

		// use jquery to find the value of input field using $(this) and store it;
//hint

var colour =   $('#selColour').val();
console.log(colour);
//store the colour to local storage



$('body').css("backgroundColor",colour);

localStorage.setItem('background', colour);


$("button1").click(function() {
		alert("The ting has been deleted ");
	localStorage.clear();
}) 


});	






});

