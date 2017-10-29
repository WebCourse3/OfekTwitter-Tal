(function () {

	function generateTweetTemplate(username, tweet) {
		let element = document.createElement('div');
		element.classList.add('col-xs-12', 'thumbail');
		element.innerHTML =
			`
		<div class="tweet-container">
		<img src='../Images/useravatar.png' className = 'user' style="float:left">
			<p class="text col-xs-10" style="float:left"><b>${username}</b></p>
			<p class="comment col-xs-10" style="float:left"></p>
		</div>
		`;

		element.querySelector('.comment').innerHTML = tweet;

		return element;
	}

	var tweetList = [
		{username: 'Bobo', text: 'hello followers!'},
		{username: 'Elvis', text: 'this exercise is really easy!'},
		{username: 'Mimi', text: 'I want to go to sleep'}
	];

	document.getElementById('submit').addEventListener('click', addTweetChatBox);

	function addTweetChatBox() {
		var tweet = document.getElementById('chatBox').value;
		document.getElementById('chatBox').value = '';
		var name = 'james jackson';
		addTweet(name, tweet);
	}

	function addTweet(name, tweet) {
		document.getElementById('tweets').appendChild(generateTweetTemplate(name, tweet));
	}

	for (var i = 0; i < tweetList.length; i++) {
		addTweet(tweetList[i].username, tweetList[i].text);
	}
})();