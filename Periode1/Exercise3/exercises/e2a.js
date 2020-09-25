const fetch = require("node-fetch");

// Now, Implement a method getPlanetforFirstSpeciesInFirstMovieForPerson(id){} which for id = 1 (Luke Skywalker) should log this info:
// Name: Luke Skywalker
// First film: The Empire Strikes Back
// First species: Yoda's species
// Homeworld for Specie: unknown

function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {
  let name = "";
  let firstFilm = "";
  let firstSpecies = "";
  let homeWorldForFirstSpecies = "";
  fetch("https://swapi.dev/api/people/" + id)
    .then((res) => res.json())
    .then((data) => {
      name = data.name;
      fetch(data.films[0])
        .then((res) => res.json())
        .then((data2) => {
          firstFilm = data2.title;
          fetch(data2.species[0])
            .then((res) => res.json())
            .then((data3) => {
              firstSpecies = data3.name;
              fetch(data3.homeworld)
                .then((res) => res.json())
                .then((data4) => {
                  homeWorldForFirstSpecies = data4.name;
                  console.log("Name: " + name),
                    console.log("First Film: " + firstFilm);
                  console.log("First Species: " + firstSpecies);
                  console.log(
                    "Homeworld for Specie: " + homeWorldForFirstSpecies
                  );
                });
            });
        });
    });
}

async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {
  try {
    const p1 = await fetch("https://swapi.dev/api/people/" + id).then((res) =>
      res.json()
    );
    let name = p1.name;
    const p2 = await fetch(p1.films[0]).then((res) => res.json());
    let firstFilm = p2.title;
    const p3 = await fetch(p2.species[0]).then((res) => res.json());
    let firstSpecies = p3.name;
    const p4 = await fetch(p3.homeworld).then((res) => res.json());
    let homeWorldForFirstSpecies = p4.name;
    console.log("Name: " + name);
    console.log("First Film: " + firstFilm);
    console.log("First Species: " + firstSpecies);
    console.log("Homeworld for Specie: " + homeWorldForFirstSpecies);
  } catch (e) {
    console.log("Error");
    console.log(e.message);
  }
}

//getPlanetforFirstSpeciesInFirstMovieForPerson(1);
getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1);
