// Prototype
/*const employee = {
    calcTax () {
        console.log("tax is 10%");
    }
};

const karan = {
    salary : 50000,
};

karan.__proto__ = employee; */


// Classes
/*class ToyotaCar {
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.brand = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("Fortuner");

let lexus = new ToyotaCar();
lexus.setBrand("lexus"); */

// Inheritance
/*class Parent {
    hello() {
        console.log("hello");
    }
}

class Child extends Parent{
    hii() {
        console.log("Hiiiii");
    }
}

let obj1 = new Child(); */

class Person {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log("eat");
    }
}

class Engineer extends Person {
    constructor(name) {
        super(name);
    }

    work() {
        super.eat();
        console.log("do something");
    }
}

let obj = new Engineer("Bharat");
