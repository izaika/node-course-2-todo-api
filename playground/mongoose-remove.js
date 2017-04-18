// const {ObjectID} = require('mongodb');
//
// const {mongoose} = require('./../server/db/mongoose');
// const {Todo} = require('./../server/models/todo');
// const {User} = require('./../server/models/user');

const ObjectID = require('mongodb').ObjectID;
const mongoose = require('./../server/db/mongoose').mongoose;
const Todo = require('./../server/models/todo').Todo;
const User = require('./../server/models/user').User;

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove({}).then((result) => {
// 	console.log(result);
// });

Todo.findByIdAndRemove('58f66a772bbbb700111b138f').then((todo) => {
	console.log(todo);
});