// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
// console.log(numbers);

const numbers = [
    1000,
    ...[1, 2, 3],
    5000,
    ...[4, 5, 6],
    7000,
    ...[7, 8, 9],
    9000,
];

// console.log(numbers);

const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.min(1, 4, 17, 5, 6));
// console.log(Math.max(...temps));
// console.log(Math.min(...temps));

// Math.max(18, 14, 12, 21, 17, 29, 24);

// console.log(temps);

// const a = [1, 2, 3];
// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];

// const b = [...a];

// console.log("a: ", a);
// console.log("b: ", b);
// console.log(a === b);
// console.log(a[0] === b[0]);

// a[0].x = 1000;

// console.log("a: ", a);
// console.log("b: ", b);

// const arr = [1, 2, 3];

// function addToArr(arr) {
//     arr.push(4);
// }

// console.log("Before: ", arr);
// addToArr(arr);
// console.log("After: ", arr);

const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

// const xx = lastWeekTemps.concat(currentTemps, nextWeekTemps);
// console.log(xx);

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

const a = { x: 1, y: 2, g: { hello: "world" } };
const b = { x: 0, z: 3 };

// const c = Object.assign({name: "Mango"}, a, b);
// console.log(c);

// console.log(..."qweqweqwe");

const c = {
    ...a,
    x: 10,
    ...b,
    y: 20,
};

// console.log(c);

const defaultSettings = {
    theme: "light",
    showNotifications: true,
    hideSidebar: false,
};

const userSettings = {
    showNotifications: false,
    hideSidebar: true,
};

const finalSettings = {
    ...defaultSettings,
    ...userSettings,
};

console.log(finalSettings);
