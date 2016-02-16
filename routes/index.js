var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Connor Anderson Arts' });
});

/* GET About Me page. */
router.get('/about-me', function(req, res, next) {
  res.render('about-me', { title: 'About Me' });
});

/* GET My Work page. */
router.get('/my-work', function(req, res, next) {
  res.render('my-work', { title: 'My Work' });
});

/* GET My Skills page. */
router.get('/my-skills', function(req, res, next) {
  res.render('my-skills', { title: 'My Skills' });
});

/* GET Let's Talk page. */
router.get('/lets-talk', function(req, res, next) {
  res.render('lets-talk', { title: "Let's Talk" });
});

module.exports = router;
