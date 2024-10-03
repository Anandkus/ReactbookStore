import express from 'express';
const router = express.Router();
import { signup } from '../controller/user_controller.js';
import { login } from '../controller/user_controller.js';
router.post("/res", signup);
router.post("/login", login)

export default router;
