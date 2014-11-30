$(document).ready(function(){

$("#home").click(function(){
		window.location = "../home page/index.html";

	});


	$("#about_me").click(function(){
		window.location = "../about me page/index.html";

	});


	$("#portfolio").click(function(){
		window.location = "../portfolio/index.html";

	});


	$("#resume").click(function(){
		window.location = "assets/img/Resume_Sophia Ng.pdf";

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