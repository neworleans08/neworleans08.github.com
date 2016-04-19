jQuery(document).ready(function() {
			  $("#back-top").hide(); 
			$(window).scroll(function () {
			  if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			  } else {
				$('#back-top').fadeOut();
			  }
			});
			$('#back-top a').click(function () {
			  $('body,html').animate({
				scrollTop: 0
			  }, 1500);
			  return false;
			});
			
			$('.b_all_stuff').click(function () {
			  $('.b_catalog_list_hidden').slideToggle();
			  return false;
			});	
			
$(".b_message_single:even, .b_ads_single:even").addClass("b_gray");

		$(function () {
				var a = new Array("Скрыть", "Посмотреть полностью");
			var i = 0;
		  $(".b_bottom_stuff .b_more").click(function() {
			height = "inherit";
			if(i == 0) {
				  i = 1;
				  buttonValue = a[0];
			  } else {
				  i = 0;
				  height = "100px";
				  buttonValue = a[1];
			  }    
			$(this).parent().parent().find(".b_text_content").css("max-height", height);
			$(this).val(buttonValue);
		  });
  });
  		$(function () {
				var b = new Array("Скрыть", "Посмотреть все");
			var i = 0;
		  $(".b_more_purchases").click(function() {
			height = "inherit";
			if(i == 0) {
				  i = 1;
				  buttonValues = b[0];
			  } else {
				  i = 0;
				  height = "491px";
				  buttonValues = b[1];
			  }    
			$(this).parent().find(".b_purchases_list").css("max-height", height);
			$(this).val(buttonValues);
		  });
  });
  
  

  
  
        var nowTemp = new Date();
		var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
		 
		var checkin = $('#dpd1').datepicker({
		"weekStart": 1,
		"format": "dd.mm.yy",
		onRender: function(date) {
		return date.valueOf() < now.valueOf() ? 'disabled' : '';
		}
		}).on('changeDate', function(ev) {
		if (ev.date.valueOf() > checkout.date.valueOf()) {
		var newDate = new Date(ev.date)
		newDate.setDate(newDate.getDate() + 1);
		checkout.setValue(newDate);
		}
		checkin.hide();
		$('#dpd2')[0].focus();
		}).data('datepicker');
		var checkout = $('#dpd2').datepicker({
		"weekStart": 1,
		"format": "dd.mm.yy",
		onRender: function(date) {
		return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
		}
		}).on('changeDate', function(ev) {
		checkout.hide();
		}).data('datepicker');
		
		var checkin_ = $('#dpd4').datepicker({
		"weekStart": 1,
		"format": "dd.mm.yy",
		onRender: function(date) {
		return date.valueOf() < now.valueOf() ? 'disabled' : '';
		}
		}).on('changeDate', function(ev) {
		if (ev.date.valueOf() > checkout_.date.valueOf()) {
		var newDate = new Date(ev.date)
		newDate.setDate(newDate.getDate() + 1);
		checkout_.setValue(newDate);
		}
		checkin_.hide();
		$('#dpd5')[0].focus();
		}).data('datepicker');
		var checkout_ = $('#dpd5').datepicker({
		"weekStart": 1,
		"format": "dd.mm.yy",
		onRender: function(date) {
		return date.valueOf() <= checkin_.date.valueOf() ? 'disabled' : '';
		}
		}).on('changeDate', function(ev) {
		checkout_.hide();
		}).data('datepicker');
	


});