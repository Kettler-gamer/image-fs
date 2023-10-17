import express from "express";
import authController from "../controllers/authController.js";
import imageController from "../controllers/imageController.js";
import jwtUtil from "../utils/jwtUtil.js";

const router = express.Router();

router.post("/login", authController.login);

router.post("/image", imageController.postImage);

router.use("/images", jwtUtil.verifyToken, express.static("images"));

export default router;
