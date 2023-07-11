import db from '../models/JobNotebookModel';
import { Request, Response, NextFunction } from 'express';

const jobNotebookController = {
  createUser: (req: Request, res: Response, next: NextFunction) => {},
  loginUser: (req: Request, res: Response, next: NextFunction) => {},
  verifyUser: (req: Request, res: Response, next: NextFunction) => {},
  test: (req: Request, res: Response, next: NextFunction) => {},
};

jobNotebookController.test = async (req: Request, res: Response, next: NextFunction) => {
  console.log('----------------------------1313131311313124242423535353464646457575756868686');
  try {
    const queryObj = {
      text: `SELECT * FROM Users`,
    };
    const response = await db.query(queryObj.text);

    res.locals.users = response;
    console.log(response);
    console.log('----------------------------cdscasdcacacacaca');
    return next();
  } catch (error) {
    console.error(error);
    return next();
  }
};
jobNotebookController.verifyUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username } = req.body;
    // Check users table to see if user exists
    const queryObj = {
      text: `SELECT EXISTS(SELECT 1 FROM users WHERE username = ${username}) AS user_exists`,
    };

    const userExists = await db.query(queryObj.text);
    userExists
      ? (res.locals.userExists = userExists)
      : (res.locals.userExists = 'user does not exist');
    return next();
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

jobNotebookController.createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body);
    const { userExists } = res.locals.userExists;
    const { username, password } = req.body;
    const queryObj = {
      text: `INSERT INTO users (${username}, ${password})
            VALUES($1, $2)`,
      values: [username, password],
    };

    if (userExists === true) throw new Error(userExists);

    const newUser = await db.query(queryObj.text);
    console.log(newUser);
    res.locals.newUser = newUser;
    return next();
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

jobNotebookController.loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userExists } = res.locals.userExists;
    const { username } = req.body;
    if (userExists !== true) throw new Error(userExists);
    const queryObj = {
      // select all notes inside x that have the user's id
      text: `SELECT techtabs.*, notetabs.*
      FROM users
      JOIN techtabs ON users.id = techtabs.user_id
      JOIN notetabs ON users.id = notetabs.user_id
      WHERE users.id = $1`,
      values: [req.query.id],
    };
    const allInfo = await db.query(queryObj.text);
    //const results = await allInfo.json();
    //res.locals.currentUser = results.rows[0];
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

export default jobNotebookController;
