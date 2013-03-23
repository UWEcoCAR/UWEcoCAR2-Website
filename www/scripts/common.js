require(["jquery"]);

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

//Load common elements
$("<link/>").attr({
    href: "css/common.css",
    rel: "stylesheet"
}).appendTo("head");

// Konami code! (up up down down left right left right b a)
var keys = [], code = "38,38,40,40,37,39,37,39,66,65";
$(document).keydown(function(event) {
    keys.push(event.keyCode);
    if (keys.length > 10) {
        keys.shift();
    }
    if (keys.toString() === code){
        $(document).unbind('keydown');

        // insert a video into the dom
        $("<iframe>").attr({
            width: "0px",
            height: "0px",
            display: "none",
            src: "http://www.youtube.com/embed/w5rceMe-kt4?rel=0&autoplay=1"
        }).appendTo("body");

        // fade in the margins
        $('body').css({'-webkit-transition': 'background-color 10s',
                       '-moz-transition': 'background-color 10s',
                       'transition': 'background-color 10s'}).css('background-color', 'rgb(0,140,0)');

        // fade in the top logo bar
        $('#logoContainer').css({'-webkit-transition': 'background-color 10s',
                                 '-moz-transition': 'background-color 10s',
                                 'transition': 'background-color 10s'}).css('background-color', 'rgb(0,100,0)');

        // fade in the header and footer
        $('#tabBar, #footer').css({'-webkit-transition': 'background-color 10s',
                                   '-moz-transition': 'background-color 10s',
                                   'transition': 'background-color 10s'}).css('background-color', 'rgb(0,80,0)');
    }
});