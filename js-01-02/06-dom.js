const buttonAdd = document.querySelector("button[data-add]");
const valueInput = document.querySelector("input[data-value]");
const outputElement = document.querySelector(".js-output span");
const buttonClear = document.querySelector("button[data-reset]");
console.log(outputElement);
//buttonAdd.textContent = "dfjj";
console.dir(buttonAdd.textContent);
let total = 0;

buttonAdd.addEventListener("click", function () {
    console.log("click");
    // console.log(typeof Number(valueInput.value));
    // console.log(Number(valueInput.value));

    const value = Number(valueInput.value);
    console.log(value);

    total += value;
    outputElement.textContent = total;
    console.log("Total = ", total);
    valueInput.value = " ";
});

buttonClear.addEventListener("click", function () {
    total = 0;
    outputElement.textContent = 0;
});
