import { Router } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';
import swaggerSpecification from '../../config/swagger.js';
import searchRouter from './search.js';
import usersRouter from './users.js';

const router = Router();

router.use('/docs', serve, setup(swaggerSpecification));

router.use('/', searchRouter);
router.use('/', usersRouter);

export default router;
