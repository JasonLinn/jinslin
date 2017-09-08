/**
 * model
 */
const Admin = require('../lib/mongo').Admin;


module.exports = {
    create:function create(admin) {
        return Admin.create(admin);
    },
    getUserByName:function getUserByName(name) {
        return Admin
            .findOne({admin_acc:name})
    }
}