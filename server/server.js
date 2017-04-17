const express = require('express');
const bodyParser = require('body-parser');

// const {mongoose} = require('./db/mongoose');
// var {Todo} = require('./models/todo');
// var {User} = require('./models/user');
// const {ObjectID} = require('mongodb');

const mongoose = require('./db/mongoose').mongoose;
var Todo = require('./models/todo').Todo;
var User = require('./models/user').User;
const ObjectID = require('mongodb').ObjectID;

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});
	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos/:id', (req, res) => {
	var id = req.params.id;

	if (!ObjectID.isValid(id)) return res.status(404).send('404. Record not found.');

	Todo.findById(id).then((todo) => {
		if (!todo) return res.status(404).send('404. Record not found.');

		res.send({todo});
	}, (e) => {
		res.status(400).send('400. Bad request.');
	})
});


app.listen(3000, () => {
	console.log('Started on port 3000');
});

module.exports = {app};




