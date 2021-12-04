import { Router } from 'express';

import authRoute from './auth.route';
import userRoute from './user.route';
import teamRoute from './team.route';

const router = Router();

router.use('/users', userRoute);
router.use('/teams', teamRoute);
router.use('/auth', authRoute)

export default router;