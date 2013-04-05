require(["jquery", "infinitescrolling", "common"], function() {
    $("<link/>").attr({
        href: "css/sponsors.css",
        rel: 'stylesheet'
    }).appendTo("head");

    var postTemplate = '<h1>{tier}</h1><h3 class="{scope}">{scope} sponsors</h3>';
    for (var i = 1; i <= 14; i++) {
        postTemplate += '<a href="{url' + i +'}"><img class="logo {tier}" src="{image' + i + '}" alt="{title' + i + '}" /></a>'
    }
    postLoader = new PostLoader('sponsorPosts.json', $('#posts'), postTemplate, 'post tier');
    postLoader.autoload();
});