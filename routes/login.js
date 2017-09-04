const express = require('express');
const router = express.Router();


router.get('/',function (req,res,next) {
    res.render('cms/login')
})


module.exports = router;