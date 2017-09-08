module.exports = {
    checkLogin:function checkLogin(req,res,next) {
        if(!req.session.admin){
            console.log(`未登入`)
            return res.redirect('/login')
        }
        next();
    },
    checkNotLogin: function checkNotLogin(req,res,next) {
        if(req.session.user){
            console.log(`已登入`)
            return res.redirect('back'); //返回
        }
        next();
    }
}