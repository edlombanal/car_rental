const express = require('express');
const router = express.Router();

//router to create users
router.post('/users', async(req, res, next)=>{
    try {
        //res.status(200).send("Not implemented.");
        throw new Error("Not implemented");
    } catch (error) {
      next(error);  
    };
});

//router to login
router.post('/users/login', async(req, res, next)=>{
    try {
        //res.status(200).send("Not implemented.");
        throw new Error("Not implemented");
    } catch (error) {
      next(error);  
    };
});

//router to get user list
router.get('/users', async(req, res, next)=>{
    try {
        //res.status(200).send("Not implemented.");
        throw new Error("Not implemented");
    } catch (error) {
      next(error);  
    };
});

//router to get user by id
router.get('/users/:id', async(req, res, next)=>{
    try {
        //res.status(200).send("Not implemented.");
        throw new Error("Not implemented");
    } catch (error) {
      next(error);  
    };
});

module.exports = router;