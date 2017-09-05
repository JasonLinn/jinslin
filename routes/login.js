const express = require('express');
const router = express.Router();

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
    AdminModel.getUserByName(name)
        .then(function (admin) {
            if(!admin){
                console.log(`not found admin`)
            }else{
                console.log(admin)
                res.redirect('/cms_news');
            }

        })
        .catch(next)
})

module.exports = router;