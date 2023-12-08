import { Router } from 'express';
import { serve, setup } from 'swagger-ui-express';
import swaggerSpecification from '../../config/swagger.js';
import searchRouter from './search.js';
import usersRouter from './users.js';
import assignmentRouter from './assignment.js';
import deliveryRouter from './feedback.js';

const router = Router();

router.use('/docs', serve, setup(swaggerSpecification));

router.use('/', searchRouter);
router.use('/', usersRouter);
router.use('/', assignmentRouter);
router.use('/', deliveryRouter);

export default router;
