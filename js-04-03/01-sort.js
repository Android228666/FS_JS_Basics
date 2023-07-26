const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log("numbers: ", numbers);

const letters = ["b", "B", "a", "A"];
letters.sort();
// console.log("letters: ", letters);

// numbers.sort((currEl, nextEl) => {
//     return nextEl - currEl;
// });

// console.log(numbers);

// const copy = [...numbers];
// copy.sort();
// console.log("copy: ", copy);
// console.log("number: ", numbers);
// console.log(copy === numbers);

const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
const descSortedNumbers = [...numbers].sort((a, b) => b - a);
// console.log("ascSortedNumbers: ", ascSortedNumbers);
// console.log("descSortedNumbers: ", descSortedNumbers);
// console.log([1, 2, 3, 4, 5].reverse());

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

const sortedByBestPlayers = [...players].sort(
    (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed,
);
// console.table(sortedByBestPlayers);

const sortedByWorstPlayers = [...players].sort(
    (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed,
);
// console.table(sortedByWorstPlayers);

const sortedByName = [...players].sort((a, b) => {
    const result = a.name[0] > b.name[0];

    if (result) {
        return 1;
    }

    if (!result) {
        return -1;
    }
    // return a.name[0] > b.name[0];
});
console.table(sortedByName);

// console.log("a" > "b");
// console.log("b" > "a");
// console.log("abc".charCodeAt(2));
