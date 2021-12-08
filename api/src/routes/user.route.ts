import { Router } from 'express';

import { createUser, getUser, getUsers } from '../service/user.service';
import { CustomRequest } from '../types/CustomRequest';

import { authorizationMiddleware } from '../utils/authorizationMiddleware';

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

router.get('/', authorizationMiddleware, async (req: CustomRequest, res) => {
    try {
        const user = await getUser(req.user.id);

        res.json(user);
    }
    catch (error) {
        res.status(500).send(error);
    }
});

router.get('/all', authorizationMiddleware, async (req: CustomRequest, res) => {
    try {
        const users = await getUsers();

        res.json(users);
    }
    catch (error) {
        res.status(500).send(error);
    }
});

export default router;
