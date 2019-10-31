$(document).ready(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	$( function() {
		$( "#tabs" ).tabs();
	});

	$("#carouselone").owlCarousel({
		items: 1,	 
		loop:true,
		dots:false,
		nav:true,
		navSpeed:2000,
		smartSpeed:1500 ,
	});

	$("#carouseltwo").owlCarousel({
		items: 1,	 
		loop:true,
		navSpeed:2000,
		smartSpeed:1500 ,
	});

});

