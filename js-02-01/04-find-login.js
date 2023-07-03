const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
const loginToFind = "aj4xth3m4n";
// let message = `User ${loginToFind} was not found.`;l

// for (let i = 0; i < logins.length; i++) {
//     if (logins[i] === loginToFind) {
//         message = `User ${loginToFind} was found.`;
//         break;
//     }
// }

// console.log(message);

// for (const login of logins) {
//     if (login === loginToFind) {
//         message = `User ${loginToFind} was found.`;
//         break;
//     }
// }

// console.log(message);

let message;
message = logins.includes(loginToFind)
    ? `User ${loginToFind} was found.`
    : `User ${loginToFind} was not found.`;
console.log(message);
