const cart = [54, 28, 105, 70, 92, 17, 120, 15, 1400];

let sum = 0;

// for (let i = 0; i < cart.length; i++) {
//     // console.log(cart[i]);
//     sum += cart[i];
// }
// console.log("Sum: ", sum);

for (const element of cart) {
    sum += element;
}

console.log("Result = ", sum);

// for (let i = 0; i < cart.length; i++) {
//     cart[i] = Math.round(cart[i] * 1.1);
// }

// for (let value of cart) {
//     value = Math.round(value * 1.1);
//     console.log(value);
// }

// console.log(cart);
