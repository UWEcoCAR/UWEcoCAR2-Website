require(["jquery"], function() {
    
    $("<link/>").attr({
        href: "css/error.css",
        rel: "stylesheet"
    }).appendTo("head");
    
    loadMessage();
});

var messages = ["ERROR", "How did you get here?", "You must have a bad link.", "HTTP 404", "404", "error", "This isn't the page you are looking for", "Go back", "This page no longer exists", "{Error Message}", "The system has reported an error", "Your request cannont be completed", "These aren't the driods you are looking for", "Bummer", "OOPS!"];

function randomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function randomFontSize() {
    return Math.floor(Math.random() * 40) + 6;
}

function randomTop() {
    return Math.floor(Math.random() * ($(window).height() + 200)) - 100;
}

function randomLeft() {
    return Math.floor(Math.random() * 1000) - 100;
}

function loadMessage() {
    var message = $("<div>").text(randomMessage()).addClass("message").css({
        "font-size" : randomFontSize(),
        "top" : randomTop(),
        "left" : randomLeft()
    }).hide().appendTo("#errorMessages").fadeIn(800, function() {
        message.fadeOut(800, function() {
            message.remove();
        });
    });
    setTimeout(function(){
        loadMessage();
    }, 50);
}