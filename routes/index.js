module.exports = function (app) {
    app.get('/',require('./welcome'))
    app.get('/about',function (req,res) {res.render('about')})
    app.get('/rooms',function (req,res) {res.render('rooms')})
    app.get('/traffic',function (req,res) {res.render('traffic')})
    app.get('/attractions',function (req,res) {res.render('attractions')})
    app.get('/tours',require('./tours'))
    app.get('/news',require('./news'))
    app.use('/login',require('./cms_login'));
    app.use('/signup',require('./cms_signup'));
    app.use('/signout',require('./cms_signout'));
    app.use('/cms_news',require('./cms_news'));
    app.use('/cms_tours',require('./cms_tours'));
    
}
