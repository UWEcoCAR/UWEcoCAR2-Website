var postLoader;

function PostLoader(postFile, container, template) {
	this.index = 0;
	this.data = getPosts(postFile);
	this.parent = container;
	this.template = template;

//	this.mask = document.createElement('div');
//		this.mask.id = 'mask';
//		$(this.mask).hide().click(function(){postLoader.setPost(false)})
//	this.parent.appendChild(this.mask);

//	this.post = new Post(this.parent);

	this.isLoading = false;
	this.isAtEnd = this.index < posts.length;



	this.load = function(n) {
		var i = this.index;
		while (i - this.index < n && i < this.data.length){
			var post = document.createElement('div');
				post.classList.add('post');
				var a = this.template;
				while(a.indexOf('{') > 0){
					a = a.substring(0, a.indexOf('{')) + eval('this.data[' + i + '].' + a.substring(a.indexOf('{')+1, a.indexOf('}'))) + a.substring(a.indexOf('}') +1)
				}
				post.innerHTML = a;

				more = post.getElementsByClassName('more')[0]
				more.index = i;
				more.scope = this;
				more.addEventListener('click', this.onClick);
			this.parent.append(post);
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

//	this.setPost = function(data){
//		if (data){
//			$('#mask').show();
//			this.post.load(data);
//			$(this.post.object).show();
//		} else {
//			$('#mask').hide();
//			$(this.post.object).hide();
//		}
//	}
}

//function Post(container){
//	this.template = '<div id="openedPost"><div id="openedPostImage" style="background-image: url({image})"></div><div id="openedPostText">{text}</div></div>'
//
//	this.object = document.createElement('div');
//		this.object.id = 'openedPostContainer';
//		$(this.object).hide();
//		container.appendChild(this.object);
//
//	this.load = function(data) {
//		var a = this.template;
//		while(a.indexOf('{') > 0){
//			a = a.substring(0, a.indexOf('{')) + eval('data.' + a.substring(a.indexOf('{')+1, a.indexOf('}'))) + a.substring(a.indexOf('}') +1)
//		}
//		this.object.innerHTML = a;
//	}
//}

function getPosts(postFile){
	var	request = new XMLHttpRequest();
	request.open('GET', postFile, false);
	request.send();
	return JSON.parse(request.response).posts;
}

$(document).scroll(function(event){
	var scrolled = window.scrollY/(document.height-window.innerHeight);
	if (scrolled > .98 && !postLoader.isLoading){
		postLoader.load(1);
	}
});

$("<link/>").attr({
	href: "css/posts.css",
	rel: "stylesheet"
}).appendTo("head");

$("<link/>").attr({
	href: "css/post-open.css",
	rel: "stylesheet"
}).appendTo("head");
