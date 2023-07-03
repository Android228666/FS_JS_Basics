const cards = ["Card - 1", "Card - 2", "Card - 3", "Card - 4", "Card - 5"];
// const cardToRemove = "Card - 3";
// const indexToRemove = cards.indexOf(cardToRemove);
// console.log("IndexToRemove: ", indexToRemove);
// console.log(cards.splice(indexToRemove, 2));
// console.table(cards);

// const cardToInsert = "Card - 6";
// const indexToInsert = 3;
// cards.splice(indexToInsert, 0, cardToInsert);
// console.table(cards);

const cardToUpdate = "Card - 3";
const cardNew = "Card - new";
const indexToUpdate = cards.indexOf(cardToUpdate);
console.log(indexToUpdate);
console.table(cards);
const a = cards.splice(indexToUpdate, 1, cardNew);
console.table(cards);
console.log(a);
