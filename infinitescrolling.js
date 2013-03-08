var postLoader;

function PostLoader(startingIndex, posts, container, postClass, template) {
	this.index = startingIndex;
	this.data = posts;
	this.parent = container;
	this.postClass = postClass;
	this.template = template;

	this.mask = document.createElement('div');
		this.mask.id = 'mask';
		$(this.mask).hide().click(function(){postLoader.setPost(false)})
	this.parent.appendChild(this.mask);

	this.post = new Post(this.parent);

	this.isLoading = false;
	this.isAtEnd = this.index < posts.length;



	this.load = function(n) {
		var i = this.index;
		while (i - this.index < n && i < this.data.length){
			var post = document.createElement('div');
				post.classList.add(this.postClass);
				var a = this.template;
				while(a.indexOf('{') > 0){
					a = a.substring(0, a.indexOf('{')) + eval('this.data[' + i + '].' + a.substring(a.indexOf('{')+1, a.indexOf('}'))) + a.substring(a.indexOf('}') +1)
				}
				post.innerHTML = a;

				more = post.getElementsByClassName('more')[0]
				more.index = i;
				more.scope = this;
				more.addEventListener('click', this.onClick);
			this.parent.appendChild(post);
			i++;
		}
		this.index += n;
		this.isAtEnd = this.index < posts.length;
		this.isLoading = false;
	}

	this.onClick = function(e) {
		var me = e.target.scope;
		var index = e.target.index;
		$("<p>" + me.data[index].text + "</p>").appendTo($(this).parent());
//		$('<a href="#test" class="more">Read Less...</a>').click(function() {
//			
//		}).appendTo($(this).parent());
		$(this).remove();
		//me.setPost(me.data[index]);
	}

	this.setPost = function(data){
		if (data){
			$('#mask').show();
			this.post.load(data);
			$(this.post.object).show();
		} else {
			$('#mask').hide();
			$(this.post.object).hide();
		}
	}
}

function Post(container){
	this.template = '<div id="openedPost"><div id="openedPostImage" style="background-image: url({image})"></div><div id="openedPostText">{text}</div></div>'

	this.object = document.createElement('div');
		this.object.id = 'openedPostContainer';
		$(this.object).hide();
		container.appendChild(this.object);

	this.load = function(data) {
		var a = this.template;
		while(a.indexOf('{') > 0){
			a = a.substring(0, a.indexOf('{')) + eval('data.' + a.substring(a.indexOf('{')+1, a.indexOf('}'))) + a.substring(a.indexOf('}') +1)
		}
		this.object.innerHTML = a;
	}
}

window.onload = function() {
	var postsContainer = $('#posts')[0];
	var posts = getPosts();
	var postTemplate = '<div class="picture" style="background-image: url({image});"></div><div class="text"><h1 class="title">{title}</h1><h2 class="title">{subTitle}</h2><p>{subtext}</p><a href="#test" class="more" index="{title}">Read More...</a></div>';
	postLoader = new PostLoader(0, posts, postsContainer, 'post', postTemplate);
	postLoader.load(2);

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