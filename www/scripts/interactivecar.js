$(document).ready(function(){


	$('#batteryMap').hover(
        function() {
            $('#moreInfo').hide();
            $('#moreInfo').attr('class', 'interactivecarBattery');
    		$('#moreInfo').fadeIn();
        },
        function () {
            $('#moreInfo').fadeOut(500, function() {
                $('#moreInfo').attr('class', '');
                $('#moreInfo').show();
            });
        }
    );

	$('#engineMap').hover(
        function() {
            $('#moreInfo').hide();
            $('#moreInfo').attr('class', 'interactivecarEngine');
            $('#moreInfo').fadeIn();
        },
        function () {
            $('#moreInfo').fadeOut(500, function() {
                $('#moreInfo').attr('class', '');
                $('#moreInfo').show();
            });
        }
    );
});