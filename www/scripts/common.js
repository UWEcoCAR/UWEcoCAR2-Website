require(["jquery"]);

//Load common elements
$("<link/>").attr({
    href: "css/common.css",
    rel: "stylesheet"
}).appendTo("head");

$("<link/>").attr({
    href: "images/favicon.png",
    rel: "icon"
}).appendTo("head");

$.get("headerFooter.html", function(result) {
    $("body").prepend(result);
});

// Add scroll handler for tabBar
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

$(window).load(function(){
    a = this;
    $('body').show();
    console.log('shown');
});