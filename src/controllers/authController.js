import jwtUtil from "../utils/jwtUtil.js";

function login(req, res) {
  res.send(jwtUtil.createToken());
}

export default { login };
