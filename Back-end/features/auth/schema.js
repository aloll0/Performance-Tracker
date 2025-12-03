import mongoose from "mongoose";
import { hashPass } from "./middlewares/pass_hash.js";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  age: { type: Number, required: true },
});

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await hashPass(this.password);
  }
});

const User = mongoose.model("User", userSchema);

export default User;
