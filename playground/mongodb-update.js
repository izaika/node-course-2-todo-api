// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>  {
	if (err) return console.log('Unable to connect to mongodb server');

	console.log('Connected to mongodb server');

	// findOneAndUpdate
	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('58f4a672c74acb8567c07948')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(JSON.stringify(result, undefined, 2));
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('58f4586c554db940f57952d3')
	}, {
		$set: {
			name: 'Igor'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(JSON.stringify(result, undefined, 2));
	});

	// db.close();
});