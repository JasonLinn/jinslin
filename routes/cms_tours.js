var path = require('path');
const express = require('express');
const router = express.Router();
// const NewsModel = require('../models/news');
const config = require('config-lite')(__dirname);
const mongoose = require('mongoose');
const multer = require('multer')
const Tours = require('../lib/mongo').Tours;
const checkLogin = require('../middlewares/check').checkLogin;

var storage = multer.diskStorage({
    destination: function (request, file, callback) {
      callback(null, './public/upload/'); //放置位置
    },
    filename: function (request, file, callback) {
      console.log(file);
      callback(null, file.originalname) //設定檔名
    }
  });
  //上傳檔案的pkg
  var upload = multer({
    dest: path.join(__dirname, './public/upload/'),
    storage:storage
  });

router.get('/',checkLogin, function (req, res, next) {
    Tours.find({}).exec(function (err, result) {
        if (!err) {
            // console.log(result,'seccece');
            res.render('cms/tours',{
                tours:result
            })
        } else {
            console.log('erro!!');
        };
    });
    
})

router.post('/',checkLogin,upload.single('tours_img'),function (req,res,next){
    console.log(req.body.tours_title)
    console.log(req.body.tours_content)
    // console.log(req.body.tours_img)
    console.log(req.file.path)
    var toursff = new Tours({
        tours_title:req.body.tours_title,
        tours_date:new Date(),
        tours_content:req.body.tours_content,
        tours_price:req.body.tours_price,
        tours_img:req.file.path.slice(6)
    })
    toursff.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('save success');
        }
    })
    res.redirect('/cms_tours')
})
router.post('/:postId/update',upload.single('tours_img'),function (req,res,next){
    console.log(req.body.tours_title)
    console.log(req.body.tours_content)
    // console.log(req.body.tours_img)
    console.log(req.file.path)
    var data ={
        news_title:req.body.tours_title,
        news_content:req.body.tours_content,
        tours_price:req.body.tours_price,
        tours_img:req.file.path.slice(6)
    }
    var newsId = {
        _id:req.params.postId
    }
    Tours.update({_id:req.params.postId},data,function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('save success');
        }
    })
    res.redirect('/cms_tours')
})
router.get('/:postId/remove',function (req,res,next){
    // console.log(req)
    console.log(req.params.postId)
    
    Tours.remove({_id:req.params.postId},function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('delete success');
        }
    })
    res.redirect('/cms_tours')
})

module.exports = router;


