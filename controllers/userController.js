const express = require("express");
const router = express.Router();

const userMethods = require("../utils/userMethods");
const User = require("../models/user");
const authGuard = require("../middlewares/authGuard");

//router to create users
router.post("/users", async (req, res, next) => {
  try {
    const email = await userMethods.registerUser(req.body);
    res.status(200).json({
      message: "User registered successfully.",
      data: email,
    });
  } catch (error) {
    next(error);
  }
});

//router to login
router.post("/users/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const accessToken = await userMethods.loginUser(username, password);
    if (accessToken) {
      res.status(200).json(accessToken);
    } else {
      res.status(400).send("Wrong username or password.");
    }
  } catch (error) {
    next(error);
  }
});

//router to get user list
router.get("/users", authGuard, async (req, res, next) => {
  try {
    if (req.jwt_payload.role == "admin") {
      const userList = User.find();
      res.json(userList);
    } else {
      res.status(401).send("You don't have access to execute this option.");
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//router to get user by id
router.get("/users/:id", async (req, res, next) => {
  try {
    throw new Error("Not implemented");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
