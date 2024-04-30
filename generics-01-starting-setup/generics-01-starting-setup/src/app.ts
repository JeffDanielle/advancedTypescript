// Generics, a type connected to another type: example below
// Array of string
// const names: Array<string> = [];

// // names[0].split(" ");

// // Promise expected to resolve with a number
// const promise = new Promise<number>((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 2000);
// });

// promise.then((data) => {
//     // data.split(" ");
// });

// different way of doing generics, concrete Types
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: "Jeff", hobbies: ["Sports"]}, {age: 24});
console.log(mergedObj.age);

interface Lengthy {
    length: number;
}

// generic type parameter. It allows you to create reusable components that can work with different types.
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 elements";
    } else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}

console.log(countAndDescribe(["Sports", "Cooking"]));

// Allows any type of Object with key of type U from T
function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return "Value: " + obj[key];
}

extractAndConvert({name: "Jeff"}, "name");

// generic not only specify a type, but also can be use as type safety
class DataStorage<T extends string | number | boolean> {
    /* Difference between Union Types and Generics: 
    Union types accepts any type of Object e.g string[] | number[] | boolean[] while Generics only accepts concrete type e.g string if 
    it already accept string type of data it will only accept string
    More like generic type lock in a type
    */
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Marlon");
textStorage.addItem("Jeff");
textStorage.removeItem("Marlon");

console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = {name: "Marlon"};
// objStorage.addItem({name: "Marlon"});
// objStorage.addItem({name: "Jeff"});

// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    // return {title, description, completeUntil: date};
    // Partial turns the CourseGoal into a type with all properties optional
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Jeff", "Danielle"];
// names.push("Marlon");
