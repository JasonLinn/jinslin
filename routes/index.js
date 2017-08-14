module.exports = function (app) {
    app.get('/',function (req,res) {
        res.render('index')
    })
    app.use('/login',require('./login'));
    app.use('/news',require('./news'));
}
