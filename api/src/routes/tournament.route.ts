import { Router } from 'express';

import { createTournament, getTournament, getTournaments } from '../service/tournament.service';
import { CustomRequest } from '../types/CustomRequest';

import { authorizationMiddleware } from '../utils/authorizationMiddleware';

const router = Router();

router.post('/', authorizationMiddleware, async (req: CustomRequest, res) => {
    try {
        const tournament = await createTournament(req.user.id, req.body);
    
        res.json(tournament);
    }
    catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});

router.get('/', authorizationMiddleware, async (req: CustomRequest, res) => {
    try {
        const tournaments = await getTournaments();

        res.json(tournaments);
    }
    catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:id', authorizationMiddleware, async (req: CustomRequest, res) => {
    try {
        const tournament = await getTournament(req.route.id);

        res.json(tournament);
    }
    catch (error) {
        res.status(500).send(error);
    }
});

export default router;
