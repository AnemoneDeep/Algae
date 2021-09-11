/**
 * v4
 * https://redis.js.org/#-installation
 */
const createClient = require('redis').createClient;
let turnOn = false
class RedisClient {
    constructor() {
        this.client = createClient()
    }

    connect() {
        this.client.connect()
        this.client.on('error', function (err) {
          //  console.log('redisCache Error ' + err);
        });
        this.client.on('ready', function () {
          //  console.log('redisCache connection succeed');
        });
    }

    init() {
      //  if (!turnOn)
        this.connect();
        return this.client;
    }
}

let Client = new RedisClient();

module.exports = Client.init()
