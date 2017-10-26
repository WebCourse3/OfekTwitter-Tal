var tweetList = [
	{username: 'Bobo', text: 'hello followers!'},
	{username: 'Elvis', text: 'this exercise is really easy!'},
	{username: 'Mimi', text: 'I want to go to sleep'}
];

function addTweetChatBox() {
	var tweet = document.getElementById('chatBox').value;
	document.getElementById('chatBox').value = '';
	var name = 'james jackson';
	addTweet(name, tweet);
}

function addTweet(name, tweet) {
	var newTweet = document.createElement('div');
	newTweet.className = 'row userChat';
	var image = document.createElement('img');
	image.className = 'user';
	image.src = '../Images/useravatar.png';
	var conversation= document.createElement('div');
	conversation.className='row conversation';
	var nameElem = document.createElement('div');
	nameElem.className = 'name';
	nameElem.innerText = name;
	var comment = document.createElement('span');
	comment.className = 'comment';
	comment.innerText = tweet;

	newTweet.appendChild(image);
	conversation.appendChild(nameElem);
	conversation.appendChild(comment);
	newTweet.appendChild(conversation);
	document.getElementById('tweets').appendChild(newTweet);

}

(function () {
	for (var i = 0; i < tweetList.length; i++) {
		addTweet(tweetList[i].username, tweetList[i].text);
	}
}());
