var postLoader;

function PostLoader(startingIndex, posts, container, postClass, template) {
	this.index = startingIndex;
	this.data = posts;
	this.parent = container;
	this.isLoading = false;
	this.isAtEnd = this.index < posts.length;
	this.postClass = postClass;
	this.template = template;

	this.templateLoad = function(n) {
		for (var i = this.index; i - this.index < n && i < this.data.length; i++){
			var post = document.createElement('div');
				post.classList.add(this.postClass);
				var a = this.template;
				while(a.indexOf('{') > 0){
					a = a.substring(0, a.indexOf('{')) + eval('this.data[' + i + '].' + a.substring(a.indexOf('{')+1, a.indexOf('}'))) + a.substring(a.indexOf('}') +1)
				}
				post.innerHTML = a;
			this.parent.appendChild(post);
		}
		this.index += n;
		this.isAtEnd = this.index < posts.length;
		this.isLoading = false;
	}

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
	var template = '<div class="picture" style="background-image: url({image});"></div><div class="text">{subtext}<div class="more">Read More...</div></div>'
	postLoader = new PostLoader(0, posts, postsContainer, 'post', template);
	postLoader.templateLoad(4);

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
		postLoader.templateLoad(1);
	}
}