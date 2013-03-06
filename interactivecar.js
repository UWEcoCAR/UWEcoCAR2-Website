$(document).ready(function(){
	
	$(".more").hide();
	$("#interactivecar").hover( function() {
			$(".more").show(300, "swing");
		}, function () {
			$(".more").hide(300, "swing");
		}
	);
	//Blur Links (Prevents Outline)
	$('a').click(function() {
		this.blur();
	});

	//Hide all item descriptions in the info box
	$("#infobox > div").css("display", "none");

	//Call in the info box
	$(".more a").click(function(){
		$("#infobox").animate({bottom: '233px' }, 300);
		$("#fade_bg").fadeIn();
		return false;
	});
	
	//Expand more info button on hover
	$(".more").hover(function(){

		$(this).stop().animate({width: '225px' }, 200).css({'z-index' : '10'}); //Change the width increase caption size
	}, function () {
		$(this).stop().animate({width: '50px' }, 200).css({'z-index' : '1'});
	});
		
		//Show description for selected item
	$("#engine a").click(function(){
		$("#infobox").show();
		$("#engine_info").show();
	});
	
	$("#battery a").click(function(){
		$("#infobox").show();
		$("#battery_info").show();
	});

				
	//Remove background, info box and hide all descriptions
	$("#fade_bg, .close").click(function(){
		$("#fade_bg").fadeOut();
		$("#infobox").animate({bottom: '-200px' }, 300, function() {
			$("#infobox > div").css("display", "none");
		});
		return false;
	});

}); 