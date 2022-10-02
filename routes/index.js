var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});



/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});



/* GET products page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});
/* GET servies page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/* GET aboutme page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me'});
});

/* GET contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact me'});
});



module.exports = router;
