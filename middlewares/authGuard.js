const jwt = require("jsonwebtoken");

const authGuard = (req, res, next) => {
  //look for auth header
  const { authorization } = req.header;
  if (!authorization) {
    res.status(401).send("You don't have access to this resource.");
  } else {
    try {
      //authorization bearer xxxxxxxxxxxxx
      const token = authorization.split(" ")[1];
      req.jwt_payload = jwt.try(token, process.env.JWT_SECRET_KEY);
      next();
    } catch (error) {
      console.log(error);
      res.status(401).send("You don't have access to this resource.");
    }
  }
};

module.exports = authGuard;
