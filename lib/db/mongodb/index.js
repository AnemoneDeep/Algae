/*
 * MongoClient
 *    http://mongodb.github.io/node-mongodb-native/3.5/api/index.html
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */

const Client = require('mongodb').MongoClient;

const MongoOptioin = {
	useUnifiedTopology: true,
	useNewUrlParser: true
}

module.exports = function MongoClient(options) {
	return new Promise((resolve, reject) => {
		Client.connect(options.url, MongoOptioin, function (err, dbMongo) {
			if (err) return reject(err);
			resolve(dbMongo);
		});
	})
}
