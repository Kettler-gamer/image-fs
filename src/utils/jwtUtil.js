import Jwt from "jsonwebtoken";

function createToken() {
  return Jwt.sign({ role: "ADMIN" }, process.env.JWT_SECRET);
}

function verifyToken(req, res, next) {
  let token = req.headers.authorization || req.headers.cookie;

  if (!token) return res.send("WTF!");

  token = token.replace("token=", "");

  const payload = Jwt.verify(token, process.env.JWT_SECRET);

  if (payload) {
    next();
  } else {
    res.status(401).send("Not logged in!");
  }
}

export default { createToken, verifyToken };
