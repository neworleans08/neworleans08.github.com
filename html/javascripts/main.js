jQuery(document).ready(function() {
	$('ul.menu > li').hover( function() {
		$('ul.menu > li.cur').removeClass('cur');
		$(this).addClass('cur');
	},
	function() {		
		$(this).addClass('cur');
	});
	
	$('.b_header .btn-categories').click( function() {
		$('.b_search-top .dropdown-menu').hide();
		$('.open').removeClass('open');
		$(this).toggleClass('active');
		$('.b_dropdown_categories').toggle();
		return false;
	}); 
	$('.b_main_menu .btn_drop').click( function() { 
		$('.b_dropdown_categories, .b_popup_content, .b_search-top .dropdown-menu').hide();
		$('.open').removeClass('open');
		$('.b_header .btn-categories.active').removeClass('active');
		$(this).parent().toggleClass('open');
		return false;
	}); 
	$('.b_category_single h2 .btn, .b_breadcrumb .btn_drop').click( function() { 
		$('.b_dropdown_categories, .b_popup_content, .b_search-top .dropdown-menu').hide();
		$('.navbar-nav>li.open, .b_dropdown_category.open').removeClass('open');
		$(this).parent().toggleClass('open');
		$('.b_header .btn-categories.active').removeClass('active');
		return false;
	}); 	
	$('.b_btn_popup').click( function() {
		$('.b_popup_content, .b_search-top .dropdown-menu').hide();
		$('.open').removeClass('open');
		$('.b_header .btn-categories.active').removeClass('active');
		$(this).parent().next('.b_popup_content').css('display','block');
		return false;
	});
	
		$('.b_popup_content .close').click( function() {
		$('.b_popup_content').css('display','none');
		return false;
	});
	$('.m_btn_menu').click( function() {
		$('.b_search-top .dropdown-menu').hide();
		$(this).hide();
		$('.m_btn_menu_close').show();
		$('.m_menu_popup').slideDown('slow');
		return false;
	});
	$('.m_btn_menu_close').click( function() {
		$(this).hide();
		$('.m_btn_menu').show();
		$('.m_menu_popup').slideUp('slow');
		return false;
	});
	$(document).click( function(event){
	  $('.b_header .btn-categories.active').removeClass('active');
      if( $(event.target).closest(".b_dropdown_categories, .b_popup_content, .b_search-top .dropdown-menu").length ) 
        return;
      $(".b_dropdown_categories, .b_popup_content, .b_search-top .dropdown-menu").hide();
      event.stopPropagation();
    });
	
	 $(function () {
		$(window).scroll(function () {
		  if ($(this).scrollTop() > 768) {
			$('#back-top').fadeIn();
		  } else {
			$('#back-top').fadeOut();
		  }
		});
		// scroll body to 0px on click
		$('#back-top').click(function () {
		  $('body,html').animate({
			scrollTop: 0
		  }, 1500);
		  return false;
		});

	  });
	  
	  $('.b_search-top .form-control').click( function() {		  
		$('.b_popup_content, .b_dropdown_categories').hide();
		$('.open').removeClass('open');
		 $('.b_search-top .dropdown-menu').toggle();
		 return false;
	  });
	  
	  $('.b_pic_m a').click( function() {	
	    $('.slider-modal-body_wrapper').css('left','30px').addClass('open_modal');
		$('.slider-modal_backdrop').show();
		$('.slider-modal-body_wrapper button.close').css('right', '30px');
		return false;
	  });
	  $('.slider-modal-body_wrapper button.close, .slider-modal_backdrop').click( function() {	
	    $('.slider-modal-body_wrapper').css('left','-999999999999px').removeClass('open_modal');
		$('.slider-modal-body_wrapper button.close').css('right', '999999999999px');
		$('.slider-modal_backdrop').hide();
		return false;
	  });
	  
	  $('.b_templ_modal .modal-body img').click( function() { 
		  $('.modal-open .modal, .modal-backdrop.fade.in').hide();
		  $('body').removeClass('modal-open');
		  return false;
	  });
});

function changePlaceholder(){
		if($(window).innerWidth()<768){
		 $("#search_drop").attr("placeholder", "Какой сайт ищем?");
		} 
		  else{
			$("#search_drop").attr("placeholder", "Какой сайт вы хотите найти?");
		};
}




