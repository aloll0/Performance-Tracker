import { User } from "./schema.js";
import argon2 from "argon2";
import { createToken } from "./jwt.js";

//User
export const registerUser = async (req, res) => {
  const { name, email, password, phone, role = "user" } = req.body;

  try {
    const hashedPassword = await argon2.hash(password);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      role,
    });
    await user.save();

    res.status(200).json({ msg: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export const logUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ msg: "Email and password required" });

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ msg: "Invalid email or password" });

    const isValid = await argon2.verify(user.password, password);
    if (!isValid)
      return res.status(401).json({ msg: "Invalid email or password" });

    const token = createToken({ userID: email, role: user.role });
    res.status(200).json({ token, msg: "Login successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to login" });
  }
};

//Admin
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users) {
      res.status(200).json({
        msg: "Users found",
        data: users,
      });
      console.log("User found and sent");
    }
  } catch (err) {
    res.status(500).json({ msg: "Error fetching users", error: err.message });
    console.log("Users not sent");
  }
};
