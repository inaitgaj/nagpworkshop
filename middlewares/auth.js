const expressJwt = require('express-jwt');

console.log('auth.js',process.env.JWT_SECRET);
function isAuthenticated() {
  return expressJwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256'] });
}

module.exports = {
  isAuthenticated,
};
