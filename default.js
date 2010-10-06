$(document).ready(loadPage);

function loadPage(){
	$('.menu_bar_link').hover(mouseOver, mouseOut);
	$('.menu_bar_link').click(loadContent);
}

function mouseOver(){
	$(this).animate({backgroundColor: '#0E6B1F'}, {queue: false, duration: 500});
}

function mouseOut(){
	$(this).animate({backgroundColor: '#138A29'}, {queue: true, duration: 500});
}

function loadContent(content_id){
	var page = content_id
	if(typeof page != 'string'){
		page = this.id
	}
	$('.left_content').hide();
	$('#' + page.split('_')[0] + '_content').fadeIn('slow');
}
