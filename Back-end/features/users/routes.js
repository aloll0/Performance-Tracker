import express from "express";
const router = express.Router();
import { registerUser, getUsers, logUser } from "./handlers.js";

//User
router.post("/user/register", registerUser);
router.post("/user/login", logUser);

//Admin
router.get("/user", getUsers);

export default router;
 