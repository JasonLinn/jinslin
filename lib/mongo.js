const config = require('config-lite')(__dirname);
const mongoose = require('mongoose');
// const mongoose = new Mongoose();
mongoose.connect(config.mongodb);




exports.Admin = mongoose.model('admin',{
    admin_acc:{ type: 'string' },
    admin_psw:{ type: 'string' }
})
const { Schema } = mongoose;
const newsSchema = new mongoose.Schema({
    news_title:String,
    news_content:String,
    news_img:String
})

exports.Newsdd = mongoose.model('newsqq',newsSchema);


// exports.Admin.index({ name: 1 }, { unique: true }).exec();