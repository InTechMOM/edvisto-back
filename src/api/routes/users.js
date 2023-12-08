import express from 'express';
const usersRouter = express.Router();

import allUsers from '../controllers/user/get.js';
import userDelete from '../controllers/user/delete.js';
import { signOutUser } from '../controllers/user/authenticationGoogle.js';
import registerMongoDB from '../controllers/user/post.js';
import login from '../controllers/user/login.js';
import { registerGoogle } from '../controllers/user/authenticationGoogle.js';
import resetPassword from '../controllers/user/patch.js';

usersRouter.post('/logout', signOutUser);
usersRouter.get('/users', allUsers);
usersRouter.delete('/users/:id', userDelete);

usersRouter.post('/register', registerMongoDB);
usersRouter.post('/login', login);
usersRouter.post('/registergoogle', registerGoogle);
usersRouter.patch('/resetPassword', resetPassword);

export default usersRouter;
