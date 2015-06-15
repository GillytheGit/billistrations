$('.playvideo').on('click', function(ev) {
	$('#playvideo')[0].src += "?rel=0&autoplay=1";
	ev.preventDefault();
	$(this).css('display', 'none');
})


$('.playpodcast').on('click', function(ev) {
	$('#playpodcast')[0].src += "&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=false&amp;show_reposts=false";
	ev.preventDefault();
	$(this).css('display', 'none');
})