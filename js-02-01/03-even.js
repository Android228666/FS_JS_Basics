const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

let evenSum = 0;

// for (const number of numbers) {
//     if (number % 2 === 0) {
//         console.log(`${number} - even`);
//         evenSum += number;
//     }
// }

for (const number of numbers) {
    if (number % 2 !== 0) continue;
    evenSum += number;
}

console.log("Even number: ", evenSum);
