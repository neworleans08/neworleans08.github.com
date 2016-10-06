jQuery(document).ready(function() {	
	$('.b_top_menu_content ul li:has(ul)').addClass('hassub');
	$('.b_top_menu_content li:has(ul) > a').click( function() {
		$(this).next().slideToggle('slow');
		$(this).parent().toggleClass('opened')
		return false;
		
	});	
});
$(window).resize(function() {	
	hMenu();
});
function hMenu() {
	var bodyHeight = $('body').height();
	$('.b_menu_full').css('height', bodyHeight);		
};
	var bodyHeight = $('body').height();
	$('.b_menu_full').css('height', bodyHeight);
				
	$('.b_menu button').click( function() {
		var hBlock = $('.b_menu_full');
		$(this).text(hBlock.is(':visible') ? 'Меню' : 'Закрыть');
		$(this).parents('.header').toggleClass('openMenu');
		$('.footer').toggleClass('openMenu');
		hBlock.toggle('slow');
		return false;
	});