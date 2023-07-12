import db from '../models/JobNotebookModel';
import { QueryResult } from 'pg';
import { Request, Response, NextFunction } from 'express';

const jobNotebookController = {
  createUser: (req: Request, res: Response, next: NextFunction) => {},
  loginUser: (req: Request, res: Response, next: NextFunction) => {},
  verifyUser: (req: Request, res: Response, next: NextFunction) => {},
  test: (req: Request, res: Response, next: NextFunction) => {},
  updateNotes: (req: Request, res: Response, next: NextFunction) => {},
  addTech: (req: Request, res: Response, next: NextFunction) => {},
};

jobNotebookController.test = async (req: Request, res: Response, next: NextFunction) => {
  console.log('----------------------------1313131311313124242423535353464646457575756868686');
  try {
    const queryObj = {
      text: `SELECT * FROM Users`,
    };
    const response = await db.query(queryObj.text);

    res.locals.users = response.rows;
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
  console.log('This is req.params', req.params);
  try {
    const { id } = req.params;
    // const { userExists } = res.locals.userExists;
    // const { username } = req.body;
    // if (userExists !== true) throw new Error(userExists);

    const queryObj = {
      // select all notes inside x that have the user's id
      text: `SELECT techtab.*, notestab.*
      FROM users
      JOIN techtab ON users.id = techtab.user_id
      JOIN notestab ON users.id = notestab.user_id
      WHERE users.id = $1`,
    };
    const fkdis = await db.query(queryObj.text, [id]);
    console.log(fkdis['rows']);

    return next();
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

jobNotebookController.addTech = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  const { id, user_id, techname } = req.body;
  try {
    const queryObj = {
      text: `INSERT INTO techtab (ID, user_id, techname) VALUES(${id}, ${user_id}, '${techname}')`,
    };
    const newTech = await db.query(queryObj.text);
    const result = await db.query(`SELECT * FROM techtab WHERE id=${id}`);
    console.log(result.rows);
    res.locals.newTech = result.rows;
    return next();
  } catch (err) {
    console.error(err);
  }
};

jobNotebookController.updateNotes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { notes } = req.body;
    const queryObj = {
      text: `UPDATE table_name
      SET notestab = ${notes},
      WHERE condition
      RETURNING * | output_expression AS output_name; 
      `, //returned output needs to be clarified
      values: [req.query.id],
    };
    const update = await db.query(queryObj.text);
    // const results = await update.json();
    // res.locals.currentUser = results.rows[0];
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

// when adding a new tech, need to INSERT into notestable
export default jobNotebookController;
