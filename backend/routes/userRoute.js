import express from "express";
import { Login, Logout, Register,showconnection } from "../controllers/user.js";

const router = express.Router();
router.route("/").get(showconnection)
router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);

export default router;