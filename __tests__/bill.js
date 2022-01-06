const path = require('path');
const db = require('../server/db-models/db-models');
require('dotenv').config();

describe('database unit testing', () => {
  describe('User creation', () => {
    it('Can perform basic addition', () => {
      expect(2 + 2).toBe(4);
    });

    it('Can add new users to the database', (done) => {
      const q = 'INSERT INTO USERS (username, password, fullname, email) VALUES(($1), ($2), ($3), ($4));';
      db.query(q, ['blahzzztest', 'stuff', 'afunfullname', 'stuffnewemail@email.com'], (err, res) => {
        if (err) {
          () => console.log(err);
        } else {
          expect(res.rowCount).toEqual(1);
          //db.end();
          done();
        }
      });
    });

    it('Can delete users to the database', (done) => {
      const q = 'DELETE FROM USERS;';
      db.query(q, [], (err, res) => {
        if (err) {
          () => console.log(err);
          done();
        } else {
          expect(res.rowCount).toBeGreaterThan(0);
          db.end();
          done();
        }
      });
    });

    xit('Fails to log in to the database with the wrong password', () => {});

    xit('Successfully replaces a users preferences', () => {});
  });
});
