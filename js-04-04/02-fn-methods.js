// console.log("aaa");
const showThis = function (a, b, arr) {
    console.log(a, b, arr);
    console.log("showThis -> this", this);
};

// showThis(1);

const objA = {
    a: 5,
    b: 10,
};
const a = -1;
// showThis.call(objA, a, 5, [6, 8]);
// showThis.apply(objA, [1, 2, [6, 8]]);

const objB = {
    x: 788,
    y: 25,
};

// showThis.call(objB, 3, -15, 5);
// showThis.apply(objB, [3, -15, 5]);

// showThis();

const changeColor = function (color) {
    console.log("changeColor -> this", this);
    this.color = color;
};

const hat = {
    color: "black",
};

const sweater = {
    color: "green",
};

// changeColor.call(hat, "white");
// console.log(hat);

// console.log(sweater);
// changeColor.call(sweater, "red");
// console.log(sweater);

const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);

// changeColor();
// changeHatColor("yellow");
// changeSweaterColor("aaa");

// console.log(hat);
// console.log(sweater);

const counter = {
    value: 0,
    increment(value) {
        console.log("increment -> this", this);
        this.value += value;
        // console.log("counter after change: ", counter);
    },
    decrement(value) {
        console.log("decrement -> this", this);
        this.value -= value;
    },
};

const updateCounter = function (value, operation) {
    operation(value);
};

updateCounter(10, counter.increment.bind(counter));
updateCounter(-5, counter.decrement.bind(counter));

console.log(counter);
