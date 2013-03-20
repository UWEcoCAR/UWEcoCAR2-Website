var postLoader;

require(["jquery", "infinitescrolling"], function() {
    var postTemplate = '<img class="{imageClass}" src="{image}" />{other}<div id="{id}" class="text"><h1 class="title">{title}</h1><h2 class="title">{subTitle}</h2><p>{subtext}</p><a role="button" class="more" index="{title}">Read More...</a></div>';
    postLoader = new PostLoader('projectPosts.json', $('#posts'), postTemplate, 'post');
    postLoader.autoload();
    
    var mapTemplate = '<div style="top:{top}; left:{left}; font-size:{size};" class="{rotation}" onclick="goToTarget(\'{target}\')">{text}</div>';
    var mapLoader = new PostLoader('projectPosts.json', $('#map'), mapTemplate, 'mapItem', 'map');
    mapLoader.load(50);

    //Load common elements
    $("<link/>").attr({
        href: "css/project.css",
        rel: "stylesheet"
    }).appendTo("head");
});

function goToTarget(target) {
    postLoader.loadToSection("labSpace", "id");
    $('html,body').animate({
        scrollTop: $("#"+target).offset().top - 200},
    'slow');
}