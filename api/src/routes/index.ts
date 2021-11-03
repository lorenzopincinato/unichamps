import { Router } from 'express';

import authRoute from './auth.route';
import userRoute from './user.route';

const router = Router();

router.use('/users', userRoute);
router.use('/auth', authRoute)

export default router;