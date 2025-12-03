import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET = process.env.JWT_SECRET;

console.log("=== JWT Module ===");
console.log("JWT_SECRET:", SECRET);

if (!SECRET) {
  console.error("CRITICAL: JWT_SECRET is not defined!");
  throw new Error("JWT_SECRET must be defined in .env file");
}

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
