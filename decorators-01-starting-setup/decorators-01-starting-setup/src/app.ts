// Decorator
function Logger(logString: string) {
    console.log(`LOGGER FACTORY`);
    return function (constructor: Function) {
        // Factory decorator
        console.log(logString);
        console.log(constructor);
    };
}

function WithTemplate(template: string, hookId: string) {
    console.log("TEMPLATE FACTORY");
    return function (constructor: any) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1")!.textContent = p.name;
        }
    };
}

// Decorators execute when a class is defined
// Execute bottom-most decorator(inside return function) first
@Logger("LOGGING")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
    name = "Jeff";

    constructor() {
        console.log("Person was created");
    }
}

const pers = new Person();
console.log(pers);
