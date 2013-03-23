var postLoader;

function PostLoader(postFile, container, template, mainClass, dataObjectName) {
    if (!dataObjectName) {
        dataObjectName = "posts";
    }
    this.index = 0;
    this.data = getPosts(postFile, dataObjectName);
    this.parent = container;
    this.template = template;
    this.class = mainClass;

    this.isLoading = false;
    this.isAtEnd = this.index < posts.length;



    this.load = function(n) {
        this.isLoading = true;
        for (var i = this.index; i - this.index < n && i < this.data.length; i++){
                var a;
                if (this.template) {
                    a = this.template;
                    while(a.indexOf('{') > 0){
                        a = a.substring(0, a.indexOf('{')) + eval('this.data[' + i + '].' + a.substring(a.indexOf('{')+1, a.indexOf('}'))) + a.substring(a.indexOf('}') +1)
                    }
                } else {
                    a = getHtmlPost(this.data[i]);
                }
                var post = $("<div>").addClass(this.class).html(a);

                var more = post.find('.more');
                if (more && more.size()){
                    $.data(more[0], "more", this.data[i].text);
                    more.click(function() {
                        if ($.data(this, "more")) {
                            $("<p>" + $.data(this, "more") + "</p>").appendTo($(this).parent());
                            $(this).remove();
                        }
                    });
                }
            this.parent.append(post);
        }
        this.index += n;
        this.isAtEnd = this.index < posts.length;
        this.isLoading = false;
    },
    
    this.loadToSection = function(targetSection, targetAttribute) {
        for (var i = this.index; i < this.data.length; i++) {
            if (this.data[i][targetAttribute] === targetSection) {
                this.load(i - this.index + 1);
                return;
            }
        }
    }

    this.autoload = function() {
        var me = this;
        console.log('autoload? ' + ($(this.parent).height() + $(this.parent).position().top) + " < " + window.innerHeight);
        if (this.parent.height() === 0) {
            console.log('not loaded yet :(');
            setTimeout(function(){me.autoload()}, 200);
        } else if (this.parent.height() + $(this.parent).position().top < window.innerHeight){
            setTimeout(function(){
                me.load(1);
                me.autoload();
            }, 100);
        }
    }
}

function getPosts(postFile, dataObjectName){
    return JSON.parse(getHtmlPost(postFile))[dataObjectName];
}

function getHtmlPost(postFile) {
    var request = new XMLHttpRequest();
    request.open('GET', postFile, false);
    request.send();
    return request.response;
}

$(document).scroll(loadIfNeeded);
$(window).resize(loadIfNeeded);

function loadIfNeeded(event) {
    var scrolled = (window.scrollY + window.innerHeight) / $('body').height()
    if (scrolled > 1 && !postLoader.isLoading){
        postLoader.load(1);
    }
}

$("<link/>").attr({
    href: "css/posts.css",
    rel: "stylesheet"
}).appendTo("head");