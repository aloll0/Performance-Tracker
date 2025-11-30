import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  role: { type: String, default: "user" },
});
export const User = mongoose.model("User", UserSchema);

const RolesSchema = new mongoose.Schema({
  role: { type: String, required: true },
});
export const Role = mongoose.model("Role", RolesSchema);
