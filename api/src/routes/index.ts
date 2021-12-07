import { Router } from 'express';

import authRoute from './auth.route';
import userRoute from './user.route';
import teamRoute from './team.route';
import tournamentRoute from './tournament.route';
import matchesRoute from './matches.route';

const router = Router();

router.use('/users', userRoute);
router.use('/teams', teamRoute);
router.use('/auth', authRoute);
router.use('/tournaments', tournamentRoute);
router.use('/matches', matchesRoute);

export default router;