// In a method, this refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), and apply() can refer this to any object.

// this in a Method
// In an object method, this refers to the "owner" of the method.
// In the example on the top of this page, this refers to the person object.
// The person object is the owner of the fullName method.
let person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// this Alone
// When used alone, the owner is the Global object, so this refers to the Global object.
// In a browser window the Global object is [object Window]:

var x = this;

//   this in a Function (Default)
// In a JavaScript function, the owner of the function is the default binding for this.
// So, in a function, this refers to the Global object [object Window].

function myFunction() {
  return this;
}

//   With call(), an object can use a method belonging to another object.
//   This example calls the fullName method of person, using it on person1:

var person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
var person1 = {
  firstName: "John",
  lastName: "Doe",
};
var person2 = {
  firstName: "Mary",
  lastName: "Doe",
};
person.fullName.call(person1); // Will return "John Doe"

//   The JavaScript apply() Method
// The apply() method is similar to the call() method (previous chapter).
// In this example the fullName method of person is applied on person1:

var person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
var person1 = {
  firstName: "Mary",
  lastName: "Doe",
};
person.fullName.apply(person1); // Will return "Mary Doe"

//   The Difference Between call() and apply()
// The difference is:
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.
// The apply() method is very handy if you want to use an array instead of an argument list.

// Bind creates a new function that will force the this inside the function to be the parameter passed to bind().
// Here's an example that shows how to use bind to pass a member method around that has the correct this:

var myButton = {
  content: "OK",
  click() {
    console.log(this.content + " clicked");
  },
};

myButton.click();

var looseClick = myButton.click;
looseClick(); // not bound, 'this' is not myButton - it is the globalThis

var boundClick = myButton.click.bind(myButton);
boundClick(); // bound, 'this' is myButton
// Which prints out:

// OK clicked
// undefined clicked
// OK clicked
