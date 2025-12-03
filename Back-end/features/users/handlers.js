import { User } from "./schema.js";
import argon2 from "argon2";
import { createToken } from "./jwt.js";

// Register User
export const registerUser = async (req, res) => {
  const { name, email, password, phone, role = "user" } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "Email already registered" });
    }

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

    if (err.code === 11000) {
      return res.status(400).json({ msg: "Email already registered" });
    }

    res.status(500).json({ error: err.message });
  }
};

// Login User
export const logUser = async (req, res) => {
  const { email, password } = req.body;

  console.log("=== Login Attempt ===");
  console.log("Email:", email);

  if (!email || !password) {
    return res.status(400).json({ msg: "Email and password required" });
  }

  try {
    const user = await User.findOne({ email });

    console.log("User found:", user ? "Yes" : "No");

    if (!user) {
      return res.status(401).json({ msg: "Invalid email or password" });
    }

    console.log("Verifying password...");

    const isValid = await argon2.verify(user.password, password);

    console.log("Password valid:", isValid);

    if (!isValid) {
      return res.status(401).json({ msg: "Invalid email or password" });
    }

    const token = createToken({
      userID: user._id.toString(),
      role: user.role,
    });

    console.log("Login successful!");

    res.status(200).json({ token, msg: "Login successful" });
  } catch (err) {
    console.error("=== Login Error ===");
    console.error(err);
    res.status(500).json({ error: "Failed to login", details: err.message });
  }
};

// 🔥 Get All Users (للـ Admin)
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // بدون passwords
    res.status(200).json({
      msg: "Users found",
      data: users,
    });
  } catch (err) {
    res.status(500).json({ msg: "Error fetching users", error: err.message });
  }
};
