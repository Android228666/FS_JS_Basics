// console.log("[] === []: ", [] === []);
// console.log("{} === {}: ", {} === {});
// console.log(
//     "function () {} === function () {}: ",
//     function () {} === function () {},
// );

// const fnA = function () {
//     console.log("hello");
// };

// const fnB = fnA;
// console.log("fnB === fnA: ", fnB === fnA);

// const user = {
//     tag: "Mango",
//     showTag() {
//         console.log("showTag -> this", this);
//     },
// };

// user.showTag();

// const foo = function () {
//     console.log("foo -> this", this);
// };

// foo();

// const showTag = function () {
//     console.log("showTag -> this", this);
//     console.log("showTag -> this.tag", this.tag);
// };

// showTag();

// const user = {
//     tag: "Mango",
// };

// user.showUserTag = showTag;
// console.log("user: ", user);

// user.tag = "fmsdmv";
// user.showUserTag();

// const user = {
//     tag: "Mango",
//     showTag() {
//         console.log("showTag -> this", this);
//         console.log("showTag -> this.tag", this.tag);
//     },
// };

// user.showTag();

// const outerShowTag = user.showTag;

// user.outerShowTag();

// const user = {
//     tag: "Mango",
//     showTag() {
//         console.log("showTag -> this", this);
//         console.log("showTag -> this.tag", this.tag);
//     },
// };

// user.showTag(); // this === user

// const xyz = user.showTag;

// xyz(); // this = undefined

// const invokeAction = function (action) {
//     console.log(action);
//     action();
// };

// invokeAction(user.showTag);

// Training 1

// const fn = function () {
//     console.log("fn -> this", this);
// };

// fn();

// Training 2

// const book = {
//     title: "React for beginners",
//     showThis() {
//         console.log("showThis -> this", this);
//     },
//     showTitle() {
//         console.log("showTitle -> this.title", this.title);
//     },
// };

// book.showThis();

// const outerShowThis = book.showThis;
// outerShowThis();

// const outerShowTitle = book.showTitle;
// outerShowTitle();

// Training 3

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log("changeColor -> this", this);
//         // this.color = color;
//     };

//     // changeColor();

//     const sweater = {
//         color: "teal",
//     };

//     sweater.updateColor = changeColor;

//     // sweater.updateColor("red");

//     return sweater.updateColor;
// };

// // makeChangeColor();

// const swapColor = makeChangeColor();

// swapColor("blue");

// Training 4

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log("changeColor -> this", this);
//         this.color = color;
//         console.log("after color change: ", this);
//     };

//     return changeColor;
// };

// const updateColor = makeChangeColor();
// // updateColor("yellow");

// const hat = {
//     color: "blue",
//     updateColor,
// };

// // console.log(hat.updateColor);

// hat.updateColor("orange");

// Training 5

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log("increment -> this", this);
//         // this.value += value;
//     },
//     decrement(value) {
//         console.log("decrement -> this", this);
//         // this.value -= value;
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);

// console.log("counter = ", counter);
// counter.increment(100);
// console.log("counter = ", counter);

// const fn = function () {
//     return 5;
// };

// console.log(fn());
// console.log(fn);
