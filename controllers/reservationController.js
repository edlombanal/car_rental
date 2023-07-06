const express = require("express");
const router = express.Router();

//router for reservations by user
router.get('/reservations/user/:userid', async(req, res, next)=>{
    try {
        //res.status(200).send("Not implemented.");
        throw new Error("Not implemented");
    } catch (error) {
      next(error);  
    };
});

//router for reservations by id
router.get('/reservations/:id', async(req, res, next)=>{
    try {
        //res.status(200).send("Not implemented.");
        throw new Error("Not implemented");
    } catch (error) {
      next(error);  
    };
});

//router to create reservations, registered users
router.post('/reservations', async(req, res, next)=>{
    try {
        //res.status(200).send("Not implemented.");
        throw new Error("Not implemented");
    } catch (error) {
      next(error);  
    };
});

//router to delete reservations, registered users
router.delete('/reservations', async(req, res, next)=>{
    try {
        //res.status(200).send("Not implemented.");
        throw new Error("Not implemented");
    } catch (error) {
      next(error);  
    };
});