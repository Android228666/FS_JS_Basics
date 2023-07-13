const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    add(product) {
        this.items.push(product);
    },
    remove(productName) {
        // for (const item of items) {
        //     if()
        // }
    },
    clear() {},
    countTotalPrice() {},
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
};

console.log(cart.getItems());

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍑", price: 70 });
cart.add({ name: "🍌", price: 110 });
