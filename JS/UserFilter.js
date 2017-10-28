var userList = [
    {id: 1, username: 'Bobo', text: 'hello followers!', status: 'follow'},
    {id: 2, username: 'Elvis', text: 'this exercise is really easy!', status: 'follow'},
    {id: 3, username: 'Mimi', text: 'I want to go to sleep', status: 'unfollow'}
];


(function () {
    for (var i = 0; i < userList.length; i++) {
        var avatar = createAvatar(userList[i]);
      //  var place = document.getElementById('users');
     //   place.appendChild(avatar);

    }
}());


function createAvatar(user) {
    var panel = document.createElement('div');
    panel.classList.add('avatar', 'col-xs-2', 'thumbail','panel','panel-info');

    var image = document.createElement('img');
image.className='img-thumbnail';

    image.src = '../Images/useravatar.png';
    var btn = document.createElement('button');
    btn.innerHTML = user.status;

    btn.addEventListener('click', function (event) {
        chooseFollow(event.target);
    });
    var nameElem = document.createElement('div');
    nameElem.innerText = user.username;
    panel.style = 'border-color= blue';

    panel.appendChild(image);
    panel.appendChild(btn);
    panel.appendChild(nameElem);
    setButton(btn);
    return panel;

}

function chooseFollow(botton) {
    var txt = botton.innerHTML;
    if (txt === 'follow') {
        botton.className = 'btn btn-danger';
        botton.style = ' border-color: red';
        botton.innerHTML = 'unfollow';
        addFollower(botton);
    }
    if (txt === 'unfollow') {
        botton.className = 'btn btn-primary';
        botton.style = ' border-color: 1px solid blue';
        botton.innerHTML = 'follow';
        removeFollower(botton);
    }
}


function addFollower(botton) {
    var followe = document.getElementById('foloweesPics');
    var users = document.getElementById('users');
    botton.parentNode.classList.remove('col-xs-2');
    botton.parentNode.classList.add('col-xs-offset-3');
    botton.parentNode.classList.add('col-xs-6');
    users.removeChild(botton.parentNode);
    followe.appendChild(botton.parentNode);
}


function removeFollower(bottom) {
    var followees = document.getElementById('foloweesPics');
    //var fol=document.getElementById('followees');
    var users = document.getElementById('users');
    followees.removeChild(bottom.parentNode);

    bottom.parentNode.classList.remove('col-xs-offset-3');
    bottom.parentNode.classList.remove('col-xs-6');
    bottom.parentNode.classList.add('col-xs-2');
    users.appendChild(bottom.parentNode);
}

function setButton(botton) {
    var txt = botton.innerHTML;
    var place = document.getElementById('users');
    place.appendChild(botton.parentNode);
    if (txt === 'unfollow') {
        botton.className = 'btn btn-danger';
        botton.style = ' border-color: red';
        addFollower(botton);
    }
    if (txt === 'follow') {
        botton.className = 'btn btn-primary';
        botton.style = ' border-color: 1px solid blue';
        botton.innerHTML = 'follow';
    }
}

//     var panelBig = document.createElement('div');
//     panelBig.className = 'panel panel-default col-xs-2';
//     panelBig.style = 'margin-right:10px';
//     var panelSmall = document.createElement('div');
//     panelSmall.className = 'panel-body ';
//     // // panelSmall.id = 'div' + user.id;
//     var copyAvatar = document.createElement('div');
//     copyAvatar.className = 'row users';
//     //   copyAvatar.id = 'vatar';
//     var image = document.createElement('img');
//     image.className = 'picture';
//     image.src = '../Images/useravatar.png';
//     var btn = document.createElement('BUTTON');
//     var s = document.createTextNode(user.status);
//     btn.value = user.status;
//     btn.addEventListener('click', function (event) {
//         chooseFollow(event.target);
//     });
//     chooseFollow(btn);
//     btn.appendChild(s);
//     btn.id = 'status';
//     //  btn.id = 'btn' + user.id;
//
//     var nameElem = document.createElement('div');
//     nameElem.className = 'name';
//     nameElem.innerText = user.username;
//     var ditails = document.createElement('div');
//     ditails.id = 'ditails';
//     ditails.appendChild(btn);
//     ditails.appendChild(nameElem);
//     copyAvatar.appendChild(image);
//     copyAvatar.appendChild(ditails);
//
//     panelSmall.appendChild(copyAvatar);
//     panelBig.appendChild(panelSmall);
//     // document.getElementById('allUser').appendChild(panelBig);
//     // addFollower(panelSmall);
//     //
//
//     return panelBig;
//
// }

//
// function setButton(panelBig) {
//     var btn = searchButton(panelBig);
//     if (btn.innerHTML === 'follow') {
//         btn.innerHTML = 'unfollow';
// placeIn(panelBig);
//     }
//     else {
//         btn.innerHTML = 'follow';
//         placeIn(panelBig);
//     }
// }
//
//
//
// function append(father, child) {
//     father.appendChild(child);
// }
//
// function placeIn(user) {
//     var btnStatus = searchButton(user);
//     if (btnStatus.innerHTML == 'follow') {
//         removeFollower(user);
//     }
//     else if (btnStatus.innerHTML == 'unfollow') {
//         addFollower(user);
//     }
//
// }
//
// function removeFollower(user) {
//     user.classList.remove('col-xs-10');
//     user.classList.remove('col-xs-offset-1');
//     user.classList.add('col-xs-2');
//     var b = document.getElementById('user-left')
//     var a = document.getElementById('allUser');
//     b.appendChild(user);
//     a.appendChild(b);
// }
//
// function addFollower(user) {
//     user.classList.remove('col-xs-2');
//     user.classList.add('col-xs-10');
//     user.classList.add('col-xs-offset-1');
//     user.style = 'margin-top:10px';
//     var b = document.getElementById('panelSmallRight');
//     b.appendChild(user);
// }
//
// function searchUsrr(btn) {]
//
//
// }
// function searchButton(user) {
//     var child1 = user.firstElementChild;
//     var child2 = child1.firstElementChild;
//     var child3 = child2.lastElementChild;
//     var btn = child3.firstElementChild;
//     return btn;
// }
//
// // function addFollower (user) {
// //     var followees = document.getElementById('panelSmallRight');
// //     var a=btnFollow.parentNode;
// //     var b=a.parentNode;
// //     var panel=b.parentNode;
// //     panel.parentNode.classList.remove('col-xs-1');
// //     btnFollow.parentNode.classList.add('col-xs-8');
// //     followees.appendChild(btnFollow.parentNode);
// // }
//
//
// // function placeIn(user) {
// //     user.parentNode.classList.remove('col-xs-8 col-xs-offset-1');
// //     user.parentNode.classList.add('col-xs-2');
// // var panel =document.getElementById('user');
// // followees.removeChild(elem.parentNode);
// // elem.parentNode.classList.remove('col-xs-6');
// // elem.parentNode.classList.add('col-xs-1');
// // var a = user.id;
// // // var avater= document.getElementById("div1").querySelector("vatar");
// // var st = user.getElementById('big');
// // var c=st.getElementById('b8');
// // var a =
// //  document.getElementById('allUser').querySelector('b8');
// // if (st === 'follow') {
// //     var panelBig = document.createElement('div');
// //     panelBig.className = 'panel panel-default user-container col-xs-2';
// //     panelBig.appendChild(document.getElementById("div1"));
// //     document.getElementById('allUser').appendChild(panelBig);
// // }
//
// // }
//
