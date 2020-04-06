const redis = require('redis');

let RDS_PWD = 'redisdf34';
let client  = redis.createClient(6379, 'localhost');
client.auth(RDS_PWD, function () {
	setTimeout(()=>{
		try {
		} catch (e) {
		}
	},1000)
});
client.on('connect', function () {
//	console.log('Redis client connected');
});

client.on('error', function (err) {
	setTimeout(()=>{
		global.Debug['tg'](err, 'redis Something went wrong')
	},1000)
});
module.exports = client
