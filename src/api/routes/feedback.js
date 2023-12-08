import express from 'express';
const deliveryRouter = express.Router();

import delivery from '../controllers/feedback/post.js';
import allDeliveries from '../controllers/feedback/get.js';
import deliveryDelete from '../controllers/feedback/delete.js';
import studentFeedback from '../controllers/feedback/patch.js';
import getCount from '../controllers/feedback/getCount.js';

deliveryRouter.post('/delivery/:id', delivery);

deliveryRouter.get('/deliveries', allDeliveries);

deliveryRouter.get('/deliveries/:id', getCount);

deliveryRouter.patch('/delivery/:id/feedback', studentFeedback);

deliveryRouter.delete('/delivery/:id', deliveryDelete);

export default deliveryRouter;
