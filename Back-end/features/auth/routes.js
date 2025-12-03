import express from "express";
const router = express.Router();
import { register, login, userData } from "./handlers.js";

router.post("/user/register", register);
router.post("/user/login", login);
router.get("/user/data", userData);

export default router;
 