const errorHandler = (err, req, res, next) => {
    //console.error(err.stack);
    res.status(500).json({
        path: req.path,
        message: err.message,
        stack: err.stack
    });
};

module.exports = errorHandler;