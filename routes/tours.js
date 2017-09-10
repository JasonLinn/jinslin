const express = require('express');
const router = express.Router();
const Tours = require('../lib/mongo').Tours;
const moment = require('moment');

router.get('/tours',function (req,res,next) {
    Tours.find({}).exec(function(err,result) {
        if (!err) {
            console.log(result,'seccece');
            res.render('tours',{
                tours:result,moment:moment
            })
        } else {
            console.log('erro!!');
        };
    })
    
})


module.exports = router;