// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// console.log("kjdfsjfa");

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let a = 10;
// const b = ++a;

// console.log(a);
// console.log(b);

// const employees = 3;

// let totalSalary = 0;
// const minSalary = 500;
// const maxSalary = 5000;

// for (let i = 0; i < employees; i++) {
//     const currentSalary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary,
//     );
//     console.log(`Salary of worker ${i + 1}: ${currentSalary}`);
//     totalSalary += currentSalary;
// }

// console.log("Total salary: ", totalSalary);

const min = 10;
const max = 50;
let total = 0;

for (let i = min; i <= max; i += 1) {
    if (i % 2 !== 0) {
        // console.log("Odd number: ", i);
        continue;
    }

    console.log(`Even number: ${i}`);
    total += i;
}

console.log("Total: ", total);
