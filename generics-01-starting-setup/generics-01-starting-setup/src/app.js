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
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: "Jeff", hobbies: ["Sports"] }, { age: 24 });
console.log(mergedObj.age);
// generic type parameter. It allows you to create reusable components that can work with different types.
function countAndDescribe(element) {
    var descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 elements";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(["Sports", "Cooking"]));
