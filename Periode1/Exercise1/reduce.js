var all = ["Lars", "Peter", "Jan", "Bo"];

// console.log(all.join(","));
// console.log(all.join(" "));
// console.log(all.join("#"));

var numbers = [2, 3, 67, 33];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function myReducer(arr, cb) {
  result = 0;
  arr.forEach((element) => {
    result = cb(result, element);
  });
  return result;
}

// console.log(myReducer(numbers, reducer));
// console.log(numbers.reduce(reducer));

let members = [
  { name: "Peter", age: 18 },
  { name: "Jan", age: 35 },
  { name: "Janne", age: 25 },
  { name: "Martin", age: 22 },
];

var memberReducer = function (accumulator, member, index, arr) {
  let average = accumulator + member.age;
  average = index === arr.length - 1 ? average / arr.length : average;
  return average;
};

//console.log(members.reduce(memberReducer, 0));

var votes = [
  "Clinton",
  "Trump",
  "Clinton",
  "Clinton",
  "Trump",
  "Trump",
  "Trump",
  "None",
];

var voteReducer = function (accumulator, vote, index, arr) {
  if (!accumulator[vote]) accumulator[vote] = 1;
  else {
    accumulator[vote] += 1;
  }
  return accumulator;
};

console.log(votes.reduce(voteReducer, {}));
