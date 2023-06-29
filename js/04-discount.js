let totalSpent = 100;
let payment = 500000;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
    console.log("Bronze partner, discount 2%");
    discount = 2;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
    console.log("Silver partner, discount 5%");
    discount = 5;
} else if (totalSpent >= 5000) {
    console.log("Gold partner, discount 10%");
    discount = 10;
} else {
    console.log("You have no partner discount.");
}

// payment = payment - payment * (discount / 100);
payment -= payment * (discount / 100);

console.log(
    `We are prepearing an order for you with sum ${payment} with discount ${discount}%. Discount is taken already into account.`,
);

totalSpent += payment;
console.log("Total spent: ", totalSpent);
