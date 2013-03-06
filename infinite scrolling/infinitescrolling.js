var currentIndex;
var postsContainer;
var posts;
var adding = false;

window.onload = function() {
	currentIndex = 0;
	postsContainer = document.getElementById('posts');
	posts = getPosts();
	document.addEventListener('scroll', onScroll);

	currentIndex = addPosts(currentIndex, 3, posts, postsContainer);
}
	
function addPosts(startIndex, n, posts, container) {
	loading = true;
	for (var i = startIndex; i - startIndex < n && i < posts.length; i++){
		var post = document.createElement('div');
		post.classList.add('post');

			var picture = document.createElement('div');
			picture.classList.add('picture');
			picture.style.backgroundImage = 'url(' + posts[i].image + ')';
		post.appendChild(picture);

			var text = document.createElement('div');
			text.classList.add('text');
			text.innerHTML = posts[i].subtext;
				var button = document.createElement('div');
				button.classList.add('more');
				button.innerHTML = 'Read More...';
			text.appendChild(button);
		post.appendChild(text);

	container.appendChild(post);
	}
	loading = false;
	return startIndex + n;
}

function getPosts(){
	var	request = new XMLHttpRequest();
	request.open('GET', 'posts.json', false);
	request.send();
	return JSON.parse(request.response).posts;
}

function onScroll(event){
	var scrolled = window.scrollY/(document.height-window.innerHeight);
	if (scrolled > .98 && !loading && currentIndex != posts.length){
		currentIndex = addPosts(currentIndex, 1, posts, postsContainer);
	}
}