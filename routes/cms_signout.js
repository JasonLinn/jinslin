var express = require('express');
var router = express.Router();

// var checkLogin = require('../middlewares/check').checkLogin;

// GET /signout 登出
router.get('/', function(req, res, next) {
  // 清空 session 中用户信息
  req.session.admin = null;
//   req.flash('success', '登出成功');
  console.log(`登出成功`)
  
  res.redirect('/login');
});

module.exports = router;