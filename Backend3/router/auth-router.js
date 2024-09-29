
import express from "express";
import { welcome, register } from '../controller/auth-controller.js'; // Adjust the path as necessary

const router = express.Router();

router.route("/").get(welcome);

router.route("/register").post(register);
router.route("/register").get(register);

export default router;

