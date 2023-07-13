const friends = [
    { name: "Mango", online: false },
    { name: "Kiwi", online: true },
    { name: "Poly", online: true },
    { name: "Ajax", online: false },
];

console.table(friends);

// friends[1].newprop = 1;

// for (const friend of friends) {
//     console.log(friend.online);
//     friend.newprop = 555;
// }

// console.table(friends);

const findFriendByName = function (allFriends, friendName) {
    for (const friend of allFriends) {
        if (friend.name === friendName) {
            return `The friend with the name ${friendName} was found.`;
        }
    }
    return `The friend with the name ${friendName} was not found.`;
};

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));

// console.log(friends.includes({ name: "Poly", online: true }));

const getAllNames = function (allFriends) {
    const arrOfFriendsNames = [];

    for (const friend of allFriends) {
        arrOfFriendsNames.push(friend.name);
    }

    return arrOfFriendsNames;
};

// console.log(getAllNames(friends));

const getOnlineFriends = function (allFriends) {
    const arrOfOnlineFriends = [];
    for (const friend of friends) {
        if (friend.online) {
            arrOfOnlineFriends.push(friend);
        }
    }

    return arrOfOnlineFriends;
};

// console.log(getOnlineFriends(friends));

const getOfflineFriends = function (allFriends) {
    const arrOfOfflineFriends = [];

    for (const friend of friends) {
        if (!friend.online) {
            arrOfOfflineFriends.push(friend);
        }
    }

    return arrOfOfflineFriends;
};

// console.log(getOfflineFriends(friends));

const getFriendsByOnlineStatus = function (allFriends) {
    const friendsByStatus = {
        online: [],
        offline: [],
    };
    for (const friend of allFriends) {
        if (friend.online) {
            friendsByStatus.online.push(friend);
            continue;
        }
        friendsByStatus.offline.push(friend);

        // const key = friend.online ? "online" : "offline";
        // friendsByStatus[key].push(friend);
    }
    // let arrOfOnlineFriends = [];
    // let arrOfOfflineFriends = [];
    // arrOfOnlineFriends = getOnlineFriends(allFriends);
    // arrOfOfflineFriends = getOfflineFriends(allFriends);
    // return { online: arrOfOnlineFriends, offline: arrOfOfflineFriends };
    return friendsByStatus;
};

// console.log(getFriendsByOnlineStatus(friends));
