simpleFunction();
console.log("We see the var 'a' exists, but has no value :", a);

function simpleFunction() {
  console.log("this function has been hoisted");
}

var a = 100;

//design rule: Only use var if you need to hoist, otherwise use const og let.
