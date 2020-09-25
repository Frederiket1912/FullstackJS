const makePerson = require("./myclosures");

const count = require("./closures2")();
const count2 = require("./closures2")();
const count3 = require("./closures2")();
const makePerson1 = require("./myclosures")();
const person = require("./my-person-class");
let Person = person.Person;

person1 = new Person("Hans", 25);
console.log(person1.getInfo());

// makePerson1.setName("Per");
// makePerson1.setAge(10);
// console.log(makePerson1.getInfo());

// count.inc();
// count.inc();
// console.log(count.value());
// console.log(count2.value());
// console.log(count3.value());
