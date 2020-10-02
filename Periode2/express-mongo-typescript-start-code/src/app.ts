require("dotenv").config();
const UserFacade = require("./facades/userFacade");
import express from "express";
import path from "path";
const app = express();
app.use(express.json());

app.get("/api/dummy", (req, res) => {
  res.json({ msg: "Hello" });
});

app.get("/api/users/:userName", (req, res) => {
  res.send(UserFacade.getUser(req.params.userName));
});

app.get("/api/users", (req, res) => {
  res.send(UserFacade.getAllUsers());
});

app.post("/api/users", (req, res) => {
  res.send(UserFacade.addUser(req.body));
});

app.delete("/api/users/:userName", (req, res) => {
  console.log(req.params.userName);
  res.send(UserFacade.deleteUser(req.params.userName));
});

const PORT = process.env.PORT || 3333;
const server = app.listen(PORT);
console.log(`Server started, listening on port: ${PORT}`);
module.exports.server = server;
