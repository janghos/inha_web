var express = require('express');
var router = express.Router();

/* 도서관리 page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '도서검색' , pageName : "books/search.ejs" });
});

module.exports = router;
