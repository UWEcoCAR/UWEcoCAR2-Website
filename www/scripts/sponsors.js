require(["jquery", "infinitescrolling"], function() {
	$("<link/>").attr({
		href: "css/logos.css",
		rel: 'stylesheet'
	}).appendTo("head");

	var postTemplate = '<h1>{tier}</h1>';
	for (var i = 1; i <= 14; i++) {
		postTemplate += '<a href="{url' + i +'}"><img class="logo" src="{image' + i + '}" alt="{title' + i + '}" /></a>'
	}
	postLoader = new PostLoader('test.json', $('#posts'), postTemplate, 'tier');
	postLoader.load(3);
});