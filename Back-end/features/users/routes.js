import express from "express";
const router = express.Router();
import { registerUser, logUser } from "./handlers.js"; // 🔥 شيل getUsers

//User
router.post("/user/register", registerUser);
router.post("/user/login", logUser);

export default router;
