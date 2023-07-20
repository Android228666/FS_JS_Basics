const fnA = function (parameter) {
    const innerVariable = "Variable from fnA";
    const innerFunction = function () {
        // console.log(parameter);
        // console.log(innerVariable);
        // console.log("innerFunction call");
    };

    return innerFunction;
};

const fnB = fnA(555);
// fnA(100);

fnB();

// console.log(fnB);

const makeDish = function (sheffName, dish) {
    console.log(`${sheffName} cooking ${dish}`);
};

// makeDish("Mango", "cake");
// makeDish("Mango", "omelet");
// makeDish("Mango", "tea");

// makeDish("Poly", "cutlet");
// makeDish("Poly", "soup");
// makeDish("Poly", "coffee");

const makeSheff = function (name) {
    const makeDish = function (dish) {
        console.log(`${name} cooking ${dish}`);
    };
    return makeDish;
};

// const mango = makeSheff("Mango");

// // console.dir(mango);

// mango("cake");
// mango("omelet");
// mango("tea");

// const poly = makeSheff("Poly");
// poly("cutlet");
// poly("soup");
// poly("coffee");

// mango("toast");

const floatingPoint = 3.456789;
const someInt = Math.round(floatingPoint);
const withDecimals = Number(floatingPoint.toFixed(3));

const number1 = 3.6678;
const number2 = 4.1234;

// console.log(Number(number1.toFixed(3)));
// console.log(Number(number2.toFixed(4)));

// const rounder = function (number, places) {
//     return Number(number.toFixed(places));
// };

// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));
// console.log(rounder(5.1234, 2));
// console.log(rounder(3.4567, 3));

const rounder = function (places) {
    return function (number) {
        return Number(number.toFixed(places));
    };
};

const rounder2 = rounder(2);
const rounder3 = rounder(3);

// console.log(rounder2(3.4567));
// console.log(rounder3(3.4567));
// console.log(rounder2(5.1234));
// console.log(rounder3(3.4567));

const myLibFactory = function () {
    let value = 0;
    const add = function (num) {
        value += num;
    };
    return {
        add: add,
        getValue() {
            return value;
        },
    };
};

// const myLib = myLibFactory();
// console.log(myLib);
// console.log(myLib.getValue());
// myLib.add(10);
// console.log(myLib.getValue());

const salaryManagerFactory = function (employeeName, baseSalary = 0) {
    let salary = baseSalary;
    // const changeBy = function (amount) {
    //     salary += amount;
    // };

    return {
        raise(amount) {
            // changeBy(amount);
            if (amount > 1000) {
                return "Men, too much!!!";
            }

            salary += amount;
        },
        lower(amount) {
            // changeBy(amount);
            salary -= amount;
        },
        current() {
            return `Current salary of employee ${employeeName} - ${salary}`;
        },
    };
};

const salaryManager = salaryManagerFactory("Mango", 5000);

// console.log(salaryManager.raise(10000));
// console.log(salaryManager.current());

// console.log(salaryManager.raise(1000000));
// console.log(salaryManager.current());
