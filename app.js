require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const fs = require("fs"); //already installed in node
const app = express();

//load routers in the backend
const carRouter = require("./controllers/carController");
const reservationRouter = require("./controllers/reservationController");
const userRouter = require("./controllers/userController");

//load middlewares in the backend
const errorHandler = require("./middlewares/errorHandler");

//set up middleware as preprocess for requests
app.use(express.json());

//set up morgan module
const accessLogStream = fs.createWriteStream("./logs/access.log", {
  flags: "a",
});
app.use(morgan("combined", { stream: accessLogStream })); //writes in file
app.use(morgan("tiny")); //writes in console

//welcome message
app.get("/", async (req, res) => {
  res.send("Welcome to the Car Rental backend's API.");
});

//set up routers in app
app.use("/api/v1", carRouter);
app.use("/api/v1", reservationRouter);
app.use("/api/v1", userRouter);

//set up middlewares in app
app.use(errorHandler);

module.exports = app;
