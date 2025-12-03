import User from "./schema.js";
import { createToken, verifyToken } from "./middlewares/token.js";
import { verifyPass } from "./middlewares/pass_hash.js";

export const register = async (req, res) => {
  const data = req.body;
  const userEmail = data.email;
  if (!data.name || !data.email || !data.password || !data.phone || !data.age) {
    return res.status(400).json({ msg: "All fields are required" });
  }
 
  try {
    const existValidation = await User.find({ email: userEmail });
    if (existValidation.length > 0) {
      res.status(200).json({ msg: "User already exist" });
    } else {
      const user = new User(data);
      await user.save();
      console.log("User created successfully");
      res.status(200).json({ msg: "User created successfully" });
    }
  } catch (err) {
    res
      .status(400)
      .json({ msg: "Failed to create a new user", error: err.message });
    console.log("Failed to create a new user", err);
  }
};

export const login = async (req, res) => {
  const data = req.body;
  const userPassword = data.password;

  try {
    const user = await User.findOne({ email: data.email });
    if (!user) {
      return res.status(401).json({ msg: "User is not registered" });
    }

    const passwordValidation = await verifyPass(user.password, userPassword);
    if (!passwordValidation) {
      return res.status(401).json({ msg: "Incorrect password" });
    }

    const token = await createToken(user._id);
    res.status(200).json({ msg: "Login successful", token });
  } catch (err) {
    console.log("Error logging user", err);
    res.status(500).json({ msg: "Error logging user" });
  }
};


export const userData = async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ msg: "No token provided" });

  try {
    const token = authHeader.split(" ")[1];
    const tokenDecoded = verifyToken(token);
    const userId = tokenDecoded.userId;
    const user = await User.findById(userId);
    res.status(200).json({ msg: "User verifed", userData: user });
  } catch (err) {
    res.status(401).json({ msg: "Error verifying user" });
    console.log("Error verifying user", err);
  }
};
