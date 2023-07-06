const express = require('express');
const router = express.Router();

//router for cars
router.get('/cars', async (req, res, next) => {
    try {
        //res.status(200).send("Not implemented.");
        throw new Error("Not implemented");
    } catch (error) {
      next(error);  
    };
});

//router for cars by car id
router.get('/cars/:id', async(req, res, next)=>{
    try {
        //res.status(200).send("Not implemented.");
        throw new Error("Not implemented");
    } catch (error) {
      next(error);  
    };
});

//router to add cars
router.post('/cars', async(req, res, next)=>{
    try {
        //res.status(200).send("Not implemented.");
        throw new Error("Not implemented");
    } catch (error) {
      next(error);  
    };
});

//router to deactivate cars
router.delete('/cars', async(req, res, next)=>{
    try {
        //res.status(200).send("Not implemented.");
        throw new Error("Not implemented");
    } catch (error) {
      next(error);  
    };
});

module.exports = router;