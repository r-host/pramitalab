$(document).ready(function(){

	"use strict";
	
	/* =================================
	LOADER 
	=================================== */
	$(".loader").delay(400).fadeOut();
    $(".animationload").delay(400).fadeOut("fast");
	
	/* =================================
	NAVBAR 
	=================================== */
	var top = jQuery(document).scrollTop();
	var batas = 200;
	var navbar = jQuery('.navbar-main');
	
	jQuery(window).scroll(function () {
		top = jQuery(document).scrollTop();
		if ( top > batas ) {
			navbar.addClass('stiky');
		}else {
			navbar.removeClass('stiky'); 
		}
	});
	
	/* =================================
	BANNER ROTATOR IMAGE 
	=================================== */
	$('#slides').superslides({
		//animation: "fade",
		play: 5000,
		slide_speed: 800,
		pagination: true,
		hashchange: false,
		scrollable: true,
		
	});

	/* =================================
	MEGAMENU TABS
	=================================== */
	$(".mg-tab-menu>li").hover(function(e) {
        e.preventDefault();
        $(this).siblings('li.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        console.log(index);
        $(".mg-tab-content>div.tab-content").removeClass("active");
        $(".mg-tab-content>div.tab-content").eq(index).addClass("active");
    });
	


	/* =================================
	BACK TO TOP 
	=================================== */
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	

	/* =================================
	OWL
	=================================== */
	
	var caro = $("#caro");
	caro.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		loop: true,
	});	

	var caro2 = $("#caro-2");
	caro2.owlCarousel({
		autoplay: true,
		margin: 0,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		dots: true,
		loop: true,
		nav: false,
		navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
		items : 2,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1000:{
				items:2
			}
		}
	});

	var caro3 = $("#caro-3");
	caro3.owlCarousel({
		autoplay: true,
		margin: 30,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		items : 3,
		dots: true,
		loop: true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});

	var caro4 = $("#caro-4");
	caro4.owlCarousel({
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		items : 4,
		dots: true,
		loop: true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1000:{
				items:4
			}
		}
	});

	var testimony = $("#owl-testimony");
	testimony.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		loop: true,
		nav: true,
		navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
		dots: false,
	});
	

	/* =================================
	ISOTOP
	=================================== */	
	var $gridv1 = $('.grid-v1');
	$gridv1.isotope({
		itemSelector: '.grid-item-v1',
		isFitWidth: true,
		//filter: '.photo',
		masonry: {
			columnWidth: '.grid-sizer-v1'
		}
	});

	$gridv1.imagesLoaded().progress( function() {
		$gridv1.isotope('layout');
	});

	$('.portfolio_filter a').on('click', function() {
 		$('.portfolio_filter .active').removeClass('active');
		$(this).addClass('active');
 
		var selector = $(this).attr('data-filter');
		$gridv1.isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				animationEngine : "jquery"
			}
		});
		return false;
 	});




	/* =================================
	FAQ
	=================================== */	
	$(".panel").on("show.bs.collapse hide.bs.collapse", function(e) {
	    if (e.type=='show'){
	      $(this).addClass('active');
	    }else{
	      $(this).removeClass('active');
	    }
  	}); 
	
	/* =================================
	FILTER KANTOR CABANG
	=================================== */
	function capitaliseFirstLetter(string){
	  return string.charAt(0).toUpperCase() + string.slice(1);
	}
	$('#filterOptions li a').click(function() {
	    // fetch the class of the clicked item
	    var ourClass = $(this).attr('data-filter');
	    //capitaliseFirstLetter(ourClass.text());
	    var cabang = ourClass.charAt(0).toUpperCase() + ourClass.slice(1);
	    $('#kantor-cabang span').text(cabang);
	    // reset the active class on all the buttons
	    $('#filterOptions li').removeClass('active');
	    // update the active state on our clicked button
	    $(this).parent().addClass('active');

	    if(ourClass == 'all') {
	      // show all our items
	      $('#ourHolder').children('div.item').show();
	    }
	    else {
	      // hide all elements that don't share ourClass
	      $('#ourHolder').children('div:not(.' + ourClass + ')').hide();
	      // show all elements that do share ourClass
	      $('#ourHolder').children('div.' + ourClass).show();
	    }
	    return false;
  	});

	/* =================================
	MAGNIFIC POPUP
	=================================== */
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });

	$('.gallery-1, .gallery-2').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '';
			}
		}
	});

	
	
});




  
  