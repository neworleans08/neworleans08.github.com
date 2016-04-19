jQuery(document).ready(function() {
		$('#content').css('min-height', $('.left-sidebar').height() -60 + 'px');
		$(".b-back-top").hide();
		$(function(){
			$(window).scroll(function(){
				if($(this).scrollTop()>200){$('.b-back-top').fadeIn();}
				else{$('.b-back-top').fadeOut();
				}});
				$('.b-back-top, .b-back-top .button-top').click(function(){
					$('body,html').animate({scrollTop:0},800);
					return false;});
					});
				$('#myTab a').click(function (e) {
					e.preventDefault();
					$(this).tab('show');
				});
});