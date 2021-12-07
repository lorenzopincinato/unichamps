import { Router } from 'express';

import { createTeam, getTeam, getTeams } from '../service/team.service';
import { CustomRequest } from '../types/CustomRequest';

import { authorizationMiddleware } from '../utils/authorizationMiddleware';

const router = Router();

router.post('/', authorizationMiddleware, async (req: CustomRequest, res) => {
    try {
        const team = await createTeam(req.user.id, req.body);
    
        res.json(team);
    }
    catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});

router.get('/', authorizationMiddleware, async (req: CustomRequest, res) => {
    try {
        const teams = await getTeams();

        res.json(teams);
    }
    catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:id', authorizationMiddleware, async (req: CustomRequest, res) => {
    try {
        const team = await getTeam(req.route.id);

        res.json(team);
    }
    catch (error) {
        res.status(500).send(error);
    }
});

export default router;
