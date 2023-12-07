import express from 'express';
const mainRouter = express.Router();

import registerMongoDB from '../controllers/user/post.js';
import login from '../controllers/user/login.js';
import { registerGoogle } from '../controllers/user/authenticationGoogle.js';
import resetPassword from '../controllers/user/patch.js';

mainRouter.post('/register', registerMongoDB);
mainRouter.post('/login', login);
mainRouter.post('/registergoogle', registerGoogle);
mainRouter.patch('/resetPassword', resetPassword);

export default mainRouter;