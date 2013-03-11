require(["jquery", "infinitescrolling"], function() {
	var postTemplate = '<div class="picture" style="background-image: url({image});"></div><div class="text"><h1 class="title">{title}</h1><h2 class="title">{subTitle}</h2><p>{subtext}</p><a href="#test" class="more" index="{title}">Read More...</a></div>';
	postLoader = new PostLoader('homePosts.json', $('#posts'), postTemplate, 'post');
	postLoader.load(2);
});