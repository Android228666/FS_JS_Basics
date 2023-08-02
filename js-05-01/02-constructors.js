// const Car = function ({ brand, model, price } = {}) {
//     // console.log("Config: ", config);
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// };

// const myCar = new Car({ brand: "Audi", model: "Q3", price: 35000 });
// // console.log(myCar);

// Car.prototype.sayHi = function () {
//     console.log("Car.prototype.sayHi -> this", this);
//     console.log("Hello :)");
// };

// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
// };

// // console.log(Car.prototype);

// // myCar.sayHi();

// const myCar2 = new Car({ brand: "BMW", model: "X6", price: 50000 });
// // console.log(myCar2);

// // myCar2.sayHi();

// const myCar3 = new Car({ brand: "Audi", model: "A6", price: 65000 });
// // console.log(myCar3);

// // myCar3.sayHi()

// myCar.changePrice(100324);
// // console.log(myCar);

// const User = function ({ email, password } = {}) {
//     this.email = email;
//     this.password = password;
// };

// console.log(User.prototype);

// User.prototype.changeEmail = function (newEmail) {
//     this.email = newEmail;
// };

// const mango = new User({ email: "mango@gmail.com", password: 11111111 });

// mango.changeEmail("my-new-main@gamil.com");
// console.log(mango);

// const objA = {
//     x: 5,
// };

// console.log(objA.__proto__ === Object.prototype);

// new Object() - for default - {}
// new Array() - for default - []
// this = Object.create(User.prototype)

// const User = function ({ email, password } = {}) {
//     this.email = email;
//     this.password = password;
// };

// const mango = new User({ email: "mango@gmail.com", password: 11111111 });

// User.logInfo = function (obj) {
//     console.log("User.logInfo -> obj: ", obj);
//     console.log("Email", obj.email);
//     console.log("Password", obj.password);
// };

// User.logInfo(mango);

// User.message = "I am static attribute, I am not in the class instance.";

// console.log(Math.round(5.1));
// console.log(Math.PI);

// Object.keys();
// Object.values();
