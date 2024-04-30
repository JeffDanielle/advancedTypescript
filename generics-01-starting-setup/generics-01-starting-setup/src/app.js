// Generics, a type connected to another type: example below
// Array of string
// const names: Array<string> = [];
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
// Allows any type of Object with key of type U from T
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
extractAndConvert({ name: "Jeff" }, "name");
// generic not only specify a type, but also can be use as type safety
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem("Marlon");
textStorage.addItem("Jeff");
textStorage.removeItem("Marlon");
console.log(textStorage.getItems());
var numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    // return {title, description, completeUntil: date};
    // Partial turns the CourseGoal into a type with all properties optional
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
var names = ["Jeff", "Danielle"];
// names.push("Marlon");
