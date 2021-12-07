import { Router } from 'express';

import { getMatch, updateMatch } from '../service/matches.service';

import { CustomRequest } from '../types/CustomRequest';

import { authorizationMiddleware } from '../utils/authorizationMiddleware';

const router = Router();

router.get('/:id', authorizationMiddleware, async (req: CustomRequest, res) => {
    try {
        const match = await getMatch(req.params.id);

        res.json(match);
    }
    catch (error) {
        res.status(500).send(error);
    }
});

router.put('/:id', authorizationMiddleware, async (req: CustomRequest, res) => {
    try {
        const match = await updateMatch(req.user.id, req.params.id, req.body);

        res.json(match);
    }
    catch (error) {
        res.status(500).send(error);
    }
});

export default router;
