// const jwt = require("jsonwebtoken");
// const config = require("./config");

// let checkToken = (req, res, next) => {
//   let token = req.headers["authorization"];
//   console.log(token);
//   token = token.slice(7, token.length);
//   if (token) {
//     jwt.verify(token, config.key, (err, decoded) => {
//       if (err) {
//         return res.json({
//           status: false,
//           msg: "token is invalid",
//         });
//       } else {
//         req.decoded = decoded;
//         next();
//       }
//     });
//   } else {
//     return res.json({
//       status: false,
//       msg: "Token is not provided",
//     });
//   }
// };

// module.exports = {
//   checkToken: checkToken,
// };


// const config = require("./config");

// let checkToken = (req, res, next) => {
//   let token = req.headers["authorization"];
//   console.log(token);
//   if (!token || !token.startsWith("Bearer ")) {
//     return res.status(401).json({
//       status: false,
//       msg: "Token is not provided or invalid",
//     });
//   }
  
//   token = token.slice(7); // Remove 'Bearer ' from the token string
//   try {
//     const decoded = jwtDecode(token);
//     req.decoded = decoded;
//     next();
//   } catch (error) {
//     return res.status(401).json({
//       status: false,
//       msg: "Token is invalid",
//     });
//   }
// };

// module.exports = {
//   checkToken: checkToken,
// };



const config = require("./config");

let checkToken = (req, res, next) => {
  let token = req.headers["authorization"];
  console.log(token);
  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).json({
      status: false,
      msg: "Token is not provided or invalid",
    });
  }
  
  token = token.slice(7); // Remove 'Bearer ' from the token string
  try {
    const decoded = jwtDecode(token);
    req.decoded = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      status: false,
      msg: "Token is invalid",
    });
  }
};

module.exports = {
  checkToken: checkToken,
};
