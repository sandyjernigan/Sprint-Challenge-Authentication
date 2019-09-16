const request = require('supertest');
const db = require('../database/dbConfig.js');

const router = require('./auth-router.js');

// test setup
const testUser = {
  username: 'user',
  password: 'pass'
};

describe('Auth Router', () => {

  beforeEach(async () => {
    // wipe the database
    await db('users').truncate();
  })

  // Add Testing for POST /api/auth/register
  describe('test register', () => {
        
    it('should add user and return status 201', () => {

      const results = request(router)
        .post('/api/auth/register')
        .type('application/json')
        .send(testUser)
        .expect(201, testUser);
    })

  });

  // Add Testing for POST /api/auth/login
  describe('test login', () => {
        
    it('should return user and return status 200', async () => {

      // test setup first add user
      await db('users').insert(testUser);

      // test if user can login
      request(router)
        .post('/api/auth/login')
        .send(testUser)
        .set('Accept', 'application/json')
        .expect(200, testUser);
        
    })

  });

});