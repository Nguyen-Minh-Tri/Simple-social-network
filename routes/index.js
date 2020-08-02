const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('wellcom'));

// router.get('/user/register', forwardAuthenticated, (req, res) => res.render('register'));

// Dashboard
router.get('/main_page', ensureAuthenticated, (req, res) =>
  res.render('main_page', {
    user: req.user
  })
);
router.get('/main_page/profile', ensureAuthenticated, (req, res) =>
  res.render('profile', {
    user: req.user
  })
);

module.exports = router;
