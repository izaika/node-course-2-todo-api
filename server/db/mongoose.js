const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://todo:123@ds135029.mlab.com:35029/node-todo-api');

module.exports = {mongoose};