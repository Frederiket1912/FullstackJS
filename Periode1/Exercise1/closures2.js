const makeCounter = () => {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    inc: () => {
      changeBy(1);
    },
    dec: () => {
      changeBy(-1);
    },
    value: () => privateCounter,
  };
};
// let counter1 = makeCounter();
module.exports = makeCounter;
