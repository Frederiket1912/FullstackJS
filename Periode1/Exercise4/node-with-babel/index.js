import fetch from "node-fetch";
import "core-js/proposals/promise-any";

async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync() {
  try {
    const p1 = await fetch("https://swapi.dev/api/people/1").then((res) =>
      res.json()
    );
    const p2 = await fetch("https://swapi.dev/api/films/1/").then((res) =>
      res.json()
    );
    const p3 = await fetch("https://swapi.dev/api/planets/1/").then((res) =>
      res.json()
    );
    const p4 = await fetch("https://swapi.dev/api/people/6/").then((res) =>
      res.json()
    );
    //let result = await Promise.all([p1, p2, p3, p4]);
    let result = await Promise.any([p1, p2, p3, p4]);
    return result;
  } catch (e) {
    console.log("Error");
    console.log(e.message);
  }
}

async function print() {
  let data = await getPlanetforFirstSpeciesInFirstMovieForPersonAsync();
  console.log(data);
}

print();
