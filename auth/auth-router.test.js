const request = require('supertest');
const db = require('../database/dbConfig.js');

const router = require('./auth-router.js');

describe('Auth Router', () => {

  beforeEach(async () => {
    // wipe the database
    await db('users').truncate();
  })

  // Add Testing for POST /api/auth/register
  describe('test register', () => {
        
    it('should add user and return status 201', () => {

      // test setup
      const addUser = {
        username: 'user',
        password: 'pass'
      };

      request(router)
        .post('/register')
        .type('application/json')
        .send(addUser)
        .expect(201);
    })

  });

});