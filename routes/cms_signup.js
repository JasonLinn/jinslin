const sha1 = require('sha1');
const path = require('path');
const express = require('express');
const router = express.Router();


/**
 * model
 */
const AdminModel = require('../models/admin')
/*================
        GET
=================*/
router.get('/',function (req,res,next) {
    res.render('cms/signup')
})

router.post('/',function (req,res,next) {
    const admin_acc = req.body.admin_acc;
    var admin_psw = req.body.admin_psw;
    console.log(admin_acc,admin_psw)

    //加密
    admin_psw = sha1(admin_psw);

    //待寫入資料庫的用戶訊息
    var admin = {
        admin_acc: admin_acc,
        admin_psw: admin_psw
    }
    AdminModel.create(admin)
        .then(function (result) {
            console.log(`result:${result}`)
            admin = result;

            delete admin.admin_psw;
            req.session.admin = admin;

            res.redirect('/cms_news');
        })
        .catch(function (e) {
            if(e.message.match('E11000 duplicate key')){
                console.log(`用戶名已被佔用`)
                return res.redirect('/signup');
            }
            next(e);
        })
})

module.exports = router;