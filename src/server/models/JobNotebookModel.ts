import { Pool, QueryResult } from 'pg';

const PG_URI =
  'postgres://tetntfob:PQo4EHYq5ztPJMNV-DUcAcXaRwV4c2fW@drona.db.elephantsql.com/tetntfob';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text: string, params: any[]): Promise<QueryResult<any>> => {
    console.log('executed query', text);
    return pool.query(text, params);
  },
};
