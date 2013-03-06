var postLoader;

window.onload = function() {
	var postsContainer = $('#posts')[0];
	var postTemplate = '<div class="picture" style="background-image: url({image});"></div><div class="text"><h1 class="title">{title}</h1>{subtext}<div class="button" index="{title}">Read More...</div></div>';
	var openTemplate = '<div id="openedPostImage" style="background-image: url({image})"></div><div id="openedPostText">{text}</div>';
	$.ajax('posts.json', {
		success: function(data){
			postLoader = new PostLoader(data.posts, postsContainer, 'post', postTemplate, openTemplate);
			postLoader.load(2);
		}
	});

	document.addEventListener('scroll', onScroll);

}

function onScroll(event){
	var scrolled = window.scrollY/(document.height-window.innerHeight);
	if (scrolled > .98 && !postLoader.isLoading){
		postLoader.load(1);
	}
}