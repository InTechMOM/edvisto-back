import { Router } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';
import swaggerSpecification from '../../config/swagger.js';
import assignmentRouter from './assignment.js';

const router = Router();

router.use('/docs', serve);
router.get('/docs', setup(swaggerJsdoc(swaggerSpecification)));

router.use('/', assignmentRouter);

export default router;
