require(["jquery", "infinitescrolling", "common"], function() {
    var imgNum = Math.floor((new Date().getTime() / 3000) % 3) + 1; // The image that will be loaded changes every three seconds
    var postTemplate = '<img class="portrait" src="{image' + imgNum + '}" /></div><div class="text"><h1 class="title">{title}</h1><h2 class="title">{subTitle}</h2><p>{subtext}</p><a role="button" class="more" index="{title}">Read More...</a></div>';
    postLoader = new PostLoader('teamPosts.json', $('#posts'), postTemplate, 'post');
    postLoader.autoload();

    //Load common elements
    $("<link/>").attr({
        href: "css/team.css",
        rel: "stylesheet"
    }).appendTo("head");
});