const request = require('supertest');
const express = require('express');
const db = require("../server/db-models/db-models.js");
const server = 'http://localhost:4000';

/**
 * Read the docs! https://www.npmjs.com/package/supertest
 */
//server
describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      it('responds with 200 status and text/html content type', () => {
        return request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200)
        .then(data => expect(data.text).toEqual('welcome to server'))});
    });
  });
});


//preferences
describe('/preferences', () => {

  describe('/:id', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
        .get('/:id')
        .expect('Content-Type', /text\/plain/)
        .expect(200)})      
    });

    describe('/:id/create', () => {
      describe('POST', () => {
        it('responds with 200 status and text/html content type', () => {
          return request(server)
          .post('/:id/create')
          .expect('Content-Type', /text\/plain/)
          .expect(200)
          .then(data => expect(data.text).toEqual('Successfully created preferences'))});

          // in the dev database to get an idea of what shape you're expecting when you post.
        it('preferences created into DB', (done) => {
            const id = 100;
            const newFoods = {
              favoriteFood: "sushi",
              nonFavoriteFood: "hotdog"
            }
            return request(server)
            .post('/:id/create')
            .send(id, newFoods)
            .expect('Content-Type', /text\/plain/)
            .expect(200)
          });
        });
        
        xdescribe('PUT', () => {
          const body = [{ location: 'new york', cards: 30 }];
          
          it('responds with 200 status and application/json content type', () => request(server)
          .put('/markets')
          .send(body)
          .expect('Content-Type', /application\/json/)
          .expect(200));
          
          it('responds with the updated market list', () => request(server)
          .put('/markets')
          .send(body)
          .expect('Content-Type', /application\/json/)
          .expect((res) => {
            expect(res.body).toEqual(body);
          }));
          
          it('responds to invalid request with 400 status and error message in body', () => request(server)
          .put('/markets')
          .send([{ location: 123, cards: 11 }])
          .expect('Content-Type', /application\/json/)
          .expect(400)
          .expect((res) => {
            expect(res.body).toEqual({ error: {} });
          }));
        });
    });

  });

});

