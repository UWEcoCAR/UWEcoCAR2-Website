require(["jquery", "infinitescrolling", "interactivecar"], function() {
    $("<link/>").attr({
        href: "css/interactivecar.css",
        rel: "stylesheet"
    }).appendTo("head");
    
    $("<link/>").attr({
        href: "css/home.css",
        rel: "stylesheet"
    }).appendTo("head");
    
    postLoader = new PostLoader('homePosts.json', $('#posts'), "", 'post');
    postLoader.load(1);
});