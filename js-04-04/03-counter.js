const counter = {
    value: 0,
    increment() {
        console.log("increment -> this", this);
        this.value += 1;
    },
    decrement() {
        console.log("decrement -> this", this);
        this.value -= 1;
    },
};

const decrementButton = document.querySelector(".js-decrement");
const incrementButton = document.querySelector(".js-increment");
const valueElement = document.querySelector(".js-value");

console.log(decrementButton);
console.log(incrementButton);
console.log(valueElement);

// valueElement = counter.value;

// decrementButton.addEventListener("click", counter.increment.bind(counter));
// incrementButton.addEventListener("click", counter.decrement.bind(counter));

decrementButton.addEventListener("click", function () {
    console.log("Click on decrement button.");
    counter.decrement();
    console.log(counter);

    valueElement.textContent = counter.value;
});

incrementButton.addEventListener("click", function () {
    console.log("Click increment button.");
    counter.increment();
    console.log(counter);
    valueElement.textContent = counter.value;
});
