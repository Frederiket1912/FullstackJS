const cRS = require("crypto-random-string");
let randomStrings = [];
setTimeout(() => {
  randomStrings.push(cRS({ length: 48 }));
  setTimeout(() => {
    randomStrings.push(cRS({ length: 40 }));
    setTimeout(() => {
      console.log(randomStrings);
    }, 1000);
  }, 1000);
}, 1000);
