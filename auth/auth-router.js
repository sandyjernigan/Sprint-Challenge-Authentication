const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// User Models
const Users = require('./users-model.js');

router.post('/register', (req, res) => {
  // implement registration
});

router.post('/login', (req, res) => {
  // implement login
});

function generateToken(user) {
  const payload = {
    sub: 'user token',
    id: user.id,
    username: user.username
  };

  const options = {
    expiresIn: '1d', // expires in 1 day
  };

  // extract the secret away so it can be required and used where needed
  return jwt.sign(payload, process.env.JWT_SECRET, options); // this method is synchronous
}

module.exports = router;
