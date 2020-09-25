var numbers = [4, 9, 16, 25];

function doubleIt(number) {
  return number * 2;
}

function myMap(arr, cb) {
  let result = [];
  arr.forEach((element) => {
    result.push(cb(element));
  });
  return result;
}

console.log(myMap(numbers, doubleIt));
console.log(numbers.map(doubleIt));
