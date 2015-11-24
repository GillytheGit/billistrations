$().ready(function() {
                $('#home-video').tubular({videoId: 'cVG_TzU-yDc'}); // where idOfYourVideo is the YouTube ID.
        });

$('.playvideo').on('click', function(ev) {
	$('#playvideo')[0].src += "?rel=0&autoplay=1";
	ev.preventDefault();
	$(this).css('display', 'none');
})

$('.playpodcast').on('click', function(ev) {
	$('#playpodcast')[0].src += "&amp;auto_play=true";
	ev.preventDefault();
	$(this).css('display', 'none');
})

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
// toggle the lightbox so that you can preview the image on a click attack

