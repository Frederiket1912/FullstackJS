var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

function myFilter(arr, cb) {
  let result = [];
  arr.forEach((element) => {
    if (cb(element)) result.push(element);
  });
  return result;
}

console.log(myFilter(ages, checkAdult));
console.log(ages.filter(checkAdult));
