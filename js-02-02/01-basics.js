// const add = function (x, y) {
//     console.log(x);
//     console.log(y);
//     //const result = x + y;
//     //console.log("Result: ", result);
//     //console.log("Add function!");
//     return x + y;
// };

// const r1 = add(5, 3);
// console.log("r1 = ", r1);

// const r2 = add(-5, 10);
// console.log("r2 = ", r2);

// const r3 = add(30, 50);
// console.log("r3 = ", r3);

// const fn = function (value) {
//     console.log(1);

//     console.log(2);
//     if (value < 50) {
//         return "Less than 50";
//     }

//     return "More than 50";
// };

// console.log("Result of function fn: ", fn(10));
// console.log("Result of function fn: ", fn(1000));

const fnA = function () {
    console.log("A function!");
    fnB();
};

const fnB = function () {
    console.log("B function!");

    fnC();
};

const fnC = function () {
    console.log("C function!");
    // console.log(value);
};

// console.log("Output before function A!");
fnA();
// console.log("Output after function A!");

// console.log("Output before function B!");
// fnB();
// console.log("Output after function B!");

// console.log("Output before function C!");
// fnC();
// console.log("Output after function C!");
