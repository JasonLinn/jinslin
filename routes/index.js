module.exports = function (app) {
    app.get('/',function (req,res) {res.render('index')})
    app.get('/about',function (req,res) {res.render('about')})
    app.get('/rooms',function (req,res) {res.render('rooms')})
    app.get('/tours',function (req,res) {res.render('tours')})
    app.get('/traffic',function (req,res) {res.render('traffic')})
    app.get('/attractions',function (req,res) {res.render('attractions')})
    app.get('/news',function (req,res) {res.render('news')})
    app.use('/login',require('./login'));
    app.use('/signup',require('./signup'));
    app.use('/signout',require('./signout'));
    app.use('/cms_news',require('./news'));
}
