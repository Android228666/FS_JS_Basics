class Hero {
    constructor({ name = "hero", xp = 0 } = {}) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        console.log(`${this.name} gain ${amount} XP.`);
        this.xp += amount;
    }
}

// console.log(mango);
// mango.gainXp(1000);

class Warrior extends Hero {
    constructor({ weapon, ...restProps } = {}) {
        super(restProps);
        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} is attacking by using ${this.weapon}.`);
    }
}

class Berserk extends Warrior {
    constructor({ warcry, ...restProps } = {}) {
        super(restProps);
        this.warcry = warcry;
    }

    babyRage() {
        console.log(this.warcry);
    }
}

const ajax = new Berserk({
    name: "ajax",
    xp: 500,
    weapon: "axe",
    warcry: "waaaaaaaah",
});

// console.log(ajax);
// ajax.babyRage();
// ajax.attack();
// ajax.gainXp(100);

// const mango = new Warrior({ name: "mango", xp: 1000, weapon: "halberd" });
// console.log(mango);
// mango.gainXp(1000);
// console.log(mango);
// mango.attack();
// mango.gainXp(1000);

class Mage extends Hero {
    constructor({ spells, ...restProps } = {}) {
        super(restProps);
        this.spells = spells;
    }

    cast() {
        console.log(`${this.name} is casting something.`);
    }
}

// const poly = new Mage({ name: "poly", xp: 500, spells: ["fireball"] });
// console.log(poly);
// poly.cast();
// poly.gainXp(300);

// console.log(mango.__proto__ === Warrior.prototype);
// console.log("Warrior.prototype ", Warrior.prototype);
// console.log(Warrior.prototype.__proto__ === Hero.prototype);
// console.log(Object.getPrototypeOf(mango) === Warrior.prototype);
// console.log("Warrior.prototype ", Warrior.prototype);
// console.log("Hero.prototype ", Hero.prototype);
// console.log(Hero.prototype.__proto__ === Object.prototype);
// class Mage {
//     constructor() {
//         this.name = "";
//         this.xp = "";
//         this.spells = [];
//     }

//     gainXp() {
//         //
//     }
// }

// let name = "Mango";
// name = true;
// name = 5;
// name = [];

const data = ["todo-1", "todo-2", "todo-3"];

let markUp = data.reduce(
    (acc, element) => (acc += `<div>${element}</div>`),
    "",
);

console.log(markUp);
