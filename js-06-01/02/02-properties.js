const magicBtn = document.querySelector(".js-magic-btn");

// magicBtn.addEventListener("click", () => {
//     const imageRef = document.querySelector(".hero__image");
//     console.log("imageRef: ", imageRef);
//     console.log(imageRef.src);
//     imageRef.src =
//         "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg";

//     imageRef.alt = "This is a new cat";
// });

const imageRef = document.querySelector(".hero__image");
// console.log("imageRef: ", imageRef);
// console.log(imageRef.src);
imageRef.src =
    "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg";

// console.log(
//     imageRef.setAttribute(
//         "src",
//         "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
//     ),
// );

const heroTitleRef = document.querySelector(".hero__title");
// console.log("heroTitleRef: ", heroTitleRef);

// console.log(heroTitleRef.textContent);
heroTitleRef.textContent = "Meow";
// console.log(heroTitleRef.textContent);

// console.log(imageRef.getAttribute("src"));
// console.log(imageRef.src);

// imageRef.removeAttribute("src");
// console.log(imageRef.hasAttribute("src"));

const actionsRef = document.querySelectorAll(".js-actions button");
console.log(actionsRef[2].dataset.x);

// console.log(actionsRef[2].getAttribute("data-action"));

magicBtn.addEventListener("click", () => {
    const inputRef = document.querySelector(".js-input");
    console.log(inputRef.value);
    inputRef.value = "qwe1223";
});
