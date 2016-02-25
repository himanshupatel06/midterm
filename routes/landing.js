var express = require('express');
var router = express.Router();

/* GET landing page. */
router.get('/', function(req, res, next) {
  res.render('landing', { title: 'Express' });
});

/* GET people page. */
router.get('/people', function(req, res) {
  res.render('people', { title: 'People' });
});

/* GET people page. */
router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
