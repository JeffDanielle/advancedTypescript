// Decorator
function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

// Decorators execute when a class is defined
@Logger("Logging - Person")
class Person {
    name = "Max";

    constructor() {
        console.log("Person was created");
    }
}

const pers = new Person();
console.log(pers);
