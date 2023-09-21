import products from "../data/products.js";
console.log(products);

const product = {
    name: "apples",
    descripton: "djnscnjasjndsj sndvdsnfusd fnsdadnfs nfsdnf sjdnfsd",
    price: 2000,
    availabele: true,
    onSale: true,
};

const productEl = document.createElement("article");
productEl.classList.add("product");

const nameEl = document.createElement("h2");
nameEl.textContent = product.name;
nameEl.classList.add("product___name");

const descrEl = document.createElement("p");
descrEl.textContent = product.descripton;
descrEl.classList.add("product__descr");

const priceEl = document.createElement("p");
priceEl.textContent = `Price: ${product.price} credits`;
priceEl.classList.add("product__price");

productEl.append(nameEl, descrEl, priceEl);
console.dir(productEl);
