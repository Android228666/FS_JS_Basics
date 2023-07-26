// console.log(_.isEmpty({ a: 5 }));

const user = {
    name: "Mango",
    location: {
        coords: [1, 2],
        city: "Lviv",
    },
};

// console.log(_.get(user, "location.city"));

// console.log(user.location.city);

// if (user && user.location && user.location.city) {
//     console.log(user.location.city);
// }

// console.log(user?.location?.city);

// console.log(_.union([1, 2, 3], [3, 4, 5]));

// console.log(_.range(10, 51));

const users = [
    { user: "fred", age: 48 },
    { user: "barney", age: 36 },
    { user: "fred", age: 40 },
    { user: "barney", age: 34 },
];

// console.table(_.sortBy(users, ["user", "age"]));
// console.log(_.sortBy([4, 3, 1, 2]));

// console.log(_.sum([1, 2, 3 - 15]));

const players = [
    {
        id: "player - 1",
        name: "Mango",
        timePlayed: 310,
        points: 54,
        online: false,
    },
    {
        id: "player - 2",
        name: "Poly",
        timePlayed: 470,
        points: 92,
        online: true,
    },
    {
        id: "player - 3",
        name: "Kiwi",
        timePlayed: 230,
        points: 48,
        online: true,
    },
    {
        id: "player - 4",
        name: "Ajax",
        timePlayed: 150,
        points: 71,
        online: false,
    },
    {
        id: "player - 5",
        name: "Chelsy",
        timePlayed: 80,
        points: 48,
        online: true,
    },
];

// console.log(_.sumBy(players, player => player.timePlayed));

// console.log(_.uniq([2, 4, 4, 2]));

// console.log(Math.min(...[1, 2, 3, 4, 5]));
// console.log(_.minBy(players, player => player.timePlayed));

// console.log(_.camelCase("FoO BAR"));
console.log(_.camelCase("abcd"));
console.log(_.kebabCase("A b c d"));
