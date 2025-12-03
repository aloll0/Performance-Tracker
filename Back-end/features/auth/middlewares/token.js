import jwt from "jsonwebtoken";

export const createToken = (userId) => {
  const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;

  const payload = {
    userId: userId,
    lastLogin: Date.now(),
  };
  const token = jwt.sign(payload, JWT_PRIVATE_KEY, { expiresIn: "10d" });
  return token;
};

export const verifyToken = (token) => {
  const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;
  const decoded = jwt.verify(token, JWT_PRIVATE_KEY);
  return decoded;
};
