// const title = "Top 10 benefits of React framework";
// const resultString = title.split(" ").join("-").toLowerCase();
// console.log(resultString);

function slugify(string) {
    return string.split(" ").join("-").toLowerCase();
}

console.log(slugify("Top 10 benefits of React framework"));
console.log(slugify("Azure Static Web Apps are Awesom"));
console.log(slugify("Technical writing tips for non-native English speakers"));
