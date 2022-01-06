const { Pool } = require('pg');
require('dotenv').config();

//const PG_URI = process.env.PG_URI;
let PG_URI;

if (process.env.NODE_ENV === 'test') {
  PG_URI = process.env.TEST_URI;
  console.log('setting PG_URI to process.env.TEST_URI');
} else {
  PG_URI = process.env.PG_URI;
  console.log('setting PG_URI to process.env.PG_URI')
}

console.log(PG_URI);
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
  end: () => {
    return pool.end();
  }
};
