const http = require("http");
const getSecureRandomParallel = require("./e1b_tester");

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }

  if (req.url === "/api/securerandoms") {
    const data = await getSecureRandomParallel();
    res.write(JSON.stringify(data));
    res.end();
  }
});

server.listen(3000);
console.log("Listening on port 3000...");
