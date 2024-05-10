const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
  const token = req.header("token");
  if (!token) return res.status(401).json({ message: "Auth Error" });

  try {
    const decoded = jwt.verify(token, "randomString");
    req.user = decoded.user;
    next();
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Invalid Token" });
  }
};

// // require('dotenv')
// const jwt = require('jsonwebtoken');

// module.exports = function(req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Bearer TOKEN'
//     if (!token) {
//       throw new Error('Authentication failed!');
//     }
//     const verified = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
//     req.user = verified;  
//     next();
//   } catch (err) {
//     res.status(400).send('Invalid token !');
//   }
// };