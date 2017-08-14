const express = require('express');
const router = express.Router();
const NewsModel = require('../models/news');
const config = require('config-lite')(__dirname);
const mongoose = require('mongoose');
mongoose.connect(config.mongodb,function (err,res){
    if (err) {
        console.log('@@@ERROR connecting to: ' + config.mongodb + '. ' + err);
    } else {
        console.log('@@@Succeeded connected to: ' + config.mongodb);
    }
});

const { Schema } = mongoose;

const adminSchema = new mongoose.Schema({
    admin_acc: String,
    admin_psw: String
})

var Admin = mongoose.model('admin',adminSchema);
Admin.find({}).exec(function (err, result) {
    console.log('result',result);
});
// console.log(Admin);

router.get('/', function (req, res, next) {
    var aa=function (res){
        console.log(res, 'dataaaa#@@@@@@@@@@@@@@@@@@@@@@@@');
    }
    Admin.find({},aa(res)).exec(function (err, result) {
        if (!err) {
            console.log(result,'seccece');
            res.render('news',{
                news:result
            })
        } else {
            console.log('erro!!');
        };
    });
    
})

router.post('/',function (req,res,next){
    
})


module.exports = router;