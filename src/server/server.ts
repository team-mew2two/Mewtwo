import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import express, { Request, Response, NextFunction } from 'express';
import jobNotebookController from './controllers/JobNotebookController';

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/api/getUsers', jobNotebookController.test, (req, res) => {
  console.log('inside get route');
  res.status(200).json(res.locals.users);
});

app.post(
  '/api/signup',
  jobNotebookController.verifyUser,
  jobNotebookController.createUser,
  (req, res) => {
    res.status(200).json();
  }
);

// Gets the users information about techtab and notestab
app.get('/api/login/:id', jobNotebookController.loginUser, (req, res) => {
  res.status(200).json(res.locals.currentUser);
});

// Adds a technology to the tech tab
app.post('/addTech', jobNotebookController.addTech, (req, res) => {
  res.status(200).json(res.locals.newTech);
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

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

export default app;
