const express = require('express');
const router = express.Router();
const cors = require('cors');
const monk = require('monk');
const MongoClient = require('mongodb').MongoClient;
const Filter = require('bad-words');
const rateLimit = require("express-rate-limit");
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
const app = express();
const filter = new Filter();

app.use(cors());
app.use(express.json());


router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/user/login');
  });
// router.get('/', forwardAuthenticated, (req, res) => location.replace("https://www.w3schools.com"));

// router.get('/user/register', forwardAuthenticated, (req, res) => res.render('register'));


module.exports = router;
