limitload = 0;
	$('video').bind("error", function () {
	if (limitload == 5) {
	window.location.href = window.location.href.replace("embed.php", "embed-more.php");
	$.ajax({
	dataType: 'json',
	ansyc: false,
	url: '/player/fixed/1?id=OTkzNTM%3D',
	success: function (response) {
	SetPlayer(response);
	}
	});
	}
	if (limitload < 5) {
	var currentlink = $('video').attr('src');
	SetPlayer(currentlink);
	}
	limitload++;
	});