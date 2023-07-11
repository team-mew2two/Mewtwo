import path from 'path';
import express, { Request, Response, NextFunction } from 'express';
import jobNotebookController from './controllers/JobNotebookController';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../public')));

app.post(
  '/auth',
  jobNotebookController.verifyUser,
  jobNotebookController.createUser,
  (req, res) => {
    res.status(200).json();
  }
);

app.post('/auth', jobNotebookController.verifyUser, jobNotebookController.loginUser, (req, res) => {
  res.status(200).json(res.locals.currentUser);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

module.exports = app;
