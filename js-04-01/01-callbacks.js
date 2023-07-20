// console.log("Hello");

const fnA = function (message, callback) {
    console.log(message);

    console.log(callback);
    callback(100);
    // fnB();
};

const fnB = function (number) {
    console.log("fnB!!!!!", number);
};

// fnA("dsklmv", fnB);

const doMath = function (a, b, callback) {
    const result = callback(a, b);

    console.log(result);
};

// const add = function (x, y) {
//     return x + y;
// };

// const sub = function (x, y) {
//     return x - y;
// };

// doMath(2, 3, add);
// doMath(10, 8, sub);

// doMath(
//     2,
//     3,
//     function (x, y) {
//         return x + y;
//     },
//     function () {},
// );
// doMath(10, 8, function (x, y) {
//     return x - y;
// });

const buttonRef = document.querySelector(".js-button");
// console.dir(buttonRef);
const handleBtnClick = function () {
    console.log("Click on the button! " + Date.now());
};
// buttonRef.addEventListener("click", handleBtnClick);

// function addEventListener (eventtype, callback){
//     if(eventType === event){
//         callback()
//     }
// }

// const onGetPositionSuccess = function (position) {
//     console.log("Success");
//     console.log(position);
// };

// const onGetPositionError = function (error) {
//     console.log("Error!");
//     console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess,
//     onGetPositionError,
// );

const callback = function () {
    console.log("3 sec time out");
};

// console.log("Before time out");

// setTimeout(callback, 3000);

// console.log("After time out");

const filter = function (array, test) {
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

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log("r1 = ", r1);

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log("r2 = ", r2);

const fruits = [
    { name: "apples", quantity: 200, isFresh: true },
    { name: "grapes", quantity: 150, isFresh: false },
    { name: "bananas", quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
    return fruit.quantity >= 120;
};

const r3 = filter(fruits, getFruitsWithQuantity);
console.log("r3 = ", r3);
