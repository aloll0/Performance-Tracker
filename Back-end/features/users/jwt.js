import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

export function createToken({ userID, role, expiresIn = "10d" }) {
  const payload = {
    sub: userID,
    role,
    iat: Math.floor(Date.now() / 1000),
  };

  return jwt.sign(payload, SECRET, { algorithm: "HS256", expiresIn });
}

export function verifyToken(token) {
  return jwt.verify(token, SECRET, { algorithms: ["HS256"] });
}
 