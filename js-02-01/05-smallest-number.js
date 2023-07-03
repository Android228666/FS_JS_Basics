const numbers = [51, 18, 13, 24, 7, 85, 19];
let min = numbers[0];
for (const number of numbers) {
    if (min > number) {
        min = number;
    }
}

console.log("min = ", min);

let max = numbers[0];
for (const number of numbers) {
    if (max < number) {
        max = number;
    }
}

console.log("max = ", max);
