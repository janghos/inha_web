var express = require('express');
var router = express.Router();

/* 도서관리 page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '도dd서dddd관ddddd리', name : "홍길ffdd동" });
});

module.exports = router;
