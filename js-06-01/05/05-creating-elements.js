const titleEl = document.createElement("h1");
titleEl.classList.add("page-title");
titleEl.textContent = "It is title of the page!";
// console.log(titleEl);
// document.body.appendChild(titleEl);
// console.log(document.head);

const imageEl = document.createElement("img");
imageEl.src =
    "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg";
imageEl.alt = "image";
imageEl.width = 320;
// console.log(imageEl);

// document.body.appendChild(imageEl);

const navItemEl = document.createElement("li");
navItemEl.classList.add("site-nav__item");

const navLinkEl = document.createElement("a");
navLinkEl.classList.add("site-nav__link");

navLinkEl.textContent = "My own cabinet";
navLinkEl.href = "/profile";

console.log(navItemEl);
console.log(navLinkEl);

navItemEl.appendChild(navLinkEl);
console.log(navItemEl);

const navEl = document.querySelector(".site-nav");
// navEl.appendChild(navItemEl);

navEl.insertBefore(navItemEl, navEl.firstElementChild);

const heroEl = document.querySelector(".hero");
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl);
heroEl.append(titleEl, imageEl);
// heroEl.prepend(navItemEl);
