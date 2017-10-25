function addTweet() {
	var tweet= document.getElementById("chatBox").value;
	document.getElementById("chatBox").value="";

var newTweet=document.createDocumentFragment();
	newTweet.className='row userChat';
var image=document.createElement('img');
	image.className='user';
	image.src='../Images/useravatar.png';
	var name=document.createElement('span');
	name.className='name';
	name.innerText="james";
	var brake = document.createElement('br');
	var text=document.createElement('span');
	text.className='name';
	text.innerText=tweet;

	newTweet.appendChild(image);
	newTweet.appendChild(name);
	newTweet.appendChild(brake);
	newTweet.appendChild(text);
	document.getElementById("tweets").appendChild(newTweet);
}