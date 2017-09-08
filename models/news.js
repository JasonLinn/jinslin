const mongoose = require('mongoose');

const {Schema} = mongoose;


const Newsqq = require('../lib/mongo').Newsqq;
const newsSchema = new Schema({
    news_acc:String,
    news_psw:String
})

// const News = mongoose.model('newsqq', newsSchema);


// module.exports ={
//     findAllNews:function findAllNews() {
//         return News.find({});
//     },
//     createNews:function createNews(news){
//         return News.create(news).exec();
//     }
// }