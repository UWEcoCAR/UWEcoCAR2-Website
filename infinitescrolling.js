var postLoader;

function PostLoader(startingIndex, posts, container) {
	this.index = startingIndex;
	this.data = posts;
	this.parent = container;
	isLoading = false;
	isAtEnd = this.index < posts.length;

	this.load = function(n) {
		this.isLoading = true;
		for (var i = this.index; i - this.index < n && i < this.data.length; i++){
			var post = document.createElement('div');
			post.classList.add('post');

				var picture = document.createElement('div');
				picture.classList.add('picture');
				picture.style.backgroundImage = 'url(' + this.data[i].image + ')';
			post.appendChild(picture);

				var text = document.createElement('div');
				text.classList.add('text');
				text.innerHTML = this.data[i].subtext;
					var button = document.createElement('div');
					button.classList.add('more');
					button.innerHTML = 'Read More...';
				text.appendChild(button);
			post.appendChild(text);
		this.parent.appendChild(post);
		}
		this.index += n;
		this.isAtEnd = this.index < posts.length;
		this.isLoading = false;
	}
}

window.onload = function() {
	var postsContainer = document.getElementById('posts');
	var posts = getPosts();
	postLoader = new PostLoader(0, posts, postsContainer);
	postLoader.load(4);

	document.addEventListener('scroll', onScroll);
}

function getPosts(){
	var	request = new XMLHttpRequest();
	request.open('GET', 'posts.json', false);
	request.send();
	return JSON.parse(request.response).posts;
}

function onScroll(event){
	var scrolled = window.scrollY/(document.height-window.innerHeight);
	if (scrolled > .98 && !postLoader.isLoading){
		postLoader.load(1);
	}
}