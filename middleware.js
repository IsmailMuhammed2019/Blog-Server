const config = require("./config");

// Function to verify JWT token
function verifyToken(token) {
  const parts = token.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return null; // Invalid token format
  }
  const jwtToken = parts[1];
  try {
    const decoded = JSON.parse(Buffer.from(jwtToken.split('.')[1], 'base64').toString());
    // Perform additional verification as needed
    if (decoded && decoded.aud === config.audience && decoded.iss === config.issuer) {
      return decoded;
    }
    return null; // Invalid token
  } catch (error) {
    return null; // Error decoding token
  }
}

// Middleware function to check JWT token
function checkToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    return res.json({
      status: false,
      msg: "Token is not provided",
    });
  }
  const decoded = verifyToken(token);
  if (!decoded) {
    return res.json({
      status: false,
      msg: "Token is invalid",
    });
  }
  req.decoded = decoded;
  next();
}

module.exports = {
  checkToken: checkToken,
};
