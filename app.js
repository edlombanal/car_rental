require('dotenv').config();

const express = require('express');
const app = express();

//load routers in the backend
const carRouter = require('./controllers/carController');
const reservationRouter = require('./controllers/reservationController');
const userRouter = require('./controllers/userController');

//load middlewares in the backend
const errorHandler = require('./middlewares/errorHandler');

//welcome message
app.get('/', async (req, res)=>{
    res.send("Welcome to the Car Rental backend's API.")
});

//set up routers in app
app.use('/api/v1', carRouter);
app.use('/api/v1', reservationRouter);
app.use('/api/v1', userRouter);

//set up middlewares in app
app.use(errorHandler);