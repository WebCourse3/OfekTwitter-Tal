var userList = [
	{id: 1, username: 'Bobo', text: 'hello followers!', status: 'follow'},
	{id: 2, username: 'Elvis', text: 'this exercise is really easy!', status: 'follow'},
	{id: 3, username: 'Mimi', text: 'I want to go to sleep', status: 'unfollow'}
];

(function () {
	for (var i = 0; i < userList.length; i++) {
		createAvatar(userList[i]);
	}
}());

function chooseFollow(botton) {
	var txt = botton.innerHTML;
	if (txt === 'follow') {
		botton.className = 'btn btn-danger';
		botton.style = ' border-color: red';
		botton.innerHTML = 'unfollow';
	}
	if (txt === 'unfollow') {
		botton.className = 'btn btn-primary';
		botton.style = ' border-color: 1px solid blue';
		botton.innerHTML = 'follow';
	}
}

function setButton(btn) {
	if (btn.innerHTML === 'follow')
		btn.innerHTML = 'unfollow';
	else
		btn.innerHTML = 'follow';
	chooseFollow(btn);
}

function createAvatar(user) {
	var panelBig = document.createElement('div');
	panelBig.className = 'panel panel-default user-container col-xs-2';
	var panelSmall = document.createElement('div');
	panelSmall.className = 'panel-body';
	panelSmall.id = 'div' + user.id;
	var copyAvatar = document.createElement('div');
	copyAvatar.className = 'row users-left';
	var image = document.createElement('img');
	image.className = 'picture';
	image.src = '../Images/useravatar.png';
	var btn = document.createElement('BUTTON');
	var s = document.createTextNode(user.status);
	btn.value = user.status;
	btn.addEventListener('click', function (event) {
		chooseFollow(event.target);
	});

	btn.appendChild(s);
	btn.id = 'btn' + user.id;
	setButton(btn);
	var nameElem = document.createElement('div');
	nameElem.className = 'name';
	nameElem.innerText = user.username;
	copyAvatar.appendChild(image);
	copyAvatar.appendChild(btn);
	copyAvatar.appendChild(nameElem);
	panelSmall.appendChild(copyAvatar);
	panelBig.appendChild(panelSmall);
	document.getElementById('allUser').appendChild(panelBig);
}

function placeInFollowers() {

}
