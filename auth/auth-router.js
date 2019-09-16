const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET || 'secret should be set in env';

// User Models
const Users = require('./users-model.js');

router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      // use function to generate token
      const token = generateToken(saved);
      res.status(201).json({user: saved, token});
    })
    .catch(error => {
      res.status(500).json(error);
    });
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
  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
