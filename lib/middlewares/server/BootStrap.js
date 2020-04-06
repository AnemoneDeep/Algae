/*
 * modules name
 *    Method Detail
 *
 * todo outsite use Algae = require('Algae');
 *  const {ARequire} = require('Algae'); get err
 * Copyright(c) 2009-2333 by Github NO.T233
 * MIT Licensed
 */

const ARequire = require('../../../Algae.require');
const MongoClient = ARequire('@/db/mongodb/index.js')

let options = {
	db: {
		mongo: true,
		redis: true,
	}
}

class BootStrap {
	constructor(options = {}) {
		this.options = options;
	}
	
	connectMongo(cb) {
		let {mongoConfig} = this.options
		if (!mongoConfig) { // no need db
			cb && cb(null)
			return this.connectAfter()
		}
		let options = {
			url: "mongodb://" + mongoConfig.host + "/" + mongoConfig.db,
			dbGlobal: mongoConfig.dbGlobal
		}
		MongoClient(options).then(dbMongo => {
			cb && cb(dbMongo)
			process.on('exit', function () {
				dbMongo.close()
				console.log('process exit => Mongo.close')
			});
			this.connectAfter()
		})
	}
	
	connectAfter() {
	
	}
	
	init() {
	
	}
	
	boot(cb) {
		this.init()
		this.connectMongo(cb)
	}
}

module.exports = BootStrap
