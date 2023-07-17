const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    add(product) {
        for (const item of this.items) {
            if (item.name === product.name) {
                item.quantity += 1;
                return;
            }
        }
        const newProduct = { ...product, quantity: 1 };
        this.items.push(newProduct);
    },
    remove(productName) {
        const { items } = this;
        for (let i = 0; i < items.length; i++) {
            const { name } = items[i];

            if (name === productName) {
                items.splice(i, 1);
            }
        }
    },
    clear() {
        this.items = [];
    },
    countTotalPrice() {
        const { items } = this;
        let totalPrice = 0;
        for (const { price, quantity } of items) {
            totalPrice += price * quantity;
        }
        return totalPrice;
    },
    increaseQuantity(productName) {
        for (const item of this.items) {
            if (item.name === productName) {
                item.quantity += 1;
                return;
            }
        }
    },
    decreaseQuantity(productName) {
        for (const item of this.items) {
            if (item.name === productName && item.quantity >= 1) {
                if (item.quantity === 1) {
                    this.remove(item.name);
                }
                item.quantity -= 1;
                return;
            }
        }
    },
};

console.log(cart.getItems());

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍑", price: 70 });
cart.add({ name: "🍌", price: 110 });
cart.add({ name: "🍌", price: 110 });
cart.add({ name: "🍌", price: 110 });

console.table(cart.getItems());

// cart.remove("🍑");
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

const totalPrice1 = cart.countTotalPrice();
console.log("Total price1 - ", totalPrice1);

cart.increaseQuantity("🍑");
console.table(cart.getItems());

const totalPrice2 = cart.countTotalPrice();
console.log("Total price2 - ", totalPrice2);

cart.decreaseQuantity("🍎");
console.table(cart.getItems());

cart.increaseQuantity("🍎");
console.table(cart.getItems());

cart.add({ name: "🍌", price: 110 });
console.table(cart.getItems());

const totalPrice3 = cart.countTotalPrice();
console.log("Total price3 - ", totalPrice3);
