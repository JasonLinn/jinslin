var path = require('path');
const express = require('express');
const app = express();
const routes = require('./routes');
var config = require('config-lite')(__dirname);
const pkg = require('./package');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','pug');
// 設置靜態文件目錄
app.use(express.static(path.join(__dirname, 'public')));

routes(app);
// app.use('/',function() {
//     console.log(`22`)
// })

const port = process.env.PORT || config.port;

app.listen(port,function () {
    console.log(`${pkg.name} listenging on port ${config.port}`);
});