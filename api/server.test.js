// Testing for server.js
const request = require('supertest');

// Server file
const server = require('./server.js');

describe('Server', () => {

  describe('GET /', () => {
    it('should run the testing env', () => {
      expect(process.env.DB_ENV).toBe('testing');
    })
    
    it('should return status 200', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.status).toBe(200);
        });
    })
  });

});