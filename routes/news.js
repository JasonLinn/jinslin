var path = require('path');
const express = require('express');
const router = express.Router();
const NewsModel = require('../models/news');
const config = require('config-lite')(__dirname);
const mongoose = require('mongoose');
const multer = require('multer')

var storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, './public/upload/');
  },
  filename: function (request, file, callback) {
    console.log(file);
    callback(null, file.originalname)
  }
});
var upload = multer({
  dest: path.join(__dirname, './public/upload/'),
  storage:storage
});
mongoose.connect(config.mongodb,function (err,res){
    if (err) {
        console.log('@@@ERROR connecting to: ' + config.mongodb + '. ' + err);
    } else {
        console.log('@@@Succeeded connected to: ' + config.mongodb);
    }
});

const { Schema } = mongoose;

// const adminSchema = new mongoose.Schema({
//     admin_acc: String,
//     admin_psw: String
// })

const newsSchema = new mongoose.Schema({
    news_title:String,
    news_content:String,
    news_img:String
})

// var Admin = mongoose.model('admin',adminSchema);

var Newsqq = mongoose.model('newsqq',newsSchema);

// const Jason = new Admin({
//     admin_acc: 'hi',
//     admin_psw: 'hi'
// })
// Jason.save(function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('save success');
//     }
// })

// Admin.find({}).exec(function (err, result) {
//     console.log('result',result);
// });
// console.log(Admin);

router.get('/', function (req, res, next) {
    var aa=function (res){
        // console.log(res, 'dataaaa#@@@@@@@@@@@@@@@@@@@@@@@@');
    }
    Newsqq.find({}).exec(function (err, result) {
        if (!err) {
            //console.log(result,'seccece');
            res.render('news',{
                news:result
            })
        } else {
            console.log('erro!!');
        };
    });
    
})

router.post('/',upload.single('news_img'),function (req,res,next){
    console.log(req.body.news_title)
    console.log(req.body.news_content)
    // console.log(req.body.news_img)
    console.log(req.file.path)
    var newsff = new Newsqq({
        news_title:req.body.news_title,
        news_content:req.body.news_content,
        news_img:req.file.path.slice(6)
    })
    newsff.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('save success');
        }
    })
    res.redirect('news')
})


module.exports = router;