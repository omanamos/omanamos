$(document).ready(loadPage);

function loadPage(){
	$('.menu_bar_link').hover(mouseOver, mouseOut);
	//$('.menu_bar_link').click(loadContent);
}

function mouseOver(){
	$(this).animate({backgroundColor: '#0E6B1F'}, {queue: false, duration: 500});
}

function mouseOut(){
	$(this).animate({backgroundColor: '#138A29'}, {queue: true, duration: 500});
}
