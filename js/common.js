// $(function() {
// 	$('.toggle-menu').on('click', function() {
//   		//e.preventDefault;
//   		$(this).toggleClass('.toggle-menu_active')
//   })
// })



/*---------[• Humburger btn click •]-----------*/
$(function(){
	$('.humburger').on('click', function() {
		$(this).toggleClass('humburger_active')
	})
});
/*---------[• Humburger btn click end•]-----------*/

// $(function(){
//   $(window).scroll(function() {
//     if($(this).scrollTop() >= 10) {
//       $('.top-line').addClass('stickytop');
//     }
//     else{
//       $('.top-line').removeClass('stickytop');
//     }
//   });
// });


/*---------[• Shrink navbar start •]-----------*/

$(function(){
	$(this).scroll(function() {
		if ($(document).scrollTop() > 50) {
			$('.header_top-line').addClass('shrink');
		} else {
			$('.header_top-line').removeClass('shrink');
		}
	});
});

/*---------[• Shrink navbar end •]-----------*/


$(function(){
	$(".portfolio_content").not(":first").hide();
	$(".portfolio .tabs_item").click(function() {
		$(".portfolio .tabs_item").removeClass("active").eq($(this).index()).addClass("active");
		$(".portfolio_content").hide().eq($(this).index()).fadeIn()
		return false;
	}).eq(0).addClass("active");
});


$(function(){
	$('.humburger').on('click', function(e) {
		e.preventDefault();
  		$('.navigation').slideToggle(400);
  	});
});

/*---------[• To top btn click start •]-----------*/

$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() >= 100) {
			$('.totop').fadeIn();
		} else {
			$('.totop').fadeOut();
		}
	});
$('.totop').click(function() {
	$('body,html').animate({scrollTop:0},500);
		return false; 
	});
});

/*---------[• To top btn click end •]-----------*/


$(function(){
	$('.slick-test').slick({
		 arrows: true,
		 dots: true,
		// infinite: true,
		// slidesToShow: 4,
		// slidesToScroll: 1
		slidesToShow: 1
	});
});

/*---------[• Fancybox options start •]-----------*/

$(function(){
	$("[data-fancybox]").fancybox({
		transitionEffect: "slide",
		loop: true,
		slideshow: true
	});
});

/*---------[• Fancybox options end •]-----------*/

/*---------[• wow.js start •]-----------*/

/*---------[• wow.js end •]-----------*/

/*---------[• preloader start •]-----------*/
$(document).ready(function() {
	$(".page-loader-circle").fadeOut(); 
	$(".preloader").delay(400).fadeOut("slow"); 
});
/*---------[• preloader end •]-----------*/