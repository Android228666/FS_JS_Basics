const numbers = [5, 10, 15, 20, 25];

const number = numbers.find(number => number === 10);
// console.log(number);

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
        timePlayed: 280,
        points: 48,
        online: true,
    },
];

const playerIdToFind = "player - 3";
const playerWithId = players.find(({ id }) => id === playerIdToFind);
// console.log("Player found by id: ", playerWithId);
const findPlayerById = (allPlayers, playerId) =>
    allPlayers.find(({ id }) => id === playerId);
console.log(findPlayerById(players, "player - 5"));
console.log(findPlayerById(players, "player - 1"));

const playerNameToFind = "Kiwi";
const playerWithName = players.find(({ name }) => name === playerNameToFind);
// console.log("Player found by name: ", playerWithName);
