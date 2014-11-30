$(document).ready(function(){



$("#home").click(function(){
		window.location = "../index.html";

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


	$("#AoNang1").click(function(){
		if ($("#AoNang1Cap").is(":visible")){
			$("#AoNang1Cap").hide();
			("#AoNang1Cap").text("");
		}
		else{
			$("#AoNang1Cap").show();
			$("#AoNang1Cap").text("Highlights: went on a Four Island Tour, snorkeled, and cliff jumped");
		}
	});

	$("#KohSamet1").click(function(){
		if ($("#KohSamet1Cap").is(":visible")){
			$("#KohSamet1Cap").hide();
			("#KohSamet1Cap").text("");
		}
		else{
			$("#KohSamet1Cap").show();
			$("#KohSamet1Cap").text("Highlights: survived a scary 5-hour bus ride during rainy season, made the last ferry to the island, hitched rides from strangers");
		}
	});

	$("#Railay1").click(function(){
		if ($("#Railay1Cap").is(":visible")){
			$("#Railay1Cap").hide();
			("#Railay1Cap").text("");
		}
		else{
			$("#Railay1Cap").show();
			$("#Railay1Cap").text("Highlights: swam in the clearest waters with an ex-member of Red Jumpsuit Apparatus and went to a Princess Cave full of phallic symbols");
		}
	});

	$("#SiemReap1").click(function(){
		if ($("#SiemReap1Cap").is(":visible")){
			$("#SiemReap1Cap").hide();
			("#SiemReap1Cap").text("");
		}
		else{
			$("#SiemReap1Cap").show();
			$("#SiemReap1Cap").text("Highlights: ate happy pizza, grilled pork blood, and brownies from our hostel");
		}
	});

	$("#SiemReap2").click(function(){
		if ($("#SiemReap2Cap").is(":visible")){
			$("#SiemReap2Cap").hide();
			("#SiemReap2Cap").text("");
		}
		else{
			$("#SiemReap2Cap").show();
			$("#SiemReap2Cap").text("Highlights: Minh finally took us to an authentic market with yummy foods instead of a touristy Western-oriented restaurant");
		}
	});

	$("#SiemReap3").click(function(){
		if ($("#SiemReap3Cap").is(":visible")){
			$("#SiemReap3Cap").hide();
			("#SiemReap3Cap").text("");
		}
		else{
			$("#SiemReap3Cap").show();
			$("#SiemReap3Cap").text("Highlight: bonding by way of Cambodian cheese");
		}
	});



});