require(["jquery"], doStuff);

function doStuff(){
$.get("headerFooter.html", function(result) {
        $("body").prepend(result);
});

window.addEventListener("scroll", function() {
	var tabBar = $("#tabBar");
	if (document.body.scrollTop > 100) {
		tabBar.css("position", "fixed");
		tabBar.css("top", "0px");
	} else {
		tabBar.css("position", "absolute");
		tabBar.css("top", "100px");
	}
});
}