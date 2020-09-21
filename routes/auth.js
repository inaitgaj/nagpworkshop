const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../models/user');

/* Register a new user */
router.post('/register', async function (req, res, next) {
  const user = new User(req.body);
  await user.setHashedPassword();

  user.save((err, savedUser) => {
    if (err) {
      console.log('Error while creating a user: ', err);
    }

    res.json(savedUser);
  });
});

/* Login user */
router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  function (req, res, next) {
    res.json(req.user.toAuthJson());
  }
);

module.exports = router;
