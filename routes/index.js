var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Connor Anderson Arts' });
});

/* GET Let's Talk page. */
router.get('/lets-talk', function(req, res, next) {
  res.render('lets-talk', { title: "Let's Talk" });
});

module.exports = router;
