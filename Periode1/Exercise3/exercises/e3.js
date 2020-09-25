const URL = "https://swapi.dev/api/people/";
const fetch = require("node-fetch");
var now = require("performance-now");

async function fetchPerson(url) {
  const p1 = await fetch(url).then((res) => res.json());
  return p1;
}

function fetchPersonPromise(url) {
  const p1 = fetch(url).then((res) => res.json());
  return p1;
}

async function printNamesSeq() {
  var start = now();
  console.log("Before");
  const person1 = await fetchPerson(URL + "1");
  const person2 = await fetchPerson(URL + "2");
  console.log(person1.name);
  console.log(person2.name);
  console.log("After all");
  var end = now();
  console.log(start.toFixed(3)); // the number of milliseconds the current node process is running
  console.log("Sequential time: ", (start - end).toFixed(3)); // ~ 0.002 on my system
}

async function printNamesPar() {
  var start = now();
  console.log("Before");
  const promise1 = fetchPerson(URL + "1");
  const promise2 = fetchPerson(URL + "2");
  const persons = await Promise.all([promise1, promise2]);
  console.log(persons[0].name);
  console.log(persons[1].name);
  console.log("After all");
  var end = now();
  console.log(start.toFixed(3)); // the number of milliseconds the current node process is running
  console.log("Parallel time: ", (start - end).toFixed(3)); // ~ 0.002 on my system
}

printNamesSeq();
printNamesPar();
