const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/twitter', passport.authenticate('twitter'));

router.get(
  '/twitter/callback',
  passport.authenticate('twitter', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
  })
);

module.exports = router;