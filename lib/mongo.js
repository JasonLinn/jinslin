const config = require('config-lite')(__dirname);
const Mongoose = require('mongoose');
const mongoose = new Mongoose();
mongoose.connect(config.mongodb);