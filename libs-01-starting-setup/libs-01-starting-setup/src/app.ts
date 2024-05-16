// import _ from "lodash";
import "reflect-metadata";
import {plainToClass} from "class-transformer";
import {Product} from "./product.model";
import {validate} from "class-validator";

const products = [
    {title: "A Carpet", price: 29.99},
    {title: "A Book", price: 10.99},
];

// const p1 = new Product("Book", 12.99);

// const loadedProducts = products.map((prod) => {
//     return new Product(prod.title, prod.price);
// });

// import from class transformer which shorten code to reflect metadata
const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}

const newProd = new Product("", -5.99);
validate(newProd).then((errors) => {
    if (errors.length > 0) {
        console.log("VALIDATION ERRORS!");
        console.log(errors);
    } else {
        console.log(newProd.getInformation());
    }
});

// console.log(_.shuffle([1, 2, 3]));

// declare var GLOBAL: any;

// console.log(GLOBAL);
