const jwt = require("jsonwebtoken");

module.exports = function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401).json("access denied");

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    try {
      if (err) {
        return res.sendStatus(403);
      } else {
        req.userId = user;
        next();
      }
    } catch (e) {
      // console.log(e);
    }
  });
};
