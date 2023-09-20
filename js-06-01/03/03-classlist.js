const magicBtnRef = document.querySelector(".js-magic-btn");

const navRef = document.querySelector(".site-nav");
// console.log(navRef.classList);
// navRef.classList.add("super-cool");
// navRef.classList.remove("site-nav");

// magicBtnRef.addEventListener("click", () => {
//     navRef.classList.toggle("super-cool");
// });

// navRef.classList.replace("super-cool", "nav-site");
// console.log(navRef.classList.contains("nav-site1"));

const currentPageUrl = "/about";
const linkRef = document.querySelector(
    `.site-nav__link[href = "${currentPageUrl}"]`,
);

// a[href="/about"];

console.log(linkRef);
linkRef.classList.add("site-nav__link--current");
