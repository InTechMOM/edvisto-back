import { Router } from 'express';
import { serve, setup } from 'swagger-ui-express';
import swaggerSpecification from '../../config/swagger.js';

import usersRouter from './users.js';

const router = Router();

router.use('/docs', serve, setup(swaggerSpecification));

/**
 * @openapi
 * /api/register:
 *  post:
 *   summary: The following route creates, stores and sends a verification email to the provided email
 *   requestBody:
 *    required: true
 *   responses:
 *    201:
 *     description: User Created
 *    400:
 *     description: Bad Request
 *    422:
 *     description: Validation error, wrong date format
 *    409:
 *     description: Email is assigned to another user, The password do not match
 *    500:
 *     description: Unknown error
 */
router.use('/', usersRouter);

export default router;
