var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
	process.env.PORT = 3000;
	process.env.MONGODB_URI = 'mongodb://todo:123@ds135029.mlab.com:35029/node-todo-api';
} else if (env === 'test') {
	process.env.PORT = 3000;
	process.env.MONGODB_URI = 'mongodb://todo:123@ds111441.mlab.com:11441/node-todo-api-test';
} else if (env === 'production') {
	process.env.MONGODB_URI = 'mongodb://todo:123@ds135029.mlab.com:35029/node-todo-api';
}