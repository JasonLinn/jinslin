var path = require('path');
const express = require('express');
const http = require('http');
const reload = require('reload');
const app = express();
const routes = require('./routes');
var config = require('config-lite')(__dirname);
const pkg = require('./package');
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