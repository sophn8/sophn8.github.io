$(document).ready(function() {

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