function PostLoader(data, container, postClass, template, openTemplate) {
	this.index = 0;
	this.data = data;
	this.parent = container;
	this.postClass = postClass;
	this.template = template;

	this.post = new Post(document.body, openTemplate);
	this.isLoading = false;
	this.isAtEnd = this.index < data.length;

	$('#mask').click(function(){postLoader.setPost(false)});

	this.load = function(n) {
		for (var i = this.index; i - this.index < n && i < this.data.length; i++){
			var post = document.createElement('div');
				post.classList.add(this.postClass);
				var a = this.template;
				while(a.indexOf('{') > 0){
					a = a.substring(0, a.indexOf('{')) + eval('this.data[' + i + '].' + a.substring(a.indexOf('{')+1, a.indexOf('}'))) + a.substring(a.indexOf('}') +1)
				}
				post.innerHTML = a;

				more = post.getElementsByClassName('button')[0]
				more.index = i;
				more.scope = this;
				more.addEventListener('click', this.onClick);
			this.parent.appendChild(post);
		}
		this.index += n;
		this.isAtEnd = this.index < posts.length;
		this.isLoading = false;
	}

	this.onClick = function(e) {
		e.target.scope.setPost(e.target.scope.data[e.target.index]);
	}

	this.setPost = function(data){
		if (data){
			$('body').css('overflow', 'hidden');
			this.post.load(data);
		} else {
			$('body').css('overflow', 'scroll');
		}
		$('#mask').toggle();
		$(this.post.object).toggle();
	}
}