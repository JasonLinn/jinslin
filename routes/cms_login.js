const express = require('express');
const router = express.Router();
const sha1 = require('sha1');
/**
 * model
 */
const AdminModel = require('../models/admin');

/*================
        GET
=================*/
router.get('/',function (req,res,next) {
    res.render('cms/login')
})

/*================
        POST
=================*/
router.post('/',function (req,res,next) {
    var admin_acc = req.body.admin_acc;
    var admin_psw = req.body.admin_psw;

    console.log(admin_acc,admin_psw)
    AdminModel.getUserByName(admin_acc)
        .then(function (admin) {
            if(!admin){
                console.log(`not found admin`)
                // console.log(sha1(admin_psw) ,admin.admin_psw)
            }
            else if (sha1(admin_psw) !== admin.admin_psw){
                // 检查密码是否匹配
                // req.flash('error', '用户名或密码错误');
                console.log(`密碼錯誤`)
                return res.redirect('back');
            }
            else{
                console.log(admin_psw)
                console.log(admin)
                delete admin.admin_psw; //在session刪除密碼
                req.session.admin = admin;
                res.redirect('/cms_news');
            }

        })
        .catch(next)
})

module.exports = router;