import express from 'express';
const assignmentRouter = express.Router();

import assignment from '../controllers/assignment/post.js';
import allProjects from '../controllers/assignment/get.js';
import assignmentDelete from '../controllers/assignment/delete.js';

assignmentRouter.post('/project', assignment);

assignmentRouter.get('/projects', allProjects);

assignmentRouter.delete('/project/:id', assignmentDelete);

export default assignmentRouter;
