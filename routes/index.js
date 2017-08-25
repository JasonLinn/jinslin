module.exports = function (app) {
    app.get('/',function (req,res) {res.render('index')})
    app.get('/about',function (req,res) {res.render('about')})
    app.get('/home',function (req,res) {res.render('home')})
    app.get('/news',function (req,res) {res.render('news')})
    app.use('/login',require('./login'));
    app.use('/cms_news',require('./news'));
}
