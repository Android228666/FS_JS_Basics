// const fn = function () {
//     console.log(arguments);
//     // console.log(arguments.push(5));

//     // for (const argument of arguments) {
//     //     console.log(argument);
//     // }

//     const args = Array.from(arguments);
//     console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// const fn = function (a, b, c, ...args) {
//     console.log(`${a} ${b} ${c}`);
//     console.log(args);
// };

// fn("hello", 1, 2, 3);
// fn("aloha", 1, 2, 3, 4, 5);
// fn("hi", 1, 2, 3, 4, 5, 6, 7);

// const add = function (...numbers) {
//     let sum = 0;

//     for (const number of numbers) {
//         sum += number;
//     }

//     return sum;
// };

// console.log("Res1 = ", add(1, 2, 3));
// console.log("Res2 = ", add(1, 2, 3, 4, 5));
// console.log("Res3 = ", add(1, 2, 3, 4, 5, 6, 7));

const filterNumbers = function (array, ...rest) {
    let resultArray = [];

    // for (const arrayElement of array) {
    //     for (const restElement of rest) {
    //         if (arrayElement === restElement) {
    //             resultArray.push(arrayElement);
    //         }
    //     }
    // }

    for (const element of array) {
        if (rest.includes(element)) resultArray.push(element);
    }
    return resultArray;
};

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));
