import { Router } from 'express';
import { serve, setup } from 'swagger-ui-express';
import swaggerSpecification from '../../config/swagger.js';

import usersRouter from './users.js';

const router = Router();

router.use('/docs', serve, setup(swaggerSpecification));

router.use('/', usersRouter);

export default router;
