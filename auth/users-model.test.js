// Testing for users model
const request = require('supertest');
const db = require('../database/dbConfig.js');

// Server file
const Users = require('./users-model.js');

// test setup content
const insertData = { 
  username: 'user', 
  password: 'testpass'
};
const expectedResultsForUser = { 
  id: 1,
  username: 'user' 
};

describe('Users Model', () => {

  beforeEach(async () => {
    // wipe the database
    await db('users').truncate()
  })

  // test find users
  describe('function find', () => {
    it('find users should resolve to empty array', async () => {
      
      // find() -- all users
      const results = await Users.find()

      // users database should be empty
      expect(results).toEqual([])
    })
  })
  
  // test add user
  describe('function add', () => {
    it('add(user) should resolve to length 1 for database', async () => {
      
      // add(user) - insert user into database
      await Users.add(insertData)

      // assertion
      const results = await db('users');
      expect(results.length).toBe(1);
      expect(results[0].username).toBe('user');
    });

    it('should resolve to the newly created user', async () => {

      // add(user) - insert user into database
      const user = await Users.add(insertData);
      expect(user).toEqual({ id: 1, username: 'user'});
    });
  });
  
  // test findById(id) user
  describe('function findById(id)', () => {
    it('findById(id) should resolve to 1 user', async () => {
      await db('users').insert(insertData);

      // findById(id) -- search database where({ id })
      const user = await Users.findById(1)

      // assertion
      const results = await db('users');
      expect(results.length).toBe(1);
      expect(user).toEqual(expectedResultsForUser);
    });
  });
  
  // test findBy(filter)
  describe('function findBy(filter)', () => {
    it('findBy(filter) should resolve to 1 user when searching username', async () => {
      await db('users').insert(insertData);
      await db('users').insert({username: 'user2', password: 'testpass2'});
      await db('users').insert({username: 'user3', password: 'testpass3'});

      username = { username: 'user' }

      // findBy(filter) -- search database where({ username })
      const user = await Users.findBy(username)

      // assertion
      expect(user.length).toBe(1);
      expect(user).toEqual([expectedResultsForUser]);
    });
    
  });

});