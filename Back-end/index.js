import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

import mongoose from "mongoose";
mongoose
  .connect("mongodb://localhost:27017/per-track")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB not connected", err));

import userRoutes from "./features/users/routes.js";
app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server live on port ${PORT}`);
  console.log(`JWT_SECRET loaded: ${process.env.JWT_SECRET ? "Yes" : "No"}`); // 🔥 Debug
});
