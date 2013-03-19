require(["jquery", "infinitescrolling"], function() {
    var postTemplate = '<img class="{imageClass}" src="{image}" /></div><div class="text"><h1 class="title">{title}</h1><h2 class="title">{subTitle}</h2><p>{subtext}</p><a role="button" class="more" index="{title}">Read More...</a></div>';
    postLoader = new PostLoader('projectPosts.json', $('#posts'), postTemplate, 'post');
    postLoader.autoload();

    //Load common elements
    $("<link/>").attr({
        href: "css/project.css",
        rel: "stylesheet"
    }).appendTo("head");
});