import express from 'express';
const router = express.Router();
import { getBook } from '../controller/book_controller.js';

router.get("/", getBook);

export default router;
