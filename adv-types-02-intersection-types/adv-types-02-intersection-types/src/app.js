var e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = add("Jeff", "Bayot");
result.split(" ");
// type UnknownEmployee = Employee | Admin;
// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log("Name: " + emp.name);
//     // type guard with 'in' from typescript
//     if ("privileges" in emp) {
//         console.log("Privileges: " + emp.privileges);
//     }
//     if ("startDate" in emp) {
//         console.log("Start Date: " + emp.startDate);
//     }
// }
// printEmployeeInformation(e1);
// class Car {
//     drive() {
//         console.log("Driving...");
//     }
// }
// class Truck {
//     drive() {
//         console.log("Driving a truck...");
//     }
//     loadCargo(amount: number) {
//         console.log("Loading cargo..." + amount);
//     }
// }
// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();
//     // type guard from vanilla javascript
//     if (vehicle instanceof Truck) {
//         vehicle.loadCargo(1000);
//     }
// }
// useVehicle(v1);
// useVehicle(v2);
// interface Bird {
//     // Type assignment
//     type: "bird";
//     flyingSpeed: number;
// }
// interface Horse {
//     type: "horse";
//     runningSpeed: number;
// }
// type Animal = Bird | Horse;
// function moveAnimal(animal: Animal) {
//     let speed;
//     switch (animal.type) {
//         case "bird":
//             speed = animal.flyingSpeed;
//             break;
//         case "horse":
//             speed = animal.runningSpeed;
//     }
//     console.log("Moving at speed: " + speed);
// }
// moveAnimal({type: "bird", flyingSpeed: 10});
// // Type casting
// // const userInputElement = <HTMLInputElement>document.querySelector("user-input")!;
// const userInputElement = document.getElementById(
//     "user-input"
// )! as HTMLInputElement;
// userInputElement.value = "Hi there!";
// interface ErrorContainer {
//     // { email: 'Not a valid email', username: 'Must start with a character!' }
//     // Allow multiple properties but strict with types
//     [prop: string]: string;
// }
// const errorBag: ErrorContainer = {
//     email: "Not a valid email!",
//     username: "Must start with a capital character!",
// };
