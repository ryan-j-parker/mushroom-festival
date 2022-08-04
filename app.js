// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');
// initialize state

let mushroomCount = 3;
let mushroomsArray = [];

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
        //alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();

    } else {
        //alert('no luck!');
    }
    displayMushrooms();

});

addFriendButton.addEventListener('click', () => {
    // get the name from the input
    const newFriendName = friendInputEl.value;
    // create a new friend object

    let newFriend = {
        name: newFriendName,
        satisfaction: 1
    };

    friendData.push(newFriend);

    // push it into the friends state array, passed in as an argument

    // reset the input

    // display all the friends (use a function here)
    displayFriends();
    friendInputEl.textContent = '';
    console.log(friendData);
    debugger;
});

function displayFriends() {
    // clear out the friends in DOM
    friendsEl.textContent = '';
    // for each friend in state . . .

    for (let friend of friendData) {
        const aFriend = renderFriend(friend);

        aFriend.addEventListener('click', () => {
            if (friend.satisfaction < 3) {
                friend.satisfaction++;
                mushroomCount--;
            }
            
            displayFriends();
            displayMushrooms();
        });

        friendsEl.append(aFriend);
    }

    // use renderFriend to make a friendEl

    // this is a clickable list, so . . .
    //     add an event listener to each friend
    //         and if the friend's satisfaction level is below 3 and you have mushrooms left
    //             increment the friends satisfaction and decrement your mushrooms
    //             then display your friends and mushrooms with the updated state

    // append the friendEl to the friends list in DOM
}


function displayMushrooms() {
    // clear out the mushroom div
    mushroomsEl.textContent = '';

    for (let i = 0; i < mushroomCount; i++) {
        // for each mushroom in your mushroom state, render and append a mushroom
        const mushroom = document.createElement('div');
        mushroom.classList.add('mushroom');
        renderMushroom(mushroom);
        mushroomsEl.append(mushroom);
    }
    //displayMushrooms();
}
displayFriends();

