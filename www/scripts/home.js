require(["jquery", "infinitescrolling", "interactivecar"], function() {
	$("<link/>").attr({
		href: "css/interactivecar.css",
		rel: "stylesheet"
	}).appendTo("head");
	
	var postTemplate = '<img class="picture framed" src="{image}" /><div class="text"><h1 class="title">{title}</h1><h2 class="title">{subTitle}</h2><p>{subtext}</p><a href="#test" class="more" index="{title}">Read More...</a></div>';
	postLoader = new PostLoader('homePosts.json', $('#posts'), postTemplate, 'post');
	postLoader.load(2);
});