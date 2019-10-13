var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/public', function(req, res, next) {
  res.render('co2', { title: 'Express' });
});

module.exports = router;
