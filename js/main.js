(function ($) {
"use strict";

var windowOn = $(window);

    //===== Search
    
    $('#search').on('click', function(){
        $(".tp-search-box").fadeIn(600);
    });
    $('.tp-close-btn').on('click', function(){
        $(".tp-search-box").fadeOut(600);
    });
	

windowOn.on("load",function() {
	$("#loading").fadeOut(500);
})

$('.info-bar').on('click',function(){
	$('.extra-info').addClass('info-open');
})

$('.close-icon').on('click',function(){
	$('.extra-info').removeClass('info-open');
})


	// 06. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 220) {
			$("#header-sticky").removeClass("sticky");
		} else {
			$("#header-sticky").addClass("sticky");
		}
	});






// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "1199"
});




/* magnificPopup img view */
$('.img-popup').magnificPopup({
	type: 'image',
	gallery: {
		enabled: true
	}
});
	
/* magnificPopup video view */
$('.features-video-icon').magnificPopup({
	type: 'iframe',
});

//  Counter Js
$('.counter').counterUp({
	delay: 10,
	time: 1000
});


$('.testimonial-active').slick({
	infinite: true,
	autoplay:true,
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}

	]
});

$('.solution-active').slick({
	infinite: true,
	autoplay:true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
});


$('.brand-active').slick({
	dots: false,
	infinite: true,
	autoplaySpeed: 2000,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	arrows: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});
// init Isotope
var $grid = $('.course-list').isotope({
	// options
  });
  // filter items on button click
  $('.course-title').on( 'click', 'li', function() {
  
	$(".course-title li").removeClass("active");
	$(this).addClass("active");
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });
  });


// 07. Nice Select Js
	$('select').niceSelect();
	
// WOW active
new WOW().init();

  $('#clock').countdown('2023/10/10', function(event) {
	$(this).html(event.strftime('<span class="countdownrap"><span class="comming-date">%w <br/> <span>Weeks</span></span> <span class="comming-date">%H <br/> <span>Days</span></span> <span class="comming-date">%M <br/> <span>Hours</span></span> <span class="comming-date">%M <br/> <span>Minutes</span></span> <span class="comming-date">%S <br/> <span>Seconds</span></span></span>'));
  });


})(jQuery);