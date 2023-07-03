const string = "qWeRTzxCv";
const letters = string.split("");
let invertedString = "";

console.log(letters);

for (const letter of letters) {
    // console.log(letter);

    // if (letter === letter.toLocaleLowerCase()) {
    //     invertedString += letter.toUpperCase();
    // } else {
    //     invertedString += letter.toLowerCase();
    // }

    const isEqual = letter === letter.toLocaleLowerCase();
    invertedString += isEqual
        ? letter.toUpperCase()
        : letter.toLocaleLowerCase();
}

console.log("invertedString: ", invertedString);
