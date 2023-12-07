import express from 'express';
const usersRouter = express.Router();

import allUsers from '../controllers/user/get.js';
import userDelete from '../controllers/user/delete.js';
import { signOutUser } from '../controllers/user/authenticationGoogle.js';

usersRouter.post('/logout', signOutUser);
usersRouter.get('/users', allUsers);
usersRouter.delete('/users/:id', userDelete);

export default usersRouter;