jQuery(document).ready(function() {	
		$(".owl-carousel").owlCarousel({		
				items:1,
                nav: true,
				loop: true,
				dots: true,				
				autoplay: true,
				center: true,
				autoplaySpeed: 1500,
				dotsSpeed: 1500,
				navSpeed: 1500
                  });
				  
		$('.rateit').rateit();				  
});