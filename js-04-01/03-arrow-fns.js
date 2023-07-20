// const add = function (a, b, c) {
//     console.log(arguments);
//     return a + b + c;
// };

// const addArrow = (...ddd) => {
//     console.log(ddd);
//     // return args[0] + args[1] + args[2];
// };

// // const addArrow = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 11, 15));

// const fnA = function () {
//     return {
//         a: 5,
//     };
// };

// console.log(fnA());

// const arrowFnA = () => ({ arrowA: 5 });

// console.log(arrowFnA());

// const onGetPositionSuccess = position => {
//     console.log("Success");
//     console.log(position);
// };

// const onGetPositionError = error => {
//     console.log("Error!");
//     console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess,
//     onGetPositionError,
// );

const filter = (array, test) => {
    const filteredArray = [];
    for (const element of array) {
        // console.log(element);
        const passed = test(element);
        if (passed) {
            filteredArray.push(element);
        }
    }

    return filteredArray;
};

const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);
console.log("r1 = ", r1);

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], value => value <= 4);
console.log("r2 = ", r2);

const fruits = [
    { name: "apples", quantity: 200, isFresh: true },
    { name: "grapes", quantity: 150, isFresh: false },
    { name: "bananas", quantity: 100, isFresh: true },
];

// const getFruitsWithQuantity = function (fruit) {
//     return fruit.quantity >= 120;
// };

const r3 = filter(fruits, fruit => fruit.quantity >= 120);
console.log("r3 = ", r3);
