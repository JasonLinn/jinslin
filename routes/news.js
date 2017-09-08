const express = require('express');
const router = express.Router();
const Newsdd = require('../lib/mongo').Newsdd;
const moment = require('moment');

router.get('/news',function (req,res,next) {
    Newsdd.find({}).exec(function(err,result) {
        if (!err) {
            console.log(result,'seccece');
            res.render('news',{
                news:result,moment:moment
            })
        } else {
            console.log('erro!!');
        };
    })
    
})


module.exports = router;