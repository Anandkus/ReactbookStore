import express from 'express';
const router = express.Router();
import { contactSave } from '../controller/contact_controller.js'

router.post("/", contactSave);

export default router;