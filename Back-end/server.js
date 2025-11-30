import dotenv from 'dotenv';
dotenv.config();

import express from "express";
const app = express();
const PORT = 3000;
app.use(express.json());


import mongoose from "mongoose";
mongoose
  .connect("mongodb://localhost:27017/per-track")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB not connected", err));

import userRoutes from "./features/users/routes.js";
app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log("Server live");
});
 