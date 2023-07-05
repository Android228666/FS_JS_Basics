// function fn(string) {
//     console.log(string.includes(1));
// }

// fn("324");

function findSmallestNumber(numbers) {
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) min = number;
    }

    return min;
}

console.log(findSmallestNumber([3, 8, 12, -2, 15]));
console.log(findSmallestNumber([100, 54, 8, 12, 47]));
console.log(findSmallestNumber([7, 21, 84, 15, 4]));
