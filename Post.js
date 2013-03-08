function Post(container, template){
	this.template = template;

	this.object = document.createElement('div');
		this.object.id = 'openedPost';
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