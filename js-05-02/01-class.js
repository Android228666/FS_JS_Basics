class Car1 {
    static description = "A class that describes an automobile.";
    static logInfo(carObj) {
        console.log("Car.logInfo -> carObj", carObj);
    }

    #test = "testaaa";
    mySuperVariable = 555; // public attribute that equal to this.mySuperVariable = 555 in constructor

    constructor({ brand, model, price } = {}) {
        // console.log("Constructor!!!");
        // console.log(this);
        this.brand = brand;
        this._model = model;
        this._price = price;
    }

    changePrice = newPrice => {
        //public method
        this.price = newPrice;
        console.log(this.#test);
    };

    updateModel(newModel) {
        this.model = newModel;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    get model() {
        return this._model;
    }

    set model(newModel) {
        this._model = newModel;
    }
}

// Car1.AAA = "AAA";
// console.log(Car1.description);

const carInstance = new Car1({ brand: "Audi", model: "Q4", price: 35000 });
console.log(carInstance);
// console.log(Car1);
// console.log(carInstance);
// console.log(Object.getPrototypeOf(carInstance) === Car1.prototype);
// Car1.logInfo(carInstance);

// carInstance.changePrice(2000);
// console.log(carInstance);

// console.log(carInstance.getModel());
// carInstance.setModel("Q4");
// console.log(carInstance.getModel());

// console.log(carInstance);
// console.log(carInstance.model);
// carInstance.model = "aaa";
// console.log(carInstance.model);

// console.log(carInstance.price);
// carInstance.price = 50000;
// console.log(carInstance.price);

// console.log(carInstance);

// const obj = {
//     _a: 100,
//     get a() {
//         return this._a;
//     },
//     set a(x) {
//         this._a = x;
//     },
// };

// console.log(obj);

// console.log(carInstance.price);
// carInstance.price = 10;
// console.log(carInstance);
