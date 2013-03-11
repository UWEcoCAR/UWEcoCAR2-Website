var postLoader;

function PostLoader(postFile, container, template, mainClass) {
	this.index = 0;
	this.data = getPosts(postFile);
	this.parent = container;
	this.template = template;
	this.class = mainClass;

	this.isLoading = false;
	this.isAtEnd = this.index < posts.length;



	this.load = function(n) {
		this.isLoading = true;
		var i = this.index;
		while (i - this.index < n && i < this.data.length){
				var a = this.template;
				while(a.indexOf('{') > 0){
					a = a.substring(0, a.indexOf('{')) + eval('this.data[' + i + '].' + a.substring(a.indexOf('{')+1, a.indexOf('}'))) + a.substring(a.indexOf('}') +1)
				}
				var post = $("<div>").addClass(this.class).html(a);

				var more = post.find('.more');
				var me = this;
				if (more){
					more.click(function() {
						$("<p>" + me.data[i].text + "</p>").appendTo($(this).parent());
						$(this).remove();
					});
				}
			this.parent.append(post);
			i++;
		}
		this.index += n;
		this.isAtEnd = this.index < posts.length;
		this.isLoading = false;
	}
}


function getPosts(postFile){
	var	request = new XMLHttpRequest();
	request.open('GET', postFile, false);
	request.send();
	return JSON.parse(request.response).posts;
}

$(document).scroll(function(event){
	var scrolled = window.scrollY/(document.height-window.innerHeight);
	if (scrolled > .96 && !postLoader.isLoading){
		postLoader.load(1);
	}
});

$("<link/>").attr({
	href: "css/posts.css",
	rel: "stylesheet"
}).appendTo("head");