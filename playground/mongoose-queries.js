const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '58f51bf1b0341f8547c13b3f';
//
// if (!ObjectID.isValid(id)) return console.log('ID not valid');

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });
//
// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	if (!todo) return console.log('ID not found');
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) return console.log('ID not found');
// 	console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));


var id = '58f500c5fe1fafee436bcd46';

if (!ObjectID.isValid(id)) return console.log('ID not valid');

User.findById(id).then((user) => {
	if (!user) return console.log('ID not found');
	console.log('User by ID', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));