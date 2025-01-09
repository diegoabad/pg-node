const jwt = require('jsonwebtoken');
const middlewareJWT = (req, res, next) => {
  //TODO: Implementar middleware con jwt para verificar token
  //jwt.verify
  next();
};

module.exports = middlewareJWT;
