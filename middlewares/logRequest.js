const logRequest = (req, res, next) => {
    console.log('Incoming request: '+ req.path);
    console.log('Parameters: ');
    console.log(req.params);
    console.log('Query: ');
    console.log(req.query);
    console.log('Body: ');
    console.log(req.body);
    next();
};

module.exports = logRequest;