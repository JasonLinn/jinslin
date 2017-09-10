const config = require('config-lite')(__dirname);
const mongoose = require('mongoose');
// const mongoose = new Mongoose();
mongoose.connect(config.mongodb);

const { Schema } = mongoose;


/**
 * Admin
 */
exports.Admin = mongoose.model('admin',{
    admin_acc:{ type: 'string' },
    admin_psw:{ type: 'string' }
})

/**
 * News
 */
const newsSchema = new mongoose.Schema({
    news_title:String,
    news_date:Date,
    news_content:String,
    news_img:String
})

exports.Newsdd = mongoose.model('newsqq',newsSchema);

/**
 * Tours
 */
const toursSchema = new mongoose.Schema({
    tours_title:String,
    tours_date:Date,
    tours_content:String,
    tours_price:String,
    tours_img:String
})

exports.Tours = mongoose.model('tours',toursSchema);


// exports.Admin.index({ name: 1 }, { unique: true }).exec();