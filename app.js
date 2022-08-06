import { renderMushroom, renderFriend } from './render-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');

let mushroomCount = 3;

const friendData = [
    {
        name: 'Erich',
        satisfaction: 2,
    },
    {
        name: 'Sarah',
        satisfaction: 3,
    },
    {
        name: 'Missael',
        satisfaction: 1,
    },
    {
        name: 'Soraya',
        satisfaction: 2,
    },
];

addMushroomButton.addEventListener('click', () => {
    if (Math.random() > 0.5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();

    } else {
        alert('no luck!');
    }
    displayMushrooms();

});

addFriendButton.addEventListener('click', () => {

    let newFriendName = friendInputEl.value || 'Friendo' + Math.floor(Math.random() * 1000);

    let newFriend = {
        name: newFriendName,
        satisfaction: 1
    };

    friendData.push(newFriend);

    displayFriends();
    friendInputEl.textContent = '';
});

function displayFriends() {

    friendsEl.textContent = '';

    for (let friend of friendData) {
        const aFriend = renderFriend(friend);

        aFriend.addEventListener('click', () => {
            if (friend.satisfaction < 3 && mushroomCount > 0) {
                friend.satisfaction++;
                mushroomCount--;
            }
            
            else if (mushroomCount === 0) {
                alert('There aren\'t any more mushrooms to share! Time to forage for more!');
            }

            else if (friend.satisfaction === 3) {
                alert(`${friend.name}'s had plenty of mushrooms already! Try sharing with someone else, or invite a new friend to share with!`);
            }
            
            displayFriends();
            displayMushrooms();
        });

        friendsEl.append(aFriend);
    }
}


function displayMushrooms() {

    mushroomsEl.textContent = '';

    for (let i = 0; i < mushroomCount; i++) {
        const mushroom = document.createElement('div');
        mushroom.classList.add('mushroom');
        renderMushroom(mushroom);
        mushroomsEl.append(mushroom);
    }
}

displayFriends();
displayMushrooms();