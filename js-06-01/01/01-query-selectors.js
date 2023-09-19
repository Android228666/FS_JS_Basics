const magicBtn = document.querySelector(".js-magic-btn");

magicBtn.addEventListener("click", () => {
    const navRef = document.querySelector(".site-nav");
    console.log(navRef);
    const navLinksRef = document.querySelectorAll(".site-nav .site-nav__link");
    console.log(navLinksRef);
});
// const navRef = document.querySelector(".site-nav");
// console.log(navRef);

// const navLinksRef = document.querySelectorAll(".site-nav .site-nav__link");
// console.log(navLinksRef);
