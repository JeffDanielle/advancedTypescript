// Decorator
function Logger(constructor: Function) {
    console.log("Logging...");
    console.log(constructor);
}

// Decorators execute when a class is defined
@Logger
class Person {
    name = "Max";

    constructor() {
        console.log("Person was created");
    }
}

const pers = new Person();
console.log(pers);
