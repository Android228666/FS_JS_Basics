let balance = 10000;
const payment = 1999;

console.log(
    `Amount of money that you need to pay is ${payment} credits. Check your balance.`,
);

if (payment <= balance) {
    balance -= payment;
    console.log("Remain amount of money in your account: ", balance);
    console.log("Thanks for using our service!!!");
} else {
    console.log("You lack money to buy this good!");
}

// console.log("Hello!");

// const message = "Hello World!";
// console.log(message);
