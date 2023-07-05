const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
const loginToFind = "aj4xth3m4n";

function findLogin(logins, loginToFind) {
    // for (const login of logins) {
    //     if (login === loginToFind) {
    //         return `User ${loginToFind} was found.`;
    //     }
    // }

    // return `User ${loginToFind} was not found.`;
    return logins.includes(loginToFind)
        ? `User ${loginToFind} was found.`
        : `User ${loginToFind} was not found.`;
}

// const res1 = findLogin(logins, loginToFind);
// console.log("Res1: ", res1);

console.log(findLogin(logins, "avocod3r"));
console.log(findLogin(logins, "k1widab3st"));
console.log(findLogin(logins, "jam4l"));
console.log(findLogin(logins, "poly1scute"));
