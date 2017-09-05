const config = require('config-lite')(__dirname);
const mongoose = require('mongoose');
// const mongoose = new Mongoose();
mongoose.connect(config.mongodb);




exports.Admin = mongoose.model('admin',{
    admin_acc:{ type: 'string' },
    admin_psw:{ type: 'string' }
})
// exports.Admin.index({ name: 1 }, { unique: true }).exec();