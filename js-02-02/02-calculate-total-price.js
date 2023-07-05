const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

function calculateTotalPrice(items) {
    let total = 0;
    for (const item of items) {
        total += item;
    }
    return total;
}

const res1 = calculateTotalPrice(cart);
console.log("Res1 = ", res1);

const r1 = calculateTotalPrice([1, 2, 3]);

console.log("Total price: ", r1);
console.log(calculateTotalPrice([5, 10, 15, 20]));
console.log(calculateTotalPrice([100, 200, 300]));
