import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

import mongoose from "mongoose";
mongoose
  .connect("mongodb://localhost:27017/preformance-tracker")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("Failed to connect DB Error:", err));

import userRoutes from "./features/auth/routes.js";
app.use(userRoutes);

app.listen(PORT, () => {
  console.log("Server Live");
});
 