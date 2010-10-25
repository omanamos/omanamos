$(document).ready(loadPage);

function loadPage(){
	jQuery.validator.addMethod("phoneUS", function(phone_number, element) {
		phone_number = phone_number.replace(/\s+/g, ""); 
		return this.optional(element) || phone_number.length > 9 &&
			phone_number.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
	}, "Please specify a valid phone number");
	jQuery.validator.addMethod("notDefault", function(value, element){
		return this.optional(element) || !$(element).isDefault();
	}, "This field is required.");
	
	$('.menu_bar_link').hover(mouseOver, mouseOut);
	$('.menu_bar_link').click(loadContent);
	$('a.iframe').fancybox({
		width: 800,
		height: 600
	});
	$('.default_value').formatter();
	$(document.forms[0]).validate({
		rules:{
			name: {
				required: true,
				notDefault: true
			},
			email: {
				required: true,
				notDefault: true,
				email: true
			},
			phone: {
				required: true,
				notDefault: true,
				phoneUS: true
			}
		}
	});
	
	loadContent('description_link');
}

function mouseOver(){
	if(!$(this).hasClass('active')){
		$(this).addClass('hover');
		$(this).animate({backgroundColor: '#4FDE43'}, {queue: true, duration: 500});
	}
}

function mouseOut(){
	$(this).removeClass('hover');
	if(!$(this).hasClass('active')){
		$(this).animate({backgroundColor: '#2C6E16'}, {queue: true, duration: 500});
	}
}

function loadContent(content_id){
	if(!$(this).hasClass('active')){
		var page = content_id
		if(typeof page != 'string'){
			page = this.id
		}
		$('.active').removeClass('active').css('backgroundColor', '#2C6E16');
		$('#' + page).addClass('active').css('backgroundColor','#4FDE43');
		$('.left_content').hide();
		$('#' + page.split('_')[0] + '_content').fadeIn('slow');
	}
}
