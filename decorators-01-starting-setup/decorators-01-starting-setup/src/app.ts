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
    return function <T extends {new (...args: any[]): {name: string}}>(
        originalConstructor: T
    ) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                console.log("Rendering template");
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1")!.textContent = this.name;
                }
            }
        };
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

// ---

function Log(target: any, propertyName: string | symbol) {
    console.log("Property decorator!");
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log("Accessor decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(
    target: any,
    name: string | symbol,
    descriptor: PropertyDescriptor
) {
    console.log("Method decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | symbol, position: number) {
    console.log("Parameter decorator!");
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error("Invalid price - should be positive!");
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

const p1 = new Product("Book", 19.95);
const p2 = new Product("Book 2", 29.95);

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}

class Printer {
    message = "This works!";

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}
const p = new Printer();

const buttonEl = document.querySelector("button")!;
buttonEl.addEventListener("click", p.showMessage);
