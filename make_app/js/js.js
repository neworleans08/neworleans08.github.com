jQuery(document).ready(function() {
   setTimeout(function(){
	  $('.b_reminder').show();  
   },3000);	 
   
	$('.b_reminder .close').click( function() {
		$('.b_reminder').hide();
		return false;
	});	
 $(window).scroll(function () {
        if (120  < $(window).scrollTop()) {
            $('.b_city_select_wrapper').css({position:'fixed', top:'0', left:'0', width:'100%', paddingTop: '20px', height:'73px', zIndex:'1000', background:'#fff', borderBottom: '1px solid #eee'});
        } else {
            $('.b_city_select_wrapper').css({position:'relative', top:'auto', left:'auto', margin:'0 auto', height:'53px', paddingTop: '0px', background:'#fff', borderBottom: '1px solid #fff'});
        }
    });
$('.b_filter_item .radio .b_close a, .b_filter_item .checkbox .b_close a').click( function() {
		$(this).parent().parent().removeClass('cur'); 
		return false;
	});
$('.b_filter_item .radio label > .b_desc, .b_filter_item .radio label > .b_check, .b_filter_item .checkbox label > .b_check, .b_filter_item .checkbox label > .b_desc').click( function() {
		$(this).parent().addClass('cur');
		return false;
	});	
$('.b_filter_item h3').click( function() {
		$(this).toggleClass('cur').next().slideToggle('slow');
		return false;
	});	
	
		$(function () {
				var a = new Array("Скрыть", "Показать все");
			var i = 0;
		  $(".b_filter_item_content .b_more").click(function() {
			height = "inherit";
			if(i == 0) {
				  i = 1;
				  buttonValue = a[0];
			  } else {
				  i = 0;
				  height = "225px";
				  buttonValue = a[1];
			  }    
			$(this).prev().css("max-height", height);
			$(this).val(buttonValue).toggleClass('cur');
		  });
  });

$( ".b_datepick" ).datepicker();   
$( ".b_double_calendar" ).datepicker({
  numberOfMonths: 2,
  showButtonPanel: true
});



/* слайдер цен */

jQuery("#slider").slider({
	min: 0,
	max: 1000,
	values: [0,1000],
	range: true,
	stop: function(event, ui) {
		jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
		jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
		
    },
    slide: function(event, ui){
		jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
		jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    }
});

jQuery("input#minCost").change(function(){

	var value1=jQuery("input#minCost").val();
	var value2=jQuery("input#maxCost").val();

    if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		jQuery("input#minCost").val(value1);
	}
	jQuery("#slider").slider("values",0,value1);	
});

	
jQuery("input#maxCost").change(function(){
		
	var value1=jQuery("input#minCost").val();
	var value2=jQuery("input#maxCost").val();
	
	if (value2 > 1000) { value2 = 1000; jQuery("input#maxCost").val(1000)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		jQuery("input#maxCost").val(value2);
	}
	jQuery("#slider").slider("values",1,value2);
});
	
		 
		$(function () {
				var aw = new Array("Скрыть", "Развернуть");
				var at = new Array("Скрыть", "Развернуть");
			var i = 0;
		  $(".b_consult_list .b_item_short").click(function() {
			height = "inherit";
			if(i == 0) {
				  i = 1;
				  buttonValue = aw[0];
			  } else {
				  i = 0;
				  height = "106px";
				  buttonValue = aw[1];
			  }    
			$(this).prev().css("max-height", height);
			$(this).val(buttonValue).toggleClass('cur');
		  });
		  
		  $(".b_consult_list .b_item_long").click(function() {
			height = "inherit";
			if(i == 0) {
				  i = 1;
				  buttonValue = at[0];
			  } else {
				  i = 0;
				  height = "163px";
				  buttonValue = at[1];
			  }    
			$(this).prev().css("max-height", height);
			$(this).val(buttonValue).toggleClass('cur');
		  });		  
  });		
			
		  $(".b_collapse_btn").click(function() {
			$(this).toggleClass('cur');
			$(this).parent().prev().find('.b_navbar_categories').slideToggle();
			return false;
		  });


$("a.b_cur_watch, .b_anchor_bar a").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 400);
        return false;
    });

	$('.b_catalog_item .table tr').hover( 
	function() {
		$(this).find('th, td').css('borderTop','2px solid #fff');
		$(this).next().find('th, td').css('borderTop','2px solid #fff');
		$(this).next().find('.min').css('borderTop','2px solid #fff');
		$(this).find('.min').css('borderTop','2px solid #fff');
	},
	function() {
		$(this).find('th, td').css('borderTop','2px solid #f0efed');
		$(this).next().find('th, td').css('borderTop','2px solid #f0efed');	
		$(this).next().find('.min').css('borderTop','2px solid #fff');
		$(this).find('.min').css('borderTop','2px solid #fff');
	});

 
});



