$(document).ready(function() {

$(document).ready(function(){

$("#home").click(function(){
		window.location = "../index.html";

	});


	$("#about_me").click(function(){
		window.location = "../aboutme/index.html";

	});


	$("#portfolio").click(function(){
		window.location = "../portfolio/index.html";

	});


	$("#resume").click(function(){
		window.location = "http://www.linkedin.com/in/sophiang0808";

	});

	$("#travel").click(function(){
		window.location = "../travel/index.html";

	});


	$("#blog").click(function(){
		window.location = "http://www.sophn8.blogspot.com";

	});

	$("#contact").click(function(){
		window.location ="../contact/index.html";
	});

	$(".list-item").hover(
	function(){
		$(".list-item").css("background-color","#f2f2f2");
	},
	function(){
		$(".list-item").css("background-color","white");
	});
});
  // QUESTION 6

  //Implement the showing and hiding of the sidebar when the user clicks on .sidebar-button here:


  // QUESTION 8

  //Implement the "slide to left" when the user clicks on #carousel-next here

  //Implement the "slide to right" when the user clicks on #carousel-prev here

	$("#carousel-prev").click(function(){
		var cur = parseInt($('#carousel').css('margin-left').replace("px", ""));
		if (cur == -3840){
			return false;
		}
		else{
			$('#carousel').css('margin-left',cur - 960);
		}
	});
	
	$("#carousel-next").click(function(){
		var cur = parseInt($('#carousel').css('margin-left').replace("px", ""));
		if (cur == 0){
			return false;
		}
		else{
			$('#carousel').css('margin-left',cur + 960);
		}
	});

  //THIS IS NOT A REQUIRED QUESTION 
  // EXTRA FOR EXPERTS 

  // Implement a "smooth scroll" when the user clicks on the sidebar links here

});