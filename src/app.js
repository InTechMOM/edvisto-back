import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { serve } from 'swagger-ui-express';

import dbConnection from './config/mongodb.js';
import { port } from './config/index.js';
import router from './api/routes/index.js';

const app = express();

dbConnection();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (_req, res) => {
  return res.status(200).json('Project is successfully working').end();
});

app.use('/', router);

app.listen(port, (error) => {
  if (error) {
    console.log('Server Error: Failed');
    process.exit(1);
  }
  console.log('Server listening in port ' + port);
});
