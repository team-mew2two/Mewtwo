import pkg from 'pg';
import { QueryResult } from 'pg';
const { Pool } = pkg;

const PG_URI =
  'postgres://ztzmjwub:yuFlDXd2zGy5fESOHhDH0Ief2PXDqX6J@stampy.db.elephantsql.com/ztzmjwub';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

export default {
  query: (text: string, params?: any[]): Promise<QueryResult<any>> => {
    console.log('executed query', text);
    return pool.query(text, params);
  },
};
