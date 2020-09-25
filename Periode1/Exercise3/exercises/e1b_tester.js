const makeSecureRandom = require("./e1b");

const p1 = makeSecureRandom(48);
const p2 = makeSecureRandom(40);
const p3 = makeSecureRandom(32);
const p4 = makeSecureRandom(24);
const p5 = makeSecureRandom(16);
const p6 = makeSecureRandom(8);
const promises = [p1, p2, p3, p4, p5, p6];
let randoms = [];
let result = { title: "6 Secure Randoms" };

function getSecureRandomWithPromise() {
  Promise.all(promises)
    .then(
      (d) => (
        (randoms = d.map((val) => ({ length: val.length, random: val }))),
        (result["randoms"] = randoms),
        console.log(result)
      )
    )
    .catch((e) => console.log("Err"));
}

module.exports = async function getSecureRandomParallel() {
  const randomStrings = await Promise.all(promises);
  randoms = randomStrings.map((val) => ({ length: val.length, random: val }));
  result["randoms"] = randoms;
  return result;
};

//getSecureRandomWithPromise();
// async function print() {
//   const data = await getSecureRandomParallel();
//   console.log(data);
// }

// print();
