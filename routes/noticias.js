var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('noticias/lista', { title: 'Express' });
});

router.get('/01', function(req, res, next) {
  res.render('noticias/news1', { title: 'Express' });
});

router.get('/02', function(req, res, next) {
  res.render('noticias/news2', { title: 'Express' });
});

router.get('/03', function(req, res, next) {
  res.render('noticias/news3', { title: 'Express' });
});

module.exports = router;