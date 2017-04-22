const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (error, salt) => {
// 	bcrypt.hash(password, salt, (error, hash) => {
// 		console.log(hash);
// 	});
// });


var hashedPassword = '$2a$10$IHKHhPeDt5AmoI2MjmnSie9khxBSqiDHE.nHpX8Xx.0dng.UgOgWS';

bcrypt.compare('123456', hashedPassword, (err, res) => {
	console.log(res);
});

















// var data = {
// 	id: 10
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
//
// console.log('Decoded', decoded);

//
// var message = 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.';
// var hash = SHA256('Integer posuere erat a ante venenatis dapibus posuere velit aliquet.').toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
// 	id: 4
// };
// var token = {
// 	data,
// 	hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// token.data.id = 5;
// SHA256(JSON.stringify(data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if (resultHash === token.hash) {
// 	console.log('Data was not changed');
// } else {
// 	console.log('Data was changed. Do not trust!');
// }