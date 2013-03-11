$(document).ready(function(){


	$('#batteryMap').hover(function() {
		$('#moreInfo').attr('class', 'interactivecarBattery');
	});

	$('#engineMap').hover(function() {
		$('#moreInfo').attr('class', 'interactivecarEngine');
	});
}); 