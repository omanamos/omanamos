$(document).ready(loadPage);

function loadPage(){
	$('.menu_bar_link').hover(mouseOver, mouseOut);
	$('.menu_bar_link').click(loadContent);
	$('.default_value').formatter();
	$('#contact_form_content').validate();
	
	loadContent('description_link');
}

function mouseOver(){
	if(!$(this).hasClass('active')){
		$(this).animate({backgroundColor: '#4FDE43'}, {queue: false, duration: 500});
	}
}

function mouseOut(){
	if(!$(this).hasClass('active')){
		$(this).animate({backgroundColor: '#2C6E16'}, {queue: true, duration: 500});
	}
}

function loadContent(content_id){
	var page = content_id;
	if(typeof page != 'string'){
		page = this.id
	}
	
	$('.active').removeClass('active');
	$('#' + page).addClass('active');
	$('.left_content').hide();
	$('#' + page.split('_')[0] + '_content').fadeIn('slow');
}
