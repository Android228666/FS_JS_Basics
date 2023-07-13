const feedback = {
    good: 5,
    neautral: 10,
    bad: 3,
};

let totalFeedback = 0;

// const keys = Object.keys(feedback);

// console.log(keys);

// for (const key of keys) {
//     console.log(feedback[key]);
//     totalFeedback += feedback[key];
// }

// console.log("Total feedback: ", totalFeedback);

// const values = Object.values(feedback);
// console.log(values);

// for (const value of values) {
//     totalFeedback += value;
// }

// console.log("Total feedback: ", totalFeedback);

const array = Object.entries(feedback);
console.log(array);
