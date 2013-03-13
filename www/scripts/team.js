require(["jquery", "infinitescrolling"], function() {
    var postTemplate = '<img class="portrait" src="{image}" /></div><div class="text"><h1 class="title">{title}</h1><h2 class="title">{subTitle}</h2><p>{subtext}</p><a role="button" class="more" index="{title}">Read More...</a></div>';
    postLoader = new PostLoader('teamPosts.json', $('#posts'), postTemplate, 'post');
    postLoader.autoload();

    //Load common elements
    $("<link/>").attr({
        href: "css/team.css",
        rel: "stylesheet"
    }).appendTo("head");
});