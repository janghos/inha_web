var express = require('express');
var router = express.Router();

/* 도서관리 page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '도서검색' , pageName : "books/search.ejs" });
});

//장바구니 페이지(시험문제)
router.get('/cart', function(req, res, next) {
  //'index' 시험문제 render
  res.render('index', { title: '장바구니' , pageName : "books/cart.ejs" });
});

module.exports = router;
