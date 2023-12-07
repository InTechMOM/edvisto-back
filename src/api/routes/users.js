import express from 'express';
const usersRouter = express.Router();

import registerMongoDB from '../controllers/user/post.js';
import allUsers from '../controllers/user/get.js';
import userDelete from '../controllers/user/delete.js';
import login from '../controllers/user/login.js';
import resetPassword from '../controllers/user/patch.js';
import { registerGoogle } from '../controllers/user/authenticationGoogle.js';
import { signOutUser } from '../controllers/user/authenticationGoogle.js';

usersRouter.post('/register', registerMongoDB);
usersRouter.post('/login', login);
usersRouter.post('/registergoogle', registerGoogle);
usersRouter.post('/logout', signOutUser);

usersRouter.get('/users', allUsers);

usersRouter.delete('/users/:id', userDelete);

usersRouter.patch('/resetPassword', resetPassword);

export default usersRouter;
