const request = require('supertest');
const db = require('../server/db-models/db-models');
const server = 'http://localhost:4000';
//server
describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
});
//user sign-up
describe('POST /signup', () => {
  describe('given proper credentials', () => {
      //should save fullname, username, email, and password to database
      it('responds with 200 status and text/html content type', () => {
        request(server)
          .post('/signup')
          .send({ 
            fullname: 'test fullname',
            username: 'testusername', 
            password: 'testpassword',
            email: 'testemail' 
          })
          .set('Accept', 'application/json')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      })
    })
  describe('given credentials that do not meet requirements', () => {
      it('responds with 400 status and text/html content type', () => {
         request(server)
          .post('/signup')
          .send({ 
            fullname: '',
            username: 'testusername', 
            password: 'test',
            email: 'testemail' 
          })
          .set('Accept', 'application/json')
          .expect('Content-Type', /text\/html/)
          .expect(400)
      })   
   })
});
//user log-in
describe('POST /login', () => {
  beforeEach(() => {
    let user = {
      username: 'testusername',
      password: 'testpassword'
    }
  })
    describe('given proper credentials', () => {
      it('responds with 200 status and application/json content type', async () => {
       
      request(server)
        .post('/login')
        .send({
          username: 'testusername', 
          password: 'testpassword'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /text\/html/)
        .expect(200);
    })
  })
    describe('given credentials that do not meet requirements', () => {
      it('responds with 400 status and text/html content type', () => {
         request(server)
          .post('/login')
          .send({ 
            username: 'test', 
            password: 'testpassword',
        })
          .set('Accept', 'application/json')
          .expect('Content-Type', /text\/html/)
          .expect(400)
    })   
 })
 })


 