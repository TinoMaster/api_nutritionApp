const jwt = require("jsonwebtoken");
const config = require("../config/general.config");

const verifyToken = (token) => {
  const decoded = jwt.verify(token, config.jwt_secret);
  return decoded;
};

module.exports = verifyToken;
