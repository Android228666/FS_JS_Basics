const numbers = [5, 10, 15, 20, 25];
const doubleNumbers = numbers.map(number => number * 10);

// console.log("numbers: ", numbers);
// console.log("doubleNumbers: ", doubleNumbers);

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

// console.log("Players: ", players);
const playerNames = players.map(player => player.name);
// console.log(playerNames);
// console.log("Players: ", players);

const playerIds = players.map(player => player.id);
// console.log(playerIds);

// const res = players.map(({ name, online }) => ({
//     name,
//     online,
// }));
// console.log("res: ", res);

const updatedPlayers = players.map(player => ({
    ...player,
    points: player.points * 1.1,
}));

// console.table(updatedPlayers);
// console.log(updatedPlayers);
// console.log(players);

const playerIdToUpdate = "player - 1";

const updatedPlayers1 = players.map(player => {
    if (player.id === playerIdToUpdate) {
        return { ...player, timePlayed: 100000 };
    }
    return player;
});

// updatedPlayers1[0].id = "ndcsnjkv";
console.log(players[3] === updatedPlayers1[3]);
// const updatedPlayers2 = players.map(player =>
//     player.id === playerIdToUpdate ? { ...player, timePlayed: -100 } : player,
// );

// console.log(players[3] === updatedPlayers2[3]);
updatedPlayers1[3].id = "dmjvsnvs,dmrvrkbvrebv";
console.log(players[3]);
// console.log(updatedPlayers2[3]);
console.log(updatedPlayers1[3]);
// console.table(updatedPlayers2);
console.log(players[3] === updatedPlayers1[3]);

// const obj = {
//     a: 5,
//     b: {
//         c: 10,
//         x: 20,
//     },
// };

// console.log(obj);

// const copy = {
//     ...obj,
// };
// console.log(copy);

// console.log(obj.b === copy.b);
