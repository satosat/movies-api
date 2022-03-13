import express from 'express';
import movieRouter from './movies'

const router = express.Router();

router.use(movieRouter)

export default router;