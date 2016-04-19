jQuery(document).ready(function() {
	$(".b_wrapper_fixed > ul > li ul").wrap("<div class='blue_bg'></div>");

	$(".b_wrapper_fixed > ul > li").hover(function() {
		$(this).find(".blue_bg").css('display','inline').show();
		},
		function() {
		$(this).find(".blue_bg").hide();		
	});	

	 $.fn.equivalent = function (){
			var $blocks = $(this),
				maxH    = $blocks.eq(0).height(); 
			$blocks.each(function(){
				maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
			});
			$blocks.height(maxH); 
		}
		$('.b_info').equivalent(); 		 
});