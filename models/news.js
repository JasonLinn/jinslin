const mongoose = require('mongoose');

const {Schema} = mongoose;

const newsSchema = new Schema({
    news_acc:String,
    news_psw:String
})

const News = mongoose.model('news', newsSchema);


module.exports ={
    createNews:function createNews(news){
        return News.create(news).exec();
    }
}