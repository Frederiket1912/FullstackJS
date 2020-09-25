const DOS_Detector = require("./dosDetector");

let dosDetector = new DOS_Detector(2000);

dosDetector.on("DOS_Attack", (arg) => {
  console.log("Possible DOS Attack", arg);
});

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    dosDetector.addUrl("http://example.com");
  }, 1000);
}
