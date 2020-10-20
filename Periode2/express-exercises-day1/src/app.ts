require('dotenv').config();
const cors = require('cors')
import express from "express";
import path from "path";
//import {simpleLogger} from "./middlewares/simpleLogger"
import {logger} from "./middlewares/logger"; 

const app = express();


app.use(express.static(path.join(process.cwd(),"public")))
app.use(express.json())
let userAPIRouter = require('./routes/userApi');

app.use(cors());

app.use(logger);

app.use("/api/users",userAPIRouter);

app.get("/api/dummy", (req, res) => {
  res.json({ msg: "Hello" })
})


const PORT = process.env.PORT || 3333;
const server = app.listen(PORT)
console.log(`Server started, listening on port: ${PORT}`)
module.exports.server = server;


