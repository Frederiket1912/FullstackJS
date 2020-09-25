class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get pName() {
    return this.name;
  }
  set pName(name) {
    this.name = name;
  }
  get pAge() {
    return this.age;
  }
  set pAge(age) {
    this.age = age;
  }
  getInfo() {
    return this.name + ", " + this.age;
  }
}

// person = new Person("Hans", 25);
// console.log(person.getInfo());

module.exports = { Person: Person };
