import { Router } from 'express';
import { authUser } from '../service/auth.service';

const router = Router();

router.post('/', async (req, res) => {
    try {
        const token = await authUser(req.body.email, req.body.password);

        res.send({ token });
    }
    catch (error) {
        res.status(500).send(error);
    }
});

export default router;