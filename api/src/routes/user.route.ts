import { Router } from 'express';

import { createUser } from '../service/user.service';

const router = Router();

router.post('/', async (req, res) => {
    try {
        const user = await createUser(req.body)
    
        res.json(user);
    }
    catch (error) {
        res.status(500).send(error);
    }
});

export default router;
