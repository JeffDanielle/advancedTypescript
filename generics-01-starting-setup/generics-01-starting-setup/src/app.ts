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
