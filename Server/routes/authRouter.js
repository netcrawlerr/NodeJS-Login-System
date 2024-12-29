import { Router } from "express";
import {
  login,
  register,
  logout,
  verifyEmail,
} from "../controllers/authController.js";

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.post("/verify-email", verifyEmail);

export default router;
