require('dotenv').config();

const express = require('express');
const app = express();

//set up routers
const carController = require('./controllers/carController');
const reservationController = require('./controllers/reservationController');
const userController = require('./controllers/userController');