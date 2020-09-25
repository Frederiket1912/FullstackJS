"use strict";
let http = require("http");
//b) Create a function that takes an IBook instance and test it with an object instance.
function takeBook(iBook) {
    return ("The Books is called " +
        iBook.title +
        " and it's published on " +
        iBook.published);
}
let book = {
    title: "title",
    author: "author",
};
//book.author = 'Jens';
//console.log(takeBook(book));
//c) Given the example above, explain what is meant by the term Duck Typing, when TypeScript interfaces are discussed.
// According to TypeScript, Duck-Typing is a method/rule used to check the type compatibility for more complex variable types.
// TypeScript uses the duck-typing method to compare one object with other objects by checking that both objects have the same type matching names or not.
// It means we cannot change the signature of a variable. For example, if we assign an object that has two properties like name,
// address and next time we assign an object which contains more properties or fewer properties or both properties are not (name, address),
// then the TypeScript compiler will generate the compile-time error. The concept is known as Duck typing.
// class Book2 {
//   title: string;
//   author: string;
//   published: Date;
//   pages: number;
//   constructor(title: string, author: string, published: Date, pages: number) {
//     this.title = title;
//     this.author = author;
//     this.published = published;
//     this.pages = pages;
//   }
// }
//f) Create a class Book and demonstrate the "Java way" of implementing an interface.
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
class ComicBook extends Book {
    constructor(title, author, published, pages, image) {
        super(title, author);
        this.image = image;
    }
}
//b) Design a function "implementing" this interface which returns an array with the three strings
let arrFunc;
arrFunc = function (str1, str2, str3) {
    let result = [str1, str2, str3];
    return result;
};
//c) Design another implementation that returns an array, with the three strings uppercased.
let upperCaseArr;
upperCaseArr = function (str1, str2, str3) {
    let result = [str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase()];
    return result;
};
//d) The function, given below, uses the ES-6 (and TypeScript) feature for destructuring Arrays into individual variables, to simulate a method that uses the interface.
let f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    let [a, b, c] = ["a", "b", "c"];
    console.log(f1(a, b, c));
};
//e) Test f2 with the two implementations created in b+c.
//f2(arrFunc);
//f2(upperCaseArr);
//f) Verify that f2 cannot be used with functions that do not obey the myFunc interface
let f3 = function (str1, num1) {
    return [str1, num1];
};
//giver compile time error: Argument of type '(str1: string, num1: number) => (string | number)[]' is not assignable to parameter of type 'MyFunc'.
//f2(f3);
//Classes and Inheritance
//A) The declaration below defines a Shape class, which as it's only properties has a color field +  a getArea() and a getPerimeter() function which both returns undefined.
//This is the closest we get to an abstract method in Java.
class Shape {
    constructor(color) {
        this._color = color;
    }
    toString() {
        return `color: ${this._color}`;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color;
    }
}
//Provide the class with a nice (using template literals) toString() method  + a getter/setter for the colour property.
//Verify that you cannot (why) make an instance of this class.
//man kan ikke lave et instance af en abstract class
//let s1 = new Shape('Brown');
// B) Create a new class Circle that should extend the Shape class.
// Provide the class with:
// A radius field
// A constructor that takes both colour and radius.
// Overwritten versions of the methods defined in the Base
// Getter/Setter for radius
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this._radius = radius;
    }
    get area() {
        return Math.PI * Math.pow(this._radius, 2);
    }
    get perimeter() {
        return 2 * Math.PI * this._radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(radius) {
        this._radius = radius;
    }
}
// Test the class constructor, the getters/setters and the three methods.
// let c = new Circle("Brown", 5);
// c.color = "Yellow";
// c.radius = 4;
// console.log(c.toString());
// console.log(c.color);
// console.log(c.radius);
// console.log(c.area);
// console.log(c.perimeter);
// C) Create a new class Cylinder (agreed, definitely not a perfect inheritance example) that should extend the Circle class.
// Provide the class with:
// A height field
// A constructor that takes colour, radius and height.
// Overwritten versions of relevant methods defined in the Base (getter for perimeter should throw "not implemented")
// A getVolume() method  (or better, a getter called volume)
// Getter/Setter for height
class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius);
        this._height = height;
    }
    get area() {
        return (2 * Math.PI * this.radius * this._height +
            2 * Math.PI * Math.pow(this.radius, 2));
    }
    get perimeter() {
        throw "Not implemented";
        return 2;
    }
    get volume() {
        return Math.PI * Math.pow(this.radius, 2) * this._height;
    }
    get height() {
        return this._height;
    }
    set height(height) {
        this._height = height;
    }
}
// Test the new class
// let cy = new Cylinder("Red", 4, 6);
// cy.color = "Green";
// cy.radius = 5;
// cy.height = 10;
// console.log(cy);
// console.log(cy.toString());
// console.log(cy.height);
// console.log(cy.area);
// console.log(cy.volume);
// console.log(cy.perimeter);
//Generics
// a) Implement a generic function which will take an array of any kind, and return the array reversed (just use the built-in reverse function),
// so the three first calls below will print the reversed array, and the last call will fail.
function reverseArr(arg) {
    return arg.reverse();
}
// console.log(
//   reverseArr<string>(["a", "b", "c"])
// );
// console.log(
//   reverseArr<number>([1, 2, 3])
// );
// console.log(
//   reverseArr<boolean>([true, true, false])
// );
// console.log(
//   reverseArr<number>(["a", "b", "c"])
// );
//b) Implement a generic Class DataHolder that will allow us to create instances as sketched below:
//c) Rewrite the example above to user getters and setters instead of the silly getXX and setXX methods
class DataHolder {
    constructor(data) {
        this._data = data;
    }
    get value() {
        return this._data;
    }
    set value(data) {
        this._data = data;
    }
}
let d = new DataHolder("Hello");
console.log(d.value);
d.value = "World";
console.log(d.value);
let d2 = new DataHolder(123);
console.log(d2.value);
d2.value = 500;
console.log(d2.value);
//Verify that once created, an instance can only be used with the type it was created from.
//Man kan ikke assigne value i d til et number. "Argument of type 'number' is not assignable to parameter of type 'string'."
//d.setValue(10);
//# sourceMappingURL=star.js.map