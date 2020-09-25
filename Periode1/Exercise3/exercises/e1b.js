module.exports = function makeSecureRandom(size) {
  return new Promise((resolve, reject) => {
    let error = false;
    if (error) {
      reject(new Error("UPPPs"));
    }
    require("crypto").randomBytes(size, function (err, buffer) {
      resolve(buffer.toString("hex"));
    });
  });
};

// const p1 = makeSecureRandom(48);
// const p2 = makeSecureRandom(40);
// const p3 = makeSecureRandom(32);
// const p4 = makeSecureRandom(24);
// const p5 = makeSecureRandom(16);
// const p6 = makeSecureRandom(8);
// const promises = [p1, p2, p3, p4, p5, p6];
// let randoms = [];
// let result = { title: "6 Secure Randoms" };
// Promise.all(promises)
//   .then(
//     (d) => (
//       (randoms = d.map((val) => ({ length: val.length, random: val }))),
//       (result["randoms"] = randoms),
//       console.log(result)
//     )
//   )
//   .catch((e) => console.log("Err"));
