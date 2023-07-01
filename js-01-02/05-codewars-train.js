function highAndLow(string) {
    const numbers = string.split(" ");
    console.log(numbers);
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    return `${max} ${min}`;
}

const res = highAndLow("1 2 -3 4 5");
console.log(res);
