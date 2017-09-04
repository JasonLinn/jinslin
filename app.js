var path = require('path');
const express = require('express');
const http = require('http');
const reload = require('reload');
const app = express();
const routes = require('./routes');
var config = require('config-lite')(__dirname);
const pkg = require('./package'); //package.json設定
var urlencode = require('urlencode');
var bodyParser = require('body-parser')
const multer = require('multer');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','pug');
// 設置靜態文件目錄
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }))
// app.use(require('express-formidable')({
//   uploadDir: path.join(__dirname, 'public/img'),// 上传文件目录
//   keepExtensions: true// 保留后缀
// }));
// app.use(session({
//     name: config.session.key,// 设置 cookie 中保存 session id 的字段名称
//     secret: config.session.secret,// 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
//     resave: true,// 强制更新 session
//     saveUninitialized: false,// 设置为 false，强制创建一个 session，即使用户未登录
//     cookie: {
//       maxAge: config.session.maxAge// 过期时间，过期后 cookie 中的 session id 自动删除
//     },
//     store: new MongoStore({// 将 session 存储到 mongodb
//       url: 'mongodb://newjasonsblog:newjasonsblog@ds153352.mlab.com:53352/heroku_q1pm12v3'// mongodb 地址
//     })
//   }));

routes(app);
// app.use('/',function() {
//     console.log(`22`)
// })
const server = http.createServer(app);

const port = process.env.PORT || config.port;

server.listen(port,function () {
    console.log(`${pkg.name} listenging on port ${config.port}`);
});
reload(app);