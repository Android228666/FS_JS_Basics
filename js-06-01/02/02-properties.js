// const magicBtn = document.querySelector(".js-magic-btn");
// magicBtn.addEventListener("click", () => {
//     const imageEl = document.querySelector(".hero__image");
//     console.log("imageEl: ", imageEl);
//     console.log(imageEl.src);
//     imageEl.src =
//         "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg";
//     imageEl.alt = "New kitty";
// });

const imageEl = document.querySelector(".hero__image");
// console.log("imageEl: ", imageEl);
// console.log(imageEl.src);
imageEl.src =
    "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg";
imageEl.alt = "New kitty";

const heroTitleEl = document.querySelector(".hero__title");
// console.log("heroTitleEl", heroTitleEl);
// console.log(heroTitleEl.textContent);
heroTitleEl.textContent = "I am funny!";

console.log(imageEl.getAttribute("alt"));

// imageEl.removeAttribute("src");
console.log(imageEl.hasAttribute("src1"));
