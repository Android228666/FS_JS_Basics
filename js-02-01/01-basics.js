// // console.log("Hello!");

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];

// console.table(friends);
// // console.table(friends);
// friends[1] = "dfjndb";
// friends[3] = 34214234;
// // console.log(friends[3]);
// console.table(friends);
// // const lastIndex = friends.length - 1;
// // console.log(lastIndex);

// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);

// a = 20;

// console.log(a);
// console.log(b);

// const a = [1, 2, 3];
// const b = a;

// console.log("a: ", a);
// console.log("b: ", b);

// a[0] = 500;
// a.push(1000);
// console.log("a after: ", a);
// console.log("b after: ", b);

// console.log(a === b);

// console.log([1, 2, 3] === [1, 2, 3]);

const friends = ["Mango", "Kiwi", "Poly", "Ajax"];

// console.table(friends);
// const lastIndex = friends.length - 1;

for (let i = 0; i < friends.length; i++) {
    friends[i] += ` - ${i}`;
}

// for (let friend of friends) {
//     // friend += "-1";
//     console.log(friend);
// }

console.table(friends);
