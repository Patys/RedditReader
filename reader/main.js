var app = {	
	initialize : function() {
		//document.addEventListener('deviceready', this.onDeviceReady, false);
		//DEBUG:
		this.onDeviceReady();
	},
	
	onDeviceReady : function() {
		$.getJSON("http://www.reddit.com/.json?jsonp=?")
			.done(function( json ) {
				var reddit_data = json;
				for(var i = 0; i < 25; i++) {
					$("#reddit").append("<h3>" + reddit_data.data.children[i].data.title + "</h3>");
					$("#reddit").append("<p>Author: " + reddit_data.data.children[i].data.author + " subreddit: " + reddit_data.data.children[i].data.subreddit + " score: " + reddit_data.data.children[i].data.score + "</p>");
				}
			})
			.fail(function() {
				alert("Request Failed... Check connection.");
		});	
	}
};

app.initialize();