const numbers = [5, 10, 15, 20, 25];

numbers.forEach(function (number, index, array) {
    console.log("number: ", number);
    // console.log(this);
    // array[index] = 20;
});

console.log(numbers);
