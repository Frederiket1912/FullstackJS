Array.prototype.myFilter = function (cb) {
  let result = [];
  this.forEach((element) => {
    if (cb(element)) result.push(element);
  });
  return result;
};

Array.prototype.myMap = function (cb) {
  let result = [];
  this.forEach((element) => {
    result.push(cb(element));
  });
  return result;
};

var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

function doubleIt(number) {
  return number * 2;
}

console.log("my filter:", ages.myFilter(checkAdult));
console.log("my map:", ages.myMap(doubleIt));
