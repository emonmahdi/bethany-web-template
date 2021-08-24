$(document).ready(function(){
	// $('nav ul li a').click(function(){
	// 	$('nav ul li a').removeClass('active');
	// 	$(this).addClass('active');
	// });


// jqurey Nav
$('.menu ul').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 1050,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing' 
	 
});

// Sticky Menu
  $('.js-sticky-menu').waypoint(function(direction){
    if(direction == "down"){
    	$('nav').addClass('sticky');
    }else{
    	$('nav').removeClass('sticky');
    }
  })


// Counter up
	$('.counter').counterUp({
		delay:10,
		time:1000,
	});
 
// mixitup
	var mixer=mixitup('.mixituppp');

// Venibox 
	$('.venobox').venobox({
		titleattr: 'data-title',
		spinner: 'spinner-pulse'
	});
// owl-carousel
    $('.test-carousel').owlCarousel({
    	loop:true,
	    margin:20,
	    nav:true,
	    autoplay:true,
	    autoplayTimeout:4000,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:2
	        }
	    }
    });


});

function openNav(){
	document.getElementById('myNav').style.width = '91%';
}
function closeNav(){
	document.getElementById('myNav').style.width = '0%';
}
$('.DropOpen').click(function(){
   $('drop').css({
   	'display': 'block',
   });
});