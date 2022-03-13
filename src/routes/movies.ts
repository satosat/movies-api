import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/api/movies', (req: Request, res: Response) => {
    res.send("200")
})

router.get('/api/movies/:id', (req: Request, res: Response) => {
    const id = req.params.id
    res.send(`${id}`);
})

export default router;